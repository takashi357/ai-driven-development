'use strict';
// Amounts are in yen; pure functions shared by the UI and regression tests.
window.FundingEstimates = (() => {
  const pick = (n, limits, amounts) => amounts[limits.findIndex(x => n <= x)];
  function investment(c) {
    if (!Number.isFinite(c.cost) || c.cost < 0 || c.cost > 1e10 || !Number.isInteger(c.people) || c.people < 1 || c.people > 10000)
      return { error: '経費は0～100万万円、従業員数は1～10,000人で入力してください。' };
    const routes = {
      normal: { title: 'デジタル化・AI導入｜通常枠', cap: c.processes === 'four' ? 4500000 : 1499999, rate: 0.5, min: c.processes === 'four' ? 1500000 : 50000 },
      general: { title: '省力化投資｜一般型', cap: pick(c.people,[5,20,50,100,Infinity],c.raise?[1000,2000,4000,6500,10000]:[750,1500,3000,5000,8000])*10000, rate: c.small ? 2/3 : 0.5, min: 0 },
      catalog: { title: '省力化投資｜カタログ注文型', cap: pick(c.people,[5,20,Infinity],c.raise?[750,1000,1500]:[500,750,1000])*10000, rate: 0.5, min: 0 },
      product: { title: '新事業・ものづくり｜革新的新製品', cap: pick(c.people,[5,20,50,Infinity],c.raise?[850,1250,2500,3500]:[750,1000,1500,2500])*10000, rate: c.small ? 2/3 : 0.5, min: 1000000 },
      newbusiness: { title: '新事業・ものづくり｜新事業進出', cap: pick(c.people,[20,50,100,Infinity],c.raise?[3000,5000,7000,9000]:[2500,4000,5500,7000])*10000, rate: 0.5, min: 7500000 },
      global: { title: '新事業・ものづくり｜グローバル', cap: pick(c.people,[20,50,100,Infinity],c.raise?[3000,5000,7000,9000]:[2500,4000,5500,7000])*10000, rate: 2/3, min: 7500000 }
    };
    const r = routes[c.route];
    if (!r) return {error:'制度を選択してください。'};
    const potential = Math.min(Math.floor(c.cost*r.rate),r.cap);
    let note = '対象経費・賃上げ・企業規模・出資関係・申請時期等が未確認のため、金額は算入しません。';
    let amount = null;
    if(c.eligible) {
      amount = potential;
      note = '全要件を満たすという入力上の仮定です。審査・減額・入金時期は未確定です。';
      if(potential < r.min) { amount=0; note='計算額がこの区分の補助下限に届きません。'; }
      if(c.route==='general' && c.cost<500000) {amount=0;note='単価50万円以上の機械装置・システム等の必須投資に届きません。';}
    }
    if(c.route==='normal')note+=' 150万円未満の上限は整数円で表現しています。正式申請の端数処理は要領に従います。';
    if(['product','newbusiness','global'].includes(c.route))note+=' 第1回の申請受付は2026年9月30日開始予定です。';
    return {...r,amount,note,own:amount===null?null:c.cost-amount,cost:c.cost};
  }
  function training(c) {
    if(!Number.isFinite(c.annualUsed??0)||(c.annualUsed??0)<0||(c.annualUsed??0)>1e8)return {error:'このコースの年度内既支給・計上額は0～10,000万円で入力してください。'};
    if(!['live','elearning'].includes(c.format)||!['job','generic'].includes(c.content))return {error:'研修内容と方式を選択してください。'};
    if(!Number.isInteger(c.people)||c.people<1||c.people>10000||!Number.isFinite(c.hours)||c.hours<0||c.hours>1200||!Number.isFinite(c.fee)||c.fee<0||c.fee>1e8)
      return {error:'人数1～10,000人、時間0～1,200時間、1人の費用0～1万万円で入力してください。'};
    if(c.content==='generic')return {amount:0,expense:0,wage:0,note:'汎用的プロンプト・概念理解だけの訓練は、2026年8月改正の対象外です。'};
    if(c.hours<10)return {amount:0,expense:0,wage:0,note:'通常の10時間以上という訓練要件に届きません。'};
    if(!c.eligible||!['sme','large'].includes(c.size))return {amount:null,note:'企業規模、雇用保険、訓練計画・内容・回数等の要件確認後に試算します。'};
    const sme=c.size==='sme',rate=sme?0.75:0.6;
    const cap=c.format==='elearning'?(sme?150000:100000):pick(c.hours,[99.999999,199.999999,Infinity],sme?[300000,400000,500000]:[200000,250000,300000]);
    const expense=Math.floor(Math.min(c.fee*rate,cap)*c.people);
    // Wage support assumes all hours take place during paid scheduled work.
    const wage=c.format==='elearning'?0:c.people*c.hours*(sme?1000:500);
    const rawTotal=expense+wage;
    const remaining=Math.max(0,100000000-(c.annualUsed??0));
    const total=Math.min(rawTotal,remaining);
    const reduction=rawTotal-total;
    return {amount:total,expense,wage,cap,rate,rawTotal,remaining,reduction,note:'1訓練の参考値。このコースの事業所・年度上限1億円から入力済額を控除して制限。実際の支払賃金、欠席・修了状況等の審査前です。'+(c.format==='elearning'?' eラーニングは賃金助成なし。原則年度1回まで。':' 所定労働時間内の有給訓練を仮定。')};
  }
  return {investment,training};
})();
