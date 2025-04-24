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
  KEYNOTE: {
    name: "基調講演",
    color: "#0CA90E",
  },
  LT: {
    name: "LT",
    color: "#C0BA02",
  },
  SPONSOR_LT: {
    name: "スポンサーLT",
    color: "#E53D84",
  },
};
export type TalkType = keyof typeof TALK_TYPE;

export type Talk = {
  id: string;
  eventDate: EventDate;
  track: Track;
  talkType: TalkType;
  title: string;
  overview: string;
  speakerName: string;
  time: string;
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
    speakerName: "Kazushi Konosu",
    time: "13:40 〜 14:10",
  },
  {
    id: "2",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "checker.tsに対して真剣に向き合う",
    overview:
      "## トークの主題\n\nTypeScript//src/compiler/checker.ts でどういう処理を行なっているかを時間の限りでどういう風に調べたのか、どういう風に処理を調べると良いのか悪いのか、 checker.ts の中身の処理について話す。\n\n## 題材を選んだ理由\n\nTypeScript//src/compiler/checker.ts が行数が多いというのは有名だがちゃんと読んだことがある人は自分自身を含めて少ないのではというのが理由でこの機会を通して自分自身も checker.ts についての理解を深めたい為。\n\n## 発表内容\n\nTypeScript//src/compiler/checker.ts が何をしているのか、どの辺にどういう処理が書かれているのか。TypeScriptのコンパイラの処理の中で TypeScript//src/compiler/checker.ts が他のファイルとの依存関係。",
    speakerName: "kkk4oru",
    time: "11:50 〜 12:20",
  },
  {
    id: "3",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "SignalとObservable―新たなデータモデルを解きほぐす",
    overview:
      "近年Webフロントエンドの文脈で台頭しつつある Signal（シグナル）という概念をご存知ですか？ECMAScriptへの標準化の提案も出ているほどですが、実はSignalの歴史は長く、その文脈は数十年前から存在します。それがなぜ最近になって注目されているのでしょうか。また、同じくWeb標準には Observable という概念も組み込まれつつあります。おなじみの Promise との間にどのような関係があるのでしょうか。これらをWebフロントエンド開発におけるReactivity（リアクティビティ）をキーワードにしながら考えていきます。題材として具体的なライブラリ・フレームワークの内容にも触れますが、予備知識は必要ありません。\n\n## 対象\n- GUIプログラミングの話題が好きな人\n- Webフロントエンドの話題が好きな人\n\n## アウトライン\n- Signalとは何か\n- ReactivityとSignal\n- Observableとは何か\n- ObservableとPromise\n- ObservableとSignal",
    speakerName: "lacolaco",
    time: "13:40 〜 14:10",
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
    speakerName: "Masaki Suzuki",
    time: "15:50 〜 16:20",
  },
  {
    id: "5",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "Valibot Schema Driven UI - ノーコードWebサイトビルダーを実装してみよう！",
    overview:
      "近年 Bubble や Webflow、日本だと STUDIO などのノーコードプラットフォームが注目を集めています。これらのツールは、プログラミングの知識がなくてもユーザーが思い思いの UI を構築できる機能を提供し、アプリケーション開発の民主化に貢献しています。\n\nこのようなノーコードでユーザーが自由に UI を組み立てる仕組みはどのように構築されているのでしょうか。一見複雑に見えますが、基本的な考え方を理解すれば独自のエディタを構築することは難しくありません。アーキテクチャの中核となるのは、動的な UI コンポーネントを表現するスキーマ定義と、それを実際の UI 要素に変換する仕組みです。\n\n本発表では、スキーマバリデーションライブラリであるValibotとReactを利用し、型の力を最大限に活用して動的なUIを作る仕組みを紹介します。\n具体的には、Text, Button, Imageなどの複数のUI要素の表現・要素間の親子関係の定義・スタイリングの実現・JavaScript実行までを取り扱います。\n\n題材を選んだ理由は、例に挙げたノーコードプラットフォームでなくとも近年のUI実装はどんどん複雑化しており、どのようなプロダクトでもこうした動的UI実装が必要になるケースは増えています。とはいえこの実装方法が紹介されることは少ないです。そうした中で一つのきっかけとなれたらと思い今回発表できたらと考えています。\n",
    speakerName: "Miyagi Hirotaka",
    time: "16:30 〜 17:00",
  },
  {
    id: "6",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "高度な型付け、どう教える？",
    overview:
      "TypeScript の高度な型付けを導入すると型システムの恩恵を受けられる一方で、複雑さが増して可読性や学習コストの課題が生じます。チームの全員が型の専門家でなくとも最低限のレビューやメンテナンスができることは、プロジェクトの健全な運用に不可欠です。本セッションでは高度な型を導入する際に直面した課題や、それをチームにどう伝え理解を促すかについて発表者の試行錯誤を交えて紹介します。高度な型付けの学習ハードルをどうすれば下げられるか、どんな説明や工夫が有効なのかを考察し実践的な知見を共有します。",
    speakerName: "progfay",
    time: "11:50 〜 12:20",
  },
  {
    id: "7",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "Full-Stack TypeScript x GraphQLで実現する漸進的アーキテクチャ",
    overview:
      "自社プロダクトの本格スケールに向け、ノーコードで3年開発・運用してきた150画面・1500カラムの大規模システムを移行元システムの開発を継続しながら1年半でフルリプレイスした経験から、TypeScript を軸にした漸進的に進化可能なアーキテクチャのポイントを紹介します。\n\n本システムでは GraphQL Schema / Prisma Schema という2種類のスキーマを組み合わせることで、通信スキーマと型情報を一貫管理し、安定した開発フローと型による堅牢性を実現。複雑なビジネスロジックを Union 型で表現して排他チェックで仕様追加に対応するなど、コードベース全体を型で貫くことで TypeScript の威力が活きるケースが多数ありました。\nまた、フロントエンドは Next.js を、バックエンドは GraphQL を採用しながら、単一の Node.js プロセスにまとめることで、立ち上げ期に求められるシンプルな開発と運用を実現しています。\n\n「フロントとバックで同じ言語を使うと開発者が学ぶことが減って楽になる」という TypeScript のメリットはよく挙げられますが、事業やサービスの高度化に伴って必ずしもそれだけでは解決できない課題も生じます。UI/UX やサーバーサイドアーキテクチャなど、必要な知識は両者で大きく異なるからです。さらにネイティブアプリや外部連携が始まると、さまざまな言語・技術が混在していく可能性も高いでしょう。\n\nそこで GraphQL SDL を取り入れた Full-Stack TypeScript からスタートすることで、開発初期のスモールスタートから拡大フェーズへと漸進的に切り替えていけるということが、本発表で強調したいポイントです。TypeScript の技術的特性がどのようにそれを可能にし、開発を支えているのか。変化し続ける実サービスで TypeScript を使う魅力をお伝えしたいと思います。",
    speakerName: "Sohei Takeno",
    time: "11:50 〜 12:20",
  },
  {
    id: "8",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TypeScriptとは何であって何でなく、誰のもので、どこへ向かうのか",
    overview:
      "TypeScriptは特殊なプログラミング言語です。TypeScriptコードをそのまま解釈して実行できる主要な処理系は存在せず、実際には高級な動的型付け言語であるJavaScriptへコンパイルしてから実行されています。\n\nこのコンパイル処理は、型に関する構文を取り除くという単純な仕組みであり、TypeScript CompilerやBabel、SWC、esbuild、oxcなど、さまざまなコンパイラ実装が存在します。一方、実際の型チェックは複雑で、現状ではMicrosoftが開発するTypeScript Compiler以外には事実上まともに対応できる実装はありません。\n\nこうした状況の中、Node.jsがTypeScriptを公式にサポートするようになったり、JavaScriptの標準化委員会であるTC39でType Annotationが提案されたり、Biomeなどのリンターがtype-aware lintingの実現に取り組むなど、TypeScriptにまつわる議論が活発化しています。\n\n本セッションでは、こうしたTypeScriptの言語特性を踏まえながらエコシステムの現状を整理し、今後TypeScriptとその周辺がどのように発展し、それが私たちTypeScriptプログラマーにどのような影響を与えるのかを考察します。",
    speakerName: "Sosuke Suzuki",
    time: "16:30 〜 17:00",
  },
  {
    id: "9",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "堅牢なデザインシステムをつくるためのTypeScript活用",
    overview:
      "本セッションでは、TypeScriptを活用してFigmaのデザインデータ資産を効率的にコードへ反映させ、デザインシステムを堅牢に構築・運営する手法を紹介します。\n\nFigma APIやStyle DictionaryなどのツールとTypeScriptを組み合わせて活用することでデザイントークンやコンポーネントを利用する際の型安全性を確保でき、これによりデザインシステムのルールを自然なかたちで強制することができます。\n\nさらに生成AIドキュメント自動生成や、Figma APIを利用したコンポーネント情報の自動取り込みなど、実際の開発現場で役立つ具体的な事例を交えて解説します。\n\nこの題材を選んだ理由は、デザインと実装の橋渡しをよりシンプルかつ堅牢に行うことで、チーム全体の生産性向上に直結するソリューションを提供できると確信しているからです。\n\n参加者には、TypeScriptの静的型チェックを活かした実践的な技術と運用ノウハウを体感していただき、より一層のUI品質向上を目指すヒントを得ていただきたいと考えています。",
    speakerName: "takanorip",
    time: "14:20 〜 14:50",
  },
  {
    id: "10",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Rust製JavaScript/TypeScript LinterにおけるPluginシステム実装の裏側",
    overview:
      "この発表では、Rust製JavaScript/TypeScript LinterがPluginシステムの実装について話します。\n\nESLintはそのPluginシステムによって、さまざまなLintルールが生まれ、コミュニティを拡大させました。一方ここ数年でRust製JS/TS Linterの採用は増えつつあります。BiomeはGritQLによるPluginシステムを2.0でリリースしようとしています。deno lintではv2.2.0以上で実験的機能としてJS/TSによるPlugin Ruleを書くことが可能です。\n\n本LTでは主にBiomeとDeno LintのPluginシステム実装の裏側に着目し、整理・共有することを目指します。",
    speakerName: "unvalley",
    time: "17:10 〜 17:40",
  },
  {
    id: "11",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TypeScriptとReactで、WAI-ARIAの属性を正しく利用する",
    overview:
      "WAI-ARIAは、スクリーンリーダーなどの支援技術とWebコンテンツを連携させるための仕様です。複雑なWebアプリケーションのアクセシビリティを高めるためには、時としてWAI-ARIAの提供する role 属性や aria-* 属性を使わなければなりません。WAI-ARIAの仕様では、利用できる属性の組み合わせに制約がありますが、現在のTypeScript (tsx) + React の環境では、残念ながらこの制約に対するサポートは不十分です。このセッションではTypeScriptによるWAI-ARIA属性へのサポートの現状を紹介し、型安全性によってWAI-ARIAを正しく利用できるようにするための具体的な実装について解説します",
    speakerName: "ymrl",
    time: "15:50 〜 16:20",
  },
  {
    id: "12",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "TypeScriptエンジニアがAndroid開発の世界に飛び込んだ話",
    overview:
      "Webフロントエンド開発とAndroidネイティブ開発は一見まったく異なる世界に思えますが、TypeScriptとKotlin、Web FrontendにとAndroid Appには驚くほど多くの共通点があります。本セッションでは、バックエンドおよびフロントエンド開発を15年経験し複数の言語環境を経験してきたエンジニアが、Androidアプリ開発に挑戦した経験を共有します。複数の言語パラダイムを渡り歩いてきた視点から、両言語の類似パターン、設計思想の共通点、そして相違点から学んだ貴重な教訓を紹介し、Web Frontend領域のエンジニアにAndroidアプリ開発の敷居を下げられるようなお話をします。",
    speakerName: "yui_tang / Yui Sakamoto",
    time: "15:50 〜 16:20",
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
    speakerName: "上田慶祐",
    time: "16:30 〜 17:00",
  },
  {
    id: "14",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "AI Agents Enablement in TypeScript",
    overview:
      "私が所属するユビーでは、Full-Stack TypeScriptのコードベースにおいて、CursorやDevinをはじめとするAI Agentを活用した開発をいち早く実践してきました。その中で、人間のエンジニアと同様にAI Agentをイネーブルメントする重要性が見えてきました。\n本発表では、Full-Stack TypeScript環境でAI Agentを最大限に活用するためのイネーブルメント戦略をお伝えします。\n\nまず、エンジニア（人）による開発とAI Agentによる開発を比較しながら、AI Agentの特性とイネーブルメントの重要性を理解します。\n\n次に、具体的なイネーブルメント戦略をご紹介します。実感できるようにデモを交える予定です（AIのデモはドキドキしますね！）。例えば次のようなテーマを含みます。\n\n- AIが解釈しやすいアーキテクチャ\n- 静的解析・自動テストによるAIの自走\n- デザインシステムによる「コーディング」以外の支援\n\n最後に、TypeScriptエコシステムとAI Agentの親和性、およびエコシステムの進化を見据えた展望をお話します。\n\n本発表を通じて、皆さんがよりAI Agentを使いこなす手助けになればと思うと同時に、TypeScriptにフォーカスしたAI Agent活用の議論がより盛り上がるきっかけになることを期待します。",
    speakerName: "小谷 優空",
    time: "15:00 〜 15:30",
  },
  {
    id: "15",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Language Serverと喋ろう",
    overview:
      "普段開発で何気なく使っている「コード補完」「Go to Definition」「変数リネーム」のような機能を、エディタ操作以外で呼び出したいと思ったことはありませんか。このような機能は、コア機能を提供する「Language Server」とエディタ拡張がやりとりすることで実現されている言語が多いです。Language Server Protocol (LSP)はそのプロトコルであり、様々な言語機能について、言語やエディタに依存しない汎用的なインターフェースが規定されています。本来LSPは、エディタごと・言語ごとに言語サポートを実装する労力を省くためのものですが、エディタ外で前述の機能をprogrammaticに呼び出すことにも利用できます。\n\n私はアプリケーションの挙動やコードを精査して脆弱性を探す業務をサポートするツールとして、セキュリティ的に怪しいコードに対し、その呼び出し元のチェーンを洗い出すことで影響範囲を調べるツールを開発しています。\nTSに特化した処理をするならCompiler APIも良い選択肢ですが、それと違って様々な言語に適用できる点でLSPに注目しています。\n\nセッションでは以下について話す予定です。\n- LSPでどんなことができるか (どのようなメソッドがあるか)\n- LSPを使った自作ツールの紹介\n- Language Serverとやりとりするサンプルコードと仕組みの解説\n- Compiler APIとLSPの比較",
    speakerName: "ぴざきゃっと",
    time: "14:20 〜 14:50",
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
    speakerName: "プログラミングをするパンダ",
    time: "13:40 〜 14:10",
  },
  {
    id: "17",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "TSConfigからTypeScriptの世界を覗く",
    overview:
      "TSConfigはプロジェクトのTypeScriptの振る舞いを規定するものです。\nしかしながら、TSConfigのオプションは無数に存在していることや、一度設定してしまえば特に問題なく動作することからしばしばその存在を軽視されがちです。\nTSConfigを理解し、適切に設定すれば、TypeScriptそれ自体の理解を深めることやソフトウェア開発の安全性の向上に繋がります。\nまた、TypeScriptのアップデートに伴い、設定可能なオプションも追加され続けているため、キャッチアップも重要になります。\n\n本セッションは、TypeScript初級・中級者を対象にしています。\nTypeScript初級者には「TypeScriptはJavaScriptに型システムを追加して拡張した言語である」ということを主要なオプション（target, module, libなど）を通して理解できることを目標にします。\nまた、中級者にはType Checking系のオプションやProject Referencesを通して、改めてTSConfigを見直す契機としていただくことと、ここ数年のアップデート（Version 5.0 - 5.8）で追加されたオプションの紹介を通して最新情報をキャッチアップでき、今後も最新情報を把握することの重要性を理解できることを目標とします。",
    speakerName: "らいと",
    time: "14:20 〜 14:50",
  },
  {
    id: "18",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "推論された型の移植性エラーTS2742に挑む",
    overview:
      "TypeScriptには多くのエラーが存在しますが、中でもTS2742エラーは理解しづらいものの一つです。このトークでは、TS2742エラーはなぜ起こるのかと、その解決方法について具体的な事例を交えながら紹介します。\n\nTS2742エラーのメッセージ例:\n'hoge'の推論された型には、'<foo module>'への参照なしで名前を付けることはできません。これは、移植性が無い可能性があります。型の注釈が必要です。(TS2742)\n\nこのエラーは、型推論によって導かれる型がプロジェクト内で明示的に参照されていない場合に発生します。特に、pnpmのようなフラットでないnode_modulesを生成するパッケージマネージャーを使用している場合に見られます。しかし、エラーメッセージだけではその解決方法が簡単には分かりません。本トークでは、このエラーが発生する状況の具体例と共に、ユーザ側及びライブラリ側で取れる解決策を紹介します。",
    speakerName: "elecdeer",
    time: "15:00 〜 15:30",
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
    speakerName: "kotori",
    time: "15:00 〜 15:30",
  },
  {
    id: "20",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "URLPatternから始めるWebフレームワーク開発入門",
    overview:
      "Interop 2025の重点分野にも選ばれたURLPatternは将来的に全てのブラウザ、ランタイムで動作することが予想されます。このLTでは、URLPatternを用いてHono、Expressのような軽量Webフレームワークを作る入門的な内容をご紹介します。本LTではHTTPメソッド、特定のURLパターンにおけるマッチング処理と、型推論によるパスパラメータの取得をどのように行うことが出来るのかについて、URLPatternの特徴とテンプレートリテラル型を使った型推論の活用に着目してご紹介いたします。Webフレームワークを作りたいと思っているTS初心者+α向けの内容+URLPatternの紹介です。また、Web標準なAPIを用いて開発を行うことで、不要なパッケージ、ランタイムに依存しない開発が行える可能性について示します。",
    speakerName: "ryuapp",
    time: "15:00 〜 15:30",
  },
  {
    id: "21",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "TypeScript だけを書いて Tauri でデスクトップアプリを作ろう",
    overview:
      "Tauri はデスクトップ/モバイルアプリケーションを開発できるフレームワークであり、バックエンドを Rust で、フロントエンドを JavaScript/TypeScript で記述するものとよく説明されます。しかしながら用意されている API やプラグインを使用すれば、Rust を書かずに TypeScript だけを書いても充分に実用的なアプリケーションを開発できます。そんな Tauri の嬉しさ、TypeScript オンリー開発による良さやその制限、実際に開発してみてのツラさや注意点などをお話しします。",
    speakerName: "tris",
    time: "17:10 〜 17:40",
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
    speakerName: "yamanoku",
    time: "15:00 〜 15:30",
  },
  {
    id: "23",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "NovaのTypeScriptサポート",
    overview:
      "近年、TypeScriptは広く普及し、主要なJavaScriptランタイムも対応を進めています。しかし、これらはあくまでランタイム側でのサポートであり、エンジン自体がTypeScriptを直接実行するわけではありません。\n\n本LTでは、Rust製JavaScriptエンジン Nova におけるTypeScript実行の取り組みを紹介し、エンジンレベルでのTypeScriptサポートの可能性について考察します。",
    speakerName: "Yoshino Yuto",
    time: "17:10 〜 17:40",
  },
  {
    id: "24",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "型安全なDrag and Dropの設計を考える",
    overview:
      "Drag and Drop (DnD) は、UIにおいて直感的な操作を実現できる便利な仕組みですが、実装の自由度が高いために型安全性が犠牲になりがちです。意図しない要素のドラッグや誤った場所へのドロップなど、ランタイムエラーのリスクもあります。\n\n本発表では、TypeScriptの型システムを活用し、DnDの制約を静的に表現する方法を解説します。具体的には、「何がドラッグ可能か？」、「どこにドロップできるのか？」 を interface や Generics で定義し、安全にDnDを設計する手法を紹介します。\n\n型の力を活かした拡張性のあるDnD設計を一緒に探っていきましょう！",
    speakerName: "yudppp",
    time: "17:10 〜 17:40",
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
    speakerName: "Yugo Yagita",
    time: "17:10 〜 17:40",
  },
  {
    id: "26",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "wasmで多言語資産をTypeScriptで活用する",
    overview:
      "本発表では、WebAssembly（Wasm）の基本概念や実行環境、堅牢なセキュリティ機能、クロスプラットフォーム対応といった特性に注目し、異なる言語で実装されたライブラリや資産を効率的に統合する方法について解説します。近年、システム間の相互運用性や資産の再利用が重視される中、Wasm Interface Types（wit）を用いることで、ホスト環境とWasmモジュール間に型安全なインターフェースを構築し、従来は別々に管理されていたコード資産の連携を容易にする仕組みが実現されています。さらに、本発表では、witから自動的にTypeScript用の型定義を生成するツール「jco」を取り上げ、他言語で記述されたライブラリをWasmとwitを介してTypeScript環境で活用する具体的な事例を紹介します。多くのTypeScript実行環境がWasmランタイムと連携している現状を踏まえ、既存資産の再利用による実装上のメリットや注意点についても言及し、Wasm活用の普及と多言語資産統合の新たな可能性を探る内容となっています。",
    speakerName: "赤木勇統",
    time: "17:10 〜 17:40",
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
    speakerName: "いまいまい",
    time: "17:10 〜 17:40",
  },
  {
    id: "28",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "Interface vs Types 〜型推論が過多推論〜",
    overview:
      "通常の業務において、typeとinterfaceの使い分けは必要ないと思っていました。\n実際の開発現場では、基本的にtypeを使用する人が多いかなという印象です。\n\n型において、interfaceの方がパフォーマンスがいいですが、これが求められるというシーンはそうそう起こりません。\nしかし、typeの交差型を使用して全てがanyになるという事態が発生しました。\n主に具体事例、interfaceとtypeをついに使い分ける日がくるとは…というライトな内容で発表しようと思っています。",
    speakerName: "表 洋樹",
    time: "17:10 〜 17:40",
  },
  {
    id: "29",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "ハッカソンでTypeScriptを使った実体験",
    overview:
      "みなさんは，おそらく実務などでじっくり腰を据えて開発することが多いでしょう．\nそういう開発では当然TypeScriptは活躍します．\nですが，短期間で大量のコードを書くことが迫られるハッカソンではどうでしょうか？\n一般に，TypeScriptはJavaScriptと異なり型付き言語で，エラーが発生しやすく処理量も増えるため，速度が求められる開発では避けられる傾向にあります．\n今回は，JPHACKS 2024優勝チームが，ハッカソンにてTypeScriptを用いて開発した体験談を踏まえて，短期開発におけるTypeScriptの利点を語ります．\nこれにより，TypeScriptの利便性をより明確にし，より幅広い場面でTypeScriptが使われるようになることを目指します．",
    speakerName: "河村悠太",
    time: "15:00 〜 15:30",
  },
  {
    id: "30",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "GitHub ActionsをTypeScriptで作ろう！",
    overview:
      "トークの主題：GitHubのカスタムアクション開発にTypeScriptの相性が良いこと\n\nGitHub Actionのカスタムアクションはjavascriptのみ直接実行でき、TypeScriptのbootstrapリポジトリも公式で提供されています。またライブラリなども公式からTypeScript向けに提供されており、GitHub Actionsの開発ではTypeScriptの相性が良いです。（他の言語では提供されていなかったりします）\n\nTypeScriptでの開発に最適化されているため、型安全性や開発効率の向上の恩恵を受けれます。\n\n私はgithub-actions-opentelemetryというGitHub Actionsのトレースや実行時間などのメトリクスをOpenTelemetryで送信するOSSを書いています。その際にTypeScriptで良かった点などを紹介します。TypeScriptを活用して、より堅牢で保守性の高いGitHubカスタムアクション開発の魅力をお伝えします。",
    speakerName: "じょーし",
    time: "17:10 〜 17:40",
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
    speakerName: "たじまん",
    time: "15:00 〜 15:30",
  },
  {
    id: "32",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "『Python→TypeScript』オンボーディング奮闘記",
    overview:
      "トグルホールディングスではTypeScriptを中心にプロダクト開発を行っています。私はメンターとして、Pythonエンジニアのオンボーディングを担当しました。動的型付けに慣れたエンジニアが静的型付けを前提とした環境に移行する際、型定義の方法やコンパイルエラーへの対応に苦労するケースが少なくありません。本セッションでは、メンター経験を通じて頻繁に直面した課題や具体的なトラブル事例を挙げ、それらを解決に導く効果的な指導法やアドバイスをお伝えします。異なる言語間のギャップを埋め、スムーズに新たな開発環境へ適応するための実践的なノウハウを紹介します。",
    speakerName: "龍野 卓己",
    time: "15:00 〜 15:30",
  },
  {
    id: "33",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "主要ライブラリの実例に学ぶ、TypeScriptで実現する型安全な座標定義",
    overview:
      "位置情報技術において、緯度・経度は欠かせない要素ですが、その扱いには誤入力や不整合のリスクが伴います。例えば、緯度・経度の順番の誤りや、座標系の次元数の誤認などが挙げられます。本セッションでは、Leaflet、Turf.js、geolib など主要ライブラリが採用している、オブジェクト型、タプル型、ユニオン型、オーバーロード関数などを活用した型安全な座標定義のアプローチを解説します。各ライブラリがどのように座標定義を実現しているかの具体例とともに、柔軟かつ堅牢な設計のポイントやエラー防止の工夫についてご紹介します。",
    speakerName: "原口公輔",
    time: "15:00 〜 15:30",
  },
  {
    id: "34",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "feature flag 自動お掃除のための TypeScript メタプログラミング",
    overview:
      "feature ブランチの寿命を短く保ったり、特定ユーザ向けに機能をリリースして反応を見る A/B テストのために、feature flag という手法がよく利用されています。一方、機能のリリースや A/B テストが完了して安定化した feature flag は、積極的に削除しなくともアプリケーションの動作に直接的な問題がないため、削除されずに負債化する可能性があります。\n\n本発表では、保守的なデッドコード除去で削除することが難しい安定化した feature flag を、よりアグレッシブな手法で削除する方法、実装、実際のコードベースに適用したときの効果について説明します。\n\nこの実装では TypeScript の静的解析と構文木の操作を通じたソースコード編集を用いるため、ここではこれらをメタプログラミングと呼んでいます。この発表を通じて、TypeScript メタプログラミングの楽さと業務における可能性を感じて欲しいと考えています。",
    speakerName: "azrsh",
    time: "11:30 〜 12:00",
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
    speakerName: "azu",
    time: "13:20 〜 13:50",
  },
  {
    id: "36",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "機能的凝集の概念を用いて複数ロール、類似の機能を多く含むシステムのフロントエンドのコンポーネントを適切に分割する",
    overview:
      "フロントエンドのコンポーネントの共通化、分割は追加開発や保守のしやすさを向上させるために必要な観点です。過度な共通化や分割によって、可読性、変更容易性が落ちると、開発者体験が損なわれ、工数が膨れる場合があります。一方で、コンポーネント志向のプログラムが業務コードとして普及してきた歴史はオブジェクト指向に比べると日が浅く、書籍など体系化された知識が少ないように感じます。\n発表者のチームでは凝集度を大切にしていたのですが、フロントエンドのコンポーネントの凝集度の説明を具体的なコードベースで説明している資料が多くなく、メンバーとの議論が非常に血肉になりました。\n\n本トークでは、特に機能的凝集の概念を持ち出して、類似の機能を多く含むシステムにおけるフロントエンドのコンポーネントの共通化、分割の粒度の考え方と、ts-patternやジェネリクス型などTypeScriptの型の恩恵を受けて実現できる具体的な手法についてお話しします。\n\n発表者は、複数ロール・多くの機能が存在システムの類似のコンポーネントが非常に多く出てくる現場で、どのようなコンポーネント設計だと論理凝集を機能的凝集へ近づけることができるかチームで幾度となく議論を重ねました。pjの立ち上げで、社内で類似のシステムを構築してきた知見が溜まっていたタイミングであったため、選択肢が多い状態でコンポーネント設計を行うことができました。\n\n発表者がpjの中で出会った設計パターンやそれらが出てきたシチュエーションをまとめ直し、複数のパターンで論理凝集の例とそれを修正した機能的凝集の例を紹介します。\n出会うシチュエーションとして、ロールごとに画面が違う場合、新規作成画面と編集画面などページ単位で機能が類似している場合、ページの中の部品単位で機能が類似している場合、Listで表示するItemに種類がある場合。\nまた、差分の程度として、ほとんどが類似だが1~2箇所だけ差分がある場合、複数箇所差分が波及している場合。\nまた、場合分けをする位置として、ルーティングから分けられる場合、Queryで取得した値から分ける場合。\n\n本トークを通じて機能的凝集の概念をおさらいし、具体的なパターンとその改善までの議論・プロセスを紹介することで、聴衆がご自身のpjでの制約を深く理解した上でコンポーネント分割の議論を行う材料にしていただきたいです。",
    speakerName: "IkedaNoritaka",
    time: "14:40 〜 15:10",
  },
  {
    id: "37",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "複雑なフォームを継続的に開発していくための技術選定・設計・実装",
    overview:
      "LLM（大規模言語モデル）を活用した開発においてはPythonが主要なプログラミング言語として広く認知されていますが、TypeScriptにもVercelが開発するOSSのAI SDKという便利なツールキットが存在します。このAI SDKを利用することでTypeScriptでもLLM関連のアプリを比較的簡単に作成できることをお伝えしたいと思います。\n\n本発表では、AI SDKの基本機能から応用事例までを紹介します。AI SDKは、Azure OpenAI、AWS Bedrock、Google CloudのVertexAIなど、多様なベンダーのLLM推論APIの呼び出しを統一的なインターフェースで扱うことが可能です。AI SDKがベンダー間の差異を吸収してくれるため、開発者は使用するLLMを柔軟に切り替えることが容易になります。\n\nさらにUIフレームワーク向けの機能も提供されており、例えばReact向けの`useChat`hooksを利用することでよくあるチャット型のUIを比較的簡単に実現可能です。このようにAI SDKを利用することでフロントエンドとバックエンドをTypeScriptで一貫して開発可能です。\n\nサイボウズでは、実際に社内用チャット型LLMアプリをNext.jsとAI SDKを用いて開発していますので、インフラも含めたアプリの構成例を紹介いたします。\n\nさらに応用事例として、手元のMacBook上で動かすローカルLLM + AI SDKによるオフラインでも動作するChrome拡張機能の作り方も紹介したいと思います。\n\n注：本発表ではプラットフォームとしてのVercelの話はありません",
    speakerName: "izumin",
    time: "11:30 〜 12:00",
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
    speakerName: "k.goto",
    time: "15:30 〜 16:00",
  },
  {
    id: "39",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "サウンドネスという概念 - 良いTypeScriptを書くためのマインドセット",
    overview: `## 概要\nRun time時における型の正確性がクオリティに直結するTypeScriptにおいて、重要ですがマイナーな概念であるSoundness(サウンドネス)を紹介することでTS上で良いコードを書くためのマインドセットを紹介します。\n\n## 説明\nプログラミングにはType Soundness(型の健全性)という概念があります。これは端的に説明すると実行時にコード上で書かれた型が保証されているかということを示す言葉です。\n\nO'Reilly社の"Learning TypeScript"の著者、Josh Goldberg氏はその書籍内でTypeScriptの型システムをStructurally typed(構造的)と表現しています。これは型の構造に相互性があれば受け付けてしまうというTypeScriptの型システムの動きに起因しています。\n\nこのトークでは、構造的型システムによって引き起こされるありがちなTypeScriptの直感に反した動き(readonly周り等)を紹介しつつ、Soundnessという概念の重要性を伝えたいと思います。`,
    speakerName: "Kei",
    time: "15:30 〜 16:00",
  },
  {
    id: "40",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TS特化Clineプログラミング",
    overview:
      "今現在、我々プログラマは TypeScript とプログラミングのドメインエキスパートとして、LLMに形式知やワークフローを叩き込む必要があります。\n\nモデル性能は向上していますが、汎用プロンプトだけではコーディングエージェントの力を引き出せているとは言えません。\n\n自分は次のような実験によって、TypeScript によるプログラミングの自動化を試みています。\n\n- deno によるプロトタイピング\n- コンテキスト境界を最小化するモジュール設計\n- npm ライブラリのサマリの自動作成\n- 型シグネチャファーストな設計\n- TDDによる実装\n\nCline と TypeScript を通してAIプログラミングの未来を考察します。",
    speakerName: "mizchi",
    time: "15:30 〜 16:00",
  },
  {
    id: "41",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "TypeScript Language Service Plugin で CSS Modules の開発体験を改善する",
    overview:
      "コンポーネントに CSS を当てる手法の1つに、CSS Modules があります。広く使われている手法ですが、エディタ上の開発体験が悪いという欠点がありました。*.tsx と *.module.css の Language Server が分かれているために、*.tsx と *.module.css を横断する言語機能 (Rename,Find All References ) の挙動に問題があるのです。\n\n長らくこの問題は解決困難と思われてました。しかし TypeScript Language Service Plugin を使うと、実は解決できるのです。この発表では、TypeScript Language Service Plugin とは何か、そしてそれを使って作ったツールについて紹介します。\n\n- TypeScript Language Service Plugin とは\n- CSS Modules Kit の紹介\n- Volar.js を使って .module.css を TypeScript コードに偽装する\n- Navigation 機能の実装 (Go to Definition, Rename, Find All References)\n- 壊れかけのファイルをサポートする\n- エディタにエラーを表示するには\n- Code Action と Applicable Refactor の実装",
    speakerName: "mizdra",
    time: "10:50 〜 11:20",
  },
  {
    id: "42",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "君だけのオリジナル async / await を作ろう",
    overview:
      "TypeScript でジェネレータ関数を使った独自の async / await ライクな記法の作り方を紹介します。\n\nPromise を扱うときには欠かせない async / await ですが、この記法が一般的に使われるようになる前はジェネレータ関数を使って同様の記法を実現するテクニックが使われてきました。\nこのテクニックは今でも Promise 以外のデータに対して簡便な記法を導入する際には有効です。\n\nこの発表では (いくらか歴史を振り返りつつ) JavaScript におけるジェネレータ関数を使った async / await の実装方法と、それに対して TypeScript で型を付けるためのちょっとしたトリック、Promise 以外のデータへの適用について紹介します。\nまた私自身が取り組んでいる Algebraic Effects への応用など、発展的な話題にも触れられたらと思います。\n\n## 想定聴衆\n\n- neverthrow や Effect などのライブラリに登場する yield* の正体が気になっている方\n- async / await ライクな記法を自分でも作りたい方\n- TypeScript のプログラミング技法に関心のある方",
    speakerName: "susisu",
    time: "14:40 〜 15:10",
  },
  {
    id: "43",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "Web Streams APIの基本と実践、TypeScriptでの活用法",
    overview:
      "ストリームはデータを効率よく低遅延に処理する方法として、多くの言語でインターフェースが提供されています。\nWeb標準でも2015頃からStreams APIが整備され、Fetch APIのレスポンスボディもストリームオブジェクトになっています。\n\nしかし、Streams APIを直接利用している方は少ないように思います。これは活用方法が十分に知られていない、もしくはより昔からあるNode Streamのように扱いが難しいと思われていると、想像しています。\n\nWeb Streams APIはインターフェースが簡潔になり、型情報も整備されているため、TypeScriptからも扱いやすいものとなっています。\nこのセッションではそんなWeb Streams APIの基本概念や利用シーンなどをお話しします。\nNode.jsのStreamとの違いや、Async Iteratorとの関係性についても触れていきます。\n\n---\n\n## セッション詳細(仮)\n\n- Web Streams APIの概要\n  - 3つのStream Object\n  - メモリ使用量と背圧\n  - キューイング戦略とhighWaterMark\n- 独自のストリームオブジェクトを定義する\n  - 型がちゃんと当たるという話\n- 具体的な用例\n  - 高サイズ画像の段階的な読み込み\n  - ETLツールによる大量データ処理\n  - Chat GPTのレスポンスの逐次表示\n- Node.jsのStreamとの相違点\n  - インターフェースの違い\n  - (型情報の違い)\n  - 互換性とtoWeb/fromWebメソッド\n- Async Iteratorとの関係性\n  - Streamの非同期イテレーション\n  - for await ... ofの利用",
    speakerName: "tasshi",
    time: "13:20 〜 13:50",
  },
  {
    id: "44",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Pragmatic Functional Programming in TypeScript",
    overview:
      "本セッションでは、関数型プログラミングの思想を実務に落とし込み、TypeScriptで堅牢かつ保守性の高いバックエンド開発を実現する手法を紹介します。\n\n具体的には、Dmitrii Kovanikov氏が提唱する5つの原則（Parse, don’t validate、Make illegal states unrepresentable、Errors as values、Functional core, imperative shell、Smart constructor）を取り上げ、TypeScriptにおける実装例を通してそれぞれのメリットや意義を解説します。\n\nなお、実装例では当社が開発しているAPIゲートウェイを題材とする予定です。本システムでは、TypeScriptの新興ライブラリ「Effect」を採用しています。例を通じて、Effectがneverthrowやpurify-tsといった類似ライブラリとは異なり、5つの原則すべてを実践するためのモジュールを提供している点にも興味を持っていただけるでしょう。\n\nバックエンド開発におけるコードの堅牢性と保守性の課題に対し、部分的な関数型アプローチによってどのように対処できるのか、普段フロントエンド開発に従事している方にも参考となるような知見を提供する内容となる予定です。",
    speakerName: "yasaichi",
    time: "11:30 〜 12:00",
  },
  {
    id: "45",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "ts-morphを利用して編集可能なコード生成を実現する",
    overview: `TypeScript製の多くのフレームワークでは、実装したAPIサーバーからOpenAPIを出力するアプローチが採用されています。しかし、OpenAPI定義を元に、サーバーのテンプレートコードを自動生成するアプローチは多くはありません。そこで、OpenAPI定義を読み込み、Fastifyのコントローラー層の実装を自動生成するツールを作成しました。\n\nクラスを使ったアプローチをするフレームワーク・言語と違い、Fastifyは生成したコードを人の手で編集したい要求があります。\n\n\`\`\`js\n// ここは自動生成したい\nserver.post("/hoge", hogeSchema, async (req) => { \n  // 関数呼び出しの中身は、自分で実装したい & 次生成した場合に消えたら困る。\n  someLogic(req.body.id)\n})\n\`\`\`\n\n一つのファイルの中で、「自動生成したいコード」と「人の手で編集しコード生成時にも消してほしくないコード」が入り混じることになります。これは、従来のトップダウンのコード生成では実現が難しく、現状の実装を解析し、必要な部分だけ再生成するアプローチが必要です。\n\n今回は、この解析部分（と自動生成部分）にts-morphを利用し、自動生成と手動編集を両立させる手法について扱います。\n\n## 過去のts-morphに関する発表との違い\n\n過去のTSKaigiでもts-morphに関するトピックが採用されています。本発表では、以下の2点が違いになると考えています。\n\n- ts-morphのより具体的な活用事例について述べる点\n- 単なるコード生成ではなく現在の実装の解析にもts-morphを利用することで柔軟なコード生成を実現した点`,
    speakerName: "yuta-ike",
    time: "14:00 〜 14:30",
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
    speakerName: "加瀬健太（@Kesin11）",
    time: "10:50 〜 11:20",
  },
  {
    id: "47",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Lookback TypeScript ESM support and what should we do now.",
    overview:
      "TypeScriptのESM（ECMAScript Modules）サポートは、JavaScriptとその周辺エコシステムのESM対応と共に進んできました。\n\n一方でこれはJavaScriptとそのエコシステムが持つモジュールシステムの複雑さをTypeScriptが同じように引き継いでしまっているとも言えます。実際これまで段階的に行われてきたTypeScriptのESMサポート機能は単純ではなく、特に初学者やJavaScriptのモジュールシステムに詳しくない人にとっては理解しづらいものになっています。\n\n本セッションでは、JavaScriptのモジュールシステムの基礎的な部分から始め、TypeScriptにおけるESMサポートの歴史と現状を整理します。さらにESM移行への課題とその解決策、ユースケースに応じた設定の例などを紹介することで、実際のプロダクトへ活用できる内容とします。",
    speakerName: "左治木 隆成",
    time: "14:40 〜 15:10",
  },
  {
    id: "48",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "フロントエンドがTypeScriptなら、バックエンドはPHPでもいいじゃない",
    overview:
      "プロダクト開発において、フロントエンドとバックエンドをTypeScriptで統一することは、型共有や開発効率の向上といった多くのメリットがあります。しかし、プロジェクトやチームによっては他の選択肢も有効です。本トークでは、バックエンドにPHPを採用するという選択肢について、PHPのエコシステムや開発サイクル、アーキテクチャやデプロイ手法などを通じて、TypeScriptではないバックエンドを持つことの魅力を紹介します。また、PHPエンジニア目線から見たTypeScriptとの組み合わせによる実践的な開発フローやバックエンド、フロントエンド分離案を提案します。本トークを通じて、言語に閉じない多様な視点を提供します。",
    speakerName: "富所 亮",
    time: "10:50 〜 11:20",
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
    speakerName: "山梨 蓮",
    time: "13:20 〜 13:50",
  },
  {
    id: "50",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "React19で変化したuseReducerの型から学ぶTypeScriptの型推論",
    overview:
      "@types/reactのバージョン19では、React本体の変更に対する追従の他に幾つかの変更が加えられました。その中の一つとしてuseReducerの型の変更があります。\n\nuseReducerの型の変更は型推論の向上を目的として行われました。これまではuseReducerを用いるためにジェネリクスで型を保管するのが一般的でした。しかし、バージョン19からは引数から型を推論する形に変更され、ジェネリクスを用いないことがベストプラクティスになりました。\nこれにより、開発者が冗長な型定義を行うことを防ぎつつ、堅安全性を維持することが可能になりました。\n\n本発表では、\n・useReducerの新しい使い方\n・変更の背景から学ぶ、TypeScriptの型推論の活かし方\nを紹介します。\n\nReactのAPIに関連する内容ですが、本発表はReactのAPIを元にしたTypeScriptユーザー全般に役立つ内容となります。",
    speakerName: "k8o",
    time: "14:00 〜 14:30",
  },
  {
    id: "51",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Type ChallengesにPRを出して新しい問題を追加した話",
    overview:
      "みなさんはType Challengesをご存知でしょうか？\n\nType ChallengesはTypeScriptの型システムをハンズオンで学べるOSSリポジトリです。\n型の問題がたくさん用意されており、それを解いていくことでTypeScriptの型システムについて学ぶことができます。\n私自身もType Challengesを通じてTypeScriptの型システムについて学び、楽しんでいました。しかしそれだけでなく、他の人の学びになるような問題を追加したいと思いPRを出してみました。\n結果としてはマージされ、新たな問題として追加されました。\n[https://github.com/type-challenges/type-challenges/issues/35252](https://github.com/type-challenges/type-challenges/issues/35252)\n\nそこでこの発表では、\n・Type ChallengesにPRを出すまでにしたこと\n・実際に作った問題の解説とポイント\nなどについてお話しさせていただこうかと思います。",
    speakerName: "Kanon",
    time: "16:10 〜 16:50",
  },
  {
    id: "52",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Panda-CSS はどのように型安全にしているのか",
    overview:
      "Panda-CSS は型が効く Tailwind という印象を持たれていることが多いように思います。実際、Tailwind と同じような記法で型安全に実装することができるわけですが、どのような方式で型安全にしているのか、というテーマで簡単にお話ししようと思っています。\n\nお話しする内容の詳細について記載します。Panda-CSS では、定義ファイル（panda.config.ts）に対してカラーバリエーション等の定義をします。この定義ファイルが元となり、型定義ファイル（*.d.ts）が出力されています。出力された型定義ファイル（*.d.ts）は、ユーティリティ関数の引数等の型定義に使用されており、開発ではユーティリティ関数を使用するため、型安全に実装することができます。Panda-CSS 以外にも型安全にCSSを実装できるライブラリとして stitches などがありますが、Panda-CSS は事前に定義ファイルから型定義を出力する部分が他のライブラリの異なる点であり、これによって型推論にかかるコストを抑えることができています。ただ、この方式にもデメリットはあり、事前に型定義を出力する、という開発のための事前準備が必要になっています。型を効かせて実装を進めるために、どのタイミングで型に関するコストを支払うか...という問題に帰着します。\n\nまた、型定義ファイル（*.d.ts）の出力の仕組みについても、シンプルな実装で実現されているため、Panda-CSS のライブラリの実装を見つつ簡単にお話しします。\n\n（参考：[Panda-CSS の型定義の出力の実装](https://github.com/chakra-ui/panda/blob/1086769eac8867a8a71ddf2369776fd27eeaebb0/packages/generator/src/artifacts/types/token-types.ts#L6)）",
    speakerName: "Kato.work",
    time: "16:10 〜 16:50",
  },
  {
    id: "53",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "Result型、自前で書くか、ライブラリ使うか",
    overview:
      "関数型ドメインモデリングの影響もあり、TypeScriptでResult型を使って、失敗する可能性がある関数を明示的に取り扱う方法が普及しつつあります。しかし、TypeScriptには組み込み型でのResult型は存在しないため、自前で型定義をするか、ライブラリを利用する必要があります。fp-ts、neverthrow, Effect.jsといったライブラリと自前での実装の方法について比較しながら解説します。",
    speakerName: "majimaccho",
    time: "14:00 〜 14:30",
  },
  {
    id: "54",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "ProxyとTypeScriptのおいしい関係",
    overview:
      "本発表では、ReactのフォームライブラリであるConformを題材に、Proxyによる動的なプログラミングにTypeScriptの型を被せることで優れた開発体験が得られることを見ていきます。\nProxyはオブジェクトに対する操作をインターセプトできるデータ型で、ECMAScriptの標準です。\nProxyを使えば、例えばあるオブジェクトのプロパティに対するget操作にログ出力などの処理を挟むことができます。\nしかしConformでは、空オブジェクトをProxyでラップし、プロパティアクセスを全て動的に生成する、という大胆なことをしています。\n一見このような動的なプログラミングとTypeScriptは相性が悪そうですが、\nConformはむしろTypeScriptの型を存分に活かした開発体験を提供しています。\n本発表では、その点についてConformのサンプルコードや内部実装を追いながらお話します。\n\n[https://conform.guide/](https://conform.guide/)",
    speakerName: "Motoki Shakagori",
    time: "16:10 〜 16:50",
  },
  {
    id: "55",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "Standard Schema: スキーマライブラリの統一規格とは何か",
    overview:
      "近年のアプリケーション開発では、ZodやValibotなどのスキーマによるバリデーションをおこなうライブラリが注目をあつめ、ライブラリの選択肢も増えています。ランタイムでのバリデーションに加え、定義したスキーマから推論された型を利用した型安全な開発が実現できるようになりました。\n\nしかし、それぞれのライブラリが提供する機能をつかってスキーマを定義する場合には型を重複して定義する必要がなくなった一方、独自の型をスキーマライブラリに適用する場合には、それぞれのライブラリのためのロジックやアダプタを記述することが必要な状況になっています。このような状況に対して、Zod、Valibot、ArkTypeの作者たちがスキーマライブラリの統一規格「Starndard Schema」を策定し、ライブラリ間の相互運用性を高める運動をはじめました。\n\nこのLTでは、上記の経緯を説明した上で、「Starndard Schema」によって開発者が得られる利点を解説します。",
    speakerName: "Nozomu Ikuta",
    time: "16:10 〜 16:50",
  },
  {
    id: "56",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "令和最新版TypeScriptでのnpmパッケージ開発",
    overview:
      "令和7年になりほとんどのソフトウェアエンジニアはnpmパッケージの開発にTypeScriptを採用する時代になっています。\n\nしかしnpmパッケージの作成は歴史的背景から仕組みが複雑化し、ベストプラクティスも日々変化しています。\n\nこの登壇では、tsc/rollup/esbuildなどのバンドラツールの選定基準やESMに関する設定やTypeScriptでの開発体験向上に寄与するIsolated Declarationsなどtscのオプションを中心に令和最新版のnpmパッケージ開発に必要な知識や設定を共有します。\n\nキーワード:\n- tsconfig.json\n- Pure ESM package\n- provenance\n- Isolated Declarations\n- erasableSyntaxOnly",
    speakerName: "odan",
    time: "16:10 〜 16:50",
  },
  {
    id: "57",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "型付け力を強化するための Hoogle のすゝめ",
    overview:
      'TypeScript を使って開発を進める中で、「なんだか実装が複雑になってきたけど、どのように型を付けるべきだろう。そもそもこの実装は正しいのだろうか ...... 🤔」と思い悩む瞬間はありませんか？\n\n実装の複雑さや破綻の兆候は、かなりの確度で型付けのあり方から推察できると考えています。では、そもそも型付けのあり方を学ぶにはどうすれば良いでしょうか？\n\nこの LT では、Haskell の API 検索ツールである "Hoogle" を活用し、型シグネチャを『検索』しながら、TypeScript 開発におけるより良い型の付け方や実装の整理の仕方を学ぶことを目指します。',
    speakerName: "TAKASE Kazuyuki (@Guvalif)",
    time: "14:00 〜 14:30",
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
    speakerName: "Yo Iwamoto",
    time: "14:00 〜 14:30",
  },
  {
    id: "59",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "ts-morph実践：型を利用するcodemodのテクニック",
    overview:
      "ts-morphを使うと大量のコードを一度に安全に修正することができることは皆さんご存知かと思います。既存のインポート名やフィールド名をまとめて修正するなどには簡便です。ts-morph自体はあくまでもASTを編集するだけですが、その真の力は、スコープ情報や型情報など、TypeScript自体が提供する機能を活用するコードを記述することによって開放することができます。そのような実用例を紹介します。 \n\n例\n- console.error(e) にcatchを入れている箇所だけ修正\n- import文の追加時に既存のimportを上手にチェック\n- noImplicitAnyの修正\n- Excess Property Checkの修正\n\n(utility libraryを公開予定)",
    speakerName: "ypresto",
    time: "16:10 〜 16:50",
  },
  {
    id: "60",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title:
      "declaration mergingの威力：ライブラリアップデート時の書き換え作業を90%短縮するテクニック",
    overview:
      "## 背景・課題感\nTypeScriptライブラリのバージョンアップに伴う型定義や関数定義の変更は、大規模プロジェクトにおいて広範な影響を及ぼします。\n手動での型の置換作業は、以下の問題があります：\n- 時間がかかる\n- ヒューマンエラーのリスクが高い\n- 変更箇所の見落としが発生しやすい\n\n## 実践内容\ndeclaration mergingを用いてライブラリの型を上書きすることで、古い型を使用している箇所を検出しました。\nさらにエディタのリファクタリング機能を用いることで新しい型に一括置換しました。\n\n## 結果\n### うまくいったこと\n古い型を置き換えることで型エラーを発生させ、修正箇所を自動的にリストアップできました。\nさらにエディタの一括リネーム機能により、大部分の置換作業が迅速かつ正確に行えました。\n\n### うまくいかなかったこと・対処\n一部一括置換ができず手動での修正が必要でした。\nまた型安全でない部分はエラーを検出できないのでテストでの動作確認が必要でした。\n\n## Learning Outcome\ndeclaration merging を利用して、ライブラリアップデート時の作業を大幅に短縮する具体的な方法を学ぶことができます。",
    speakerName: "Yuma Takei",
    time: "16:10 〜 16:50",
  },
  {
    id: "61",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "コンパイルオプションで変わる型世界",
    overview:
      "TypeScriptを使っている皆さん、tsconfig.json のコンパイルオプションを意識したことはありますか？多くのプロジェクトではすでに設定されており、普段触る機会は少ないかもしれません。しかし、コンパイルオプションの設定次第でTypeScriptの型安全性が大きく変わることを知っていますか？\n\n今回は、あえてTypeScriptのコンパイルオプションをオフにし、TypeScriptの機能を1つずつ剥がしていく ことで、「どの設定が型安全性を担保しているのか」を部分的に体感してもらいます。\n\nTypeScriptをもっと活用するために、ぜひこの機会にコンパイルオプションを見直したり、学びましょう！",
    speakerName: "池田 敬祐",
    time: "16:10 〜 16:50",
  },
  {
    id: "62",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "Project Referencesを活用した実行環境ごとのtsconfig最適化",
    overview:
      "本セッションでは、実行環境に合わせて tsconfig を最適化する手法を解説します。\n\n1 つの tsconfig ですべてを実装すると、ブラウザ向けコードで Node.js のライブラリを誤って使用したり、サーバー向けコードで window にアクセスしてしまったりしても気付けないといった課題が生じます。\nさらに、対応ブラウザに合わせて target や lib を古いバージョンに設定すると、サーバー内や開発時のみで動くコードにおいても最新のメソッドが使えず、逆に ESNext を指定すると古いブラウザで動かないメソッドを使ってしまうリスクが発生します。\n\nこうした課題を解消するために、Project References を駆使して複数の tsconfig を使い分け、各環境に最適化する具体的なアプローチを紹介します。",
    speakerName: "板井俊樹",
    time: "16:10 〜 16:50",
  },
  {
    id: "63",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScriptのmoduleオプションを改めて整理する",
    overview:
      "本発表は、TypeScriptにおけるmoduleオプションについて、その基本的な役割と設定時に注意すべきポイントを体系的に整理します。\n\nmoduleオプションは、TypeScriptが出力するモジュール形式を指定するための重要な設定項目であり、ESModuleやCommonJSの違い、Node.jsにおける実行時の挙動、さらにはビルド結果の違いを正確に理解しておかねば、意図しないトラブルに見舞われるリスクが高まります。\n\nそこで、発表では実際に私が遭遇したトラブル事例をもとに、moduleオプションがもたらす挙動の微妙な違いとその影響を解説し、さらにTypeScript 5.8で導入された`nodenext`の仕様変更がどのような影響を及ぼすのかについても触れます。\n\n主な対象は、日常的にTypeScriptを活用している開発者で、特に`tsconfig.json`の設定に携わる機会のある方々です。基本的なTypeScriptの知識があれば参加可能な内容となっています。\n\n発表を通じて複雑なmoduleオプションに対する苦手意識を払拭し、基礎知識と最新の挙動を理解する方法を知ることで、自信をもって設定に臨めることを目指します。",
    speakerName: "大石 貴則 (bicstone)",
    time: "16:10 〜 16:50",
  },
  {
    id: "64",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScript ASTとJSDocで実現するコードの自動削除",
    overview:
      "TSKaigi 2024でTypeScriptのASTに触れたことをきっかけに、ASTを実際の業務で活用してみました。\n\n私の業務ではプロダクトへの機能追加の際にA/Bテストをよく実施しており、テストの結果、企画が棄却された場合は実装したコードを削除します。\nTypeScriptのASTとJSDocを組み合わせることで、不要になったコードの一部を機械的に検出し、安全に削除する仕組みを実現したので、その紹介をしようと思います。\n\n次のような流れでお話しする予定です。\n- 自動化に至った背景と課題\n- ASTとJSDocを組み合わせた課題解決のアプローチ\n- 今後の展望",
    speakerName: "川野賢一",
    time: "14:00 〜 14:30",
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
    speakerName: "君田 祥一",
    time: "14:00 〜 14:30",
  },
  {
    id: "66",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "バリデーションライブラリ徹底比較",
    overview:
      "TypeScriptにおけるバリデーションライブラリの選定基準と比較について解説します。Zod・Typia・Valibot・ArkType等を取り上げ、型安全性、記述の簡潔さ、パフォーマンス、他ライブラリへの移行のしやすさや依存度などの観点から比較します。また、実際のコード例を交えて実用的な知見を提供します。",
    speakerName: "田中勇太",
    time: "16:10 〜 16:50",
  },
  {
    id: "67",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title:
      "VueUseから学ぶ実践TypeScript〜人気ライブラリのコードベースから見つけた型定義の工夫〜",
    overview:
      "## トークの主題\nVueUse（Vue.js用の人気ユーティリティライブラリ）のコードベースから、TypeScriptの型機能の実践的な使い方を紹介します。\n\n## なぜVueUseなのか\n・実践的なTypeScriptの使用例が豊富\n・関数単位でコンパクトに実装されており、理解しやすい\n・15.7kのGitHubスターを持つ広く使われているライブラリ\nTypeScriptの基本を理解している方を対象に、実際のOSSから学べる型システムの活用例をお伝えします。\n\n## 発表内容\n特に以下の3つの型機能に注目し、実際のコードを通じてその活用方法を解説します\n\n### 関数のオーバーロード\n複数のイベントターゲットに対して型安全なAPIを提供する方法\n\n### 条件付き型\nジェネリクスを使って、使用状況に応じて型を変更する手法\n\n### 型述語\n配列操作で型情報を正確に保持する実装パターン",
    speakerName: "ツノ",
    time: "14:00 〜 14:30",
  },
  {
    id: "68",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "型推論の扉を開く―集合論と構造的型制約で理解する中級へのステップ",
    overview:
      "TypeScript の型システムを「実行時の値の型」としてではなく、「その変数が取り得る値の集合（ドメイン）」として捉える視点を提示し、初心者から中級者へのステップアップのきっかけを作るための発表です。\n\nTypeScript を学ぶ上で、「型」はしばしば静的なラベルのように扱われがちですが、本発表では 「型＝値の集合」 という視点を導入し、型推論や型操作を数学的な集合論の観点から解説します。特に、リテラル型・ユニオン型・交差型などがどのように集合として機能し、和集合・積集合（共通部分）といった集合演算が TypeScript の型システムにどのように反映されるのかを明確にします。\n\n例えば keyof 演算子がユニオン型に適用されたとき never になる理由を、図解や具体例を用いて、5分という短い時間で要点をわかりやすくまとめる予定です。\n\n```ts\ntype A = { a: number };\ntype B = { b: number };\ntype Keys = keyof (A | B); // 結果は never\n```",
    speakerName: "栃川晃佑",
    time: "14:00 〜 14:30",
  },
  {
    id: "69",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "型がない世界に生まれ落ちて 〜TypeScript運用進化の歴史〜",
    overview:
      "5年前、私たちのプロジェクトではJavaScript or flowがコードベースの大部分を占めており、フロントエンドにはTypeScriptの厳密な型が導入されていませんでした。\nそのため、型の恩恵を十分に受けられず、運用面での課題が多くありました。\nしかし現在、最も開発が活発なリポジトリはTypeScriptオンリーとなっており、ts-ignoreもほとんど存在しない状態になっています。\nさらに、フロントエンドのテストカバレッジも90%近くに達しており、型の厳密性とテストの充実が相まって、より堅牢な開発環境が実現されています。\nただ「型安全なコードが理想だから」といった議論だけでは、このような健全なコードベースは実現できませんでした。\n現場では、どのように周囲を巻き込み、組織として継続的に運用していくかが重要なポイントとなります。\n本発表では、5年前とのBefore ~ Afterの経緯を組織論の視点も交えながらお話しします。TypeScriptの運用に悩んでいる方、型安全なコードベースを目指しつつも組織の壁にぶつかっている方にとって、実践的な知見を共有できればと思います。",
    speakerName: "成原 聡一朗",
    time: "16:10 〜 16:50",
  },
];

export const talkIds = talkList.map((talk) => ({
  id: talk.id,
}));
