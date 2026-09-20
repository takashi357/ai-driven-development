const path = require('node:path');
const projectRoot = path.resolve(__dirname, '..');
const artifacts = path.join(projectRoot, 'test-results');
require('node:fs').mkdirSync(artifacts, {recursive: true});
if (process.env.SITE_URL || process.env.SITE_AUTH) throw new Error('These tests are for local files only. Unset SITE_URL and SITE_AUTH.');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const {chromium: playwright} = require('playwright');


(async()=>{
  let localServer;
  if(!process.env.SITE_URL){
    localServer=require('node:http').createServer(async(req,res)=>{
      const pathname=new URL(req.url,'http://localhost').pathname;
      const name=pathname==='/'?'index.html':pathname.slice(1);
      if(!['index.html','app.js','style.css','reuse.css'].includes(name)&&!/^fonts\/[a-z0-9.-]+$/.test(name)){res.writeHead(404);res.end();return;}
      res.setHeader('Content-Type',name.endsWith('.js')?'text/javascript':name.endsWith('.css')?'text/css':name.endsWith('.woff2')?'font/woff2':'text/html');
      res.end(await fs.readFile(path.join(projectRoot,'dist')+'/'+name));
    });
    await new Promise(r=>localServer.listen(4173,'127.0.0.1',r));
  }
  const executablePath = process.env.CHROMIUM_EXECUTABLE;
  const browser = await playwright.launch({executablePath,headless:true,slowMo:0});
  const context = await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1,ignoreHTTPSErrors:!!process.env.SITE_URL});
  if(process.env.SITE_AUTH) await context.setExtraHTTPHeaders({'OAI-Sites-Authorization':'Bearer '+process.env.SITE_AUTH});
  const page = await context.newPage();
  const errors=[];const failed=[];const requests=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('requestfailed',r=>failed.push(r.url()));
  page.on('request',r=>requests.push({url:r.url(),method:r.method()}));
  const url=process.env.SITE_URL || 'http://127.0.0.1:4173/';
  const response=await page.goto(url,{waitUntil:'networkidle'});
  assert.equal(response.status(),200,'Page should respond successfully');
  assert.match(await page.title(),/LOCAL LLM GUIDE/);
  const select=async(name,value)=>{await page.locator(`label:has(input[name="${name}"][value="${value}"])`).click();};
  const text=async(testid)=>await page.getByTestId(testid).innerText();
  const size=async()=> (await text('model-size')).trim();
  assert.equal(await size(),'2〜4B 級');
  await page.screenshot({path:path.join(artifacts,'revised-top.png')});
  await select('use','summary');
  assert.equal(await size(),'4〜7B 級','Use changes the comparison range');
  await select('priority','speed');assert.equal(await size(),'2B 級');
  await select('priority','quality');assert.equal(await size(),'7〜9B 級');
  assert.match(await text('model-note'),/7B級/);
  assert.match(await page.locator('#medium-models').innerText(),/Yi-1.5-6B-Chat/);
  assert.match(await page.locator('#medium-models').innerText(),/3.7GB/);
  assert.match(await page.locator('#medium-models').innerText(),/日本語用途は要検証/);
  assert.match(await page.locator('#medium-models').innerText(),/Qwen2.5-7B-Instruct/);
  await select('privacy','strict');
  const privateVerdict=await text('verdict');
  const privateSize=await size();
  assert.match(await text('cloud-advice'),/送らない/);
  await select('privacy','open');
  assert.notEqual(await text('verdict'),privateVerdict,'Privacy changes the primary decision');
  assert.equal(await size(),privateSize,'Privacy alone must not invent a new hardware requirement');
  assert.match(await text('verdict'),/クラウドを先に/);
  await select('ram','8');await select('privacy','strict');
  assert.equal(await size(),'2B 級');assert.match(await text('verdict'),/人に戻す/);
  await select('use','research');
  assert.equal(await size(),'単体利用は対象外');
  assert.match(await text('verdict'),/最新情報/);
  assert.match(await text('decision'),/モデルを大きくしても/);
  await select('ram','16');await select('use','code');await select('priority','speed');
  assert.equal(await size(),'4B 級');

  let combinations=0;const summaries=[];
  for(const ram of ['8','16']){
    await select('ram',ram);
    for(const use of ['writing','summary','extraction','translation','code','research']){
      await select('use',use);
      for(const privacy of ['strict','balanced','open']){
        await select('privacy',privacy);
        for(const priority of ['speed','balanced','quality']){
          await select('priority',priority);
          const body=await page.locator('#result').innerText();
          assert.ok(body.length>600);
          assert.doesNotMatch(body,/undefined|NaN|\[object Object\]/);
          const size=(await text('model-size')).trim();
          if(ram==='8'&&use!=='research')assert.match(size,/^(0.8〜2B|1〜2B|2B) 級$/);
          if(privacy==='strict')assert.match(await text('cloud-advice'),/送らない|送信しない/);
          if(use==='research')assert.match(body,/最新の制度・価格・ニュースを確認する道具にはなりません/);
          const verdict=await text('verdict');const decision=await text('decision');const action=await text('next-action');assert.ok(decision.length>35&&action.length>15);if(use==='research')assert.equal(size,'単体利用は対象外');if(privacy==='strict')assert.doesNotMatch(verdict,/クラウドを先に/);summaries.push({ram,use,privacy,priority,size,verdict});combinations++;
        }
      }
    }
  }
  assert.equal(combinations,108);
  const distinctSizes=[...new Set(summaries.map(r=>r.size))];
  const distinctVerdicts=[...new Set(summaries.map(r=>r.verdict))];
  assert.ok(distinctSizes.length>=7,'Diagnostic must not collapse to a fixed model');
  assert.ok(distinctVerdicts.length>=8,'Primary decision must reflect workflow choices');
  // Open state should survive a diagnosis change.
  await page.locator('#privacy-detail summary').click();
  await select('priority','speed');
  assert.equal(await page.locator('#privacy-detail').getAttribute('open'),'');
  await page.locator('#privacy-detail summary').click();
  await select('ram','16');await select('use','writing');await select('privacy','balanced');await select('priority','balanced');
  // Native keyboard radio operation.
  await page.locator('input[name="ram"][value="16"]').focus();
  await page.keyboard.press('ArrowLeft');
  assert.equal(await page.locator('input[name="ram"]:checked').inputValue(),'8');
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('input[name="ram"]:checked').inputValue(),'16');
  await page.locator('.result-button').click();
  assert.equal(await page.evaluate(()=>document.activeElement.id),'result');
  await page.screenshot({path:path.join(artifacts,'revised-desktop-result.png')});
  await page.locator('[data-open-sources]').click();
  assert.equal(await page.locator('#sources').getAttribute('open'),'');
  await page.locator('#sources summary').click();
  const widths=[];
  for(const width of [1440,1024,768,390,320]){
    await page.setViewportSize({width,height:900});
    const dimensions=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));
    assert.ok(dimensions.scroll<=dimensions.client,`Horizontal overflow at ${width}: ${JSON.stringify(dimensions)}`);
    widths.push(width);
  }
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:path.join(artifacts,'mobile-top.png')});
  await select('ram','8');await select('privacy','strict');await select('use','summary');
  await page.locator('.result-button').click();
  await page.locator('#result').screenshot({path:path.join(artifacts,'revised-mobile-result.png')});
  const externalRequests=requests.filter(r=>new URL(r.url).origin!==new URL(url).origin);
  assert.equal(errors.length,0,JSON.stringify(errors));
  assert.equal(failed.length,0,JSON.stringify(failed));
  if(!process.env.SITE_URL)assert.equal(externalRequests.length,0,'No third-party requests');
  const report={url,combinations,distinctSizes,distinctVerdicts,viewports:widths,keyboard:true,details:true,submitFocus:true,errors,failed,externalRequests,requests:requests.length,results:summaries};
  await fs.writeFile(artifacts+'/'+(process.env.SITE_URL?'hosted':'local')+'-revised-verification.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify({...report,results:undefined},null,2));
  await browser.close();
  if(localServer)await new Promise(r=>localServer.close(r));
})().catch(e=>{console.error(e);process.exit(1)});
