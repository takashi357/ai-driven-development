const path = require('node:path');
const projectRoot = path.resolve(__dirname, '..');
const artifacts = path.join(projectRoot, 'test-results');
require('node:fs').mkdirSync(artifacts, {recursive: true});
if (process.env.SITE_URL || process.env.SITE_AUTH) throw new Error('These tests are for local files only. Unset SITE_URL and SITE_AUTH.');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const {chromium: playwright} = require('playwright');

const root = path.join(projectRoot,'dist');
const qa = artifacts;
(async()=>{
  let server;
  const offline = !!process.env.OFFLINE;
  if (!process.env.SITE_URL && !offline) {
    server = require('node:http').createServer(async(req,res)=>{
      const name = new URL(req.url,'http://localhost').pathname.slice(1) || 'index.html';
      if (!/^[a-z0-9./-]+$/.test(name) || name.includes('..')) {res.writeHead(404).end();return;}
      try {
        const content=await fs.readFile(root+'/'+name);
        res.setHeader('Content-Type',name.endsWith('.js')?'text/javascript':name.endsWith('.css')?'text/css':name.endsWith('.woff2')?'font/woff2':'text/html');
        res.end(content);
      } catch {res.writeHead(404).end();}
    });
    await new Promise(r=>server.listen(4174,'127.0.0.1',r));
  }
  const browser = await playwright.launch({executablePath:process.env.CHROMIUM_EXECUTABLE,headless:true,slowMo:0});
  const options={viewport:{width:1440,height:1000},deviceScaleFactor:1,ignoreHTTPSErrors:!!process.env.SITE_URL,offline};
  const ctx=await browser.newContext(options);
  if(process.env.SITE_AUTH)await ctx.setExtraHTTPHeaders({'OAI-Sites-Authorization':'Bearer '+process.env.SITE_AUTH});
  const page=await ctx.newPage();
  const errors=[];const requests=[];
  function instrument(p){p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>requests.push({url:r.url(),method:r.method(),data:r.postData()}));}
  instrument(page);
  const url=offline?'file://'+root+'/pc-reuse-offline.html':process.env.SITE_URL?process.env.SITE_URL+'/reuse.html':'http://127.0.0.1:4174/reuse.html';
  await page.goto(url,{waitUntil:'networkidle'});
  await page.locator('#load-sample').click();
  await page.locator('#chunk-size').selectOption('400');
  const source = await page.locator('#source-text').inputValue();
  await page.locator('#prepare-form button[type=submit]').click();
  const blocks=await page.locator('#chunk-preview pre').allTextContents();
  assert.ok(blocks.length>=2);
  assert.equal(blocks.join(''),source,'Splitting must preserve every source character');
  assert.ok(blocks.every(b=>Array.from(b).length<=400));
  const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#export-package').click()]);
  const exportPath=qa+'/'+(offline?'offline-':'')+'handoff-test.json';
  await download.saveAs(exportPath);
  const pkg=JSON.parse(await fs.readFile(exportPath,'utf8'));
  assert.equal(pkg.source,source);
  // A separate clean context receives the actual downloaded file.
  const otherCtx=await browser.newContext(options);
  if(process.env.SITE_AUTH)await otherCtx.setExtraHTTPHeaders({'OAI-Sites-Authorization':'Bearer '+process.env.SITE_AUTH});
  const receiving=await otherCtx.newPage();instrument(receiving);
  await receiving.goto(url,{waitUntil:'networkidle'});
  await receiving.locator('#use-tab').click();
  await receiving.locator('#import-package').setInputFiles(exportPath);
  await receiving.locator('#use-controls').waitFor({state:'visible'});
  assert.equal(await receiving.locator('#received-source').inputValue(),blocks[0]);
  assert.equal(await receiving.locator('#use-task').inputValue(),'extract');
  let prompt=await receiving.locator('#generated-prompt').inputValue();
  assert.match(prompt,/S001/);assert.match(prompt,/日時/);assert.ok(prompt.includes(pkg.purpose));
  const taskPrompts=[];
  for(const task of ['summary','extract','draft','plain']){
    await receiving.locator('#use-task').selectOption(task);
    taskPrompts.push(await receiving.locator('#generated-prompt').inputValue());
  }
  assert.equal(new Set(taskPrompts).size,4,'Each task generates distinct instructions');
  await receiving.locator('#block-select').selectOption('1');
  assert.equal(await receiving.locator('#received-source').inputValue(),blocks[1]);
  assert.match(await receiving.locator('#generated-prompt').inputValue(),/S002/);
  const [promptsDownload]=await Promise.all([receiving.waitForEvent('download'),receiving.locator('#download-prompts').click()]);
  await promptsDownload.saveAs(qa+'/prompts-test.txt');
  const allPrompts=await fs.readFile(qa+'/prompts-test.txt','utf8');
  for(let i=0;i<blocks.length;i++)assert.ok(allPrompts.includes('====== S'+String(i+1).padStart(3,'0')+' ======'));
  await receiving.locator('#copy-prompt').click();
  await receiving.waitForFunction(()=>document.getElementById('work-status').textContent.includes('コピー'));
  assert.match(await receiving.locator('#work-status').innerText(),/コピー/);
  // Reject incompatible/malformed/oversized packages and clear stale prompts.
  for (const content of ['{bad',JSON.stringify({...pkg,version:999}),JSON.stringify({...pkg,task:'unsupported'}),JSON.stringify({...pkg,source:'a'.repeat(100001)}),' '.repeat(1000001)]) {
    await receiving.locator('#import-package').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from(content)});
    await receiving.waitForFunction(()=>document.getElementById('work-status').dataset.error==='true');
    assert.equal(await receiving.locator('#generated-prompt').inputValue(),'');
    assert.equal(await receiving.locator('#copy-prompt').isDisabled(),true);
  }
  // Imported HTML is data, including title and original text.
  const attack={...pkg,title:'<img src=x onerror="window.injected=true">',source:'<script>window.injected=true</script>\n'+source};
  await receiving.locator('#import-package').setInputFiles({name:'text.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(attack))});
  await receiving.locator('#use-controls').waitFor({state:'visible'});
  assert.equal(await receiving.evaluate(()=>window.injected),undefined);
  assert.equal(await receiving.locator('#import-summary img').count(),0);
  assert.ok((await receiving.locator('#generated-prompt').inputValue()).includes('<script>'));
  await receiving.locator('#import-package').setInputFiles(exportPath);
  await receiving.locator('#use-task').selectOption('summary');
  const widths=[];
  for(const width of [1440,1024,768,390,320]){
    await receiving.setViewportSize({width,height:1000});
    for(const id of ['prepare-tab','use-tab']){
      await receiving.locator('#'+id).click();
      const dims=await receiving.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
      assert.ok(dims.scroll<=dims.width,`Overflow ${width} ${id}: ${JSON.stringify(dims)}`);
    }
    widths.push(width);
  }
  await receiving.setViewportSize({width:1440,height:1000});
  await receiving.locator('#workbench').scrollIntoViewIfNeeded();
  await receiving.screenshot({path:qa+'/'+(offline?'offline':'reuse')+'-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.locator('#workbench').scrollIntoViewIfNeeded();
  await page.screenshot({path:qa+'/'+(offline?'offline':'reuse')+'-mobile.png'});
  // Input edits cannot accidentally export a stale prepared package.
  await page.locator('#source-title').fill('変更した資料名');
  assert.equal(await page.locator('#export-package').isDisabled(),true);
  await page.locator('#prepare-form button[type=submit]').click();
  await page.locator('#try-handoff').click();
  assert.match(await page.locator('#import-summary').innerText(),/変更した資料名/);
  await page.locator('#clear-work').click();
  assert.equal(await page.locator('#source-text').inputValue(),'');
  assert.equal(await page.locator('#generated-prompt').inputValue(),'');
  assert.equal(await page.locator('#export-package').isDisabled(),true);
  // Second sample differs and unicode/line-ending boundary splitting is lossless.
  await page.locator('#sample-kind').selectOption('business');await page.locator('#load-sample').click();
  assert.match(await page.locator('#source-text').inputValue(),/案件A/);
  assert.equal(await page.locator('#prep-task').inputValue(),'summary');
  const unicodeSource=('あ'.repeat(399)+'😀\r\n').repeat(3)+'終端\n';
  await page.locator('#source-text').fill(unicodeSource);
  const browserSource=await page.locator('#source-text').inputValue(); // HTML textarea normalizes CRLF to LF.
  await page.locator('#chunk-size').selectOption('400');
  await page.locator('#prepare-form button[type=submit]').click();
  const unicodeBlocks=await page.locator('#chunk-preview pre').allTextContents();
  assert.equal(unicodeBlocks.join(''),browserSource);
  assert.ok(unicodeBlocks.every(t=>Array.from(t).length<=400));
  await page.locator('#prepare-tab').focus();await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('#use-tab').getAttribute('aria-selected'),'true');
  await page.keyboard.press('Home');assert.equal(await page.locator('#prepare-tab').getAttribute('aria-selected'),'true');
  assert.equal(await page.evaluate(()=>localStorage.length),0);
  assert.equal(await page.evaluate(()=>sessionStorage.length),0);
  assert.equal(errors.length,0,JSON.stringify(errors));
  const nonGet=requests.filter(r=>r.method!=='GET');
  const payloadKeys=data=>{try{return Object.keys(JSON.parse(data))}catch{return []}};
  
  assert.equal(nonGet.length,0,'No document transmission');
  const network=requests.filter(r=>/^https?:/.test(r.url));
  if(offline)assert.equal(network.length,0,'Offline file makes no network requests');
  else assert.equal(network.filter(r=>new URL(r.url).origin!==new URL(url).origin).length,0,'No external requests');
  const report={url,mode:offline?'offline':process.env.SITE_URL?'hosted':'local',roundTrip:true,blocks:blocks.length,distinctTasks:4,invalidPackageCases:5,htmlInjectionEscaped:true,staleExportDisabled:true,clear:true,unicodeLossless:true,tabsKeyboard:true,viewports:widths,errors,networkRequests:network.length,nonGetRequests:0};
  await fs.writeFile(qa+'/'+report.mode+'-reuse-verification.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
  await browser.close();if(server)await new Promise(r=>server.close(r));
})().catch(e=>{console.error(e);process.exit(1)});
