const CHECKED = '2026年9月20日';
const uses = {
  writing: {
    name: '文章の下書き', title: 'いつもの文章を、手元で整える。',
    intro: '素材がある文章の下書きや言い換えを、ローカルで試す使い方が候補です。宛先・条件・事実を先に渡すと、確認する範囲も絞れます。',
    tasks: ['箇条書きから、短い案内文のたたき台を作る', '書いたメールを、丁寧な表現に言い換える', '定型文の見出し・構成を整える'],
    local: '手元のメモや定型文を使った下書き・表現調整。',
    cloud: '外部送信できる素材で、複数案の比較や込み入った文章の推敲を試す。',
    human: '宛名、日付、金額、約束の内容を照合し、送信は人が判断。',
    warning: '契約文や謝罪文を、そのまま自動送信する使い方には向きません。短文でも事実の付け足しは起こり得ます。',
    prompt: '次の箇条書きだけを使い、案内メールを200字程度で下書きしてください。書かれていない日時や条件は補わず、「要確認」としてください。',
    small: '1通ずつ、短い素材と定型文に範囲を絞ります。'
  },
  summary: {
    name: '文書の要約', title: '長い文書を、一度に任せすぎない。',
    intro: '短く区切ったメモの要約や、決定事項の抜き出しから試せます。長文を分割すると全体の関係を見落とすため、原文との照合を残します。',
    tasks: ['短い会議メモから、決定事項を抜き出す', '文書を段落ごとに、箇条書きへ整理する', '手順書の一部分から、確認項目の案を作る'],
    local: '文書を小分けにし、決定事項と未決事項を分ける。',
    cloud: '送信できる文書で、長文全体の整理や横断比較を試す。入力上限と抜け漏れは別途確認。',
    human: '原文の該当箇所と照合。条件や例外、否定表現が落ちていないか確認。',
    warning: '数十ページのPDFを丸ごと投入することや、分割要約だけで契約・規程全体を判断することは避けます。画像PDFはOCRも別途必要です。',
    prompt: '次の会議メモから「決定事項」「未決事項」を分け、根拠となる原文の短い引用を添えてください。書かれていない担当者や期限は補わないでください。',
    small: 'まず数段落程度の短いメモだけを扱います。'
  },
  extraction: {
    name: '情報の整理', title: '分類と抽出を、確認できる単位で。',
    intro: '問い合わせの仮分類や、短い文面からの項目抽出が候補です。正解例を渡し、1件ずつ照合できる形にすると、誤りを見つけやすくなります。',
    tasks: ['問い合わせを、決めた3〜5分類へ仮振り分けする', '短い文章から、日付・担当者・要件の候補を抜く', '一覧表に転記する前の、項目のたたき台を作る'],
    local: '少量のテキストを分類・抽出。不明な項目は空欄や「不明」で返す。',
    cloud: '送信可能なサンプルで、分類基準の改善や複雑な文面の解釈を試す。',
    human: '金額・件数はExcel等で計算。抽出結果は原文と照合し、確定データへの自動登録はしない。',
    warning: 'LLMは数字の読み違いや、存在しない項目の補完をします。会計集計・給与計算の正確さは、表計算や専用システムで担保してください。',
    prompt: '次の問い合わせを「予約」「料金」「その他」のいずれかに分類し、理由を1文で添えてください。判断できない場合は「要確認」と返してください。',
    small: '1件ずつの分類を先に試し、一括処理は後回しにします。'
  },
  translation: {
    name: '翻訳・言い換え', title: '短い文の意味を、確かめる補助に。',
    intro: '短文の大意確認や、やさしい日本語への言い換えが候補です。専門用語・敬語・否定表現の扱いは、原文と対にして確認します。',
    tasks: ['短い外国語メールの、大まかな意味を確認する', '難しい日本語を、短く平易な表現に直す', '定型の案内文を、対訳の下書きにする'],
    local: '短い文の対訳や言い換え。固有名詞と数字は原文を併記する。',
    cloud: '送信可能な文章で、自然な表現や文脈を踏まえた訳を比較する。',
    human: '金額・日時・否定・義務の強さを照合。重要な契約や専門文書は読める人が確認。',
    warning: '小さなモデルでは、日本語の自然さや言語ごとの品質に差があります。契約・医療など、誤訳の影響が大きい文書の最終訳には使いません。',
    prompt: '次の文章をやさしい日本語に言い換えてください。数字・日付・条件は変えず、原文と書き換えを対にして示してください。',
    small: '1〜3文の意味確認から始め、微妙なニュアンスの判断は人に戻します。'
  },
  code: {
    name: 'コードの補助', title: '短いコードを、理解する相棒に。',
    intro: '小さな関数や表計算の式の説明、サンプルの下書きが候補です。動作は実行環境で確認し、コード全体を任せる前提にはしません。',
    tasks: ['短い関数やExcelの式を、日本語で説明させる', 'ダミーデータで動かす、小さな処理の例を作る', 'エラー文から、確認する点を列挙する'],
    local: '短いコード片や式の説明、テスト例の下書き。',
    cloud: '送信可能なコードで、複数ファイルにまたがる原因調査や複雑な設計を相談する。',
    human: 'ダミーデータで実行・テスト。依存関係や現在の公式ドキュメントを確認。',
    warning: '8GB／16GBという条件だけで、本格的な自律開発の実用性は判定できません。生成コードを本番データに直接実行しないでください。',
    prompt: '次の短い関数について、入力・出力・失敗する可能性を説明し、ダミーデータで試せるテスト例を3つ示してください。コードの実行はしないでください。',
    small: '8GBでは短い式の説明までに絞り、複雑な生成は期待しすぎないでください。'
  },
  research: {
    name: '調べもの', title: '調査は情報源へ。手元では整理を。',
    intro: 'ローカルLLM単体は、最新の制度・価格・ニュースを確認する道具にはなりません。確認した資料を手元で整理する役割に分けるのが現実的です。',
    tasks: ['取得した公式資料の抜粋から、比較項目を作る', '確認済みの説明を、やさしい表現に直す', '資料だけでは不明な点を、質問の一覧にする'],
    local: '人が取得した資料を要約し、根拠のある点と不明点を分ける。',
    cloud: 'Web検索機能があるサービスで出典付きの調査を補助。リンク先の公式情報と日付を人が確認。',
    human: '一次情報の所在と更新日を確認。料金・制度などの最終判断は資料に戻る。',
    warning: 'モデルの回答が流暢でも、最新・正確とは限りません。検索のないクラウドLLMにも同じ限界があります。',
    prompt: '次の公式資料の抜粋だけを使い、「確認できる事実」「この資料では不明なこと」を分けてください。各事実に該当する原文を添え、推測で埋めないでください。',
    small: '1つの資料の短い抜粋だけを渡し、情報の真偽は人が確認します。'
  }
};

const privacyNames = { strict: '外部に送らない', balanced: '内容で使い分け', open: '公開情報中心' };
const priorityNames = { speed: '速度優先', balanced: 'バランス', quality: '品質優先' };

// Select an actual workflow before selecting a local model. These are editorial
// estimates; no branch asserts measured performance on a visitor's hardware.
function workflow(s) {
  if (s.use === 'research') return {
    verdict: '最新情報の調査は、ローカル単体では難しい',
    decision: s.privacy === 'strict'
      ? '公式資料を人が確認し、取得した内容だけ手元で整理します。入力文・文書は外部に送りません。モデルを大きくしても、情報の新しさは確保できません。'
      : '公式サイトや検索機能で出典・更新日を確認することが先です。ローカルは取得済み資料の整理に使います。モデル規模を上げても、最新性の確認は代替できません。',
    action: 'まず公式資料を取得し、確認したい事実と更新日を確かめる。',
    fit: '資料整理の補助'
  };
  if (s.privacy === 'strict') return {
    verdict: s.ram === '8' && s.priority === 'quality' ? '品質が足りない作業は、人に戻す' : s.ram === '8' ? '短い作業に絞って、手元で試す' : '外部に送らず、手元で処理する',
    decision: s.ram === '8' && s.priority === 'quality'
      ? '外部送信を避け、品質を優先する条件です。8GBで大きなモデルへ上げる余裕は限られるため、小型モデルで満たせない作業は人が対応します。'
      : `${uses[s.use].name}をローカルで試します。外部送信しない条件を優先し、品質が不足した場合もクラウドへ自動で回さず、人が確認・修正します。`,
    action: s.ram === '8' && s.priority === 'quality' ? '短い実例を1件だけ試し、品質不足なら人の作業を続ける。' : '取得済みモデルで通信を切り、短い実例1件の処理と修正量を確認する。',
    fit: s.ram === '8' ? '短文に限定' : 'ローカルを優先'
  };
  if (s.privacy === 'open' && s.priority === 'quality') return {
    verdict: '品質優先なら、クラウドを先に比較する',
    decision: '公開情報が中心で、外部送信の制約が小さい条件です。まずクラウドで目的の品質が得られるか確かめ、ローカルの導入・更新の手間と比較します。クラウドでも正確性は人が確認します。',
    action: '同じ公開文例で、クラウドの出力と手直し時間を先に確認する。', fit: '必要なら比較候補'
  };
  if (s.privacy === 'open' && s.priority === 'speed') return {
    verdict: '応答時間を比べて、使う場所を決める',
    decision: '速度はメモリ容量だけでは判定できません。ローカルの小型モデルと利用できるクラウドで、回答が出るまでと修正にかかる時間を比べます。',
    action: '同じ短文1件で、待ち時間と手直し時間を比べる。', fit: '小型モデルを比較'
  };
  if (s.privacy === 'open') return {
    verdict: '公開情報なら、導入の手間も比べる',
    decision: '情報を手元に限定する必要性が低い条件です。繰り返す作業やオフライン利用に利点があるか、クラウドと比較してからローカルの導入を判断します。',
    action: '繰り返す作業を1つ選び、準備・処理・修正を含む手間を比較する。', fit: '導入の必要性を比較'
  };
  if (s.priority === 'quality') return {
    verdict: '品質と送信可否で、作業を分ける',
    decision: '機密を含む原文は手元で扱い、外部送信できる情報だけクラウドと比較します。ローカルの品質が不足しても、送信不可の情報は人が対応します。',
    action: '送信できる情報を先に分け、それぞれの出力品質と修正量を確認する。', fit: '機密部分を手元で'
  };
  return {
    verdict: s.ram === '8' ? 'ローカルは小さな補助作業に絞る' : ['writing','extraction'].includes(s.use) ? '定型処理は、ローカルから試す' : '手元で下処理し、難しい部分を分担する',
    decision: s.ram === '8' ? '8GBでは、短い素材を1件ずつ処理するところから。複雑な処理は送信できる内容だけクラウドで比較し、送信できない内容は人に戻します。' : `${uses[s.use].name}のうち、手元の素材だけで完結する作業をローカルで試します。外部情報や複雑な判断が必要な部分は、送信可否を確認して分担します。`,
    action: s.priority === 'speed' ? '短い実例1件で、待ち時間が許容範囲か先に確認する。' : '普段の実例1件で、原文との一致と手直し量を確かめる。', fit: s.ram === '8' ? '小さな補助作業' : '定型・下処理を試す'
  };
}

export function diagnose(s) {
  if (!['8','16'].includes(s.ram) || !uses[s.use] || !privacyNames[s.privacy] || !priorityNames[s.priority]) throw new Error('Invalid diagnostic selection');
  const use = uses[s.use];
  let size, example, exampleUrl, modelNote, pace;
  if (s.ram === '8') {
    size = s.priority === 'speed' ? '0.8〜2B' : s.priority === 'quality' ? '2B' : '1〜2B';
    example = s.priority === 'speed' ? 'Qwen3.5-0.8B / 2B' : 'Qwen3.5-2B';
    exampleUrl = s.priority === 'speed' ? 'https://huggingface.co/Qwen/Qwen3.5-0.8B' : 'https://huggingface.co/Qwen/Qwen3.5-2B';
    modelNote = s.priority === 'quality' ? '品質優先でも、まず2B級のQ4から。4B級は空きRAMと短い入力で試験する候補にとどめます。品質が足りなければ、作業を人へ戻すか、送信可能な範囲でクラウドを検討します。' : '8GBは余裕が限られます。他のアプリを閉じ、短い入力・1件ずつの処理から。0.8B級は試作や定型処理の候補で、汎用的な高品質回答は期待しすぎないでください。';
    pace = s.priority === 'speed' ? '軽い処理を優先' : s.priority === 'quality' ? '品質に制約あり' : '短文で試す';
  } else if (s.priority === 'speed') {
    size = s.use === 'code' ? '4B' : '2B';
    example = s.use === 'code' ? 'Qwen3.5-4B' : 'Qwen3.5-2B';
    exampleUrl = `https://huggingface.co/Qwen/${example}`;
    modelNote = '速度を優先し、小さな量子化モデルで短く答えさせます。長い推論は必要なときだけ。CPUのみでは待ち時間が生じるため、実際の作業時間で判断してください。';
    pace = '軽い処理を優先';
  } else if (s.priority === 'quality') {
    size = '7〜9B'; example = 'Qwen2.5-7B-Instruct'; exampleUrl = 'https://huggingface.co/Qwen/Qwen2.5-7B-Instruct';
    modelNote = '品質を優先するため、7B級のQ4を比較候補に入れます。空きRAMと待ち時間に余裕があればQwen3.5-9B等も比較。小さな4B級でも目的を満たすことがあるため、同じ文例で品質と修正量を比べます。16GBでの快適動作は未確認です。';
    pace = '余裕を確認して比較';
  } else if (s.priority === 'balanced' && ['writing','extraction'].includes(s.use)) {
    size = '2〜4B'; example = 'Qwen3.5-2B / 4B'; exampleUrl = 'https://huggingface.co/Qwen/Qwen3.5-2B';
    modelNote = '短い定型文・決めた分類など、狭い作業を想定して2B級から試します。指示に従わない、抜け漏れが多い場合は4B級と比較。用途を絞った開始目安で、日本語品質は実測が必要です。';
    pace = '2Bから段階的に';
  } else {
    size = '4〜7B'; example = 'Qwen3.5-4B'; exampleUrl = 'https://huggingface.co/Qwen/Qwen3.5-4B';
    modelNote = '意味の保持や指示の再現性を見たい用途では、4B級と7B級を比較対象にします。まず軽い4B級、品質不足ならQwen2.5-7B-Instruct等のQ4版を試す目安です。モデルの世代・学習内容が違うため、7Bが必ず優れるとは判定しません。';
    pace = '4Bと7Bを比較';
  }
  if(s.privacy === 'strict') modelNote = modelNote.replace('作業を人へ戻すか、送信可能な範囲でクラウドを検討します。', '作業を人へ戻し、扱う範囲を絞ります。');
  const recommendation = workflow(s);
  let route = recommendation.fit;
  const displayedSize = s.use === 'research' ? '単体利用は対象外' : size;
  const modelCaption = s.use === 'research' ? `取得済み資料の整理なら ${size}級を検討` : s.ram === '16' && s.priority === 'quality' ? '7B級を含めて比較。8〜9B級は余裕がある場合' : '短いテキストで試す比較候補';
  const useReason = {
    writing: '素材のある短い定型文を想定。文体の修正量で候補を比べます。',
    extraction: '決めた分類や項目の抽出を想定。小型から試し、数字は原文と照合します。',
    summary: '意味・条件・例外の抜け落ちを確認。モデル規模を上げても長文の正確さは保証できません。',
    translation: '言語・表現による品質差を確認。重要な訳は読める人の照合が必要です。',
    code: '短いコードの説明と例を想定。小さすぎるモデルでは指示の再現性を確認する必要があります。',
    research: '情報取得が先。モデル規模は情報の最新性を決めません。'
  }[s.use];
  const priorityReason = s.priority === 'quality' ? (s.ram === '16' ? '7B級と、余裕があれば8〜9B級も比較。大きさだけで品質の優劣は決めません。' : '8GBでは大規模化に制約。品質不足時は人の対応を残します。') : s.priority === 'speed' ? '小型・短文を優先します。応答秒数はCPU・GPU未確認のため判定できません。' : '手直しと待ち時間の両方を見て、候補を段階的に比較します。';
  const cloud = s.privacy === 'strict'
    ? (s.use === 'research' ? '入力文・文書は送信しない。公開資料の取得は、業務上の秘密を含めない検索語で別途行う。' : 'この条件では、入力文・文書をクラウドへ送らない。ローカルの品質が不足したら人が対応する。')
    : s.privacy === 'balanced' ? use.cloud + ' 氏名を消すだけで送信可とは判断せず、残る情報と利用規程を確認。' : use.cloud + ' 公開情報でもサービスの保存・利用条件を確認。';
  const privacy = s.privacy === 'strict'
    ? 'ローカルモデルを選び、クラウド連携・外部ツール・Web検索を無効化。初回取得後に通信を切って動作を確認します。ログ、保存先、同期・バックアップの設定も確認してください。'
    : s.privacy === 'balanced'
      ? '顧客名・個人情報・契約上の秘密を含む原文は手元に残し、送信の許可を確認した情報だけクラウドへ。自動の匿名化だけで安全とは判定しません。'
      : '公開情報ならクラウドも比較対象です。ローカルの導入・更新・手直しの手間を含め、全体の作業時間に利点があるか試してください。';
  return {...s, useKey: s.use, use, size, displayedSize, modelCaption, example, exampleUrl, modelNote, pace, route, cloud, privacyAdvice: privacy, ...recommendation, useReason, priorityReason};
}

const form = document.getElementById('diagnosis-form');
const result = document.getElementById('result');
const status = document.getElementById('update-status');

function readState() { return Object.fromEntries(new FormData(form)); }
function render(announce = false) {
  const d = diagnose(readState());
  const detailsState = new Map([...result.querySelectorAll('details')].map(e => [e.id, e.open]));
  const localExtra = d.ram === '8' ? ' ' + d.use.small : '';
  const lowMemory = d.ram === '8' ? '<strong>8GBでは作業を小さく絞ることが前提。</strong> ' : '';
  result.innerHTML = `
    <div class="result-top">
      <div class="result-topline"><span class="result-eyebrow">YOUR LOCAL LLM PLAN</span><span class="tag estimate">活用提案 · 推定</span></div>
      <div class="selection-tags"><span>${d.ram}GB</span><span>${d.use.name}</span><span>${privacyNames[d.privacy]}</span><span>${priorityNames[d.priority]}</span></div>
      <p class="verdict-label">この条件での結論</p>
      <h3 id="result-title" data-testid="verdict">${d.verdict}</h3><p data-testid="decision">${d.decision}</p>
      <div class="next-action"><b>最初にすること</b><span data-testid="next-action">${d.action}</span></div>
    </div>
    <div class="result-content">
      <div class="model-panel"><div><p class="metric-label">${d.useKey === 'research' ? '最新情報の調査に使うなら' : 'ローカルを試す場合のモデル候補'} <span>／ 推定</span></p><div class="model-value ${d.displayedSize.length > 6 ? 'model-value-long' : ''}" data-testid="model-size">${d.displayedSize}${d.useKey === 'research' ? '' : ' <small>級</small>'}</div><p class="model-caption">${d.modelCaption}</p></div><div><p class="metric-label">今回のローカルの役割</p><div class="pace-value" data-testid="route">${d.route}</div><p class="model-caption">${d.pace}</p></div></div>
      <p class="model-example">候補例：<a href="${d.exampleUrl}" target="_blank" rel="noopener noreferrer">${d.example} ↗</a><br>対応する実行ソフトと量子化版を確認して選びます。名称は実在する候補で、動作確認済みの意味ではありません。</p>
      <p class="conditional-note" data-testid="model-note">${d.modelNote}</p>
      <details class="result-details medium-models" id="medium-models" ${d.ram === '16' && d.priority !== 'speed' ? 'open' : ''}><summary>6B・7B級も比較するなら <span aria-hidden="true">+</span></summary>
        <p>${d.ram === '16' ? '16GBでは、中間規模の比較候補です。' : '8GBでは余裕が小さいため、初期候補にはしません。'} 以下の容量は配布ファイルの大きさです。OS・他アプリ・文脈処理のメモリは別途必要です。</p>
        <div class="candidate-model"><b>7B級 · Qwen2.5-7B-Instruct</b><span class="tag confirmed">日本語対応の公表あり</span><p>Q4_K_Mの配布容量は4.7GB。日本語の要約・下書き等で小型モデルと比較する候補です。旧世代のモデルを含む比較で、最新4B級への優位は未検証です。</p><a href="https://huggingface.co/Qwen/Qwen2.5-7B-Instruct" target="_blank" rel="noopener noreferrer">モデル仕様 ↗</a> <a href="https://ollama.com/library/qwen2.5:7b-instruct-q4_K_M" target="_blank" rel="noopener noreferrer">配布容量 ↗</a></div>
        <div class="candidate-model"><b>6B級 · Yi-1.5-6B-Chat</b><span class="tag estimate">日本語用途は要検証</span><p>Q4_K_Mの配布容量は3.7GB。英語・中国語を中心とするモデルです。6B級の比較例として示し、日本語の主候補にするかは文例で判断します。</p><a href="https://huggingface.co/01-ai/Yi-1.5-6B-Chat" target="_blank" rel="noopener noreferrer">モデル仕様 ↗</a> <a href="https://ollama.com/library/yi:6b-chat-v1.5-q4_K_M" target="_blank" rel="noopener noreferrer">配布容量・対応言語 ↗</a></div>
      </details>
      <details class="result-details why-details" id="why-detail" open><summary>この結果になった理由 <span aria-hidden="true">+</span></summary><dl class="decision-reasons">
        <div><dt>用途</dt><dd>${d.useReason}</dd></div>
        <div><dt>優先度</dt><dd>${d.priorityReason}</dd></div>
        <div><dt>情報の扱い</dt><dd>${d.privacy === 'strict' ? '外部送信しない条件を優先。品質が不足しても、クラウドへの送信は勧めません。' : d.privacy === 'open' ? '公開情報中心なので、クラウドを含めて比較できます。' : '送信できる内容と機密を分けて使います。'} この条件は送信先を変えます。モデル規模が変わらない場合もあります。</dd></div>
      </dl><p class="quantization-note">Q4は8GB・16GBで試すための共通の軽量化前提です。選択によって量子化方式を変える精度の診断は行っていません。</p></details>
      <p class="use-intro">${lowMemory}${d.use.intro}</p>
      <h4 class="result-label">まず試したい、3つの作業 <small>用途の適性は推定</small></h4>
      <ul class="task-list">${d.use.tasks.map(t => `<li><span class="check" aria-hidden="true">✓</span><span>${t}</span></li>`).join('')}</ul>
      <div class="division" aria-label="ローカルとクラウドの使い分け">
        <div class="division-row local"><strong>PCの中で</strong><p>${d.use.local}${localExtra}</p></div>
        <div class="division-row cloud"><strong>${d.privacy === 'strict' ? '外部への送信' : 'クラウドで'}</strong><p data-testid="cloud-advice">${d.cloud}</p></div>
        <div class="division-row human"><strong>人が確認</strong><p>${d.use.human}</p></div>
      </div>
      <div class="warning-box"><b>この使い方の限界</b>${d.use.warning}</div>
      <details class="result-details" id="privacy-detail"><summary>情報を守るための使い分け <span aria-hidden="true">+</span></summary><p>${d.privacyAdvice}</p><p>「PC上のアプリ」でも、クラウドモデルや外部連携を選ぶと通信が発生します。<a href="https://lmstudio.ai/docs/app/offline" target="_blank" rel="noopener noreferrer">オフライン動作の説明 ↗</a> ／ <a href="https://docs.ollama.com/faq" target="_blank" rel="noopener noreferrer">Ollamaのローカル専用設定 ↗</a></p></details>
      <details class="result-details" id="trial-detail"><summary>手元のPCで試すなら <span aria-hidden="true">+</span></summary>
        <ol><li>実行ソフトのOS・CPU要件を確認し、モデルと必要なランタイムを取得。モデルカードのライセンス・利用条件も確認します。LM Studioを使う場合、RAMは16GB以上が推奨です。</li><li>${d.example}等の対応するQ4版で、まず2,048トークン程度の文脈長・1件ずつ・短い出力から試します。これは本サイトの開始設定の提案で、動作保証ではありません。</li><li>秘密を含まない、普段の作業例を5件用意。元資料との一致、待ち時間、修正にかかった時間を記録し、人だけで行う場合と比較します。</li><li>メモリ不足や極端な遅延なら、他アプリを閉じる・文を短くする・小さなモデルへ切り替える。品質不足なら、用途を絞るか人が対応します。</li></ol>
        <p><b>最初に試す指示文の例</b><br>${d.use.prompt}</p><p>このページは条件診断です。モデルのダウンロード・推論や、あなたのPCの自動測定は行いません。</p>
      </details>
      <div class="result-meta"><span>${CHECKED}確認の資料に基づく提案</span><a href="#sources" data-open-sources>根拠資料を見る ↗</a></div>
    </div>`;
  for (const [id, open] of detailsState) { const el = document.getElementById(id); if (el) el.open = open; }
  if (announce) status.textContent = `診断結果を更新しました。${d.ram}GB、${d.use.name}、${privacyNames[d.privacy]}、${priorityNames[d.priority]}。${d.verdict}。${d.modelCaption}。`;
}

form.addEventListener('change', () => render(true));
form.addEventListener('submit', e => {
  e.preventDefault();
  render(true);
  result.focus({preventScroll:true});
  result.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
});
document.addEventListener('click', e => {
  const a = e.target.closest('a[href="#sources"],a[href="#method"]');
  if (a) document.querySelector(a.getAttribute('href')).open = true;
});
render();
