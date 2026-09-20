'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={training:'人材育成・研修',employment:'雇用・就労',digital:'AI導入・業務改善',regional:'共同化・地域実装',research:'産学官・研究開発'};
const statusLabels={candidate:'候補・詳細確認が必要',review:'条件の確認が必要',blocked:'入力条件では対象外',closed:'公募終了・次回確認'};
const filterIds=['perspective','availability','actor','purpose','size','ownership','hours','age','gap','referral'];
const money=v=>new Intl.NumberFormat('ja-JP',{maximumFractionDigits:4}).format(v/10000)+'万円';
const signMoney=v=>(v>0?'+':'')+money(v);
const number=v=>new Intl.NumberFormat('ja-JP',{maximumFractionDigits:1}).format(v/10000);
let activePanel='programs';
let lastResult=null;
function getFilters(){return Object.fromEntries(filterIds.map(k=>[k,k==='hours'?($('hours').value===''?NaN:Number($('hours').value)):$(k).value]));}
function assess(p,c){
 let state='review',reasons=[];
 const block=t=>{state='blocked';reasons.push(t);};
 if(p.id==='trial-general'){
  if(!Number.isFinite(c.hours)||c.hours<0||c.hours>60)reasons.push('週所定時間を0～60時間で入力してください。');
  else if(c.hours<20)block('週20時間未満は時間要件に届きません。通常は週30時間以上が必要です。');
  else if(c.hours<30)reasons.push('通常の週30時間要件に届きません。20時間以上の例外類型に該当するか確認が必要です。');
  else reasons.push('通常の週30時間要件を満たします。対象者類型・無期移行の希望・紹介等を確認してください。');
  if(c.referral==='no')block('対象制度による紹介がない採用は、そのままでは対象になりません。');
  if(c.gap==='yes'&&c.referral==='yes'&&c.hours>=30)state=state==='blocked'?state:'candidate';
  if(c.gap==='no')reasons.push('1年超の完全離職ルートには該当しません。個別支援等の別の対象類型を確認してください。');
 }else if(p.id==='specific-difficult-jobseekers'){
  if(!Number.isFinite(c.hours)||c.hours<0||c.hours>60)reasons.push('週所定時間を確認してください。');
  else if(c.hours<20)block('週20時間未満は本コースの時間要件に届きません。');
  if(c.age==='under60')reasons.push('高年齢者区分には該当しません。他の対象者類型を確認してください。');
  if(c.referral==='no')block('対象者と明示された所定の紹介が必要です。通常の直接応募だけでは対象になりません。');
  if(c.hours>=20&&c.age==='senior'&&c.referral==='yes')state=state==='blocked'?state:'candidate';
  reasons.push('60歳以上でも、個別支援・紹介・継続雇用等の確認が必要です。');
 }else if(p.id==='over65-employment-promotion'){
  reasons.push('定年・雇用管理制度の変更や無期転換を支援。高齢者の新規採用人数だけでは算定できません。');
 }else if(p.id==='career-up-regularization'){
  reasons.push('既存の非正規雇用からの転換等が対象。通常の正社員新規採用には適用しません。年度・事業所の人数上限があります。');
 }else if(p.smeOnly){
  if(c.size==='large')block('中小企業等を対象とする制度です。入力した企業規模では対象外です。');
  if(c.ownership==='controlled'&&!p.employmentDefinition)block('この制度の大企業による支配の除外条件に該当するという入力です。');
  if(c.size==='sme'&&c.ownership==='independent')state=state==='blocked'?state:'candidate';
  reasons.push(p.matchNote||'自社で使う対象設備・登録ソフト等への投資を確認してください。顧客向け売上原価とは分けます。');
 }else reasons.push(p.matchNote||'実施内容・代表申請者・対象経費を公式要領で確認してください。');
 if(p.category==='training'&&!p.smeOnly){reasons.push('雇用保険、事前計画、対象職務・訓練方式を確認。研修を販売する会社ではなく、雇用主が申請します。');}
 if(c.perspective==='self'&&p.smeOnly&&!p.employmentDefinition){reasons.unshift('設立発表は親会社100％出資。最新の株主構成と親会社を含む制度上の企業規模、新設法人の必要資料を要確認です。自社受給を見込む前に確認してください。');if(state==='candidate')state='review';}
 if(['scheduled','announced'].includes(p.status)){reasons.unshift('申請受付前または公募予告です。日程・本要領を確認して準備してください。');if(state==='candidate')state='review';}
 if(p.status==='closed'){state='closed';reasons.unshift('確認日時点で当該公募は終了しています。現在申請できる金額として算入しません。');}
 if(p.status==='unverified')reasons.unshift('最新公募条件の本文未確認。金額と申請受付は窓口確認が必要です。');
 return {state,reasons};
}
function matching(c){
 return window.PROGRAMS.filter(p=>(!c.perspective||c.perspective==='all'||p.roles.includes(c.perspective))&&(c.actor==='all'||p.actors.includes(c.actor))&&(c.purpose==='all'||p.category===c.purpose)&&(!c.availability||c.availability==='all'||(c.availability==='current'&&['open','current'].includes(p.status))||(c.availability==='future'&&['scheduled','announced'].includes(p.status))||(c.availability==='closed'&&p.status==='closed'))).map(p=>({p,...assess(p,c)}));
}
const roleGuides={
 self:'自社の育成・採用を中心に確認。中小企業向けの投資枠は、同社の資本・従業員数・支配関係を先に照合します。画面の企業規模は検討用の仮定です。',
 customer:'受給者は顧客企業。エクサフォワード九州はAI導入・研修等の提供を検討する立場です。顧客の補助金を自社の補助収入に加算しません。',
 partner:'大学・自治体等との共同事業。交付先、委託・共同研究先、費用負担を分けます。受付前・終了案件も準備先として示しています。',
 all:'収録した制度・枠を横断表示。現金補助、研究委託、返済型資金、現物支援を区別しています。'
};
function renderPrograms(){
 const c=getFilters(),matches=matching(c);
 $('role-guide').textContent=roleGuides[c.perspective];
 $('toggle-filters').textContent='条件を変更　'+({business:'民間企業',municipality:'自治体',university:'産学官連携',all:'すべて'}[c.actor])+(c.actor==='business'?'・週'+(Number.isFinite(c.hours)?c.hours:'—')+'時間':'');
 $('business-fields').hidden=!['business','all'].includes(c.actor);
 $('employment-fields').hidden=!['business','all'].includes(c.actor)||!['all','employment'].includes(c.purpose);
 $('result-count').textContent=matches.length+'制度・枠';
 const counts=matches.reduce((a,x)=>(a[x.state]++,a),{candidate:0,review:0,blocked:0,closed:0});
 $('summary').innerHTML=[['candidate','候補'],['review','要確認'],['blocked','条件不一致'],['closed','公募終了']].map(([k,l])=>`<div class="summary-item"><span>${l}</span><strong>${counts[k]}</strong></div>`).join('');
 $('program-list').innerHTML=matches.length?matches.map(({p,state,reasons})=>`<article class="program"><div class="program-top"><span class="badge">${esc(labels[p.category])} · ${p.level==='local'?'福岡市':'国'}</span><span class="badge ${state}">${esc(statusLabels[state])}</span></div><h3>${esc(p.title)}</h3><p class="program-status">${esc(({open:"受付中",current:"制度運用中・個別期限",scheduled:"公募中・申請受付前",announced:"公募予告",closed:"公募終了",unverified:"詳細未確認"})[p.status])} · ${esc(p.evidence)}</p><p class="recipient">受給・支援対象：${esc(p.recipient)}</p><p class="amount"><span>${p.cashless?'支援の内容':'金額・補助率の目安'}</span>${esc(p.shortAmount)}</p><div class="proposal"><span>同社での活用案 ／ 推定</span><p>${esc(p.proposal)}</p></div><p class="reason ${state}">${reasons.map(esc).join('<br>')}</p><details><summary>要件・申請時期・出典を見る</summary><div class="details-body"><h4>対象と条件</h4><ul>${p.conditions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h4>金額と範囲</h4><p>${esc(p.benefitText)}</p><h4>この構想で確認する点</h4><ul>${p.exclusions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h4>申請時期</h4><p>${esc(p.applicationTiming)}</p><h4>併用・重複</h4><p>${esc(p.combinationNote)}</p><h4>公募・受付状況</h4><p>${esc(p.openStatusText||p.openStatus)}</p><div class="source-links">${p.sourceUrls.filter(u=>/^https:\/\//.test(u)).map((u,i)=>`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">公式資料${i+1} ↗</a>`).join('')}</div><p class="program-date">確認日 ${esc(p.checkedAt)}</p></div></details></article>`).join(''):'<div class="empty">この条件に一致する収録制度はありません。目的または申請主体を変更してください。</div>';
}
const calcIds=['coreCount','coreSalary','newCount','wage','calcHours','burden','otherCost','startup','revenue','grantCount'];
function readCalc(){const c=Object.fromEntries(calcIds.map(k=>[k,$(k).value===''?NaN:Number($(k).value)]));return {...c,grant:$('grant').value,size:$('calcSize').value,criteria:$('criteria').checked,receiptYear:$('receiptYear').value};}
function calculate(c){
 const errors=[];
 for(const k of calcIds)if(!Number.isFinite(c[k])||c[k]<0)errors.push('すべての費用・人数・時間に0以上の数値を入力してください。');
 for(const [k,max] of Object.entries({coreSalary:10000,wage:50000,otherCost:1000000,startup:1000000,revenue:10000000}))if(c[k]>max)errors.push('金額が入力上限を超えています。入力単位（円・万円）を確認してください。');
 for(const k of ['coreCount','newCount','grantCount'])if(!Number.isInteger(c[k]))errors.push('人数は整数で入力してください。');
 if(c.calcHours>60)errors.push('週所定時間は60時間以内で入力してください。');
 if(c.burden>100)errors.push('追加費用率は100％以内で入力してください。');
 if(c.coreCount>10000||c.newCount>10000||c.grantCount>10000)errors.push('人数は10,000人以内で入力してください。');
 if(c.grant!=='none'&&c.grantCount>c.newCount)errors.push('助成対象人数は今回の採用人数以内にしてください。');
 if(c.newCount>0&&c.wage===0)errors.push('採用者の時給は0円を超える金額を入力してください。');
 if(c.newCount>0&&c.calcHours===0)errors.push('採用者がいる場合は週所定時間を0時間より大きくしてください。');
 if(errors.length)return {errors:[...new Set(errors)]};
 const rawPayroll=c.coreCount*c.coreSalary*10000+c.newCount*c.wage*c.calcHours*52;
 const payroll=rawPayroll*(1+c.burden/100),annualCost=payroll+c.otherCost*10000,revenue=c.revenue*10000,steady=revenue-annualCost;
 let grant=0,note='',eligible=false;
 if(c.grant==='none')note='雇用助成は算入していません。補助金のない状態で採算を確認できます。';
 else if(c.grant==='trial'&&c.calcHours<30)note='一般的なトライアルの週30時間要件に届かないため、試算額は0円です。週20時間以上の例外類型は個別確認が必要です。';
 else if(c.grant==='tokutei'&&c.calcHours<20)note='週20時間要件に届かないため、試算額は0円です。';
 else if(!c.criteria)note='対象者・紹介・雇用条件が未確認のため、試算額は0円です。要件を確認した場合だけチェックを入れてください。';
 else if(c.grant==='tokutei'&&c.size==='unknown')note='高年齢者区分の金額は企業規模で異なります。区分未確認のため試算額は0円です。';
 else{
  eligible=true;
  const per=c.grant==='trial'?120000:(c.calcHours<30?(c.size==='sme'?400000:300000):(c.size==='sme'?600000:500000));
  grant=(c.grant==='tokutei'?Math.min(per,c.wage*c.calcHours*52):per)*c.grantCount;
  note=`制度上限は${money(per)}／人。${c.grantCount}人で${money(grant)}の条件付き試算です。高年齢者区分は入力した年間賃金を上限としましたが、実際は支給期ごとの賃金・実勤務・審査等により減額や不支給があります。`;
 }
 if(grant&&c.receiptYear==='unknown')note+=' 入金時期が未定なので、3年間の収支には算入していません。';
 const receipts=[0,0,0];
 if(eligible&&['1','2'].includes(c.receiptYear))receipts[Number(c.receiptYear)-1]=grant;
 const cash=receipts.map((g,i)=>steady+g-(i===0?c.startup*10000:0));
 return {errors:[],payroll,annualCost,revenue,steady,grant,receipts,cash,note,grantAllocated:receipts.reduce((s,x)=>s+x,0),startup:c.startup*10000};
}
function renderCalc(){
 const c=readCalc(),r=calculate(c);lastResult=r;
 $('calc-errors').hidden=!r.errors.length;
 if(r.errors.length){$('calc-errors').textContent=r.errors.join(' ');for(const id of ['steady','payroll','annualCost','grantAmount','breakEven'])$(id).textContent='—';$('steady-caption').textContent='入力内容を確認してください。';$('grant-note').textContent='入力エラーのため試算を停止しています。';$('cash-bars').innerHTML='';$('cash-table').innerHTML='';$('interpretation').textContent='';return;}
 $('steady').textContent=signMoney(r.steady);$('steady').className='hero-number '+(r.steady<0?'negative':'positive');
 $('steady-caption').textContent=r.steady<0?'継続売上だけでは年間費用を賄えない試算です。':'継続売上と年間費用の差額です。初期支出は下の表で確認できます。';
 $('payroll').textContent=money(r.payroll);$('annualCost').textContent=money(r.annualCost);$('grantAmount').textContent=money(r.grant);$('breakEven').textContent=money(r.annualCost);$('grant-note').textContent=r.note;
 const max=Math.max(...r.cash.map(Math.abs),1);
 $('cash-bars').innerHTML=r.cash.map((v,i)=>`<div class="bar-row"><span>${i+1}年目</span><div class="bar-track" aria-hidden="true"><div class="bar-fill ${v<0?'negative':''}" style="width:${Math.abs(v)/max*100}%"></div></div><span class="bar-value">${esc(signMoney(v))}</span></div>`).join('');
 const row=(label,values)=>`<tr><th scope="row">${label}</th>${values.map(v=>`<td>${number(v)}</td>`).join('')}</tr>`;
 $('cash-table').innerHTML=row('継続売上',[r.revenue,r.revenue,r.revenue])+row('年間費用',[-r.annualCost,-r.annualCost,-r.annualCost])+row('初期支出',[-r.startup,0,0])+row('助成入金',r.receipts)+row('年間収支',r.cash)+row('累計収支',r.cash.map((_,i)=>r.cash.slice(0,i+1).reduce((s,v)=>s+v,0)));
 $('interpretation').className='interpretation'+(r.steady<0?' loss':'');
 const grantShare=r.annualCost?Math.round(r.grant/r.annualCost*1000)/10:0;
 let text=r.steady<0?`補助終了後は年${money(-r.steady)}の不足です。継続売上の増加、作業単価、配置や対象工程の見直しが必要です。`:`補助終了後も年${money(r.steady)}の余力がある計算です。初期支出の回収と、実際の稼働・費用で成立するかを確認してください。`;
 if(r.grant>0)text+=` 今回の助成上限は年間費用の${grantShare}％相当で、採用ごとに毎年得られる前提ではありません。`;
 $('interpretation').textContent=text;
}
function activatePanel(panel){activePanel=panel;for(const p of ['programs','calc','budget']){$('panel-'+p).hidden=p!==panel;$('tab-'+p).classList.toggle('active',p===panel);$('tab-'+p).setAttribute('aria-selected',String(p===panel));$('tab-'+p).tabIndex=p===panel?0:-1;}if(panel==='calc')renderCalc();if(panel==='budget')renderBudgets();}
function preset(which){
 const base={coreCount:0,coreSalary:500,newCount:10,wage:1200,calcHours:15,burden:15,otherCost:500,startup:700,revenue:2000,grantCount:10,grant:'none',calcSize:'unknown',receiptYear:'unknown'};
 if(which==='trial')Object.assign(base,{calcHours:30,revenue:3500,grant:'trial'});
 if(which==='scale')Object.assign(base,{coreCount:50,newCount:150,calcHours:30,otherCost:3000,startup:1000,revenue:60000,grantCount:150,grant:'trial'});
 for(const [k,v] of Object.entries(base))$(k).value=v;
 $('criteria').checked=false;
 document.querySelectorAll('[data-preset]').forEach(b=>b.classList.toggle('active',b.dataset.preset===which));renderCalc();
}
filterIds.forEach(k=>$(k).addEventListener('input',()=>{
 if(k==='perspective'){$('actor').value=['partner','all'].includes($('perspective').value)?'all':'business';$('purpose').value='all';$('size').value='unknown';$('ownership').value='unknown';}
 renderPrograms();
}));
[...calcIds,'grant','calcSize','criteria','receiptYear'].forEach(k=>$(k).addEventListener('input',()=>{document.querySelectorAll('[data-preset]').forEach(b=>b.classList.remove('active'));renderCalc();}));
document.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>preset(b.dataset.preset)));
for(const p of ['programs','calc','budget'])$('tab-'+p).addEventListener('click',()=>activatePanel(p));
document.querySelector('.tabs').setAttribute('role','tablist');
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const panels=['programs','calc','budget'];const p=e.key==='Home'?'programs':e.key==='End'?'budget':panels[(panels.indexOf(activePanel)+(e.key==='ArrowLeft'?2:1))%3];activatePanel(p);$('tab-'+p).focus();}}));
$('reset-filters').addEventListener('click',()=>{const d={perspective:'self',availability:'all',actor:'business',purpose:'all',size:'unknown',ownership:'unknown',hours:15,age:'senior',gap:'unknown',referral:'unknown'};for(const [k,v] of Object.entries(d))$(k).value=v;renderPrograms();});
$('toggle-filters').addEventListener('click',()=>{const closed=$('filter-panel').classList.toggle('mobile-closed');$('toggle-filters').setAttribute('aria-expanded',String(!closed));});
let closedDetails=[];
window.addEventListener('beforeprint',()=>{closedDetails=[...document.querySelectorAll('section:not([hidden]) details:not([open])')];closedDetails.forEach(d=>d.open=true);});
window.addEventListener('afterprint',()=>closedDetails.forEach(d=>d.open=false));
$('print').addEventListener('click',()=>window.print());
function registerAgentTools(){
 const context=document.modelContext;if(!context?.registerTool)return;
 const life=new AbortController();window.addEventListener('pagehide',()=>life.abort(),{once:true});
 const tool={name:'get_funding_analysis',title:'表示中の制度候補と収支を確認',description:'現在の入力条件、制度候補の理由、条件付きの雇用助成・3年収支を返します。受給を確定しません。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(input==null||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length)throw new Error('入力は空のオブジェクトにしてください。');const c=getFilters();return {checkedAt:'2026-09-20',conditions:c,programs:matching(c).map(({p,state,reasons})=>({id:p.id,title:p.title,state,reasons})),financial:calculate(readCalc())};}};
 try{Promise.resolve(context.registerTool(tool,{signal:life.signal})).catch(()=>{});}catch{}
}
function readNumber(id){return $(id).value===''?NaN:Number($(id).value);}
function renderBudgets(){
 const route=$('investmentRoute').value;
 $('process-field').hidden=route!=='normal';$('small-field').hidden=!['general','product'].includes(route);$('raise-field').hidden=route==='normal';
 const c={route,cost:readNumber('investmentCost')*10000,people:readNumber('investmentPeople'),processes:$('investmentProcesses').value,small:$('investmentSmall').checked,raise:$('investmentRaise').checked,eligible:$('investmentEligible').checked};
 const r=window.FundingEstimates.investment(c);
 const source=route==='normal'?'https://it-shien.smrj.go.jp/applicant/subsidy/normal/':['general','catalog'].includes(route)?'https://shoryokuka.smrj.go.jp/'+(route==='general'?'ippan':'catalog')+'/about/':'https://shinjigyou-monodukuri.smrj.go.jp/overview/';
 $('investment-result').innerHTML=r.error?`<p class="negative">${esc(r.error)}</p>`:`<span>条件付き補助額</span><strong>${r.amount===null?'要件未確認':money(r.amount)}</strong><p>制度上限 ${money(r.cap)} · 補助率 ${Math.round(r.rate*1000)/10}％</p><p>補助後の対象経費自己負担：${r.own===null?'未算定':money(r.own)}</p><p>${esc(r.note)}</p><a href="${source}" target="_blank" rel="noopener noreferrer">この制度の公式資料 ↗</a>`;
 const t=window.FundingEstimates.training({people:readNumber('trainingPeople'),hours:readNumber('trainingHours'),fee:readNumber('trainingFee')*10000,size:$('trainingSize').value,content:$('trainingContent').value,format:$('trainingFormat').value,eligible:$('trainingEligible').checked,annualUsed:readNumber('trainingAnnualUsed')*10000});
 $('training-result').innerHTML=t.error?`<p class="negative">${esc(t.error)}</p>`:`<span>条件付き助成額</span><strong>${t.amount===null?'要件未確認':money(t.amount)}</strong>${t.amount===null?'':`<p>経費助成 ${money(t.expense)} ＋ 賃金助成 ${money(t.wage)}${t.reduction?` − 年度上限による調整 ${money(t.reduction)}`:''}</p>`}<p>${esc(t.note)}</p>`;
}
['investmentRoute','investmentCost','investmentPeople','investmentProcesses','investmentSmall','investmentRaise','investmentEligible','trainingSize','trainingContent','trainingFormat','trainingPeople','trainingHours','trainingFee','trainingAnnualUsed','trainingEligible'].forEach(id=>$(id).addEventListener('input',()=>{if(id==='investmentRoute'){$('investmentEligible').checked=false;$('investmentSmall').checked=false;$('investmentRaise').checked=false;}renderBudgets();}));
window.FundingSupport={calculate,assess,getFilters,readCalc,matching,preset};
renderPrograms();renderCalc();activatePanel('programs');registerAgentTools();
