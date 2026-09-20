window.PROGRAMS = [
  {
    "id": "reskilling-business-development",
    "title": "人材開発支援助成金（事業展開等リスキリング支援コース）",
    "recipient": "雇用保険被保険者に事業展開・DX等に必要な訓練を行う事業主",
    "benefitText": "対象訓練経費の75%（中小企業以外60%）と、所定労働時間内の対象訓練について1人1時間1,000円（同500円）の賃金助成。eラーニング・通信制・定額制等は経費助成のみ。訓練方式・時間・人数等の上限があるため自動総額計算しない。 通学・同時双方向型の経費助成上限は1人1訓練につき中小企業30/40/50万円（10〜100時間未満/100〜200時間未満/200時間以上）、その他20/25/30万円。eラーニング・通信制は中小15万円／その他10万円。定額制は1人月2万円。2026-08-03以降のeラーニング計画は原則1人年度1回（コース全体は年度3回）。設備投資加算は別要件のため試算対象外。",
    "conditions": [
      "申請事業主が雇用保険適用事業所、対象受講者がその雇用保険被保険者であること。",
      "事業展開又はDX等の対象業務に直接必要な知識・技能を習得する、原則10時間以上のOFF-JT。通常業務・OJTとは区別する。",
      "職業能力開発推進者の選任、事業内職業能力開発計画の策定・周知、訓練カリキュラムと実施計画届が必要。",
      "事業主が対象訓練経費を支給申請までに全額負担し、訓練中の賃金を適正に支払うこと。",
      "2026-08-03以降の計画は、特定業務への具体的適用を伴うAI研修が候補。汎用プロンプトの作り方やDX概念だけの研修は対象外（経過措置あり）。"
    ],
    "exclusions": [
      "週10〜15時間の採用者を、雇用保険適用を確認せず対象人数に数えない。コア50人など被保険者の研修を別に確認する。",
      "全社の通常人件費、社内の教材開発工数、部内講師の人件費をそのまま『訓練経費』に計上しない。事業内訓練の経費は部外講師謝金・所定の借料・教材費等の対象費目で確認。",
      "所定時間外・所定休日の訓練は賃金助成対象外。eラーニング・通信制・定額制も賃金助成対象外。",
      "業務マニュアルの作成、業務改善コンサル、通常業務の成果物作成を研修として算入しない。",
      "助成金で研修が全額無料になると表示しない。対象者に経費を負担させると原則として賃金助成も含め不支給。"
    ],
    "applicationTiming": "原則、訓練開始6か月前〜1か月前に計画届。新規雇入れ者のみを対象とし雇入れから開始まで1か月以内等の例外は開始前日まで。通常の支給申請は訓練終了翌日から2か月以内。計画受理は支給確約ではない。",
    "combinationNote": "同一の訓練受講・対象経費・対象賃金について他制度と併給できない場合がある。雇入れ助成と対象者・期間・賃金が重なる場合は労働局確認まで合算しない。キャリアアップ重点対象との関係も別に確認。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
      "https://www.mhlw.go.jp/content/11800000/001731978.pdf",
      "https://www.mhlw.go.jp/content/11800000/001731966.pdf",
      "https://www.mhlw.go.jp/content/11800000/001687619.pdf"
    ],
    "checkedAt": "2026-09-20",
    "category": "training",
    "actors": [
      "business"
    ],
    "shortAmount": "訓練経費75％・60％＋条件付き賃金助成",
    "status": "current",
    "openStatusText": "2026-08-03版の公式詳細パンフレット・改正リーフレットを確認。2026年度末までの時限措置として案内。実施・申請時の予算と適用版を要確認。",
    "matchNote": "雇用保険被保険者の、特定業務に必要な研修が対象。2026年8月改正で、汎用AIプロンプトやDX概念のみの研修は対象外です。",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "FDEの社内育成、または顧客の営業・審査・事務など特定職務に直結するAI研修。通常の実装作業は研修経費に混ぜません。"
  },
  {
    "id": "training-digital",
    "title": "人材開発支援助成金｜高度デジタル人材訓練",
    "category": "training",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "経費75％・60％、対象賃金1,000円・500円／時",
    "benefitText": "中小企業は経費75％、その他60％。所定の賃金助成は1人1時間1,000円・500円。時間・方式別の上限は詳細要領による。",
    "conditions": [
      "ITスキル標準・DX推進スキル標準のレベル3・4相当等、所定の高度デジタル訓練。",
      "雇用保険被保険者が対象。訓練開始前の計画届が必要。"
    ],
    "proposal": "FDE・AIエンジニアの育成用。単にAIという講座名だけでは対象と判定しない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "原則開始1か月前までに計画。2026年度末までの時限措置。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
      "https://www.mhlw.go.jp/content/11800000/001687616.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "原則開始1か月前までに計画。2026年度末までの時限措置。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "training-it-ojt",
    "title": "人材開発支援助成金｜情報技術分野認定実習併用職業訓練",
    "category": "training",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "経費60％・45％＋OJT20万円・11万円／人",
    "benefitText": "通常の中小企業／その他の経費率は60％／45％、賃金800円／400円時、OJT20万円／11万円。賃上げ等で加算あり。",
    "conditions": [
      "IT未経験者向けに、認定されたOJTとOFF-JTを組み合わせる。年齢・期間・認定要件を確認。"
    ],
    "proposal": "未経験採用から実装人材へ育てる計画に照合。日常OJTの全部が自動対象になるわけではない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "認定・訓練計画を実施前に準備。2026年度末までの時限措置。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
      "https://www.mhlw.go.jp/content/11800000/001687616.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "認定・訓練計画を実施前に準備。2026年度末までの時限措置。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "training-basic",
    "title": "人材開発支援助成金｜人材育成支援コース",
    "category": "training",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "正規の経費45％・30％／非正規70％等",
    "benefitText": "人材育成訓練の通常率：正規等は中小45％・その他30％、非正規70％。賃金800円・400円／時。対象訓練・賃上げ等により別率・上限。",
    "conditions": [
      "原則10時間以上の職務関連OFF-JT。雇用保険・計画届・訓練内容を確認。",
      "2026年度は45歳以上向け中高年齢者実習型訓練も新設。"
    ],
    "proposal": "新入社員や業務担当者の実務研修、高度デジタル枠に届かない訓練の比較候補。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "実施前に計画・対象者・経費を確認。申請期限は公式要領参照。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
      "https://www.mhlw.go.jp/content/11800000/001687559.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "実施前に計画・対象者・経費を確認。申請期限は公式要領参照。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "training-equipment",
    "title": "事業展開等リスキリング｜設備投資加算",
    "category": "training",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "対象導入費50％／1人15万円・1訓練150万円上限",
    "benefitText": "中小企業限定。訓練の通常分とは別の加算。対象人数×15万円と150万円、導入費×50％の範囲。",
    "conditions": [
      "実技で使用した機器等と同種の設備を、訓練終了後の計画に沿って導入。",
      "所定の賃金5％増または資格等手当による3％増等が必要。"
    ],
    "proposal": "研修から実機導入へつなぐ案件に照合。一般的なPC購入を一律対象にしない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "実施前に計画・対象者・経費を確認。申請期限は公式要領参照。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
      "https://www.mhlw.go.jp/content/11800000/001687557.pdf",
      "https://www.mhlw.go.jp/content/11800000/001731978.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "実施前に計画・対象者・経費を確認。申請期限は公式要領参照。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true,
    "employmentDefinition": true
  },
  {
    "id": "training-subscription",
    "title": "人材開発支援助成金｜定額制訓練・自発的訓練",
    "category": "training",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "定額制60％・45％／自発的訓練45％",
    "benefitText": "人への投資促進コース。定額制は中小60％・その他45％、自発的訓練45％。賃上げ等で15ポイント加算。賃金助成はなし。",
    "conditions": [
      "定額制は職務関連の対象講座・受講記録・所定時間を確認。",
      "自発的訓練は会社制度に基づく費用負担等の要件が必要。"
    ],
    "proposal": "継続学習用。リスキリングや高度デジタルと同じ受講料を重複申請しない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "2026年度末までの時限措置。適用する訓練・制度の開始前に確認。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
      "https://www.mhlw.go.jp/content/11800000/001687616.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "2026年度末までの時限措置。適用する訓練・制度の開始前に確認。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "private-digital-ai-2026-normal",
    "title": "デジタル化・AI導入補助金2026（通常枠）",
    "recipient": "自社業務へ登録ITツールを導入する中小企業・小規模事業者等。BPO・AI企業も企業規模・資本関係・利用目的等の要件を満たす必要がある。自治体の調達費補助ではない。",
    "benefitText": "自社の生産性向上に必要な登録ソフトウェア・クラウド等の導入を支援。原則1/2、補助額5万円～450万円（プロセス数による）。",
    "conditions": [
      "登録IT導入支援事業者と申請し、事前登録済ITツールを導入する。汎用AI・自動化ツールのみの単独申請は不可。",
      "クラウド利用料は最大2年分。150万円以上は4プロセス以上および賃上げ等の要件を確認。",
      "特定期間の最低賃金近傍の従業員割合等を満たす場合は2/3以内。小規模企業というだけで通常枠が一律2/3になるわけではない。"
    ],
    "exclusions": [
      "大企業1社が株式等の1/2以上を保有、複数大企業が2/3以上を保有、大企業の役職員が役員の1/2以上等の企業は対象外。上場子会社は親会社の規模と資本・役員関係を確認する。",
      "2026年度のIT導入支援事業者と補助事業者は重複不可（みなし同一法人・役員等の規定あり）。販売側登録と自社受給を自動併用しない。",
      "顧客が実質負担する売上原価相当の費用、交付決定前の購入、申請代行費・消費税等は対象外。顧客向け製品の開発販売費の補助制度ではない。"
    ],
    "applicationTiming": "5次締切：2026年9月29日17:00。交付決定予定2026年11月9日。実施・実績報告期限2027年4月30日17:00予定。交付決定後に契約・導入・支払。",
    "combinationNote": "同一経費の他制度との重複受給を前提にしない。自治体から受託する事業費と自社IT導入費を区分する。補助金は導入企業へ直接支払われ、ITベンダーの契約売上とは別。",
    "sourceUrls": [
      "https://it-shien.smrj.go.jp/applicant/subsidy/normal/",
      "https://it-shien.smrj.go.jp/schedule/",
      "https://it-shien.smrj.go.jp/pdf/it2026_koubo_tsujyo.pdf",
      "https://it-shien.smrj.go.jp/itvendor/about/"
    ],
    "checkedAt": "2026-09-20",
    "category": "digital",
    "actors": [
      "business"
    ],
    "shortAmount": "原則1/2　5万～450万円",
    "status": "open",
    "openStatusText": "5次受付中・9月29日締切",
    "matchNote": "自社で使用する登録ITツールの導入。顧客向け製品開発や販売費は対象と分けます。",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "顧客が登録済みITツールを導入する場合の提案。個別受託開発や常駐費の全額を登録ツール代として扱わない。自社の支援事業者・ツール登録状況は未確認。",
    "smeOnly": true
  },
  {
    "id": "private-labor-saving-general-8",
    "title": "中小企業省力化投資補助金（一般型・第8回）",
    "recipient": "自社の人手不足解消へ専用設備・システムを導入する中小企業等。BPO事業者の自社内省力化は個別審査。自治体およびみなし大企業は対象外。",
    "benefitText": "自社専用の省力化設備・システム導入を原則1/2、小規模等は2/3で補助。通常上限750万～8,000万円。大幅賃上げ特例では最大1億円。",
    "conditions": [
      "人手不足の解消、省力化効果・投資回収期間を示す3～5年計画。労働生産性年平均4%以上、1人当たり給与支給総額年平均3.5%以上等。",
      "単価50万円税抜以上の機械装置等への設備投資が必須。専用ソフトウェア・情報システムも対象経費となり得る。",
      "小規模・再生事業者等の補助率、最低賃金特例、大幅賃上げ特例は個別要件を満たす場合のみ。未達時の返還規定あり。"
    ],
    "exclusions": [
      "大企業1社が1/2以上保有、複数大企業が2/3以上保有、大企業の役職員が役員1/2以上等のみなし大企業は除外。上場子会社は資本・役員関係で判定。",
      "将来の対外販売を前提とする開発、利用者へ有償提供する設備・システム・サービスの開発改良、自社商品の製作費、専ら他者が使うシステムは対象外。",
      "自社人件費（社内開発工数を含む）、通常業務の代行費、交付決定前の発注等、汎用PC等は対象外。自治体から受注する製品の開発費を直接助成する制度ではない。"
    ],
    "applicationTiming": "第8回：2026年9月18日～10月16日17:00。契約・発注は原則交付決定後。",
    "combinationNote": "国の他制度と補助対象経費が重複する事業は対象外。同一事業が複数採択された場合は1制度を選んで交付申請。自治体調達と自社省力化投資を分離する。",
    "sourceUrls": [
      "https://shoryokuka.smrj.go.jp/ippan/about/",
      "https://shoryokuka.smrj.go.jp/ippan/schedule/",
      "https://shoryokuka.smrj.go.jp/assets/pdf/application_guidelines_ippan_08.pdf"
    ],
    "checkedAt": "2026-09-20",
    "category": "digital",
    "actors": [
      "business"
    ],
    "shortAmount": "原則1/2　通常上限750万～8,000万円",
    "status": "open",
    "openStatusText": "第8回受付中・10月16日締切",
    "matchNote": "自社の省力化投資が対象。販売するシステムや通常BPOの代行費は直接対象になりません。",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "顧客専用のAI・業務システムで削減工数を示す案件。提供事業者は要件定義・実装を担う供給側として検討。",
    "smeOnly": true
  },
  {
    "id": "it-security",
    "title": "デジタル化・AI導入補助金2026｜セキュリティ対策推進枠",
    "category": "digital",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "5～150万円／1/2・小規模2/3",
    "benefitText": "登録済みのサイバーセキュリティお助け隊サービスの利用料等、最大2年分。",
    "conditions": [
      "IPAリスト掲載とITツール登録の両方が必要。"
    ],
    "proposal": "AI導入先のセキュリティ基盤整備。任意の対策製品を対象にしない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "5次締切：2026年9月29日17:00。交付決定後に実施。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://it-shien.smrj.go.jp/applicant/subsidy/security/"
    ],
    "checkedAt": "2026-09-20",
    "status": "open",
    "openStatusText": "5次締切：2026年9月29日17:00。交付決定後に実施。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true
  },
  {
    "id": "it-invoice",
    "title": "デジタル化・AI導入補助金2026｜インボイス対応類型",
    "category": "digital",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "ソフト最大350万円＋対象PC等10万円・レジ等20万円",
    "benefitText": "補助額50万円以下の部分は3/4（小規模4/5）、超過部分2/3。ハードは1/2。",
    "conditions": [
      "登録済み会計・受発注・決済ソフト。50万円超は2機能以上。",
      "ハード単独不可。導入ソフトの使用に資するもの。"
    ],
    "proposal": "顧客のバックオフィス整備との連携用。ローカルLLM用PCだけの購入には適用しない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "交付申請は募集回ごと。締切はこの類型の公式日程を確認。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://it-shien.smrj.go.jp/applicant/subsidy/digitalbase/",
      "https://it-shien.smrj.go.jp/schedule/"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "交付申請は募集回ごと。締切はこの類型の公式日程を確認。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true
  },
  {
    "id": "labor-saving-catalog",
    "title": "中小企業省力化投資補助金｜カタログ注文型",
    "category": "digital",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "通常500～1,000万円／特例750～1,500万円",
    "benefitText": "2026年3月19日改定。5人以下500万円、6～20人750万円、21人以上1,000万円。賃上げ特例は750／1,000／1,500万円。補助率1/2以下。",
    "conditions": [
      "登録カタログ製品を登録販売事業者と共同申請。",
      "労働生産性年平均3％等の計画。特例は追加賃上げ要件。"
    ],
    "proposal": "顧客に合う既製品がある場合の比較候補。オーダーメイド開発は一般型で検討。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "随時受付。原則2027年3月末頃まで。予算・登録有効期間は最新案内確認。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://shoryokuka.smrj.go.jp/catalog/about/",
      "https://shoryokuka.smrj.go.jp/assets/pdf/application_guidelines_catalog.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "open",
    "openStatusText": "随時受付。原則2027年3月末頃まで。予算・登録有効期間は最新案内確認。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true
  },
  {
    "id": "new-product",
    "title": "新事業進出・ものづくり商業サービス補助金｜革新的新製品・サービス枠",
    "category": "digital",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "750～2,500万円／特例850～3,500万円",
    "benefitText": "通常1/2、小規模・再生2/3。最低100万円。従業員数・特例により上限が変わる。",
    "conditions": [
      "革新的な新製品・新サービス開発が必要。単なる業務改善や既製品導入は対象外。",
      "付加価値年4％、1人給与年3.5％、事業場内最低賃金＋30円等。行動計画・職場環境整備等の要件あり。"
    ],
    "proposal": "顧客の新サービス開発へのAI実装提案。自社開発は規模・支配関係を先に確認。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "第1回：公募中、申請受付は2026年9月30日開始予定、10月30日18:00締切。",
    "combinationNote": "同一経費の重複不可。旧・事業再構築、新事業進出、ものづくり、本補助金の交付候補者採択から16か月以内、または事業実施中等の制限があります。同時申請で複数採択されても交付申請する制度を選ぶ必要があります。別費目なら自動的に併用できるわけではありません。",
    "sourceUrls": [
      "https://shinjigyou-monodukuri.smrj.go.jp/overview/",
      "https://shinjigyou-monodukuri.smrj.go.jp/schedule/",
      "https://shinjigyou-monodukuri.smrj.go.jp/assets/documents/shinmono_application_guidelines_01.pdf?v4="
    ],
    "checkedAt": "2026-09-20",
    "status": "scheduled",
    "openStatusText": "第1回：公募中、申請受付は2026年9月30日開始予定、10月30日18:00締切。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true
  },
  {
    "id": "new-business",
    "title": "新事業進出・ものづくり商業サービス補助金｜新事業進出枠",
    "category": "digital",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "2,500～7,000万円／特例3,000～9,000万円",
    "benefitText": "通常1/2、最低750万円。地域最低賃金特例は2/3。従業員数と特例に応じた上限。",
    "conditions": [
      "既存事業と異なる新市場・高付加価値事業。創業そのものは別に確認。",
      "付加価値年4％、1人給与年3.5％、事業場内最低賃金＋30円等。行動計画・職場環境整備等の要件あり。"
    ],
    "proposal": "既存顧客の新分野進出で導入するシステムの候補。新設会社だから対象とはしない。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "第1回：公募中、申請受付は2026年9月30日開始予定、10月30日18:00締切。",
    "combinationNote": "同一経費の重複不可。旧・事業再構築、新事業進出、ものづくり、本補助金の交付候補者採択から16か月以内、または事業実施中等の制限があります。同時申請で複数採択されても交付申請する制度を選ぶ必要があります。別費目なら自動的に併用できるわけではありません。",
    "sourceUrls": [
      "https://shinjigyou-monodukuri.smrj.go.jp/overview/",
      "https://shinjigyou-monodukuri.smrj.go.jp/schedule/",
      "https://shinjigyou-monodukuri.smrj.go.jp/assets/documents/shinmono_application_guidelines_01.pdf?v4="
    ],
    "checkedAt": "2026-09-20",
    "status": "scheduled",
    "openStatusText": "第1回：公募中、申請受付は2026年9月30日開始予定、10月30日18:00締切。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true
  },
  {
    "id": "new-global",
    "title": "新事業進出・ものづくり商業サービス補助金｜グローバル枠",
    "category": "digital",
    "roles": [
      "self",
      "customer"
    ],
    "actors": [
      "business"
    ],
    "shortAmount": "2,500～7,000万円／特例3,000～9,000万円",
    "benefitText": "補助率2/3、最低750万円。従業員数・賃上げ特例で上限が変わる。",
    "conditions": [
      "新たな海外市場への輸出に向けた国内体制強化。取引先主導だけの案件は対象外。",
      "付加価値年4％、1人給与年3.5％、事業場内最低賃金＋30円等。行動計画・職場環境整備等の要件あり。"
    ],
    "proposal": "海外展開する顧客のAI製品・サービス体制整備に照合。",
    "recipient": "要件を満たす事業主",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "第1回：公募中、申請受付は2026年9月30日開始予定、10月30日18:00締切。",
    "combinationNote": "同一経費の重複不可。旧・事業再構築、新事業進出、ものづくり、本補助金の交付候補者採択から16か月以内、または事業実施中等の制限があります。同時申請で複数採択されても交付申請する制度を選ぶ必要があります。別費目なら自動的に併用できるわけではありません。",
    "sourceUrls": [
      "https://shinjigyou-monodukuri.smrj.go.jp/overview/",
      "https://shinjigyou-monodukuri.smrj.go.jp/schedule/",
      "https://shinjigyou-monodukuri.smrj.go.jp/assets/documents/shinmono_application_guidelines_01.pdf?v4="
    ],
    "checkedAt": "2026-09-20",
    "status": "scheduled",
    "openStatusText": "第1回：公募中、申請受付は2026年9月30日開始予定、10月30日18:00締切。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "smeOnly": true
  },
  {
    "id": "trial-general",
    "title": "トライアル雇用助成金（一般トライアルコース）",
    "recipient": "対象求職者をハローワーク等の紹介で原則3か月試行雇用する事業主",
    "benefitText": "通常は1人月額最大4万円×最長3か月（最大12万円）。母子家庭の母等・父子家庭の父は最大5万円×3か月。欠勤・途中終了等で減額される。",
    "conditions": [
      "無期雇用への移行を前提に本人がトライアルを希望し、ハローワーク等に求職登録・紹介を受ける。",
      "原則、通常労働者と同じ週所定労働時間かつ30時間以上。日雇労働者・ホームレス・住居喪失不安定就労者は20時間以上の例外あり。",
      "長期無業ルートは紹介日前日時点で離職期間が1年超で、その間パート等を含め一切就労していないこと。他の対象類型もある。"
    ],
    "exclusions": [
      "週10〜15時間の採用は時間要件に届かない。",
      "年齢が高いことだけでは対象者にならない。",
      "自己応募等の紹介要件を満たさない採用、派遣求人は対象外。"
    ],
    "applicationTiming": "雇入れ前にトライアル求人と紹介。開始日から2週間以内に実施計画書、終了翌日から原則2か月以内に支給申請。",
    "combinationNote": "特定求職者助成金との継続利用は対象者類型等に限定あり。高齢者150人の全員が両方受給できるとは扱わない。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/trial_koyou.html",
      "https://www.mhlw.go.jp/content/11600000/000733802.pdf"
    ],
    "checkedAt": "2026-09-20",
    "category": "employment",
    "actors": [
      "business"
    ],
    "shortAmount": "通常 最大12万円／人",
    "status": "current",
    "openStatusText": "公式制度ページ・電子申請案内の掲載を確認。雇入れ時の最新運用は要確認。掲載リーフレットは2024-04-01版。",
    "matchNote": "",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "自社の採用・育成に照合。顧客向け研修では、受給者は顧客の雇用主です。"
  },
  {
    "id": "specific-difficult-jobseekers",
    "title": "特定求職者雇用開発助成金（特定就職困難者コース）",
    "recipient": "60歳以上等の対象者を所定の紹介で継続雇用する事業主",
    "benefitText": "60歳以上の場合、週20〜30時間未満は中小企業40万円／それ以外30万円。週30時間以上は中小企業60万円／それ以外50万円。1年間・2期に分け、各期の支払賃金が上限。",
    "conditions": [
      "60歳以上は2026-05-01以降、ハローワーク等で就労に向けた個別支援を受け、原則として助成対象者と明示された紹介を受ける必要がある。",
      "雇用保険の一般又は高年齢被保険者として雇入れ、継続雇用する。",
      "少なくとも2年以上かつ65歳以上に達するまでの継続雇用が確実と認められること。"
    ],
    "exclusions": [
      "週20時間未満は本コースの時間要件に届かない。",
      "『60歳以上なら自動対象』ではない。長期無業だけでも本コースの高齢者類型にはならない。",
      "2026年4月以降の申請は賃金台帳の提出欠如で不支給。"
    ],
    "applicationTiming": "雇入れ前に対象者と紹介要件を確認。原則6か月の支給対象期ごとに、その末日翌日から2か月以内に申請。",
    "combinationNote": "同一対象者・同一雇入れを複数助成金へ算入する際は併給調整を確認。後のキャリアアップでは、特定求職者助成金の対象になった有期労働者が無期扱いとなる場合がある。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/tokutei_konnan.html",
      "https://www.mhlw.go.jp/content/001684468.pdf"
    ],
    "checkedAt": "2026-09-20",
    "category": "employment",
    "actors": [
      "business"
    ],
    "shortAmount": "高年齢者区分 30～60万円／人",
    "status": "current",
    "openStatusText": "公式ページで2026-05-01の高齢者要件改正、2026-04-01の申請変更を確認。個々の紹介・申請の取扱いは要確認。",
    "matchNote": "",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "自社の採用・育成に照合。顧客向け研修では、受給者は顧客の雇用主です。"
  },
  {
    "id": "over65-employment-promotion",
    "title": "65歳超雇用推進助成金",
    "recipient": "定年等の引上げ、雇用管理改善又は高年齢有期労働者の無期転換に取り組む事業主",
    "benefitText": "3コースで条件と額が異なる。継続雇用促進は対象被保険者数・措置に応じる事業主向け助成。無期転換は1人40万円（中小企業以外30万円）、年度・適用事業所10人まで。",
    "conditions": [
      "継続雇用促進：65歳以上への定年引上げ、定年廃止、66歳以上への継続雇用等を就業規則等に整備。60歳以上で1年以上継続雇用の所定の被保険者が1人以上いる等。",
      "雇用管理改善：55歳以上を対象とする労働時間・評価・賃金・健康管理等の制度整備について事前計画認定と実施。",
      "無期転換：事前認定した計画に基づく50歳以上・定年未満の有期労働者の無期雇用転換。"
    ],
    "exclusions": [
      "高齢者の新規採用だけで受けられる助成金ではない。",
      "採用150人×一律単価で試算しない。",
      "週10〜15時間の新規採用者を、そのまま対象被保険者に算入できると判定しない。"
    ],
    "applicationTiming": "継続雇用促進は制度実施月の翌月から4か月以内の各月1〜15日（休日調整あり）。無期転換計画は計画開始6〜3か月前に提出。他コースも実施前にJEEDへ確認。",
    "combinationNote": "同一の事由について他の国・自治体助成と併給調整あり。コースごとにJEEDへ確認。",
    "sourceUrls": [
      "https://www.jeed.go.jp/elderly/subsidy/",
      "https://www.jeed.go.jp/elderly/subsidy/subsidy_keizoku.html",
      "https://www.jeed.go.jp/elderly/subsidy/subsidy_hyouka.html",
      "https://www.jeed.go.jp/elderly/subsidy/subsidy_muki.html"
    ],
    "checkedAt": "2026-09-20",
    "category": "employment",
    "actors": [
      "business"
    ],
    "shortAmount": "定年・雇用管理・無期転換で異なる",
    "status": "current",
    "openStatusText": "JEEDに2026年度制度・申請案内を確認。継続雇用促進は月・四半期の予算状況で受付停止の可能性があり、申請月の受付状況は要確認。",
    "matchNote": "",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "自社の採用・育成に照合。顧客向け研修では、受給者は顧客の雇用主です。"
  },
  {
    "id": "career-up-regularization",
    "title": "キャリアアップ助成金（正社員化コース）",
    "recipient": "所定の非正規労働者を正社員に転換等する事業主",
    "benefitText": "有期→正社員は一般40万円／重点支援80万円（大企業30万円／60万円）。無期→正社員は一般20万円／重点支援40万円（大企業15万円／30万円）。年度・事業所20人上限。加算は別要件。",
    "conditions": [
      "原則6か月以上、正社員と異なる賃金の規則が適用された非正規労働者を、就業規則等に従い転換。転換前日までに計画提出。",
      "転換後は昇給と賞与又は退職金の制度、雇用保険適用等が必要。原則、転換前後で3%以上の賃金増額。",
      "重点支援は3年以上の有期、3年未満で過去の正社員歴に所定要件を満たす有期、派遣、母子家庭の母等、対象訓練修了者等。長期無業の申告だけで確定しない。"
    ],
    "exclusions": [
      "正社員としての新規採用、採用時から正社員化を約束した試用的有期契約は対象外。",
      "新卒入社1年未満、本人・関連会社での一定の既往雇用関係等は対象外となり得る。",
      "週10〜15時間の維持は転換後の雇用保険適用等に通常届かず、短時間正社員という名称だけでは対象にならない。"
    ],
    "applicationTiming": "計画は転換前日まで。転換後6か月分の賃金支払翌日から2か月以内に申請。重点支援の第2期はさらに6か月の実績後。",
    "combinationNote": "同一取組の併給調整あり。特定求職者雇用開発助成金等の対象となった有期労働者は、転換前の形態を無期として扱う場合がある。",
    "sourceUrls": [
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html",
      "https://www.mhlw.go.jp/content/11910500/001687990.pdf",
      "https://www.mhlw.go.jp/content/11910500/001687992.pdf",
      "https://www.mhlw.go.jp/content/11910500/001687993.pdf",
      "https://www.mhlw.go.jp/content/11910500/001729696.pdf"
    ],
    "checkedAt": "2026-09-20",
    "category": "employment",
    "actors": [
      "business"
    ],
    "shortAmount": "転換区分で15～80万円／人",
    "status": "current",
    "openStatusText": "2026-04-08版パンフレット・2026-07-29版Q&Aの掲載を確認。年度途中の変更・実施日による適用版を要確認。",
    "matchNote": "",
    "cashless": false,
    "roles": [
      "self",
      "customer"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "自社の採用・育成に照合。顧客向け研修では、受給者は顧客の雇用主です。"
  },
  {
    "id": "nedo-cpp",
    "title": "NEDO｜大企業等のスタートアップ連携・調達加速化 CPP／GX_CPP",
    "category": "research",
    "roles": [
      "self",
      "partner"
    ],
    "actors": [
      "university",
      "business"
    ],
    "shortAmount": "事業期間で最大10億円／1/2以内",
    "benefitText": "3年以内の研究開発・実証。交付先は大企業等。対象スタートアップとの共同提案・LOIが必要。",
    "conditions": [
      "技術開発要素のあるディープテック製品等。既存製品の導入だけ・通常のアプリコーディング等は対象外。",
      "連携先の株主構成・独立性、技術・財務・管理体制を公募要領に照合する。GXは追加要件あり。"
    ],
    "proposal": "自社または親会社が購買・実証側になる可能性を検討。自社を適格スタートアップと決めつけない。",
    "recipient": "所定の大企業等（スタートアップと共同提案）",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。",
      "連携するスタートアップには未上場・独立性・事業会社の出資比率等の条件があります。大企業の連結子会社を設立しただけで、対象スタートアップとは扱いません。"
    ],
    "applicationTiming": "2026年9月30日正午締切。個別相談期間は終了。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.nedo.go.jp/koubo/CA2_100535.html",
      "https://www.nedo.go.jp/content/800068367.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "open",
    "openStatusText": "2026年9月30日正午締切。個別相談期間は終了。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "nedo-robot",
    "title": "NEDO｜ロボティクス分野のソフトウェア流通基盤技術",
    "category": "research",
    "roles": [
      "self",
      "partner"
    ],
    "actors": [
      "university",
      "business"
    ],
    "shortAmount": "研究委託／個別計画の審査・契約による",
    "benefitText": "ポスト5G事業の研究委託。2026～2027年度。会社の自由な開発費補助ではない。",
    "conditions": [
      "ロボットソフトウェアの登録・管理・検索、評価基準、検証基盤の統合・実証など指定課題。"
    ],
    "proposal": "ロボット・AI基盤へ事業を広げる場合の共同研究候補。現時点の技術適合性は未確認。",
    "recipient": "要件を満たす企業・大学等",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "2026年10月16日正午締切。説明会9月29日、申込9月28日17:00。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.nedo.go.jp/koubo/CD2_100452.html",
      "https://www.nedo.go.jp/content/800069212.pdf"
    ],
    "checkedAt": "2026-09-20",
    "status": "open",
    "openStatusText": "2026年10月16日正午締切。説明会9月29日、申込9月28日17:00。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "kind": "commission"
  },
  {
    "id": "nedo-university",
    "title": "NEDO｜大規模産学連携拠点形成事業（第2回予告）",
    "category": "research",
    "roles": [
      "partner"
    ],
    "actors": [
      "university",
      "business"
    ],
    "shortAmount": "上限・補助率は本公募要領待ち",
    "benefitText": "大学等への補助。AI・先端ロボット等の戦略技術と地域産業技術が対象。予告を確認。",
    "conditions": [
      "大学中心の研究開発・人材養成・環境整備。産業界からの資金獲得計画等を審査予定。"
    ],
    "proposal": "大学と長期的な実装研究・人材育成を組む準備先。企業に補助額がそのまま入るわけではない。",
    "recipient": "大学等",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "2026年10月上旬～11月上旬の公募予定。本要領は公募開始日に掲載予定。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.nedo.go.jp/koubo/SM1_100001_00138.html"
    ],
    "checkedAt": "2026-09-20",
    "status": "announced",
    "openStatusText": "2026年10月上旬～11月上旬の公募予定。本要領は公募開始日に掲載予定。",
    "evidence": "公式の公募予告を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "jst-astep-loan",
    "title": "JST A-STEP｜実装支援（返済型）",
    "category": "research",
    "roles": [
      "self",
      "partner"
    ],
    "actors": [
      "university",
      "business"
    ],
    "shortAmount": "総額上限5億円／返済型",
    "benefitText": "最長3年の開発費貸付。評価S・A・Bは全額、Cは10％返済。返済不要の補助金ではない。",
    "conditions": [
      "大学等の研究成果の社会実装。スタートアップ等の申請資格・技術移転関係を要領確認。"
    ],
    "proposal": "資金調達の比較候補として表示。補助金合計には含めない。",
    "recipient": "要件を満たすスタートアップ等",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "2026年4月1日～2027年3月31日正午、応募相談受付・随時選考。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.jst.go.jp/a-step/koubo/"
    ],
    "checkedAt": "2026-09-20",
    "status": "open",
    "openStatusText": "2026年4月1日～2027年3月31日正午、応募相談受付・随時選考。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "kind": "repayable"
  },
  {
    "id": "municipal-regional-future-digital",
    "title": "地域未来交付金（デジタル実装型）",
    "recipient": "地方公共団体。筑紫5市側の事業・申請として検討する。民間製品販売会社が自治体分の交付金を直接受給する制度ではない。",
    "benefitText": "デジタル実装を支援する制度概要を確認。現行の募集回・補助率・経費条件は未確認のため、試算に算入しません。",
    "conditions": [
      "現行名は地域未来交付金。旧『新しい地方経済・生活環境創生交付金』『デジタル田園都市国家構想交付金』の過年度条件をそのまま適用しない。",
      "各市の事業計画、住民便益、対象サービス、共同実施主体・費用負担、調達手続を整理し、当該募集の要領と照合する。",
      "単なる庁内のBPO置換・人員費削減だけで対象になるとは確認していない。採択・交付決定とベンダー選定は別手続。"
    ],
    "exclusions": [
      "防災型の要綱をデジタル実装型に適用しない。",
      "国全体の予算額を1件の補助上限と混同しない。"
    ],
    "applicationTiming": "現行の制度概要を確認。2026年9月19日時点で新規申請可能な募集回・締切は未確認。福岡県および国の所管窓口へ募集状況を確認する。",
    "combinationNote": "他の国費と同じ経費を二重計上しない。共同調達総額、各市の負担額、国費対象額を別々に管理し、併用可否は現行交付要綱で確認。",
    "sourceUrls": [
      "https://www.bousai.go.jp/taisaku/koufukin/pdf/02_miraigaiyou.pdf",
      "https://www.bousai.go.jp/taisaku/koufukin/index.html"
    ],
    "checkedAt": "2026-09-19",
    "category": "regional",
    "actors": [
      "municipality"
    ],
    "shortAmount": "補助率・上限は最新要領で確認",
    "status": "unverified",
    "openStatusText": "募集状況・算定条件を要確認",
    "matchNote": "5市側の事業計画・住民便益・対象経費を整理する財源候補。民間受託者の補助金収入とは分けます。",
    "cashless": false,
    "roles": [
      "partner"
    ],
    "level": "national",
    "evidence": "制度概要のみ確認・現行の詳細要領未確認",
    "proposal": "自治体が住民向けサービスを整備する案件の財源候補。会社の直接受給ではありません。"
  },
  {
    "id": "fukuoka-poc-full-support-2026",
    "title": "福岡市 実証実験フルサポート事業（mirai@）",
    "recipient": "福岡市内でAI・IoT等による社会課題解決の実証を自ら実施できる事業者・研究機関等。事業者の所在地は不問。",
    "benefitText": "実証フィールド提供・斡旋、地元調整、行政データ、モニター募集、広報、規制緩和検討を支援。現行要項では実証費用は採択事業者の負担。",
    "conditions": [
      "AI・IoT等で社会課題解決や市民生活の質向上に資する実証を福岡市内で実施。",
      "社会性、先進性、安全性、実証可能性、市場性、事業化可能性等を審査。",
      "採択後は市と調整・協定締結。実証運営、費用、結果検証、データ提供、報告は事業者側が担う。"
    ],
    "exclusions": [
      "実施能力のない事業者、事業者でない個人、市税滞納等は応募対象外。",
      "現行2026年4月要項には費用補助の記載はなく、実証費用は事業者負担。過年度の20万円助成情報を現行制度に転記しない。",
      "通常BPO業務の運営費を現金補填する仕組みではない。"
    ],
    "applicationTiming": "通年募集。審査時期は応募状況に応じ調整、採択後適宜開始。",
    "combinationNote": "現物・調整支援として扱い、金銭補助の合計額に加算しない。他の研究費を使う場合は各制度の対象経費・重複規定を別途確認。",
    "sourceUrls": [
      "https://mirai.city.fukuoka.lg.jp/about/",
      "https://mirai.city.fukuoka.lg.jp/manager/wp-content/uploads/2026/04/fullsupport_bosyuuyoukou1.pdf",
      "https://mirai.city.fukuoka.lg.jp/manager/wp-content/uploads/2026/04/pocfullsupport_flyer_2604.pdf",
      "https://mirai.city.fukuoka.lg.jp/project/2224/"
    ],
    "checkedAt": "2026-09-20",
    "category": "regional",
    "actors": [
      "business",
      "university"
    ],
    "shortAmount": "実証フィールド等の支援・現金給付なし",
    "status": "open",
    "openStatusText": "通年募集。2026年度採択実績も公式サイトで確認。",
    "matchNote": "福岡市内の実証が条件。太宰府市など筑紫5市だけで行う実証は、そのまま対象にできません。",
    "cashless": true,
    "roles": [
      "self",
      "partner"
    ],
    "level": "local",
    "evidence": "公式資料を確認",
    "proposal": "福岡市内の実証フィールド、関係者調整、広報を活用する候補。現金補助とは別に扱います。"
  },
  {
    "id": "it-multiple",
    "title": "デジタル化・AI導入補助金2026｜複数者連携枠",
    "category": "regional",
    "roles": [
      "customer",
      "partner"
    ],
    "actors": [
      "university",
      "business"
    ],
    "shortAmount": "グループ基盤・分析3,000万円＋その他最大200万円",
    "benefitText": "基盤導入と分析の合計上限3,000万円。その他は所定算式と200万円の小さい方。構成員別上限・費目別補助率あり。",
    "conditions": [
      "商工団体・まちづくり会社・複数中小企業のコンソーシアム等が対象。",
      "サプライチェーンや商業集積地の面的DXとして計画する。"
    ],
    "proposal": "複数顧客の共同導入・データ活用を検討。会社1社の受給枠とは分ける。",
    "recipient": "商工団体等・要件を満たすコンソーシアム",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "この枠の申請フロー・公募回を公式日程で確認。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://it-shien.smrj.go.jp/applicant/subsidy/digitalbased_multiple_companies/"
    ],
    "checkedAt": "2026-09-20",
    "status": "current",
    "openStatusText": "この枠の申請フロー・公募回を公式日程で確認。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false
  },
  {
    "id": "jst-coi-next-future-phase1-2026",
    "title": "JST 共創の場形成支援プログラム（COI-NEXT）未来共創分野・フェーズ1（令和8年度）",
    "recipient": "地域大学等が代表の産学官チーム。JST委託研究費の支払先は原則として大学等に該当する研究機関。一般の民間企業の参画費用は原則自己負担。",
    "benefitText": "地域課題の分析、研究構想の精緻化、小規模研究開発、産学官共創拠点の形成に3,700万円/年度（間接経費含む）、2年度の委託研究費。企業1社が直接受け取る補助金額ではない。",
    "conditions": [
      "地域大学等を代表機関とし、1以上の幹事自治体と1以上の民間企業を含む3機関以上で連名提案。",
      "PLは開始時に代表機関在籍、開始年度4月1日時点で45歳未満、博士号取得済みの研究者。",
      "地域課題を独創的なキーサイエンスで解決し、世界水準の研究成果と持続的拠点を目指す。"
    ],
    "exclusions": [
      "医療分野のみに限定される研究開発は対象外。",
      "一般企業が単独代表で申請し、自社の通常BPO運営費をそのまま得る制度ではない。大学等以外の参画機関の費用は原則自己負担。",
      "2026年度は未来共創フェーズ1のみ。共創・地域共創・政策重点分野の新規公募はない。",
      "将来フェーズ2は最大2億円/年度・最長5年度の予定だが、昇格審査と将来政府予算が前提。今回募集額や確定受給額には含めない。"
    ],
    "applicationTiming": "2026-04-17〜2026-06-18 12:00。結果通知は10月以降、開始は11月以降の予定。",
    "combinationNote": "同一研究課題・費途への不合理な重複は不採択・取消し・減額の対象。別制度との単純合算はしない。",
    "sourceUrls": [
      "https://www.jst.go.jp/pf/platform/koubo.html",
      "https://www.jst.go.jp/pf/platform/file/2026/2026_kyousounoba_youryou.pdf",
      "https://www.jst.go.jp/pf/platform/file/2026/2026_kyousounoba_faq.pdf"
    ],
    "checkedAt": "2026-09-20",
    "category": "research",
    "actors": [
      "university"
    ],
    "shortAmount": "委託研究費3,700万円／年度・2年度",
    "status": "closed",
    "openStatusText": "2026年度公募終了。次回公募未確認。",
    "matchNote": "大学等代表の産学官拠点向け。企業の参加費用は原則自己負担で、企業1社の収入に算入しません。",
    "cashless": false,
    "roles": [
      "partner"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "地域大学の若手研究者を中心とするチームへの参画を検討。2026年度の新規公募は終了。"
  },
  {
    "id": "jst-astep-joint",
    "title": "JST A-STEP｜産学共同ステージⅠ・Ⅱ（2026年度終了）",
    "category": "research",
    "roles": [
      "partner"
    ],
    "actors": [
      "university",
      "business"
    ],
    "shortAmount": "Ⅰ：年1,500万円／Ⅱ：年2,500万円上限",
    "benefitText": "Ⅰは大学等のシーズ育成、Ⅱは産学共同のマッチングファンド。初年度は期間に応じた上限。",
    "conditions": [
      "大学等の技術シーズが必要。医療分野は対象外。"
    ],
    "proposal": "大学とAI実装に関する研究テーマを育て、次回募集を確認。",
    "recipient": "大学等の研究者・企業等",
    "exclusions": [
      "通常業務・別事業の費用を混在させない。採択・支給は個別審査。"
    ],
    "applicationTiming": "2026年度は4月21日11:59に終了。次回日程未確認。",
    "combinationNote": "同じ経費・賃金・期間の重複算入をしない。別経費でも併用制限を各窓口で確認し、確認前は合算しない。",
    "sourceUrls": [
      "https://www.jst.go.jp/a-step/koubo/"
    ],
    "checkedAt": "2026-09-20",
    "status": "closed",
    "openStatusText": "2026年度は4月21日11:59に終了。次回日程未確認。",
    "evidence": "公式資料を確認",
    "level": "national",
    "cashless": false,
    "kind": "research"
  },
  {
    "id": "municipal-frontyard-model-reference",
    "title": "自治体フロントヤード改革モデルプロジェクト（過年度モデル・次回公募確認用）",
    "recipient": "モデル団体として選定された地方公共団体。ベンダーへの無条件の補助金ではない。",
    "benefitText": "住民接点の改善と業務効率化を伴走支援するモデル事業。周辺自治体との連携やバックヤード集約の先行事例を、筑紫5市の共同実施設計に参照できる。",
    "conditions": [
      "デジタル庁の2026年7月14日更新ページで、総務省の事業と令和5・6年度の選定団体を確認。",
      "窓口・オンライン等の住民接点とバックヤード改善を一体で設計する参考候補。"
    ],
    "exclusions": [
      "確認した令和5・6年度モデル枠を、現在申請できる公募として表示しない。",
      "今回、2026年度の新規募集・補助率・上限は確認できていない。公務員人件費や通常BPO委託費の全額助成を仮定しない。",
      "事例の導入事業費をベンダーの補助金受給額として扱わない。"
    ],
    "applicationTiming": "確認できたのは令和5・6年度の採択済モデル。次回募集の有無・期間は総務省自治行政局市町村課行政経営支援室へ確認。",
    "combinationNote": "現在の補助金概算には加算しない。新規公募が出た場合に経費区分と他の国費との重複を確認する。",
    "sourceUrls": [
      "https://www.digital.go.jp/resources/govdashboard/front-yard-reform",
      "https://www.soumu.go.jp/iken/fymodelr6.html",
      "https://www.soumu.go.jp/iken/fymodelr5.html"
    ],
    "checkedAt": "2026-09-19",
    "category": "regional",
    "actors": [
      "municipality"
    ],
    "shortAmount": "過年度モデル事業・金額算入なし",
    "status": "closed",
    "openStatusText": "過年度事例／次回公募は未確認",
    "matchNote": "バックヤード集約や自治体連携の先行事例。現在申請できる補助枠としては扱いません。",
    "cashless": false,
    "roles": [
      "partner"
    ],
    "level": "national",
    "evidence": "公式資料を確認",
    "proposal": "自社・顧客の計画と対象経費の照合が必要です。"
  }
];
