export const EVENT_DATE = {
  DAY1: "2025-03-23",
  DAY2: "2025-03-24",
} as const;
export type EventDate = keyof typeof EVENT_DATE;

export const TRACK = {
  TRACK1: {
    name: "トグルルーム",
    tag: "#tskaigi_toggle",
  },
  TRACK2: {
    name: "アセンドトラック",
    tag: "#tskaigi_ascend",
  },
  TRACK3: {
    name: "レバレジーズトラック",
    tag: "#tskaigi_leverages",
  },
} as const;
export type Track = keyof typeof TRACK;

export const TALK_TYPE = {
  SESSION: {
    name: "セッション",
    color: "#0C7EDC",
  },
  INVITATION: {
    name: "招待講演",
    color: "#0CA90E",
  },
  ORGANIZER: {
    name: "主催者講演",
    color: "#0CA90E",
  },
  LT: {
    name: "LT",
    color: "#c3620f",
  },
  SPONSOR_LT: {
    name: "スポンサーLT",
    color: "#E53D84",
  },
  EVENT: {
    name: "現地参加者向け企画",
    color: "#E02527",
  },
};
export type TalkType = keyof typeof TALK_TYPE;

export type Speaker = {
  name: string;
  username?: string;
  profileImagePath?: string;
  bio?: string;
  xId?: string;
  githubId?: string;
  additionalLink?: string;
  affiliation?: string;
  position?: string;
  company?: string;
};

export type Talk = {
  id: string;
  eventDate: EventDate;
  track: Track;
  talkType: TalkType;
  title: string;
  overview: string;
  time: string;
  speaker: Speaker;
};

export const talkList: Talk[] = [
  {
    id: "1",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "静的解析で実現したいことから逆算して学ぶTypeScript Compiler",
    overview:
      "静的解析には、コードベースから情報を抽出したり、自動的に編集を行ったり、多くの活用方法があります。ESTreeに関連したライブラリをベースに静的解析でなにかを実現することと比べて、TypeScript Compilerを活用することの難易度は高いです。これはプラグインの充実度や関連する資料の量などエコシステムとしての広がりの差に原因があると考えられます。\n\n難易度が高いTypeScript Compilerですが、プロジェクトの型情報を活用できるだけでなく、提供されるAPIの型が強力であることや依存関係が少なくなることなど、ツールを作るベースとして採用する複数のメリットがあります。\n\nこの発表では、「静的解析で何を実現したいか」を軸にそこから逆算して必要になるTypeScript Compilerの知識を紹介します。TypeScript Compilerを使ってなにかを作るきっかけを提供できることを願っています。",
    time: "13:40 〜 14:10",
    speaker: {
      name: "Kazushi Konosu",
      username: "kazushikonosu",
      profileImagePath: "kazushikonosu.jpg",
      bio: "2021年LINE株式会社に新卒入社。現在は「LINEスキマニ」のフロントエンド領域を担うチームでエンジニアリングマネージャー・テックリードを担当。プレイングマネージャーとして、「LINEスキマニ」のWebアプリ・ネイティブアプリ開発に従事。",
      xId: "kazushikonosu",
      githubId: "kazushisan",
      additionalLink: undefined,
      affiliation: "LINEヤフー株式会社",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "2",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "checker.tsに対して真剣に向き合う",
    overview: `checker.ts は TypeScript のコードベースの中でも特に行数が多いファイルとして知られていますが、その中身まで読み込んだことがある方は多くないかもしれません。

本セッションでは、tsc コマンドを実行した際に checker.ts 内でどのような処理が行われているのかを追いながら、TypeScript の型検査の仕組みと checker.ts の役割について解説します。

また、TypeScript 7.0 で導入が予定されている typescript-go における実装とも可能な限り比較し、今後の変化についても触れていきます。`,
    time: "11:50 〜 12:20",
    speaker: {
      name: "Kaoru",
      username: "kkk4oru",
      profileImagePath: "kkk4oru.jpg",
      bio: "2015年から様々な会社でフロントエンジニアとして開発経験を経て、2022年にAVITA株式会社に入社。 AVITA株式会社では、エンジニア採用やチームが成長できることを日々模索しています。",
      xId: "kkk4oru",
      githubId: "kkkaoru",
      additionalLink: undefined,
      affiliation: "AVITA株式会社",
      position: "VPoE, フロントエンドエンジニア",
    },
  },
  {
    id: "3",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "SignalとObservable―新たなデータモデルを解きほぐす",
    overview:
      "近年Webフロントエンドの文脈で台頭しつつある Signal（シグナル）という概念をご存知ですか？ECMAScriptへの標準化の提案も出ているほどですが、実はSignalの歴史は長く、その文脈は数十年前から存在します。それがなぜ最近になって注目されているのでしょうか。また、同じくWeb標準には Observable という概念も組み込まれつつあります。おなじみの Promise との間にどのような関係があるのでしょうか。これらをWebフロントエンド開発におけるReactivity（リアクティビティ）をキーワードにしながら考えていきます。題材として具体的なライブラリ・フレームワークの内容にも触れますが、予備知識は必要ありません。\n\n## 対象\n- GUIプログラミングの話題が好きな人\n- Webフロントエンドの話題が好きな人\n\n## アウトライン\n- Signalとは何か\n- ReactivityとSignal\n- Observableとは何か\n- ObservableとPromise\n- ObservableとSignal",
    time: "13:40 〜 14:10",
    speaker: {
      name: "lacolaco",
      username: "laco2net",
      profileImagePath: "laco2net.jpg",
      bio: "Google Developers Expert for Angular、Angular日本ユーザー会の代表として、Angularコミュニティへのコントリビューションや翻訳、登壇、イベント主催などの活動をしています。ポッドキャスト「リファクタリングとともに生きるラジオ」でも活動中。",
      xId: "laco2net",
      githubId: "lacolaco",
      additionalLink: "https://lacolaco.net",
      affiliation: "Classi株式会社",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "4",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title:
      "AWS LambdaをTypeScriptで動かして分かった、Node.jsのTypeScriptサポートの利点と課題",
    overview:
      "Node.jsがv23.6.0からTypeScriptを標準でサポートするようになり、おそらくv24.xにて正式展開されることと思います。\nまた現在、クラウド（特にサーバーレス）でAWS LambdaやAzure FunctionsなどのFaaS(Function as a Service)を使用するケースも多いと思いますし、FaaSにTypeScriptを採用することでトランスパイルやモジュールシステム(ESM/CJS)の問題から解放されることが想定されますが、本当にTypeScriptを直接実行することで何の問題もなくなるのでしょうか？\n\nそこで本セッションでは、AWS Lambdaでカスタムランタイムを使いTypeScriptを直接実行した経験を元に、Node.jsでTypeScriptを直接実行することの利点、及び課題や問題点について紹介したいと思います。また実際にFaasにTypeScriptを採用した場合の問題点についても、私の実体験を元にAWS Lambdaを例に説明したいと思います。",
    time: "15:50 〜 16:20",
    speaker: {
      name: "Masaki Suzuki",
      username: "makky12",
      profileImagePath: "makky12.jpg",
      bio: "KDDIアジャイル開発センター株式会社 / 名古屋オフィス所属。\n2019年に業務でAWSに携わったことがきっかけでクラウドの魅力にハマり、以来ずっとクラウドエンジニア（バックエンド/アーキテクト）として活動。\n特にサーバーレスやInfrastructure as Code(IaC)が大好きで、AWS LambdaやAWS CDKを用いたサーバーレスアプリケーションの設計開発・IaCでのインフラ構築・CI/CD環境構築などを得意とし、それらの開発言語としてTypeScriptやNode.jsを好んで使用している。\nその他、JAWS-UGやServerlessなどのAWS関連コミュニティにおいて、登壇・参加などのコミュニティへの貢献活動を積極的に行っており、2023年よりAWS Community Builder(Serverless)に認定。",
      xId: "makky12",
      githubId: "smt7174",
      additionalLink: "https://makky12.hatenablog.com/",
      affiliation: "KDDIアジャイル開発センター株式会社",
      position: "バックエンドエンジニア/クラウドアーキテクト",
    },
  },
  {
    id: "5",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "Valibot Schema Driven UI - ノーコードWebサイトビルダーを実装してみよう！",
    overview:
      "近年 Bubble や Webflow、日本だと STUDIO などのノーコードプラットフォームが注目を集めています。これらのツールは、プログラミングの知識がなくてもユーザーが思い思いの UI を構築できる機能を提供し、アプリケーション開発の民主化に貢献しています。\n\nこのようなノーコードでユーザーが自由に UI を組み立てる仕組みはどのように構築されているのでしょうか。一見複雑に見えますが、基本的な考え方を理解すれば独自のエディタを構築することは難しくありません。アーキテクチャの中核となるのは、動的な UI コンポーネントを表現するスキーマ定義と、それを実際の UI 要素に変換する仕組みです。\n\n本発表では、スキーマバリデーションライブラリであるValibotとReactを利用し、型の力を最大限に活用して動的なUIを作る仕組みを紹介します。",
    time: "16:30 〜 17:00",
    speaker: {
      name: "宮城広隆(@MH4GF)",
      username: "MH4GF",
      profileImagePath: "MH4GF.jpg",
      bio: "株式会社タイミーの創業期からソフトウェアエンジニアとして関わった後、フリーランスとして複数企業での開発を経験。\n2023年2月にROUTE06に入社し、Frontend Platformチームのテックリードとして大規模BtoB SaaSの設計推進を担当。\n現在はOSSのデータベーススキーマ可視化ツール Liam ERD のプロダクトマネージャーを担当しています。",
      xId: "MH4GF",
      githubId: "mh4gf",
      additionalLink: "https://mh4gf.dev",
      affiliation: "株式会社ROUTE06 Liam事業部",
      position: "Tech Lead / Product Manager",
    },
  },
  {
    id: "6",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "高度な型付け、どう教える？",
    overview:
      "TypeScript の高度な型付けを導入すると型システムの恩恵を受けられる一方で、複雑さが増して可読性や学習コストの課題が生じます。チームの全員が型の専門家でなくとも最低限のレビューやメンテナンスができることは、プロジェクトの健全な運用に不可欠です。本セッションでは高度な型を導入する際に直面した課題や、それをチームにどう伝え理解を促すかについて発表者の試行錯誤を交えて紹介します。高度な型付けの学習ハードルをどうすれば下げられるか、どんな説明や工夫が有効なのかを考察し実践的な知見を共有します。",
    time: "11:50 〜 12:20",
    speaker: {
      name: "progfay",
      username: "progfay",
      profileImagePath: "progfay.jpg",
      bio: "型パズルは独学で習得したので我流です。",
      xId: "progfay",
      githubId: "progfay",
      additionalLink: undefined,
      affiliation: "",
      position: "Web Developer",
    },
  },
  {
    id: "7",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "スキーマと型で拓く Full-Stack TypeScript",
    overview:
      "Full-Stack TypeScript はフロントエンド・バックエンドを統一し、素早いプロダクト立ち上げを可能にします。しかし実際には、プロダクトが複雑化するにつれて適切な境界設計が難しくなり、開発スピードや拡張性が失われるケースも少なくありません。このトレードオフを乗り越ていくにはどのような設計戦略が必要でしょうか？\n\nSANUでは、IoT連携による鍵管理や多様な課金モデルを含む複雑なサービスを、短期間でノーコードから内製化しました。私たちが選んだのは、「スキーマ」と「型」を中心に据えた戦略的な境界設計です。\n\nGraphQL スキーマを軸にフロントエンドとバックエンドを疎結合化しつつ、コード生成によって最小限のオーバーヘッドで開発できるアーキテクチャを実現。更に Full-Stack TS ならではの単一プロセスによる実行や In-Process GraphQL を活用することで、運用のオーバーヘッドも最小限に抑えられることが分かりました。\n\n本発表では、2010年代の Web サービス開発の知見を踏まえて、スキーマ駆動の Full-Stack TypeScript で速さと持続的スケールを実現する方法を紹介します。",
    time: "11:50 〜 12:20",
    speaker: {
      name: "Sohei Takeno",
      username: "Altech_2015",
      profileImagePath: "Altech_2015.png",
      bio: "2015年からWantedlyに約8年間在籍し、プロダクト開発から技術基盤、組織マネジメントまで幅広い役割を担う。同社初の全社アーキテクトとして、複数プロダクトを横断した技術課題の解決を主導。\n\n2023年、SANUに1人目のエンジニアとして参画し、ノーコードで3年間開発されてきた150画面・1500カラム規模のシステムを、TypeScript・GraphQLを用いて約1年半でフルリプレイス、技術およびチームの内製化を実現した。現在は日本中の自然にスマホ一つでアクセスできるプロダクトを開発中。",
      xId: "Altech_2015",
      githubId: "Altech",
      additionalLink: undefined,
      affiliation: "SANU",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "8",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TypeScriptとは何であって何でなく、誰のもので、どこへ向かうのか",
    overview:
      "TypeScriptは特殊なプログラミング言語です。TypeScriptコードをそのまま解釈して実行できる主要な処理系は存在せず、実際には高級な動的型付け言語であるJavaScriptへコンパイルしてから実行されています。\n\nこのコンパイル処理は、型に関する構文を取り除くという単純な仕組みであり、TypeScript CompilerやBabel、SWC、esbuild、oxcなど、さまざまなコンパイラ実装が存在します。一方、実際の型チェックは複雑で、現状ではMicrosoftが開発するTypeScript Compiler以外には事実上まともに対応できる実装はありません。\n\nこうした状況の中、Node.jsがTypeScriptを公式にサポートするようになったり、JavaScriptの標準化委員会であるTC39でType Annotationが提案されたり、Biomeなどのリンターがtype-aware lintingの実現に取り組むなど、TypeScriptにまつわる議論が活発化しています。\n\n本セッションでは、こうしたTypeScriptの言語特性を踏まえながらエコシステムの現状を整理し、今後TypeScriptとその周辺がどのように発展し、それが私たちTypeScriptプログラマーにどのような影響を与えるのかを考察します。",
    time: "16:30 〜 17:00",
    speaker: {
      name: "Sosuke Suzuki",
      username: "__sosukesuzuki",
      profileImagePath: "__sosukesuzuki.jpg",
      bio: "Ubie株式会社のソフトウェアエンジニアとして、症状検索エンジン「ユビー」の開発に尽力している。また、JavaScriptのコードフォーマッタであるPrettierのメンテナ、ブラウザエンジンであるWebKitのReviewerとしても活動中。",
      xId: "__sosukesuzuki",
      githubId: "sosukesuzuki",
      additionalLink: undefined,
      affiliation: "ユビー株式会社",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "9",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "堅牢なデザインシステムをつくるためのTypeScript活用",
    overview:
      "本セッションでは、TypeScriptを活用してFigmaのデザインデータ資産を効率的にコードへ反映させ、デザインシステムを堅牢に構築・運営する手法を紹介します。\n\nFigma APIやStyle DictionaryなどのツールとTypeScriptを組み合わせて活用することでデザイントークンやコンポーネントを利用する際の型安全性を確保でき、これによりデザインシステムのルールを自然なかたちで強制することができます。\n\nさらに生成AIドキュメント自動生成や、Figma APIを利用したコンポーネント情報の自動取り込みなど、実際の開発現場で役立つ具体的な事例を交えて解説します。\n\nこの題材を選んだ理由は、デザインと実装の橋渡しをよりシンプルかつ堅牢に行うことで、チーム全体の生産性向上に直結するソリューションを提供できると確信しているからです。\n\n参加者には、TypeScriptの静的型チェックを活かした実践的な技術と運用ノウハウを体感していただき、より一層のUI品質向上を目指すヒントを得ていただきたいと考えています。",
    time: "14:20 〜 14:50",
    speaker: {
      name: "takanorip",
      username: "takanorip",
      profileImagePath: "takanorip.jpg",
      bio: "株式会社カンムのソフトウェアエンジニア兼デザイナー。UIをエンジニアリングするのが好き。デジタルを脱出したい。",
      xId: "takanoripe",
      githubId: "takanorip",
      additionalLink: "https://takanorip.com",
      affiliation: "株式会社カンム",
      position: "ソフトウェアエンジニア/デザイナー",
    },
  },
  {
    id: "10",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Rust製JavaScript/TypeScript Linterにおけるプラグイン実装の裏側",
    overview:
      "本トークでは、Rust製JavaScript/TypeScript Linterにおけるプラグイン実装について話します。\n\nESLintはそのプラグインシステムによって、さまざまなLintルールが生まれ、コミュニティを拡大させました。一方ここ数年でRust製JS/TS Linterの採用は増えつつあります。これらのツールにおいてもCustom Lint Ruleを書くためのプラグインシステムが実装されつつあります。\nBiomeはGritQLによるプラグイン機能をv2.0でリリース予定です。deno lintではv2.2.0以上で実験的機能としてJS/TSによるプラグイン機能がリリースされています。oxcもまたプラグイン実装を行おうとしています。\n\nプラグインシステム実装の裏側に着目し、整理・共有・理解することを目指します。",
    time: "17:10 〜 17:40",
    speaker: {
      name: "unvalley",
      username: "unvalley_",
      profileImagePath: "unvalley_.jpg",
      bio: "A software engineer who writes Rust and TypeScript, biome core member.",
      xId: "unvalley_",
      githubId: "unvalley",
      additionalLink: "https://unvalley.me",
      affiliation: undefined,
      position: "バックエンドエンジニア",
    },
  },
  {
    id: "11",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TypeScriptとReactで、WAI-ARIAの属性を正しく利用する",
    overview:
      "WAI-ARIAは、スクリーンリーダーなどの支援技術とWebコンテンツを連携させるための仕様です。複雑なWebアプリケーションのアクセシビリティを高めるためには、時としてWAI-ARIAの提供する role 属性や aria-* 属性を使わなければなりません。WAI-ARIAの仕様では、利用できる属性の組み合わせに制約がありますが、現在のTypeScript (tsx) + React の環境では、残念ながらこの制約に対するサポートは不十分です。このセッションではTypeScriptによるWAI-ARIA属性へのサポートの現状を紹介し、型安全性によってWAI-ARIAを正しく利用できるようにするための具体的な実装について解説します",
    time: "15:50 〜 16:20",
    speaker: {
      name: "ymrl",
      username: "ymrl",
      profileImagePath: "ymrl.png",
      bio: "「Webアプリケーションアクセシビリティ」共著者。UIデザイナーとしてTypeScriptを書いています。",
      xId: "ymrl",
      githubId: "ymrl",
      additionalLink: undefined,
      affiliation: "フリー株式会社",
      position: "UIデザイナー/エンジニア",
    },
  },
  {
    id: "12",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "TypeScriptエンジニアがAndroid開発の世界に飛び込んだ話",
    overview:
      "Webフロントエンド開発とAndroidネイティブ開発は一見まったく異なる世界に思えますが、TypeScriptとKotlin、Web FrontendにとAndroid Appには驚くほど多くの共通点があります。本セッションでは、バックエンドおよびフロントエンド開発を15年経験し複数の言語環境を経験してきたエンジニアが、Androidアプリ開発に挑戦した経験を共有します。複数の言語パラダイムを渡り歩いてきた視点から、両言語の類似パターン、設計思想の共通点、そして相違点から学んだ貴重な教訓を紹介し、Web Frontend領域のエンジニアにAndroidアプリ開発の敷居を下げられるようなお話をします。",
    time: "15:50 〜 16:20",
    speaker: {
      name: "yui_tang",
      username: "yui_tang",
      profileImagePath: "yui_tang.jpg",
      bio: "東京生まれ。新卒で営業職について数年後、独学でWebプログラミングを学び転身。2014年よりメルカリでソフトウェアエンジニア・技術ブランディング等の職に就く。2024年5月にnewmo株式会社へ入社。猫・メタル・筋トレ・VTuberが好き。",
      xId: "yui_tang",
      githubId: "YUISAKAMOTO",
      additionalLink: undefined,
      affiliation: "newmo株式会社",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "13",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title:
      "fast-checkとneverthrowのPBT+Result型で堅牢なビジネスロジックを実現する",
    overview:
      "## トークの主題\n\n本セッションでは、サーバーサイドTypeScript開発におけるビジネスロジックの堅牢性向上を目指し、fast-checkによるプロパティベーステスト(PBT)と、neverthrowのResult型を組み合わせた手法について解説いたします。従来のテストに比べて幅広いパターンをテストしつつ、Result型で確実にエラー処理を強制する方法をコードを交えてお話しします。\n\n## トークの背景\n\nWeb開発において、ビジネスロジックのテストやエラーハンドリングは、信頼性を高める上で重要な要素です。\n元々バックエンドの開発言語としてPythonを採用していましたが、TypeScriptへの移行を検討し、TypeScriptの型システムを活用して、ビジネスロジックの品質保証を強化する方法を模索しています。\nTypescriptの柔軟かつ強力な型システムはビジネスロジックの信頼性を高めるための有力なツールとなり、動的言語であるRubyやPythonに比べて、型レベルでの品質保証が可能となります。\n今回はTypescriptによるビジネスロジックの品質保証をさらに強力にするのPropetry-based Testing(PBT)とResult型を組み合わせた手法を紹介します。\nfast-checkを用いたPBTは、多種多様な入力ケースを自動生成することで、隠れた不具合を網羅的に検出する効果が期待されます。一方、neverthrowのResult型を導入することで、エラー処理を明確にし、例外処理の乱雑さを解消できます。\n\n## トーク内容\n\n- fast-checkとPBT\n    - PBTと従来のテスト手法との比較\n    - fast-checkの概要と基本的な使用方法\n- neverthorwとResult型\n    - Result型によるRailway Oriented Programmingの概念\n    - neverthrowのResult型の活用\n    - エラー分岐や例外処理を明確にするための実装パターン\n- fast-checkとneverthrowを組み合わせた具体的なコード例\n- 今後の展望とさらなる応用可能性の検討",
    time: "16:30 〜 17:00",
    speaker: {
      name: "上田慶祐",
      username: "kueda",
      profileImagePath: "kueda.jpg",
      bio: "学生時代の個人開発者から新卒でPwCコンサルティングを経て現職\nコンサルティングのソフトウェアとAIによる「産業化」を目指し、コンサルもわかるエンジニアとして複数プロダクトの開発をリード\nフロントエンドからバックエンド、インフラまで全方位で対応。TypescriptはフロントエンドのNuxt.js、バックエンドのNest.js、インフラのCDKと手広く活用中。",
      xId: undefined,
      githubId: undefined,
      additionalLink: "https://zenn.dev/kueda",
      affiliation: "グロービング株式会社",
      position: "クラウドプロダクト事業部CTO",
    },
  },
  {
    id: "14",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "AI Coding Agent Enablement in TypeScript",
    overview: `私が所属するユビーでは、Full-Stack TypeScriptのコードベースにおいて、CursorやDevinをはじめとするCoding Agentを活用した開発をいち早く実践してきました。その中で、人間のエンジニアと同様にCoding Agentをイネーブルメントする重要性が見えてきました。
本発表では、Full-Stack TypeScript環境でCoding Agentを最大限に活用するためのイネーブルメント戦略をお伝えします。

まず、エンジニア（人）による開発とCoding Agentによる開発を比較しながら、Coding Agentの特性とイネーブルメントの重要性を理解します。

次に、具体的なイネーブルメント戦略をご紹介します。実感できるようにデモを交える予定です（AIのデモはドキドキしますね！）。例えば次のようなテーマを含みます。

- AIが解釈しやすいアーキテクチャ
- 静的解析・自動テストによるAIの自走
- デザインシステムによる「コーディング」以外の支援

最後に、TypeScriptエコシステムとCoding Agentの親和性、およびエコシステムの進化を見据えた展望をお話します。

本発表を通じて、皆さんがよりCoding Agentを使いこなす手助けになればと思うと同時に、TypeScriptにフォーカスしたCoding Agent活用の議論がより盛り上がるきっかけになることを期待します。`,
    time: "15:00 〜 15:30",
    speaker: {
      name: "Yuku Kotani",
      username: "yukukotani",
      profileImagePath: "yukukotani.jpg",
      bio: "Ubie株式会社で、技術戦略や開発組織戦略の立案・執行をリードしています。",
      xId: "yukukotani",
      githubId: "yukukotani",
      additionalLink: "https://yuku.dev",
      affiliation: "Ubie株式会社",
      position: "VP of Technology",
    },
  },
  {
    id: "15",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Language Serverと喋ろう",
    overview:
      "普段開発で何気なく使っている「コード補完」「Go to Definition」「変数リネーム」のような機能を、エディタ操作以外で呼び出したいと思ったことはありませんか。このような機能は、コア機能を提供する「Language Server」とエディタ拡張がやりとりすることで実現されている言語が多いです。Language Server Protocol (LSP)はそのプロトコルであり、様々な言語機能について、言語やエディタに依存しない汎用的なインターフェースが規定されています。本来LSPは、エディタごと・言語ごとに言語サポートを実装する労力を省くためのものですが、エディタ外で前述の機能をprogrammaticに呼び出すことにも利用できます。\n\n私はアプリケーションの挙動やコードを精査して脆弱性を探す業務をサポートするツールとして、セキュリティ的に怪しいコードに対し、その呼び出し元のチェーンを洗い出すことで影響範囲を調べるツールを開発しています。\nTSに特化した処理をするならCompiler APIも良い選択肢ですが、それと違って様々な言語に適用できる点でLSPに注目しています。\n\nセッションでは以下について話す予定です。\n- LSPでどんなことができるか (どのようなメソッドがあるか)\n- LSPを使った自作ツールの紹介\n- Language Serverとやりとりするサンプルコードと仕組みの解説\n- Compiler APIとLSPの比較",
    time: "14:20 〜 14:50",
    speaker: {
      name: "ぴざきゃっと",
      username: "pizzacat83b",
      profileImagePath: "pizzacat83b.png",
      bio: "型やlinterに魅せられ、バグを仕組みで防ぐ技術を追求しているうちに、いつの間にかセキュリティの世界にいた。\nセキュリティエンジニアとしての経験を経て、現在はソフトウェアエンジニアとして、セキュリティ診断AIエージェント「Takumi」やプロダクトセキュリティプラットフォーム「Shisho Cloud byGMO」の開発を担当。\n趣味はRustでブラウザを自作すること。",
      xId: "pizzacat83b",
      githubId: "pizzacat83",
      additionalLink: "https://pizzacat83.com",
      affiliation: "GMO Flatt Security株式会社",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "16",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "TypeScriptで実践するクリーンアーキテクチャ ― WebからもCLIからも使えるアプリ設計",
    overview:
      "本セッションでは、TypeScriptの型安全性と柔軟なモジュール設計を活かし、Web（Next.js）とCLI（inquirer.js）の両方から操作できるスクラム管理アプリをサンプルとした実践例を紹介します。\n\nTypeScriptを選んだ理由は、強力な型システムとバックエンドとフロントエンドのどちらでも一貫して使えるため、フレームワーク非依存の設計と相性が良いからです。\n\nクリーンアーキテクチャは「詳細に依存せず抽象に依存する」ことを基本理念とする設計方針です。TypeScriptを用いて重要なビジネスロジックを分離することを紹介します。\n\n・フレームワークに依存しないアプリケーションの構築方法\n・TypeScriptの型システムを活かしたドメインロジックの実装\n・Next.jsとCLIの両方で動作するそれぞれのPresentation層の設計\n\n本セッションを通じて、フロントエンドとバックエンドの関係を再考し、TypeScriptで変更に強い柔軟なアプリ設計を実現する方法を紹介します。\n\n本発表は以下の記事に即した内容です。\n[「TypeScriptでクリーンアーキテクチャを実践する - WebでもCLIでも使えるアプリケーションの作り方」](https://zenn.dev/panda_program/articles/clean-architecture-application)",
    time: "13:40 〜 14:10",
    speaker: {
      name: "プログラミングをするパンダ",
      // TODO: 確認。ブログのドメインからとってきた
      username: "panda-program",
      profileImagePath: "panda-program.png",
      bio: "XP、スクラム開発が好きなフルスタックエンジニア。バックエンドからフロントエンド、レガシーシステムの開発から新規プロダクトの立ち上げ、新入社員のオンボーディングから一人ひとりと向き合うチームビルディングまで幅広く担当。BASEではシニアエンジニアとしてアジャイル開発を推進中。CodeZineでの寄稿や個人ブログの執筆、YouTube、SpotifyでPodcastを配信するなどエンジニア向け情報の発信している。",
      xId: undefined,
      githubId: undefined,
      additionalLink: "https://panda-program.com/",
      affiliation: undefined,
      position: "シニアエンジニア",
    },
  },
  {
    id: "17",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "TSConfigからTypeScriptの世界を覗く",
    overview:
      "TSConfigはプロジェクトのTypeScriptの振る舞いを規定するものです。\nしかしながら、TSConfigのオプションは無数に存在していることや、一度設定してしまえば特に問題なく動作することからしばしばその存在を軽視されがちです。\nTSConfigを理解し、適切に設定すれば、TypeScriptそれ自体の理解を深めることやソフトウェア開発の安全性の向上に繋がります。\nまた、TypeScriptのアップデートに伴い、設定可能なオプションも追加され続けているため、キャッチアップも重要になります。\n\n本セッションでは、TSConfigの各種オプションの紹介を通してTSConfigの魅力を再発見し、TypeScriptへの理解に寄与することを目標とします。",
    time: "14:20 〜 14:50",
    speaker: {
      name: "らいと",
      username: "light_planck",
      profileImagePath: "light_planck.jpg",
      bio: "業務ではReactとRailsを書いています。 =LOVEと文学が好きです。",
      xId: "light_planck",
      githubId: "light-planck",
      additionalLink: "https://zenn.dev/light_planck",
      affiliation: "",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "18",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "推論された型の移植性エラーTS2742に挑む",
    overview:
      "TypeScriptには多くのエラーが存在しますが、中でもTS2742エラーは理解しづらいものの一つです。このトークでは、TS2742エラーはなぜ起こるのかと、その解決方法について具体的な事例を交えながら紹介します。\n\nTS2742エラーのメッセージ例:\n'hoge'の推論された型には、'<foo module>'への参照なしで名前を付けることはできません。これは、移植性が無い可能性があります。型の注釈が必要です。(TS2742)\n\nこのエラーは、型推論によって導かれる型がプロジェクト内で明示的に参照されていない場合に発生します。特に、pnpmのようなフラットでないnode_modulesを生成するパッケージマネージャーを使用している場合に見られます。しかし、エラーメッセージだけではその解決方法が簡単には分かりません。本トークでは、このエラーが発生する状況の具体例と共に、ユーザ側及びライブラリ側で取れる解決策を紹介します。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "elecdeer",
      username: "elecdeerdev",
      profileImagePath: "elecdeerdev.png",
      bio: "TypeScriptとReactを書くフロントエンドエンジニア。便利なツールを作るのが好き。",
      xId: "elecdeerdev",
      githubId: "elecdeer",
      additionalLink: "https://elecdeer.dev/",
      affiliation: "チームラボ　フロントエンド班",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "19",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "TSConfig Solution Style & subpath imports でファイル単位で型を切り替える",
    overview:
      "Node.js の subpath imports を使うと特定の条件下において参照されるモジュールを切り替えることが可能になるため test や Storybook でモックする手法としてたびたび紹介されます。\n\nニッチではありますが、特定ファイルでのみ型の参照を切り替える方法として TSConfig の Solution Style と組み合わせて開発者体験を向上させた事例をご紹介します。\n\n具体的には gql.tada による Fragment Colocation が Storybook 体験を複雑化させてしまう問題に対して、.stories.tsx ファイルでは fragment masking を解除させることで型をシンプルにし、Story によってはコード量を25~30%削減させることに成功しました。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "kotori",
      username: "maminami_minami",
      profileImagePath: "maminami_minami.jpg",
      bio: "株式会社Gaudiyのフロントエンドエンジニア。Enablingチームに所属しフロントエンドエコシステムの改善や開発者体験の向上に努めている。自動化や効率化が得意。",
      xId: "maminami_minami",
      githubId: "minami-minami",
      additionalLink: undefined,
      affiliation: "株式会社Gaudiy",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "20",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "URLPatternから始めるWebフレームワーク開発入門",
    overview:
      "URLPatternはURLによるルーティングパターンを作成することができる新しいWeb APIの1つです。Interop 2025の重点領域にも選ばれ、将来的に全てのブラウザ、ランタイムで動作することが予想されます。\n\n本LTでは、URLPatternを用いてHono、Expressのような軽量Webフレームワークを作りながら、URLPatternとTypeScriptの活用についてご紹介いたします。HTTPメソッド、URLパターンにおけるマッチング処理と、型推論によるパスパラメータの取得のやり方、URLPatternの特徴とテンプレートリテラル型を使った型推論の活用に着目してお話しします。また、Web標準なAPIを用いて開発を行うことで、不要なパッケージに依存しない開発が行える可能性について示します。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "ryuapp",
      username: "ryuapp",
      profileImagePath: "ryuapp.png",
      bio: "趣味でOSS活動をしている",
      xId: undefined,
      githubId: "ryuapp",
      additionalLink: "https://ryu.app",
      affiliation: "株式会社モニクル",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "21",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "TypeScript だけを書いて Tauri でデスクトップアプリを作ろう",
    overview:
      "Tauri はデスクトップ/モバイルアプリケーションを開発できるフレームワークであり、バックエンドを Rust で、フロントエンドを JavaScript/TypeScript で記述するものとよく説明されます。しかしながら用意されている API やプラグインを使用すれば、Rust を書かずに TypeScript だけを書いても充分に実用的なアプリケーションを開発できます。そんな Tauri の嬉しさ、TypeScript オンリー開発による良さやその制限、実際に開発してみてのツラさや注意点などをお話しします。",
    time: "17:10 〜 17:40",
    speaker: {
      name: "小松 翔 (tris)",
      username: "tris5572",
      profileImagePath: "tris5572.jpg",
      bio: "九州の高専を卒業後、鉄道会社で運転士や社内システム開発などに従事。2024年に畑違いのドワンゴへ入社し、教育アプリZEN Studyの開発により若者の青春を応援中。",
      xId: "tris5572",
      githubId: "tris5572",
      additionalLink: undefined,
      affiliation: "株式会社ドワンゴ 教育事業本部",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "22",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title:
      "転生したらTypeScriptのEnumだった件～型安全性とエコシステムの変化で挫けそうになっているんだが～",
    overview:
      "「…ここは、一体？」\n\n気づけば俺は、TypeScriptのEnumとして異世界転生していた。与えられたのは名前付き定数を表現する力「列挙型」。\nしかし型安全性を重視する世界において、Union型とconst assertionsたちが我が物顔で闊歩し、俺の居場所を奪っていくのであった。\n\n可読性と保守性を高めるために生まれたはずの俺が、今や時代遅れの遺物扱い。\nさらに追い打ちをかけるように、Node.jsの「--experimental-strip-types」とTypeScriptの「--erasableSyntaxOnly」のオプションたちが、存在そのものを消し去ろうとする。\n\n「このままでは…このままでは俺は消えてしまうのか…？」\n\nそれでも俺は諦めない。同じように居場所を失いかけている仲間たちと共に、俺は立ち上がる。型安全性、エコシステム、そして自身の存在意義についてを考える旅が今始まろうとしていた…。\n\n---\n\nこの発表ではTypeScriptにおけるEnumが辿ってきた歴史とその苦境についてを解説していきます。聴者がEnumを使うことを改めて見つめ直すような内容を提供いたします。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "やまのく",
      username: "yamanoku",
      profileImagePath: "yamanoku.jpg",
      bio: "一児の父です。会社員やってます。",
      xId: "yamanoku",
      githubId: "yamanoku",
      additionalLink: "https://yamanoku.net",
      affiliation: "",
      position: "",
    },
  },
  {
    id: "23",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "Rust製JavaScript EngineのTypeScriptサポート",
    overview:
      "近年、TypeScriptは広く普及し、主要なJavaScriptランタイムも対応を進めています。しかし、これらはあくまでランタイム側でのサポートであり、エンジン自体がTypeScriptを直接実行するわけではありません。\n\n本LTでは、Rust製JavaScriptエンジン Nova におけるTypeScript実行の取り組みを紹介し、エンジンレベルでのTypeScriptサポートの可能性について考察します。",
    time: "17:10 〜 17:40",
    speaker: {
      name: "yossydev",
      username: "yossydev",
      profileImagePath: "yossydev.jpg",
      bio: "昼はFANTECH領域のフロントエンドエンジニア、夜はRust製JavaScript EngineのNova Contributor",
      xId: "yossydev",
      githubId: "yossydev",
      additionalLink: "https://yossy.dev/",
      affiliation: "株式会社サイバーエージェント",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "24",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "型安全なDrag and Dropの設計を考える",
    overview: `Drag and Drop (DnD) は、UIにおいて直感的な操作を実現できる便利な仕組みです。しかし、その実装の自由度の高さゆえに、型安全性の確保が課題となることも少なくありません。例えば、複数の異なる種類の要素をドラッグ可能にしたい場合や、特定の要素にのみドロップを許可したい場合、あるいはドラッグ可能な要素がDOMツリー内で深くネストしているような複雑なケースでは、意図しない要素のドラッグや誤った場所へのドロップといったランタイムエラーのリスクが増大します。

本発表では、TypeScriptの強力な型システムを駆使し、このような複雑なDnDの制約を静的に表現する方法を深く掘り下げて解説します。「どのような種類の要素がドラッグ可能なのか？」、そして「それらはUIのどの領域にドロップできるのか？」といったルールを、interfaceやGenericsを用いて明確に定義し、型レベルで安全性を保証するDnD設計の手法をご紹介します。

型の力を最大限に活かし、複雑な要件にも柔軟に対応できる、拡張性のあるDnD設計を一緒に探求していきましょう！`,
    time: "17:10 〜 17:40",
    speaker: {
      name: "yudppp",
      username: "yudppp",
      profileImagePath: "yudppp.jpg",
      bio: "2018年にHRBrainに10人目の社員、3人目のエンジニアとして入社。\nTypeScriptは2018年から書いています。",
      xId: "yudppp",
      githubId: "yudppp",
      additionalLink: "https://blog.yudppp.com/",
      affiliation: "株式会社HRBrain",
      position: "執行役員CTO",
    },
  },
  {
    id: "25",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "タイプレベルリファクタリング奮闘記〜この「型パズル」は読めません！〜",
    overview:
      "業務でいわゆるDataGridを型安全に定義できるユーティリティを作成した発表者。しかし、型の推論を頑張りすぎて型の記述だけで300行を超えるようになってしまう。チームのメンバーには「ちょっとこの型は読めないですね」と言われてしまい、発表者自信もこれからメンテナンスできるのかが不安に……。\nそんな事態から、メンテナンスしやすい型にするためにやったことを話します。例えば、以下のようなことを話す予定です。\n\n- 型のテストを書き、安心して変更できるようにする\n- 型から値に複雑性を移す\n- コメントの書き方を工夫する\n- 生成AIを使って型をリファクタリングする",
    time: "17:10 〜 17:40",
    speaker: {
      name: "ygkn / Yugo Yagita",
      username: "ygkn35034",
      profileImagePath: "ygkn35034.jpg",
      bio: "株式会社ゆめみでWebフロントエンドやってます",
      xId: "ygkn35034",
      githubId: "ygkn",
      additionalLink: "https://ygkn.dev/",
      affiliation: "株式会社ゆめみ",
      position: "フロントエンドエンジニア テックリード",
    },
  },
  {
    id: "26",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "Wasmを用いて他言語資産をTypeScriptで活用する",
    overview:
      "本発表では、WebAssembly（Wasm）の基本概念や実行環境、クロスプラットフォーム対応といった特性に注目し、異なる言語で実装されたライブラリや資産を効率的に統合する方法について紹介します。近年、システム間の相互運用性や資産の再利用が重視される中、Wasm Interface Types（wit）を用いることで、ホスト環境とWasmモジュール間に型安全なインターフェースを構築し、従来は別々に管理されていたコード資産の連携を容易にする仕組みが実現されています。さらに、witから自動的にTypeScript用の型定義を生成するツール「jco」を取り上げ、他言語で記述されたライブラリをWasmとwitを介してTypeScript環境で活用する方法を紹介します。多くのTypeScript実行環境がWasmランタイムと連携している現状を踏まえ、既存資産の再利用による実装上のメリットや注意点についても言及し、Wasm活用の普及と他言語資産統合の可能性を探る内容となっています。",
    time: "17:10 〜 17:40",
    speaker: {
      name: "赤木 勇統",
      username: "yutoak",
      profileImagePath: "yutoak.png",
      bio: "RightTouchでプロダクトエンジニアをしています\n業務ではフロントエンドもバックエンドもTypeScriptで書いていますが、趣味ではいろんな言語に触れるのが好きです",
      xId: undefined,
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "株式会社RightTouch",
      position: "プロダクトエンジニア",
    },
  },
  {
    id: "27",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "型パズルを好きになるために、競プロを型システムだけで解いてみることにした",
    overview:
      "TypeScript の型システムに興味を持ち、「type-challenges」で学ぼうとしましたが、思ったよりも難しく、すぐに挫折してしまいました。しかし、私は競技プログラミングが好きで、アルゴリズムを解くのは得意です。そこで「型パズルを競プロのように解けば楽しく学べるのでは？」と考え、TypeScript の型システムだけを使って競プロの問題を解いてみることにしました。\n\nTypeScript の型システムはチューリング完全であり、本質的にはプログラミングが可能です。型の推論や再帰型を駆使することで、典型的な競技プログラミングの問題を解くことに挑戦しました。本セッションでは、その試行錯誤の過程を共有しながら、型レベルプログラミングの面白さと難しさをお伝えします。型パズルを学ぶのが難しいと感じている方に向けて、新しいアプローチを提案できればと思います。",
    time: "17:10 〜 17:40",
    speaker: {
      name: "いまいまい",
      username: "imaimai17468",
      profileImagePath: "imaimai17468.jpg",
      bio: "カエルのアイコンだけ覚えてください",
      xId: "imaimai17468",
      githubId: "imaimai17468",
      additionalLink: "https://imaimai.tech/",
      affiliation: "株式会社ゆめみ",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "28",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "Interface vs Types 〜型推論が過多推論〜",
    overview:
      "通常の業務において、typeとinterfaceの使い分けは必要ないと思っていました。\n実際の開発現場では、基本的にtypeを使用する人が多いかなという印象です。\n\n型において、interfaceの方がパフォーマンスがいいですが、これが求められるというシーンはそうそう起こりません。\nしかし、typeの交差型を使用して全てがanyになるという事態が発生しました。\n主に具体事例、interfaceとtypeをついに使い分ける日がくるとは…というライトな内容で発表しようと思っています。",
    time: "17:10 〜 17:40",
    speaker: {
      name: "omote",
      username: "HirokiOmote",
      profileImagePath: "HirokiOmote.jpg",
      bio: "株式会社estie デザインエンジニア マネージャー。\nフロントエンド、UIデザインが主務。\n\n趣味はマラソン。\n猫と犬と西武ライオンズが好き。",
      xId: "HirokiOmote",
      githubId: "HirokiOmote",
      additionalLink: undefined,
      affiliation: "株式会社estie",
      position: "デザインエンジニア",
    },
  },
  {
    id: "29",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "学生でもここまで出来る！ハッカソンで爆速開発して優勝した話",
    overview:
      "みなさんは，おそらく実務などでじっくり腰を据えて開発することが多いでしょう．\nそういう開発では当然TypeScriptは活躍します．\nですが，短期間で大量のコードを書くことが迫られるハッカソンではどうでしょうか？\n一般に，TypeScriptはJavaScriptと異なり型付き言語で，エラーが発生しやすく処理量も増えるため，速度が求められる開発では避けられる傾向にあります．\n今回は，JPHACKS 2024優勝チームが，ハッカソンにてTypeScriptを用いて開発した体験談を踏まえて，短期開発におけるTypeScriptの利点を語ります．\nこれにより，TypeScriptの利便性をより明確にし，より幅広い場面でTypeScriptが使われるようになることを目指します．",
    time: "15:00 〜 15:30",
    speaker: {
      name: "かわちゃん",
      username: "inheritans1904",
      profileImagePath: "inheritans1904.jpg",
      bio: "2025年に名古屋大学大学院情報学研究科知能システム学専攻に進学しました．大学で医用画像処理の研究をする傍ら，サークル・アルバイト先でフロントエンドエンジニアとして開発に従事しています．ユーザを意識したフロントエンドを開発するのが趣味で，最近はアクセシビリティなどに興味があります．",
      xId: "inheritans1904",
      githubId: "YutaK1026",
      additionalLink: "https://kawaport.pages.dev/",
      affiliation:
        "名古屋大学大学院・アプリ開発団体jack・アイスクリスタル株式会社",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "30",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "GitHub ActionsをTypeScriptで作ろう！",
    overview: `主題：GitHubのカスタムアクションにはTypeScriptがオススメ

GitHub ActionsのカスタムアクションはJavaScriptしか直接動かせませんが、公式からTypeScript向けのbootstrapリポジトリやライブラリが提供されています。そのため、GitHub Actionsのカスタムアクション開発ではTypeScriptが非常に使いやすいです。

私はOSSの「GitHub Actions OpenTeremetry」をTypeScriptで開発しています。この開発を通して感じた、型安全性や開発効率の良さなど、TypeScriptを使ってよかった点を紹介します。`,
    time: "17:10 〜 17:40",
    speaker: {
      name: "じょーし（上司陽平）",
      username: "paper2parasol",
      profileImagePath: "paper2parasol.jpg",
      bio: "Sansan株式会社にて、請求書管理サービス「Bill One」のソフトウェアエンジニア兼SREとして活動しています。有志メンバによるCI/CD改善チームを運営し、日々の開発者体験の向上に取り組んでいます。最近は、GitHub Actionsのパフォーマンスや効果測定を可視化するためのOSS「GitHub Actions OpenTelemetry」の開発にも注力しています。",
      xId: "paper2parasol",
      githubId: "paper2",
      additionalLink: "https://paper2.hatenablog.com/",
      affiliation: "Sansan株式会社",
      position: "ソフトウェアエンジニア兼SRE",
    },
  },
  {
    id: "31",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "コンポーネントライブラリで実現する、アクセシビリティの正しい実装パターン",
    overview:
      "WAI-ARIA属性はリッチなアプリケーション作成を可能にしますが、誤用すると、スクリーンリーダーなどの支援技術で情報が正しく伝わらず、ユーザビリティを著しく損なうことが頻繁に発生します。\n\nSmartHRでは、コンポーネントライブラリを用いてアクセシビリティの実装を隠蔽し、TypeScriptの型定義を活用することで、WAI-ARIA属性の値や組み合わせを制限し、開発者が意図しない誤用を開発時に防ぎます。このコンポーネントライブラリを利用することで、開発者はアクセシビリティについて深く理解していなくても、容易にアクセシブルなサービスを構築できます。LTでは具体的なコンポーネントの実装例や、アクセシビリティを考慮したコンポーネント設計の思想を紹介します。\n\nこの発表は、アクセシビリティに関心のあるフロントエンドエンジニアや、Web サービスのアクセシビリティ向上に取り組む方を対象としています。コンポーネントライブラリ導入による開発効率向上、アクセシビリティ担保の容易さ、そして運用上の課題や注意点などを、実例を交えて紹介します。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "たじまん",
      username: "schktjm",
      profileImagePath: "schktjm.jpg",
      bio: "2021年に会津大学コンピュータ理工学部を卒業後、株式会社ZOZOテクノロジーズにフロントエンドエンジニアとして入社。HTMLやセマンティクス好きからアクセシビリティに興味を持ち2024年8月にSmartHRに入社。ウェブアクセシビリティ基盤委員会(WAIC) WG4委員。",
      xId: "schktjm",
      githubId: "schktjm",
      additionalLink: "https://bsky.app/profile/schktjm.bsky.social",
      affiliation: "SmartHR/プロダクトデザイン統括本部",
      position: "アクセシビリティエンジニア",
    },
  },
  {
    id: "32",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "『Python→TypeScript』オンボーディング奮闘記",
    overview:
      "トグルホールディングスではTypeScriptを中心にプロダクト開発を行っています。私はメンターとして、Pythonエンジニアのオンボーディングを担当しました。動的型付けに慣れたエンジニアが静的型付けを前提とした環境に移行する際、型定義の方法やコンパイルエラーへの対応に苦労するケースが少なくありません。本セッションでは、メンター経験を通じて頻繁に直面した課題や具体的なトラブル事例を挙げ、それらを解決に導く効果的な指導法やアドバイスをお伝えします。異なる言語間のギャップを埋め、スムーズに新たな開発環境へ適応するための実践的なノウハウを紹介します。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "龍野 卓己",
      username: "takumi_t_jp",
      profileImagePath: "takumi_t_jp.jpg",
      bio: "トグルホールディングス株式会社のプロダクトエンジニア\n不動産開発領域でのデジタルインフラを実現する「つくるAI」シリーズの開発をフルスタックで担当しています。\n名前の「龍野」からもじって、「ドラゴンさん」と呼ばれています。\n\nまだまだ若輩ではございますが、TSKaigiでのLTを全力で楽しんでいきます！",
      xId: "takumi_t_jp",
      githubId: "Exerea",
      additionalLink: "https://note.com/toggle/n/n25ce52d3a2ae",
      affiliation: "トグルホールディングス株式会社　プロダクトユニット",
      position: undefined,
    },
  },
  {
    id: "33",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "主要ライブラリの実例に学ぶ、TypeScriptで実現する型安全な座標定義",
    overview:
      "位置情報技術において、緯度・経度は欠かせない要素ですが、その扱いには誤入力や不整合のリスクが伴います。例えば、緯度・経度の順番の誤りや、座標系の次元数の誤認などが挙げられます。本セッションでは、Leaflet、Turf.js、geolib など主要ライブラリが採用している、オブジェクト型、タプル型、ユニオン型、オーバーロード関数などを活用した型安全な座標定義のアプローチを解説します。各ライブラリがどのように座標定義を実現しているかの具体例とともに、柔軟かつ堅牢な設計のポイントやエラー防止の工夫についてご紹介します。",
    time: "15:00 〜 15:30",
    speaker: {
      name: "原口 公輔",
      username: "Tirol_JPN",
      profileImagePath: "Tirol_JPN.jpg",
      bio: "2020年にフロントエンドエンジニアとしてラクスル株式会社に新卒入社。印刷ECの開発に携わる。2024年6月にトグルホールディングス株式会社に入社。現在は、ボリュームチェックに特化した案件検討DXサービスであるデベNAVIの開発・運用に携わっている。",
      xId: "Tirol_JPN",
      githubId: "TirolJPN",
      additionalLink: "https://tirol-jpn.com/pages/about",
      affiliation: "トグルホールディングス株式会社 プロダクトユニット",
      position: "プロダクトエンジニア",
    },
  },
  {
    id: "34",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "feature flag 自動お掃除のための TypeScript プログラム変換",
    overview:
      "feature ブランチの寿命を短く保ったり、特定ユーザ向けに機能をリリースして反応を見る A/B テストのために、feature flag という手法がよく利用されています。一方、機能のリリースや A/B テストが完了して安定化した feature flag は、積極的に削除しなくともアプリケーションの動作に直接的な問題がないため、削除されずに負債化する可能性があります。\n本発表では、保守的なデッドコード除去で削除することが難しい安定化した feature flag を、よりアグレッシブな手法で削除する方法、実装、実際のコードベースに適用したときの効果について説明します。\n\nこの実装では TypeScript の静的解析と構文木の操作を通じたソースコード編集といったプログラム変換を用います。この発表を通じて、プログラム変換の楽しさと業務における可能性を感じて欲しいと考えています。",
    time: "11:30 〜 12:00",
    speaker: {
      name: "azrsh",
      username: "a2r5h",
      profileImagePath: "a2r5h.png",
      bio: "株式会社メルカリで Web アプリケーションのためのプラットフォームエンジニアリングをしています。\n巨大で活発なエコシステムと型の表現力が高い言語が好き。",
      xId: "a2r5h",
      githubId: "azrsh",
      additionalLink: "https://azr.sh",
      affiliation: "株式会社メルカリ",
      position: "プラットフォームエンジニア",
    },
  },
  {
    id: "35",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "技術書をソフトウェア開発する - jsprimerの10年から学ぶ継続的メンテナンスの技術",
    overview:
      "## 発表概要\n\n技術書の執筆とソフトウェアの開発に、大きな違いはありません。\nLLMを使って自然言語でコードを書ける/読めるようになった現在では、この違いはますます小さくなっています。\n約10年・6つのメジャーバージョンを経ているJavaScript入門書 [jsprimer](https://jsprimer.net) を例に、技術書のソフトウェア開発手法について紹介します。\n\n特に次の点を中心にお話しします。\n\n1. ドキュメントとコードの自動テスト - textlintやpower-doctestなどのTypeScriptで書かれたツールでの自動テスト\n2. ECMAScript年次更新への追従プロセス - 言語仕様の変化に合わせた計画的な更新手法\n3. ドキュメントに対するDesign Doc - 文章を書く前に文章の設計をソフトウェア開発のように行う方法\n4. コミュニティ貢献を促す仕組み - 累計で100名以上のコントリビューターが参加するjsprimerの運営方法/Open Collectiveの設計\n\n「TypeScriptは型を消せばJavaScript」と言われるように、TypeScriptとJavaScriptには密接な関係があります。\nこの発表では、TypeScriptの基盤となるJavaScriptの学習リソースがどのように持続的に更新されてきたか、その技術的な工夫をお話しします。\n\n技術書は、ソフトウェアと同様に適切な設計・開発・運用プロセスを持つことで、長期的なメンテナンスと進化が可能になることについて、約10年間の具体的な実践例を通してお伝えします。\n\n## 対象者\n\n- TypeScript/JavaScript開発者：更新され続ける言語仕様に追従する方法について知りたい方\n- 技術書籍・ドキュメント作成者：継続的に更新される技術文書の作り方を知りたい方\n- OSSメンテナー：ドキュメント中心のプロジェクト運営、コントリビューター獲得に悩む方",
    time: "13:20 〜 13:50",
    speaker: {
      name: "azu",
      username: "azu_re",
      profileImagePath: "azu_re.jpg",
      bio: "ISO/IEC JTC 1/SC 22/ECMAScript Ad Hoc委員会 エキスパートでECMAScript、JSONの仕様に関わる。2011年にJSer.infoを立ち上げ、継続的にJavaScriptの情報を発信している。ライフワークとしてオープンソースへのコントリビューションをしている。",
      xId: "azu_re",
      githubId: "azu",
      additionalLink: "https://jsprimer.net/",
      affiliation: "",
      position: "",
    },
  },
  {
    id: "36",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "機能的凝集の概念を用いて複数ロール、類似の機能を多く含むシステムのフロントエンドのコンポーネントを適切に分割する",
    overview:
      "フロントエンド開発におけるコンポーネントの共通化や分割は、保守性や拡張性の観点で重要です。しかし、過度な共通化や粒度の細かすぎる分割は、可読性や変更容易性を損ない、結果として開発効率を下げてしまうこともあります。\n\n本セッションでは、「機能的凝集」という観点から、コンポーネント設計の適切な粒度と分割の判断基準について実践的に紹介します。特に、`ts-pattern` や TypeScript のジェネリクス型を活用し、型の恩恵を受けながら機能的凝集を実現する手法にフォーカスします。\n\n登壇者のチームでは、複数ロール・多機能を持つシステムにおいて、関心ごとや機能的責務が重なるコンポーネント群をどのように意味のある単位へ構造化するかについて議論・検証してきました。設計の選択肢が豊富だったプロジェクト立ち上げ期の経験をもとに、以下のようなパターンと改善例を紹介します：\n- ロールごとに異なる画面構成\n- 新規作成画面と編集画面などの類似ページ構成\n- コンポーネント内部の部品単位での差分\n- 表示アイテムの種類に応じたList構成の違い\n- 差分が最小限の場合と複数箇所に波及する場合の対処法\n- 差分の分岐ポイントがルーティングか、取得データかの違い\n\nこれらのパターンをもとに、論理的凝集から機能的凝集への改善プロセスを具体的なコード事例とともに紹介します。\n\n本トークを通じて、機能的凝集を前提としたコンポーネント境界の設計判断を議論するための共通言語を提供し、プロジェクトごとの制約に応じた設計意思決定の一助となれば幸いです。",
    time: "14:40 〜 15:10",
    speaker: {
      name: "NoritakaIkeda",
      username: "omotidaisukijp",
      profileImagePath: "omotidaisukijp.jpg",
      bio: "フロントエンドを中心に、Webアプリケーションを開発しています。OSSや業務システムの開発に携わっています。",
      xId: "omotidaisukijp",
      githubId: "NoritakaIkeda",
      additionalLink: "https://zenn.dev/omotidaisukijp",
      affiliation: "株式会社ROUTE06",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "37",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "複雑なフォームを継続的に開発していくための技術選定・設計・実装",
    overview:
      "みなさんは Web アプリケーション中の複雑なフォームを開発するとき、何を考え・どうやって実装しますか？\n\nひとことで「フォーム」と言っても、その仕様や特性・機能によって適切な技術や設計・実装手法は変わるでしょう。\n「よく使われるライブラリを使えば大丈夫」 ということはなく、そのフォームに適したライブラリや設計を選択する必要があります。\n「TypeScript で書けば大丈夫」 ということはなく、TypeScript であっても効果的に利用できなければ、拡張に弱い・壊れやすいフォームとなってしまうかもしれません。\n\n本発表では実際の複雑なフォームを持つプロダクト - ユーザが柔軟にフィールドを追加し、バリデーションを設定できるようなフォームを題材とし、その設計・技術選定・実装について紹介します。\n複雑なフォームを安心して拡張していけるようにするために、どのような設計を考え、技術を比較・選択肢し、かつ拡張に強いプロダクトにするために TypeScript をどのように活用したかについてお話します。",
    time: "11:30 〜 12:00",
    speaker: {
      name: "izumin5210",
      username: "izumin5210",
      profileImagePath: "izumin5210.jpg",
      bio: "バクラク事業部 PlatformEngineering部 Enablingチーム。\nプロダクト開発やバックエンド・Webフロントエンドの基盤開発などをしています。APIスキーマ関連技術とコードの静的解析・自動生成技術が好き。",
      xId: "izumin5210",
      githubId: "izumin5210",
      additionalLink: undefined,
      affiliation: "株式会社LayerX",
      position: "Staff Software Engineer",
    },
  },
  {
    id: "38",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "TypeScript製IaCツールのAWS CDKが様々な言語で実装できる理由 〜他言語変換の仕組み〜",
    overview:
      "AWS CDKとは、様々なプログラミング言語でインフラ定義を実装できるIaCツールであり、実態はTypeScriptによるOSSです。リソースの宣言方法まで全てTypeScriptで実現されていますが、ユーザーは様々な言語でリソース定義を実装できます。\n\n本セッションではそれが可能な理由、つまりTypeScriptコードを他言語で使用できるように変換する仕組みを解説します。\n\nこの原理をAWS CDK以外にも応用することで、TypeScriptを起点にプログラミング言語の壁を超えて開発者への価値提供に繋げることができます。またAWS CDKではこの仕組みを通して、TypeScriptがたくさんの他言語ユーザーの支えになっているというTypeScriptの影響力についてもお伝えします。",
    time: "15:30 〜 16:00",
    speaker: {
      name: "k.goto",
      username: "365_step_tech",
      profileImagePath: "365_step_tech.jpg",
      bio: "AWS CDK のコントリビュート活動を行っており、Top Contributor や Community Reviewer に選定。コミュニティ駆動の CDK コンストラクトライブラリのメンテナーや、自作 AWS ツールの OSS 開発も行なっている。2024 年 3 月、AWS DevTools Hero に選出。",
      xId: "365_step_tech",
      githubId: "go-to-k",
      additionalLink:
        "https://aws.amazon.com/jp/developer/community/heroes/kenta-goto/",
      affiliation: "株式会社メイツ",
      position: "バックエンドエンジニア",
    },
  },
  {
    id: "39",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: `"良い"TSのコードを書く為のマインドセット`,
    overview:
      '概要：\nRun time時における型の正確性がクオリティに直結するTypeScriptにおいて、重要ですがマイナーな概念であるSoundness(サウンドネス)を紹介することでTS上で良いコードを書くためのマインドセットを紹介します。\n\n説明：\nプログラミングにはType Soundness(型の健全性)という概念があります。これは端的に説明すると実行時にコード上で書かれた型が保証されているかということを示す言葉です。\n\nO’Reilly社の"Learning TypeScript"の著者、Josh Goldberg氏はその書籍内でTypeScriptの型システムをStructurally typed(構造的)と表現しています。これは型の構造に相互性があれば受け付けてしまうというTypeScriptの型システムの動きに起因しています。\n\nこのトークでは、構造的型システムによって引き起こされるありがちなTypeScriptの直感に反した動き(readonly周り等)を紹介しつつ、Soundnessという概念の重要性を伝えたいと思います。',
    time: "15:30 〜 16:00",
    speaker: {
      name: "Kei",
      username: "kei_english_ca",
      profileImagePath: "kei_english_ca.jpg",
      bio: "カナダでキャリアをスタートのち、5年間アメリカとカナダのスタートアップにて従事。現在は日本でWixにて働いています。",
      xId: "kei_english_ca",
      githubId: "kei95",
      additionalLink: "https://www.youtube.com/@kei_NA",
      affiliation: "Wix.com",
      position: "フロンエンドエンジニア",
    },
  },
  {
    id: "40",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TS特化Clineプログラミング",
    overview:
      "今現在、我々プログラマは TypeScript とプログラミングのドメインエキスパートとして、LLMに形式知やワークフローを叩き込む必要があります。\n\nモデル性能は向上していますが、汎用プロンプトだけではコーディングエージェントの力を引き出せているとは言えません。\n\n自分は次のような実験によって、TypeScript によるプログラミングの自動化を試みています。\n\n- deno によるプロトタイピング\n- コンテキスト境界を最小化するモジュール設計\n- npm ライブラリのサマリの自動作成\n- 型シグネチャファーストな設計\n- TDDによる実装\n\nCline と TypeScript を通してAIプログラミングの未来を考察します。",
    time: "15:30 〜 16:00",
    speaker: {
      name: "mizchi",
      username: "mizchi",
      profileImagePath: "mizchi.jpeg",
      bio: "フリーランスのフロントエンド改善傭兵",
      xId: "mizchi",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: undefined,
    },
  },
  {
    id: "41",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "TypeScript Language Service Plugin で CSS Modules の開発体験を改善する",
    overview:
      "コンポーネントに CSS を当てる手法の1つに、CSS Modules があります。広く使われている手法ですが、エディタ上の開発体験が悪いという欠点がありました。\\*.tsx と \\*.module.css の Language Server が分かれているために、*.tsx と *.module.css を横断する言語機能 (Rename,Find All References ) の挙動に問題があるのです。\n\n長らくこの問題は解決困難と思われてました。しかし TypeScript Language Service Plugin を使うと、実は解決できるのです。この発表では、TypeScript Language Service Plugin とは何か、そしてそれを使って作ったツールについて紹介します。\n\n- TypeScript Language Service Plugin とは\n- CSS Modules Kit の紹介\n- Volar.js を使って .module.css を TypeScript コードに偽装する\n- Navigation 機能の実装 (Go to Definition, Rename, Find All References)\n- 壊れかけのファイルをサポートする\n- エディタにエラーを表示するには\n- Code Action と Applicable Refactor の実装",
    time: "10:50 〜 11:20",
    speaker: {
      name: "mizdra",
      username: "mizdra",
      profileImagePath: "mizdra.jpg",
      bio: "開発者体験の改善が好きで、よく便利グッズ作ってます。ブログもよく書きます。",
      xId: "mizdra",
      githubId: "mizdra",
      additionalLink: "https://www.mizdra.net/",
      affiliation: "株式会社はてな",
      position: "フロントエンドエキスパート",
    },
  },
  {
    id: "42",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "君だけのオリジナル async / await を作ろう",
    overview:
      "TypeScript でジェネレータ関数を使った独自の async / await ライクな記法の作り方を紹介します。\n\nPromise を扱うときには欠かせない async / await ですが、この記法が一般的に使われるようになる前はジェネレータ関数を使って同様の記法を実現するテクニックが使われてきました。\nこのテクニックは今でも Promise 以外のデータに対して簡便な記法を導入する際には有効です。\n\nこの発表では (いくらか歴史を振り返りつつ) JavaScript におけるジェネレータ関数を使った async / await の実装方法と、それに対して TypeScript で型を付けるためのちょっとしたトリック、Promise 以外のデータへの適用について紹介します。\nまた私自身が取り組んでいる Algebraic Effects への応用など、発展的な話題にも触れられたらと思います。\n\n## 想定聴衆\n\n- neverthrow や Effect などのライブラリに登場する yield* の正体が気になっている方\n- async / await ライクな記法を自分でも作りたい方\n- TypeScript のプログラミング技法に関心のある方",
    time: "14:40 〜 15:10",
    speaker: {
      name: "susisu",
      username: "susisu2413",
      profileImagePath: "susisu2413.png",
      bio: "桃栗三年型八年",
      xId: "susisu2413",
      githubId: "susisu",
      additionalLink: "https://susisu.hatenablog.com/",
      affiliation: "株式会社はてな",
      position: "Webアプリケーションエンジニア",
    },
  },
  {
    id: "43",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "Web Streams APIの基本と実践、TypeScriptでの活用法",
    overview:
      "ストリームはデータを効率よく低遅延に処理する方法として、多くの言語でインターフェースが提供されています。\nWeb標準でも2015頃からStreams APIが整備され、Fetch APIのレスポンスボディもストリームオブジェクトになっています。\n\nしかし、Streams APIを直接利用している方は少ないように思います。これは活用方法が十分に知られていない、もしくはより昔からあるNode Streamのように扱いが難しいと思われていると、想像しています。\n\nWeb Streams APIはインターフェースが簡潔になり、型情報も整備されているため、TypeScriptからも扱いやすいものとなっています。\nこのセッションではそんなWeb Streams APIの基本概念や利用シーンなどをお話しします。\nNode.jsのStreamとの違いや、Async Iteratorとの関係性についても触れていきます。\n\n---\n\n## アウトライン\n- Web Streams APIの概要\n- 独自のストリームオブジェクトを定義する\n- ストリームによる逐次処理の具体的な用例\n- Node.jsのStreamとの違いと互換性\n- Async Iteratorとの相互運用性",
    time: "13:20 〜 13:50",
    speaker: {
      name: "tasshi",
      username: "tasshi",
      profileImagePath: "tasshi_me.png",
      bio: "2020年にサイボウズ株式会社に新卒入社。kintone開発チームにて社外のカスタマイズ開発者向けのSDKを開発しています。プライベートでもnpmパッケージを触ることが多いです。",
      xId: "tasshi_me",
      githubId: "tasshi-me",
      additionalLink: "https://tasshi.me/",
      affiliation: "サイボウズ株式会社",
      position: "ソフトウェアエンジニア/エンジニアリングマネージャー",
    },
  },
  {
    id: "44",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Pragmatic Functional Programming in TypeScript",
    overview: `関数型プログラミングを学んでも、実務での活用方法に悩む方は少なくありません。純粋関数、イミュータブルな値、モナドなどの概念を、具体的なコードにどう落とし込むかが明確でない場合が多いからです。

そこで本セッションでは、Dmitrii Kovanikov 氏の提唱する 5 つの原則（Parse, don’t validate／Make illegal states unrepresentable／Errors as values／Functional core, imperative shell／Smart constructor）を「事前条件」「事後条件」「不変条件」という Design by Contract の視点で再構成し、TypeScript による実装例とそのメリットを解説します。

加えて、当社が開発している API ゲートウェイを題材に、これらの原則を戦術的 DDD に基づくレイヤードアーキテクチャに適用する例もご紹介します。バックエンド開発におけるコードの堅牢性と保守性の両立を目指すだけでなく、状態管理の複雑なフロントエンド開発でも応用可能な設計手法をお話しします。`,
    time: "11:30 〜 12:00",
    speaker: {
      name: "yasaichi",
      username: "_yasaichi",
      profileImagePath: "_yasaichi.png",
      bio: "2015年にピクスタ株式会社に新卒入社後、開発プロセスの改善や開発基盤の整備に従事。2020年より執行役員CTOを務めた後、2023年よりEARTHBRAINに参画。\n現在は同社のデータプラットフォームの開発を牽引している。著作に「パーフェクトRuby on Rails【増補改訂版】」（共著、技術評論社）がある。",
      xId: "_yasaichi",
      githubId: "yasaichi",
      additionalLink: "https://blog.yasaichi.com/",
      affiliation: "株式会社EARTHBRAIN",
      position: "シニアエンジニア",
    },
  },
  {
    id: "45",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "ts-morphで、人間も編集できるコード生成を実現しよう！",
    overview: `## 概要

/* This file is auto generated. Do not edit manually */

というコメントに見覚えのある方は多いのではないでしょうか。

このセッションでは、自動生成したコードと、プログラマが書いたコードを両立させるアプローチについて説明します。

## 背景と内容

昨今、OpenAPIなどのスキーマファイルからコードを生成するアプローチはポピュラーなものとなっています。

しかし、クラスを使ったアプローチをするフレームワーク・言語と違い、私が業務で利用している Fastify は生成したコードを人の手で編集したい要求があります。

\`\`\`
// ここのテンプレート部分は自動生成したい
server.post("/hoge", hogeSchema, async (req) => { 
  // 関数呼び出しの中身は、自分で実装したい & 次生成した場合に消えたら困る。
   someLogic(req.body.id)
})
\`\`\`

1つのファイルの中で、「自動生成したいコード」と「人の手で編集しコード生成時にも消してほしくないコード」が入り混じることになります。これは、従来のトップダウンなコード生成では実現が難しく、現状の実装を解析し、必要な部分だけ再生成する戦略が必要です。

今回は、この解析部分と自動生成部分にts-morphを利用し、自動生成と手動編集を両立させる方法を扱います。

## 対象

- コード生成に興味がある方
- ASTに触れてみたい方
- Fastify・Expressなどを利用したバックエンド開発を効率化したい方
    `,
    time: "14:00 〜 14:30",
    speaker: {
      name: "池奥裕太/@yuta-ike",
      username: "Selria1",
      profileImagePath: "Selria1.jpg",
      bio: "2024年にエムスリー株式会社に新卒入社。デジスマ診療のプロダクト開発や、新規サービスのバックエンド・インフラを担当。TSKaigiスタッフ。好きなエディタはFigmaです。\n\n2024年度 未踏クリエイター。",
      xId: "Selria1",
      githubId: "yuta-ike",
      additionalLink: "https://zenn.dev/yuta_ike",
      affiliation: "エムスリー株式会社 / デジスマチーム",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "46",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "TypeScriptとVercel AI SDKで実現するLLMアプリケーション開発：フロントエンドからバックエンド、そしてChrome拡張まで",
    overview:
      "LLM（大規模言語モデル）を活用した開発においてはPythonが主要なプログラミング言語として広く認知されていますが、TypeScriptにもVercelが開発するOSSのAI SDKという便利なツールキットが存在します。このAI SDKを利用することでTypeScriptでもLLM関連のアプリを比較的簡単に作成できることをお伝えしたいと思います。\n\n本発表では、AI SDKの基本機能から応用事例までを紹介します。AI SDKは、Azure OpenAI、AWS Bedrock、Google CloudのVertexAIなど、多様なベンダーのLLM推論APIの呼び出しを統一的なインターフェースで扱うことが可能です。AI SDKがベンダー間の差異を吸収してくれるため、開発者は使用するLLMを柔軟に切り替えることが容易になります。\n\nさらにUIフレームワーク向けの機能も提供されており、例えばReact向けの`useChat`hooksを利用することでよくあるチャット型のUIを比較的簡単に実現可能です。このようにAI SDKを利用することでフロントエンドとバックエンドをTypeScriptで一貫して開発可能です。\n\nサイボウズでは、実際に社内用チャット型LLMアプリをNext.jsとAI SDKを用いて開発していますので、インフラも含めたアプリの構成例を紹介いたします。\n\nさらに応用事例として、手元のMacBook上で動かすローカルLLM + AI SDKによるオフラインでも動作するChrome拡張機能の作り方も紹介したいと思います。\n\n注：本発表ではプラットフォームとしてのVercelの話はありません",
    time: "10:50 〜 11:20",
    speaker: {
      name: "加瀬健太（Kesin11）",
      username: "Kesin11",
      profileImagePath: "Kesin11.jpg",
      bio: "2023年7月にサイボウズ株式会社に中途入社。開発本部 生産性向上チームにて主に大規模なGitHub Actions セルフホストランナー基盤の運用に従事。\n2024年の8月頃から生成AIに興味を持ち始め、2025年1月から開発本部 AIやっていきチームに異動。社内のAI利用の推進、社内用のAIツールの開発・運用、プロダクトのAI機能のR&DなどAI活用の業務に幅広く関わる。\nGitHubのchangelogを毎日見るのが趣味。",
      xId: "Kesin11",
      githubId: "Kesin11",
      additionalLink: "https://zenn.dev/kesin11",
      affiliation: "サイボウズ株式会社 開発本部 AIやっていきチーム",
      position: "",
    },
  },
  {
    id: "47",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Lookback TypeScript ESM support and what should we do now.",
    overview:
      "TypeScriptのESM（ECMAScript Modules）サポートは、JavaScriptとその周辺エコシステムのESM対応と共に進んできました。\n\n一方でこれはJavaScriptとそのエコシステムが持つモジュールシステムの複雑さをTypeScriptが同じように引き継いでしまっているとも言えます。実際これまで段階的に行われてきたTypeScriptのESMサポート機能は単純ではなく、特に初学者やJavaScriptのモジュールシステムに詳しくない人にとっては理解しづらいものになっています。\n\n本セッションでは、JavaScriptのモジュールシステムの基礎的な部分から始め、TypeScriptにおけるESMサポートの歴史と現状を整理します。さらにESM移行への課題とその解決策、ユースケースに応じた設定の例などを紹介することで、実際のプロダクトへ活用できる内容とします。",
    time: "14:40 〜 15:10",
    speaker: {
      name: "Saji",
      username: "sajikix",
      profileImagePath: "sajikix.jpg",
      bio: "Cybozuのフロントエンドエンジニア。業務では最近JS APIの設計やPluginのシステムを開発している。興味のある分野はi18nや日時、JS/TSの構文解析、Lintツールなど。",
      xId: "sajikix",
      githubId: "sajikix",
      additionalLink: "https://www.sajiki.dev/",
      affiliation: "サイボウズ株式会社",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "48",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "フロントエンドがTypeScriptなら、バックエンドはPHPでもいいじゃない",
    overview:
      "プロダクト開発において、フロントエンドとバックエンドをTypeScriptで統一することは、型共有や開発効率の向上といった多くのメリットがあります。しかし、プロジェクトやチームによっては他の選択肢も有効です。本トークでは、バックエンドにPHPを採用するという選択肢について、PHPのエコシステムや開発サイクル、アーキテクチャやデプロイ手法などを通じて、TypeScriptではないバックエンドを持つことの魅力を紹介します。また、PHPエンジニア目線から見たTypeScriptとの組み合わせによる実践的な開発フローやバックエンド、フロントエンド分離案を提案します。本トークを通じて、言語に閉じない多様な視点を提供します。",
    time: "10:50 〜 11:20",
    speaker: {
      name: "富所 亮",
      username: "hanhan1978",
      profileImagePath: "hanhan1978.jpg",
      bio: "2005年中規模SIerに入社以後、自社サービスと受託開発を交互に繰り返しながら、一貫してWebアプリケーションの開発に従事、2020年11月にカオナビに入社。バックエンドエンドのエキスパートとしての業務の傍ら、PHP界隈を中心に勉強会やカンファレンスに登壇しています。",
      xId: "hanhan1978",
      githubId: "hanhan1978",
      additionalLink: "https://blog.hanhans.net",
      affiliation: "株式会社カオナビ",
      position: "バックエンドエンジニア",
    },
  },
  {
    id: "49",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title:
      "型システムを活用した ESLint カスタムルール開発入門 〜固有ドメインにおけるコーディング規約を開発する〜",
    overview:
      "ESLint は JavaScript/TypeScript における主要な Linter として広く採用されており、その特筆する機能として、 AST を活用したカスタム Lint ルールの実装が可能である点が挙げられます。  \nこのカスタム Lint ルールは、チーム固有のコーディング規約を自動化する強力なアプローチを提供しますが、その実装には AST への理解が求められ、多くの開発者に難易度が高い印象を与えているのではないでしょうか。\n\n本セッションでは、AST の基礎概念から解説を始め、段階的にカスタム Lint ルールの開発方法を解説します。  \nまた、固有ドメインに対するカスタム Lint ルールの開発アプローチとして、 TypeScript の型システムを活用した Lint ルールの開発方法を、 AWS CDK 用カスタム Lint ルールの開発経験をもとに解説します。",
    time: "13:20 〜 13:50",
    speaker: {
      name: "山梨 蓮",
      username: "ren_yamanashi",
      profileImagePath: "ren_yamanashi.jpg",
      bio: "AWS CDK が好きな Web バックエンドエンジニア。\n趣味で CDK のコントリビュートを行ったり、CDK 用の ESLint Plugin (eslint-cdk-plugin) を開発したりなどしています。",
      xId: "ren_yamanashi",
      githubId: "ren-yamanashi",
      additionalLink: "https://zenn.dev/yamaren",
      affiliation: "株式会社メイツ",
      position: "バックエンドエンジニア",
    },
  },
  {
    id: "50",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "React19で変化したuseReducerの型から学ぶTypeScriptの型推論",
    overview:
      "@types/reactのバージョン19では、React本体の変更に対する追従の他に幾つかの変更が加えられました。その中の一つとしてuseReducerの型の変更があります。\n\nuseReducerの型の変更は型推論の向上を目的として行われました。これまではuseReducerを用いるためにジェネリクスで型を保管するのが一般的でした。しかし、バージョン19からは引数から型を推論する形に変更され、ジェネリクスを用いないことがベストプラクティスになりました。\nこれにより、開発者が冗長な型定義を行うことを防ぎつつ、堅安全性を維持することが可能になりました。\n\n本発表では、\n・useReducerの新しい使い方\n・変更の背景から学ぶ、TypeScriptの型推論の活かし方\nを紹介します。\n\nReactのAPIに関連する内容ですが、本発表はReactのAPIを元にしたTypeScriptユーザー全般に役立つ内容となります。",
    time: "14:00 〜 14:30",
    speaker: {
      name: "k8o",
      username: "k35o",
      profileImagePath: "k35o.jpg",
      bio: "TypeScriptとReactが好きで、業務でも趣味でも日々触れています。\nフロントエンドとデザインの境界に強い関心があり、最近はデザインの勉強にも力を入れています。\n技術と表現のあいだをつなぐようなものづくりを目指しています。",
      xId: "k35o53k",
      githubId: "k35o",
      additionalLink: "https://k8o.me",
      affiliation: "株式会社ドワンゴ/教育事業本部",
      position: "Webフロントエンジニア",
    },
  },
  {
    id: "51",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Type ChallengesにPRを出して新しい問題を追加した話",
    overview:
      "みなさんはType Challengesをご存知でしょうか？\n\nType ChallengesはTypeScriptの型システムをハンズオンで学べるOSSリポジトリです。\n型の問題がたくさん用意されており、それを解いていくことでTypeScriptの型システムについて学ぶことができます。\n私自身もType Challengesを通じてTypeScriptの型システムについて学び、楽しんでいました。しかしそれだけでなく、他の人の学びになるような問題を追加したいと思いPRを出してみました。\n結果としてはマージされ、新たな問題として追加されました。\n[https://github.com/type-challenges/type-challenges/issues/35252](https://github.com/type-challenges/type-challenges/issues/35252)\n\nそこでこの発表では、\n・Type ChallengesにPRを出すまでにしたこと\n・実際に作った問題の解説とポイント\nなどについてお話しさせていただこうかと思います。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "Kanon",
      username: "ysknsid25",
      profileImagePath: "ysknsid25.jpg",
      bio: "完全在宅 programmer",
      xId: "ysknsid25",
      githubId: "ysknsid25",
      additionalLink: "https://dev.inorinrinrin.com/",
      affiliation: "",
      position: "",
    },
  },
  {
    id: "52",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Panda-CSS はどのように型安全にしているのか",
    overview:
      "Panda-CSS は型が効く Tailwind という印象を持たれていることが多いように思います。実際、Tailwind と同じような記法で型安全に実装することができるわけですが、どのような方式で型安全にしているのか、というテーマで簡単にお話ししようと思っています。\n\nお話しする内容の詳細について記載します。Panda-CSS では、定義ファイル（panda.config.ts）に対してカラーバリエーション等の定義をします。この定義ファイルが元となり、型定義ファイル（*.d.ts）が出力されています。出力された型定義ファイル（*.d.ts）は、ユーティリティ関数の引数等の型定義に使用されており、開発ではユーティリティ関数を使用するため、型安全に実装することができます。Panda-CSS 以外にも型安全にCSSを実装できるライブラリとして stitches などがありますが、Panda-CSS は事前に定義ファイルから型定義を出力する部分が他のライブラリの異なる点であり、これによって型推論にかかるコストを抑えることができています。ただ、この方式にもデメリットはあり、事前に型定義を出力する、という開発のための事前準備が必要になっています。型を効かせて実装を進めるために、どのタイミングで型に関するコストを支払うか...という問題に帰着します。\n\nまた、型定義ファイル（*.d.ts）の出力の仕組みについても、シンプルな実装で実現されているため、Panda-CSS のライブラリの実装を見つつ簡単にお話しします。\n\n（参考：[Panda-CSS の型定義の出力の実装](https://github.com/chakra-ui/panda/blob/1086769eac8867a8a71ddf2369776fd27eeaebb0/packages/generator/src/artifacts/types/token-types.ts#L6)）",
    time: "16:10 〜 16:50",
    speaker: {
      name: "加藤貴裕",
      username: "doz13189",
      profileImagePath: "doz13189.png",
      bio: "株式会社BOOSTRYでフロントエンドエンジニアをしています。",
      xId: "doz13189",
      githubId: "doz13189",
      additionalLink: undefined,
      affiliation: "株式会社BOOSTRY",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "53",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "Result型、自前で書くか、ライブラリ使うか",
    overview:
      "関数型ドメインモデリングの影響もあり、TypeScriptでResult型を使って、失敗する可能性がある関数を明示的に取り扱う方法が普及しつつあります。しかし、TypeScriptには組み込み型でのResult型は存在しないため、自前で型定義をするか、ライブラリを利用する必要があります。fp-ts、neverthrow, Effect.jsといったライブラリと自前での実装の方法について比較しながら解説します。",
    time: "14:00 〜 14:30",
    speaker: {
      name: "majimaccho",
      username: "majimaccho_",
      profileImagePath: "majimaccho_.jpg",
      bio: "キャディに2024年11月に入社し、CADDi Quoteで見積業務を効率化・高度化させる開発に取り組んでいます。バックエンドの設計において、TypeScriptの型の表現力を活かした設計を推進しています。",
      xId: "majimaccho_",
      githubId: "majimaccho",
      additionalLink: "https://zenn.dev/mj2mkt",
      affiliation: "キャディ株式会社",
      position: "バックエンドエンジニア",
    },
  },
  {
    id: "54",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "ProxyとTypeScriptのおいしい関係",
    overview:
      "本発表では、ReactのフォームライブラリであるConformを題材に、Proxyによる動的なプログラミングにTypeScriptの型を被せることで優れた開発体験が得られることを見ていきます。\nProxyはオブジェクトに対する操作をインターセプトできるデータ型で、ECMAScriptの標準です。\nProxyを使えば、例えばあるオブジェクトのプロパティに対するget操作にログ出力などの処理を挟むことができます。\nしかしConformでは、空オブジェクトをProxyでラップし、プロパティアクセスを全て動的に生成する、という大胆なことをしています。\n一見このような動的なプログラミングとTypeScriptは相性が悪そうですが、\nConformはむしろTypeScriptの型を存分に活かした開発体験を提供しています。\n本発表では、その点についてConformのサンプルコードや内部実装を追いながらお話します。\n\n[https://conform.guide/](https://conform.guide/)",
    time: "16:10 〜 16:50",
    speaker: {
      name: "Motoki Shakagori/ほとけ",
      username: "schwmtl",
      profileImagePath: "schwmtl.png",
      bio: "静的型が好きなWeb developer。最近は公私ともにTypeScriptを書くことが多く、最近はたまにNeverthrowやHonoなどのライブラリに貢献しています。",
      xId: "schwmtl",
      githubId: "m-shaka",
      additionalLink: "https://linktr.ee/mshaka",
      affiliation: "株式会社ベースマキナ",
      position: "Web developer",
    },
  },
  {
    id: "55",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "Standard Schema: スキーマライブラリの統一規格とは何か",
    overview:
      "近年のアプリケーション開発では、ZodやValibotなどのスキーマによるバリデーションをおこなうライブラリが注目をあつめ、ライブラリの選択肢も増えています。ランタイムでのバリデーションに加え、定義したスキーマから推論された型を利用した型安全な開発が実現できるようになりました。\n\nしかし、それぞれのライブラリが提供する機能をつかってスキーマを定義する場合には型を重複して定義する必要がなくなった一方、独自の型をスキーマライブラリに適用する場合には、それぞれのライブラリのためのロジックやアダプタを記述することが必要な状況になっています。このような状況に対して、Zod、Valibot、ArkTypeの作者たちがスキーマライブラリの統一規格「Starndard Schema」を策定し、ライブラリ間の相互運用性を高める運動をはじめました。\n\nこのLTでは、上記の経緯を説明した上で、「Starndard Schema」によって開発者が得られる利点を解説します。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "Nozomu Ikuta",
      username: "nozomuikuta",
      profileImagePath: "nozomuikuta.jpg",
      bio: "2024年10月より現職。業務では、タクシー・ライドシェア配車サービス「newmo」のフロントエンド、バックエンド、ネイティブアプリの開発や、タクシー会社のDXプロジェクト全般に取り組んでいる。技術コミュニティでは、2022年からUnJSメンバーおよびVue.js日本ユーザーグループコアスタッフ、2024年からShibuya.goオーガナイザーおよびGo Conferenceスタッフとして活動している。",
      xId: "nozomuikuta",
      githubId: "nozomuikuta",
      additionalLink: undefined,
      affiliation: "newmo株式会社",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "56",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "令和最新版TypeScriptでのnpmパッケージ開発",
    overview:
      "令和7年になりほとんどのソフトウェアエンジニアはnpmパッケージの開発にTypeScriptを採用する時代になっています。\n\nしかしnpmパッケージの作成は歴史的背景から仕組みが複雑化し、ベストプラクティスも日々変化しています。\n\nこの登壇では、tsc/rollup/esbuildなどのバンドラツールの選定基準やESMに関する設定やTypeScriptでの開発体験向上に寄与するIsolated Declarationsなどtscのオプションを中心に令和最新版のnpmパッケージ開発に必要な知識や設定を共有します。\n\nキーワード:\n- tsconfig.json\n- Pure ESM package\n- provenance\n- Isolated Declarations\n- erasableSyntaxOnly",
    time: "16:10 〜 16:50",
    speaker: {
      name: "odan",
      username: "odan3240",
      profileImagePath: "odan3240.jpg",
      bio: "LINEヤフー株式会社のフロントエンドエンジニアです。\nLIFF SDKやLINEログインのフロントエンドの開発を担当してます。また兼務先のチームではフロントエンド系のカンファレンスの協賛プロジェクトも担当しています。\n\n好きなTypeScriptのオプションはnoUncheckedIndexedAccessです。",
      xId: "odan3240",
      githubId: "odanado",
      additionalLink: undefined,
      affiliation: "LINEヤフー株式会社 / DP Frontend Devチーム",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "57",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "型付け力を強化するための Hoogle のすゝめ",
    overview:
      'TypeScript を使って開発を進める中で、「なんだか実装が複雑になってきたけど、どのように型を付けるべきだろう。そもそもこの実装は正しいのだろうか ...... 🤔」と思い悩む瞬間はありませんか？\n\n実装の複雑さや破綻の兆候は、かなりの確度で型付けのあり方から推察できると考えています。では、そもそも型付けのあり方を学ぶにはどうすれば良いでしょうか？\n\nこの LT では、Haskell の API 検索ツールである "Hoogle" を活用し、型シグネチャを『検索』しながら、TypeScript 開発におけるより良い型の付け方や実装の整理の仕方を学ぶことを目指します。',
    time: "14:00 〜 14:30",
    speaker: {
      name: "TAKASE Kazuyuki (@Guvalif)",
      username: "guvalif",
      profileImagePath: "guvalif.png",
      bio: '普段は EdTech × ML 系プロダクトのプロトタイピングに従事しています。クライアントサイドに適した軽量かつ疎結合なアーキテクチャに関心があり、"関数型プログラミング" を軸にいろいろとアイデアを発表しています ⚡️',
      xId: "guvalif",
      githubId: "Guvalif",
      additionalLink: "https://www.wantedly.com/id/guvalif",
      affiliation: "株式会社ドワンゴ",
      position: "TechPM",
    },
  },
  {
    id: "58",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title:
      "クラサバ境界を失った現代 TypeScript コードベースに秩序をもたらしたい",
    overview:
      "現代の Full-Stack TypeScript 的なコードベースは、DBから UI コンポーネントに至るまで型を一貫して共有できることが多く、これは開発体験に大きく貢献しています。\n一方で、クライアントとサーバーの境界が曖昧になったことで、意図しない情報の露出や、一箇所の変更による型エラーがコードベース全体に伝播して影響範囲が大きいなど、課題も抱えています。\nこのトークでは、いくつかの手法や設計を用いて、Full-Stack TypeScript の恩恵を得ながら、コードベースに秩序を取り戻して安全な開発ができる方法について提案します。",
    time: "14:00 〜 14:30",
    speaker: {
      name: "Yo Iwamoto",
      username: "yoiwamoto",
      profileImagePath: "yoiwamoto.jpg",
      bio: "SmartHR でプロダクトエンジニアをしています。\nNext.js を愛し、Next.js に愛されていません。",
      xId: "yoiwamoto",
      githubId: "yo-iwamoto",
      additionalLink: "https://yo-iwamoto.me",
      affiliation: "株式会社SmartHR",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "59",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "ts-morph実践：型を利用するcodemodのテクニック",
    overview:
      "ts-morphを使うと大量のコードを一度に安全に修正することができることは皆さんご存知かと思います。既存のインポート名やフィールド名をまとめて修正するなどには簡便です。ts-morph自体はあくまでもASTを編集するだけですが、その真の力は、スコープ情報や型情報など、TypeScript自体が提供する機能を活用するコードを記述することによって開放することができます。そのような実用例を紹介します。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "ypresto",
      username: "yuya_presto",
      profileImagePath: "yuya_presto.jpg",
      bio: "2012年に新卒でMIXIに入社。2014年より「みてね」の立ち上げに関わり、Androidを中心に開発を担当。その後、教育・流通系のスタートアップ複数社に籍を移し、開発全般を担いつつ、フロントエンドやUIデザインをリードする役割を担う。2024年1月にLayerXに入社し、バクラク事業部 請求書受取チームにてフロントエンドを中心に開発に携わる。TypeScript自体のパフォーマンスについて調査し、改善のためのPull Requestがマージされた。型魔術師は憧れ。",
      xId: "yuya_presto",
      githubId: "ypresto",
      additionalLink: undefined,
      affiliation: "株式会社LayerX バクラク事業部 プロダクト開発部",
      position: "Software Engineer",
    },
  },
  {
    id: "60",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title:
      "declaration mergingの威力：ライブラリアップデート時の書き換え作業を90%短縮するテクニック",
    overview:
      "TypeScriptライブラリのバージョンアップ作業は、多くの開発者にとって煩雑で手間のかかるものではないでしょうか。 ライブラリの型定義や関数定義の変更により、手作業での修正とそれに伴うエラー対応が発生し、開発効率を低下させます。\n\n本LTでは、declaration mergingというテクニックを活用したライブラリアップデートの効率化方法を紹介します。この手法を用いることで、一定の状況下ではライブラリアップデート時の型書き換え作業を大幅に削減することが可能です。\n\n古い型の検出から新しい型への一括置換まで、具体的な手順とその効果について詳しく解説します。 ライブラリアップデート作業の負担を少しでも軽減する参考になれば幸いです。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "Yuma Takei",
      username: "yutake27",
      profileImagePath: "yutake27.jpg",
      bio: "2022年にEdTechスタートアップのatama plus株式会社に新卒入社\nTypeScriptを用いたフロントエンド開発や教育コンテンツ基盤の開発に従事しています。\nTypeScriptの強みを活かしたメンテナンスしやすく品質の高い開発を追求しています。",
      xId: "yutake27",
      githubId: "yutake27",
      additionalLink: "https://zenn.dev/yutake27",
      affiliation: "atama plus株式会社",
      position: "ソフトウェアエンジニア",
    },
  },
  {
    id: "61",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "コンパイルオプションで変わる型世界",
    overview:
      "TypeScriptを使っている皆さん、tsconfig.json のコンパイルオプションを意識したことはありますか？多くのプロジェクトではすでに設定されており、普段触る機会は少ないかもしれません。しかし、コンパイルオプションの設定次第でTypeScriptの型安全性が大きく変わることを知っていますか？\n\n今回は、あえてTypeScriptのコンパイルオプションをオフにし、TypeScriptの機能を1つずつ剥がしていく ことで、「どの設定が型安全性を担保しているのか」を部分的に体感してもらいます。\n\nTypeScriptをもっと活用するために、ぜひこの機会にコンパイルオプションを見直したり、学びましょう！",
    time: "16:10 〜 16:50",
    speaker: {
      name: "池田敬祐",
      username: "ike_keichan",
      profileImagePath: "ike_keichan.png",
      bio: "東京と関西(大阪＆京都)の二拠点生活をしているエンジニア。勉強会大好きマン。大学で情報系学部に入学し、コンピュータやプログラミングの面白さを知る。\n卒業後、東京のSESの会社に新卒で入社。通常のエンジニア業務だけでなく、社内のエンジニア組織・イベントの運営、グループ会社のテックリード、案件内でのマネジメントなどにも携わる。\n株式会社ハマヤからオファーを受け入社。現在もSESという業務形態でさまざまな開発に携わりながら、自身の知識と経験を活かしてクライアントの課題解決に取り組んでいます。",
      xId: "ike_keichan",
      githubId: "ike-keichan",
      additionalLink: undefined,
      affiliation: "株式会社ハマヤ",
      position: "エンジニア",
    },
  },
  {
    id: "62",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "Project Referencesを活用した実行環境ごとのtsconfig最適化",
    overview:
      "本セッションでは、実行環境に合わせて tsconfig を最適化する手法を解説します。\n\n1 つの tsconfig ですべてを実装すると、ブラウザ向けコードで Node.js のライブラリを誤って使用したり、サーバー向けコードで window にアクセスしてしまったりしても気付けないといった課題が生じます。\nさらに、対応ブラウザに合わせて target や lib を古いバージョンに設定すると、サーバー内や開発時のみで動くコードにおいても最新のメソッドが使えず、逆に ESNext を指定すると古いブラウザで動かないメソッドを使ってしまうリスクが発生します。\n\nこうした課題を解消するために、Project References を駆使して複数の tsconfig を使い分け、各環境に最適化する具体的なアプローチを紹介します。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "Toshiki Itai",
      username: "itatchi3_",
      profileImagePath: "itatchi3_.jpg",
      bio: "2023年にLINE株式会社に新卒入社しLINEスキマニのフロントエンド開発に携わる。現在は社内横断組織でフロントエンド開発のサポートをしたり、フロントエンド関連のイベントを主催したりしています。",
      xId: "itatchi3_",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "LINEヤフー株式会社",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "63",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScriptのmoduleオプションを改めて整理する",
    overview:
      "本発表は、TypeScriptにおけるmoduleオプションについて、その基本的な役割と設定時に注意すべきポイントを体系的に整理します。\n\nmoduleオプションは、TypeScriptが出力するモジュール形式を指定するための重要な設定項目であり、ESModuleやCommonJSの違い、Node.jsにおける実行時の挙動、さらにはビルド結果の違いを正確に理解しておかねば、意図しないトラブルに見舞われるリスクが高まります。\n\nそこで、発表では実際に私が遭遇したトラブル事例をもとに、moduleオプションがもたらす挙動の微妙な違いとその影響を解説し、さらにTypeScript 5.8で導入された`nodenext`の仕様変更がどのような影響を及ぼすのかについても触れます。\n\n主な対象は、日常的にTypeScriptを活用している開発者で、特に`tsconfig.json`の設定に携わる機会のある方々です。基本的なTypeScriptの知識があれば参加可能な内容となっています。\n\n発表を通じて複雑なmoduleオプションに対する苦手意識を払拭し、基礎知識と最新の挙動を理解する方法を知ることで、自信をもって設定に臨めることを目指します。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "おおいし (bicstone)",
      username: "bicstone_me",
      profileImagePath: "bicstone_me.jpg",
      bio: "建設業界で機械設計に従事していたが、テクノロジーの力で世の中の摩擦を解決したいと考えるようになり2019年にWebエンジニアに転向。\n5年以上のVertical SaaSの開発経験を持ち、技術だけにこだわらずに広い視野を持ち、多角的なアプローチで迅速かつ効果的にプロダクトの価値を最大化し、社会やステークホルダーの課題解決に貢献。",
      xId: "bicstone_me",
      githubId: "bicstone",
      additionalLink: "https://bicstone.me/",
      affiliation: "ファインディ株式会社",
      position: "Webエンジニア",
    },
  },
  {
    id: "64",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScript ASTとJSDocで実現するコードの自動削除",
    overview:
      "TSKaigi 2024でTypeScriptのASTに触れたことをきっかけに、ASTを実際の業務で活用してみました。\n\n私の業務ではプロダクトへの機能追加の際にA/Bテストをよく実施しており、テストの結果、企画が棄却された場合は実装したコードを削除します。\nTypeScriptのASTとJSDocを組み合わせることで、不要になったコードの一部を機械的に検出し、安全に削除する仕組みを実現したので、その紹介をしようと思います。\n\n次のような流れでお話しする予定です。\n- 自動化に至った背景と課題\n- ASTとJSDocを組み合わせた課題解決のアプローチ\n- 今後の展望",
    time: "14:00 〜 14:30",
    speaker: {
      name: "川野賢一",
      username: "k_rf_",
      profileImagePath: "k_rf_.jpg",
      bio: "2024年1月に株式会社スタンバイに中途入社。\n求人検索エンジン「スタンバイ」のWebフロントエンド開発や、オウンドメディア「スタンバイplus」の開発に従事。\n日々の業務を楽に楽しくするため、Chrome拡張機能、Slack App、GASなど、TypeScriptを使った社内ツールの開発にも積極的に取り組んでいる。",
      xId: "k_rf_",
      githubId: "k-rf",
      additionalLink: undefined,
      affiliation: "株式会社スタンバイ",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "65",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title:
      "これは型破り？型安全？真実はいつもひとつ！（じゃないかもしれない）TypeScriptクイズ〜〜〜〜！！！！！",
    overview:
      "TypeScriptの最大の強みであると言っても過言ではない型システム、時に役に立ち、時に開発の効率を下げてしまうこともあるかもしれません。\n実際の現場で出会いそう or 出会った or そんな使い方しねーよ！など TypeScript の理想的な使い方や、少しクセの効いた使い方、はたまた型破りな使い方をクイズ形式でテンポよく紹介していきます！参加者が実際にクイズに参加してもらうような形式のLTにしたいと思ってます！\n\n題材を選んだ理由は、型安全と型破り（今回のTSkaigiのテーマ）という二つのアプローチを実際に使い分けることで、開発者がこれから出会うであろうコードや一生見ないようなコードを紹介することで、セッションに参加していただいた皆様のこれからのTypeScriptの使い方をより効率的に活用するための知識を提供したいと考えたからです。\nクイズ形式で進めることで、参加者が積極的に学びながら楽しめる内容にし、型の概念や実践的な技術を自然に理解してもらうことを目的としています！",
    time: "14:00 〜 14:30",
    speaker: {
      name: "君田 祥一",
      username: "kimi_koma1111",
      profileImagePath: "kimi_koma1111.jpg",
      bio: "新卒で営業職を経験後、エンジニアに転身。不動産テックベンチャーにてフロントエンドエンジニアとしてのキャリアをスタートしました。\nその後、別の企業でふるさと納税ポータルサイトのフロントエンド開発に携わりました。\n現在はトグルホールディングス株式会社のCTO室にてAIイネーブルメントを担当しています。",
      xId: "kimi_koma1111",
      githubId: "kimitashoichi",
      additionalLink: "https://kimitashoichi.github.io/Profile",
      affiliation: "トグルホールディングス株式会社",
      position: "プロダクトエンジニア",
    },
  },
  {
    id: "66",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "バリデーションライブラリ徹底比較",
    overview:
      "TypeScriptにおけるバリデーションライブラリの選定基準と比較について解説します。Zod・Typia・Valibot・ArkType等を取り上げ、型安全性、記述の簡潔さ、パフォーマンス、他ライブラリへの移行のしやすさや依存度などの観点から比較します。また、実際のコード例を交えて実用的な知見を提供します。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "田中勇太",
      username: "nayuta999999",
      profileImagePath: "nayuta999999.jpg",
      bio: "フロントエンドを頑張って書いています",
      xId: "nayuta999999",
      githubId: "Yuta123456",
      additionalLink: undefined,
      affiliation: undefined,
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "67",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "VueUse から学ぶ実践 TypeScript",
    overview: `# トークの主題
VueUse（Vue.js用の人気ユーティリティライブラリ）のコードベースから、TypeScript の型機能の実践的な使い方を紹介します。
TypeScript の基本を理解している方を対象に、実際のOSSから学べる型システムの利用例をお伝えします。

# 発表内容
VueUse の以下の2つの関数に注目し、実際のコードを通じてその活用方法を解説します。
## useClipboard
関数オーバーロードと Conditional Types の連携
## useChangeCase
複数の型機能の組み合わせによる高度な型生成`,
    time: "14:00 〜 14:30",
    speaker: {
      name: "ツノ",
      username: "2nofa11",
      profileImagePath: "2nofa11.jpg",
      bio: "弁護士ドットコム株式会社のクラウドサインというプロダクトを作っています。\nSIerや社内SEを経験した後、2022年にフロントエンドの面白さに気づき、それ以来熱中しています。",
      xId: "2nofa11",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "弁護士ドットコム株式会社",
      position: "フロントエンドエンジニア",
    },
  },
  {
    id: "68",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "型推論の扉を開く―集合論と構造的型制約で理解する中級へのステップ",
    overview: `TypeScript の型システムを「実行時の値の型」としてではなく、「その変数が取り得る値の集合（ドメイン）」として捉える視点を提示し、初心者から中級者へのステップアップのきっかけを作るための発表です。

TypeScript を学ぶ上で、「型」はしばしば静的なラベルのように扱われがちですが、本発表では 「型＝値の集合」 という視点を導入し、型推論や型操作を数学的な集合論の観点から解説します。`,
    time: "14:00 〜 14:30",
    speaker: {
      name: "栃川晃佑",
      username: "Web_TochiTech",
      profileImagePath: "Web_TochiTech.jpg",
      bio: "2020年に大阪大学基礎工学部知能システム学科を卒業後、スマサテ株式会社にてAI賃料査定システム「スマサテ」の新規開発に従事。\n2023年に株式会社PLEXへ入社し、建設業界向けSaaS「サクミル」に参画し新規開発に従事し、現在は同社のエッセンシャルワーカー向け転職サービス「PLEX JOB」の新規開発・運用に携わる。\n「事業」と「人」を育てることができるエンジニアリーダを目指し日々奮闘中。大阪に住むこととマチュピチュを見ることが夢です。",
      xId: "Web_TochiTech",
      githubId: undefined,
      additionalLink: "https://product.plex.co.jp/",
      affiliation: "株式会社プレックス / PlexJob開発チーム",
      position: "バックエンドエンジニア",
    },
  },
  {
    id: "69",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "型がない世界に生まれ落ちて 〜TypeScript運用進化の歴史〜",
    overview:
      "5年前、私たちのプロジェクトではJavaScript or flowがコードベースの大部分を占めており、フロントエンドにはTypeScriptの厳密な型が導入されていませんでした。\nそのため、型の恩恵を十分に受けられず、運用面での課題が多くありました。\nしかし現在、最も開発が活発なリポジトリはTypeScriptオンリーとなっており、ts-ignoreもほとんど存在しない状態になっています。\nさらに、フロントエンドのテストカバレッジも90%近くに達しており、型の厳密性とテストの充実が相まって、より堅牢な開発環境が実現されています。\nただ「型安全なコードが理想だから」といった議論だけでは、このような健全なコードベースは実現できませんでした。\n現場では、どのように周囲を巻き込み、組織として継続的に運用していくかが重要なポイントとなります。\n本発表では、5年前とのBefore ~ Afterの経緯を組織論の視点も交えながらお話しします。TypeScriptの運用に悩んでいる方、型安全なコードベースを目指しつつも組織の壁にぶつかっている方にとって、実践的な知見を共有できればと思います。",
    time: "16:10 〜 16:50",
    speaker: {
      name: "成原 聡一朗",
      username: "feel_sooo_baaad",
      profileImagePath: "feel_sooo_baaad.jpg",
      bio: "1988年、札幌市出身。\n23歳の時、WEBの世界に魅了され、独学でデザインなどを学習し、WEBデザイナーとしてキャリアをスタート。\n受託制作会社で数年キャリアを積んだのち、WEBにおけるJavaScriptの可能性に魅了され、フロントエンドエンジニアに転向。\nスペースマーケットに入社後、エンジニアリング領域でのマネージメントの面白さ、奥深さに気がつきエンジニアリングマネージャーへ。\n2023年1月より、エンジニア組織全体を統括するVPoEに就任。",
      xId: "feel_sooo_baaad",
      githubId: undefined,
      additionalLink: "https://suzuri.jp/VoodooRhythm",
      affiliation: "株式会社スペースマーケット",
      position: "VPoE",
    },
  },
  {
    id: "70",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "INVITATION",
    title: "The New Powerful ESLint Config with Type Safety",
    overview:
      "Introduction to the new flat config and the new possibilities it enables, the new utilities and ecosystem around it, and how you can do it in a type-safe way.",
    time: "11:00 〜 11:40",
    speaker: {
      name: "Anthony Fu",
      username: "antfu",
      profileImagePath: "antfu.jpg",
      bio: "https://antfu.me/talks#eslint-one-for-all-made-easy",
      xId: "antfu7",
      githubId: "antfu",
      additionalLink: "https://antfu.me/",
      affiliation: "NuxtLabs",
      position: "Design Engineer",
    },
  },
  {
    id: "71",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "ORGANIZER",
    title: "TypeScriptネイティブ移植観察レポート TSKaigi 2025",
    overview:
      "TypeScriptのネイティブ実装への移植は、TSKaigi 2025のプロポーザル締切直後の3/11に発表されました。発表から2ヶ月が経ち、発表直後の大盛り上がりは落ち着いて、粛々と開発が進んでいます。ネイティブ実装への移植によって何がどう変わるのかをおさらいし、GitHub上を中心として様々に明かされた経緯や展望をまとめて紹介します。",
    time: "10:00 〜 10:40",
    speaker: {
      name: "berlysia",
      username: "berlysia",
      profileImagePath: "berlysia.jpg",
      bio: "フロントエンドに強いWebエンジニア。TypeScriptやLinterまで広く関心。TSKaigi 2025ではトーク周りを統括。株式会社ドワンゴではWebフロントエンドをリード。今回は縦書きCSSの話はしません。",
      xId: "berlysia",
      githubId: "berlysia",
      additionalLink: "https://berlysia.net/",
      affiliation:
        "一般社団法人TSKaigi Association、株式会社ドワンゴ 教育事業本部",
      position: "Webフロントエンドエンジニア",
    },
  },
  {
    id: "72",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title:
      "撤退危機からのピボット：4年目エンジニアがリードする TypeScript で挑む事業復活",
    overview:
      "入社4年目のエンジニアがリードを務めた CARTA HOLDINGS のゲームメディア新規事業。順調な矢先に予期せぬ急落に見舞われ、事業は深刻な危機に陥りました。撤退も視野に入る中、ビジネスサイドとエンジニアが一体となり事業ピボットを決断、TypeScript を活用して事業要求に応える復活に踏み切りました。本セッションではこの厳しい状況下で、TypeScript を武器にどのように新プロダクト開発を推進し、事業課題の解決に貢献したか、そのリアルな経験をお話しします。このセッションは「技術を武器に事業課題の解決へ挑戦したい」と考えているエンジニアの方におすすめです。セッションを通じて、目の前の事業課題に対し、技術を活用しアクションに繋げる考え方・取り組み方を伝えます。",
    time: "12:30 〜 13:30",
    speaker: {
      name: "横沢 諒",
      username: "cartaholdings",
      profileImagePath: "cartaholdings.png",
      bio: "2022年に株式会社 CARTA HOLDINGS へ新卒入社。メディア事業を運営する事業部 Lighthouse Studio にて、ゲーム攻略サイトの機能開発やパフォーマンス改善を担当。2023年より新規事業としてメディアの立ち上げにゼロから参画。現在はその事業のグロースに奮闘する傍ら、リードエンジニアとして事業部の開発チームを牽引している。",
      xId: "yokkori_dev",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "株式会社CARTA HOLDINGS",
      position: "リードエンジニア",
      company: "株式会社CARTA HOLDINGS",
    },
  },
  {
    id: "73",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title: "推し活を支えるAngularアプリ量産体制",
    overview:
      "TwoGateでは音楽アーティストやタレントYouTuber, VTuberなどの、イベントグッズ販売やチケット販売などを支えるマルチテナントサービスを複数提供しています。 これらのサービスは、Webアプリやモバイルアプリで提供しており、Angular, Ionicを活用して開発しています。 テナント総数は200を超えており、これらを10人程度のチームで量産するためには、ローコード化して個々のテナントを立ち上げるコストを下げ、運用を効率化する必要があります。 本セッションでは、Angular Schematics, TypeScriptを活用して、テナントごとにカスタマイズしたマルチテナントサービスを量産する体制の構築についてお話します。",
    time: "12:30 〜 13:30",
    speaker: {
      name: "Hayato Okumoto",
      username: "twogate",
      profileImagePath: "twogate.jpg",
      bio: "株式会社TwoGateの取締役CTO。創業時から開発チームを組成しリードしてきた。 インフラ、バックエンド、フロントエンドにわたる幅広い技術選定と開発を担当し、全体の技術戦略を指揮している。",
      xId: "falcon_8823",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "株式会社TwoGate",
      position: "取締役CTO",
      company: "株式会社TwoGate",
    },
  },
  {
    id: "74",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title: "生成AI時代にフルスタックTypeScriptの夢を見る",
    overview:
      "Nstockでは現在「株式報酬SaaS事業」、「セカンダリー事業」、「スタートアップへの再投資事業」の3つの事業がそれぞれ独立して開発を進めています。「株式報酬SaaS事業」では完全にクライアントサイドで動作するStaticなNext.jsを、「セカンダリー事業」ではReact Router v7を活用したサーバーサイドレンダリング構成を選択しています。 この異なるアプローチは各事業の課題とリソースを考慮した戦略的判断です。本トークでは、生成AIがもたらす開発パラダイムの変化を踏まえつつ、「スタートアップへの再投資事業」におけるフルスタックTypeScriptの可能性と、AIとの協働を視野に入れた技術選定の新たな判断基準について考察します。",
    time: "12:30 〜 13:30",
    speaker: {
      name: "matano",
      username: "nstock",
      profileImagePath: "nstock.jpg",
      bio: "2020年に株式会社サイバーエージェントにフロントエンドとして新卒入社。エンタメサービスの立ち上げを担当。2024年1月1日よりNstockに入社。もっぱらインドア派ですがサイクリングは好きです。特技は昼夜逆転。",
      xId: "matamatanot",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "Nstock株式会社",
      position: "Software Engineer",
      company: "Nstock株式会社",
    },
  },
  {
    id: "75",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title: "AsyncAPIを使ってPub/Subを型安全にする",
    overview:
      "AVITAでは、一部のリアルタイム通信機能の開発に Pusher Channels を利用しています。本LTでは、AsyncAPI と modelina を活用してイベント定義の型を自動生成し、フロントエンドとバックエンド間で発生していたイベント名・チャンネル名の認識ずれ問題を解消する手法をご紹介します。",
    time: "12:30 〜 13:30",
    speaker: {
      name: "高橋 修平",
      username: "avita",
      profileImagePath: "avita.png",
      bio: "2023年、AVITA株式会社に入社。フロントエンドエンジニアとして、アバター接客ツール「AVACOM」の開発に従事。今秋のスポーツモデルの大会に向けて絶賛減量中。",
      xId: undefined,
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "AVITA株式会社 開発局",
      position: "フロントエンドエンジニア",
      company: "AVITA株式会社",
    },
  },
  {
    id: "76",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title: "バックエンドのコードファーストなOpenAPIスキーマ駆動開発",
    overview:
      "バックエンドのコードから自動で openapi.json を生成できるWebフレームワークを活用し、 「スキーマ駆動開発」を進めている社内の実践事例を紹介します。 開発の流れや、コードファーストにすることで得られたメリット、現場で工夫したポイントについてお話しします。",
    time: "12:10 〜 13:10",
    speaker: {
      name: "鳥居 雄仁",
      username: "kinto-technologies",
      profileImagePath: "kinto-technologies.jpg",
      bio: "KINTOテクノロジーズ株式会社所属。  共通サービス開発グループでは、KINTO会員基盤のフロントエンド開発（TypeScript, Next.js）を担当。 AI開発グループでは、生成AIを活用したプロダクト開発でバックエンド（TypeScript, Go, Python）、フロントエンド（TypeScript）、インフラ（Azure, AWS）を幅広く担当しています。",
      xId: "yu_torii",
      githubId: undefined,
      additionalLink:
        "https://blog.kinto-technologies.com/authors/dc770e2b-4ed2-5f16-81ae-fb103d5b7278/",
      affiliation:
        "KINTOテクノロジーズ株式会社 共通サービス開発グループ/AI開発グループ",
      position: "フロントエンドエンジニア、バックエンドエンジニア",
      company: "KINTOテクノロジーズ株式会社",
    },
  },
  {
    id: "77",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title: "バランスを見極めよう！実装の意味を明示するための型定義",
    overview:
      "TypeScript には優秀な型推論の仕組みがあり、多くの型注釈を省略してコードを書いても問題なく開発が行えます。 JavaScript では一部、引数や戻り値を省略すると undefined として評価され、構文上もランタイム上もそれだけではエラーにはなりません。このように、いろいろなものを暗黙的にしたままコードを書いていても、静的型解析によりある程度の堅牢性が担保できるのは TypeScript の良いところです。  しかし、長期にわたり複数人でメンテナンスするコードベースでは、あえて明示的に書いておいたほうが良いもの（型注釈, 引数, etc.）があります。暗黙的にしておくと、将来の変更によって実装当初の前提や結果が崩れるだけでなく、それに気が付きにくくなる場合があるからです。  ダイニーではこれを防ぐために意識していることがあります。今回はその中からいくつかピックアップしてご紹介します。",
    time: "12:10 〜 13:10",
    speaker: {
      name: "畑田祥太",
      username: "dinii",
      profileImagePath: "dinii.jpg",
      bio: "2020年に株式会社メルカリにフロントエンドエンジニアとして新卒入社。2022年10月より株式会社ダイニーに入社し、システム障害時のクライアントアプリケーションの可用性向上や、フロントエンド・バックエンドの基盤整備などをほぼ全てTypeScriptで行っている。Spa LaQuaが好き。",
      xId: "whatasoda",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "株式会社ダイニー",
      position: "プラットフォームエンジニア",
      company: "株式会社ダイニー",
    },
  },
  {
    id: "78",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title:
      "PandaCSSでつくる、型で守られたスタイリング基盤 ～TypeScript × デザインシステム管理の実践アーキテクチャ～",
    overview:
      "型定義を活かした安全で効率的なスタイリングは、開発体験を左右する重要な鍵となります。  「PandaCSS」は、型安全なAPIと柔軟なデザイントークン管理を備えることで、ビルド時のエラー検出からレイアウト崩れの防止までを強力にサポートするCSS-in-JSライブラリです。TypeScriptとの組み合わせにより、カラーやタイポグラフィなどのデザイントークンをコード全体で一貫して扱えるため、デザインシステムを踏まえたスタイリング基盤の構築を容易に実現できます。   本セッションでは、アジャイルエフェクトチームがプロダクト開発にPandaCSSを導入、1年間運用して得た知見をご紹介します。",
    time: "12:10 〜 13:10",
    speaker: {
      name: "田代 敬太",
      username: "leverages",
      profileImagePath: "leverages.jpg",
      bio: "新卒では広告制作会社にて、WebGLやJavaScriptを使ったインタラクティブなサービスサイト等の開発にフロントエンジニアとして従事。 2023年にレバレジーズ株式会社に入社し、アジャイル支援SaaS「AgileEffect」の立ち上げに参画。以来、フロントエンドを中心に開発基盤の構築をリードしています。",
      xId: "Dendam_X",
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "レバレジーズ株式会社 アジャイルエフェクトチーム",
      position: "エンジニア",
      company: "レバレジーズ株式会社",
    },
  },
  {
    id: "79",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SPONSOR_LT",
    title:
      "TSでシステムが堅牢になっていくさまをスポンサーになるたびに報告 〜型定義から始めるリファクタリング編",
    overview:
      "弊社ではNuxt ☓ TypeScriptを利用してフロントエンド開発を行っています。 開発開始から約3年ほど経過し、複雑化したコードベースを型定義を起点にリファクタリングした事例を紹介します。",
    time: "12:10 〜 13:10",
    speaker: {
      name: "井上 心太",
      username: "craft-bank",
      profileImagePath: "craft-bank.jpeg",
      bio: "2014年にリクルートに新卒入社し新規事業開発に4年従事。その後ユニオンテック株式会社に1人目のエンジニアとして入社しエンジニアチームの発足・内製体制の構築などを経験。2021年にユニオンテックからMBOする形で設立されたクラフトバンク株式会社に移籍し、現在はVPoEとして開発チームのマネジメントをしながら日々TypeScriptを書いている。",
      xId: undefined,
      githubId: undefined,
      additionalLink: undefined,
      affiliation: "クラフトバンク株式会社",
      position: "VPoE",
      company: "クラフトバンク株式会社",
    },
  },
  {
    id: "80",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "EVENT",
    title: "OST (Open Space Technology)",
    overview:
      "TypeScriptユーザー同士で自由に議論し、学び合えるOST（オープンスペーステクノロジー）を開催します。OSTは、参加者全員が主役となり、自由にテーマを提案しながら議論を進める形式です。TypeScriptに関する疑問や意見を共有し、知見を深める絶好の機会です。これだけ多くのTypeScriptユーザーと直接話せるチャンスはなかなかありません。ぜひお気軽にご参加いただければと思います。\n\n事前申し込みは不要ですが、座席には限りがあり、先着順でのご案内となります。自由で活発な議論をお楽しみください。\n\nまた、2日目の11:00～16:30まで、3階レバレージズトラック後方にてOSTのテーマを募集しています。TypeScriptについて「話したい」「聞きたい」テーマをぜひお寄せください。ご提案いただいたテーマは運営チームで確認し、議題決定の参考とさせていただきます。",
    time: "17:00 〜 18:00",
    // NOTE: 画面には表示しないが詳細ページの URL のために設定
    speaker: {
      name: "ost",
      username: "ost",
    },
  },
];

// TODO: 最終的には username のみを見る
export const usernames = talkList.map((talk) => ({
  username: talk.speaker.username || talk.id,
}));

export const talkUsernames = talkList
  .filter((talk) => talk.speaker.username)
  .map((talk) => ({
    username: talk.speaker.username,
  }));
