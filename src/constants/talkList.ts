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
  },
  KEYNOTE: {
    name: "基調講演",
  },
  LT: {
    name: "LT",
  },
  SPONSOR_LT: {
    name: "スポンサーLT",
  },
};
export type TalkType = keyof typeof TALK_TYPE;

export type Talk = {
  id: string;
  eventDate: EventDate;
  track: Track;
  talkType: TalkType;
  title: string;
  overview?: string;
  speakerName: string;
};

export const talkList: Talk[] = [
  {
    id: "1",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "静的解析で実現したいことから逆算して学ぶTypeScript Compiler",
    overview: `静的解析には、コードベースから情報を抽出したり、自動的に編集を行ったり、多くの活用方法があります。ESTreeに関連したライブラリをベースに静的解析でなにかを実現することと比べて、TypeScript Compilerを活用することの難易度は高いです。これはプラグインの充実度や関連する資料の量などエコシステムとしての広がりの差に原因があると考えられます。

難易度が高いTypeScript Compilerですが、プロジェクトの型情報を活用できるだけでなく、提供されるAPIの型が強力であることや依存関係が少なくなることなど、ツールを作るベースとして採用する複数のメリットがあります。

この発表では、「静的解析で何を実現したいか」を軸にそこから逆算して必要になるTypeScript Compilerの知識を紹介します。TypeScript Compilerを使ってなにかを作るきっかけを提供できることを願っています。`,
    speakerName: "Kazushi Konosu",
  },
  {
    id: "2",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "checker.tsに対して真剣に向き合う",
    speakerName: "kkk4oru",
  },
  {
    id: "3",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "SignalとObservable―新たなデータモデルを解きほぐす",
    speakerName: "lacolaco",
  },
  {
    id: "4",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title:
      "AWS LambdaをTypeScriptで動かして分かった、Node.jsのTypeScriptサポートの利点と課題",
    speakerName: "Masaki Suzuki",
  },
  {
    id: "5",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "Valibot Schema Driven UI - ノーコードWebサイトビルダーを実装してみよう！",
    speakerName: "Miyagi Hirotaka",
  },
  {
    id: "6",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "高度な型付け、どう教える？",
    speakerName: "progfay",
  },
  {
    id: "7",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "Full-Stack TypeScript x GraphQLで実現する漸進的アーキテクチャ",
    speakerName: "Sohei Takeno",
  },
  {
    id: "8",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TypeScriptとは何であって何でなく、誰のもので、どこへ向かうのか",
    speakerName: "Sosuke Suzuki",
  },
  {
    id: "9",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "堅牢なデザインシステムをつくるためのTypeScript活用",
    speakerName: "takanorip",
  },
  {
    id: "10",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Rust製JavaScript/TypeScript LinterにおけるPluginシステム実装の裏側",
    speakerName: "unvalley",
  },
  {
    id: "11",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TypeScriptとReactで、WAI-ARIAの属性を正しく利用する",
    speakerName: "ymrl",
  },
  {
    id: "12",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "TypeScriptエンジニアがAndroid開発の世界に飛び込んだ話",
    speakerName: "yui_tang / Yui Sakamoto",
  },
  {
    id: "13",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title:
      "fast-checkとneverthrowのPBT+Result型で堅牢なビジネスロジックを実現する",
    speakerName: "上田慶祐",
  },
  {
    id: "14",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title: "AI Agents Enablement in TypeScript",
    speakerName: "小谷 優空",
  },
  {
    id: "15",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Language Serverと喋ろう",
    speakerName: "ぴざきゃっと",
  },
  {
    id: "16",
    eventDate: "DAY1",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "TypeScriptで実践するクリーンアーキテクチャ ― WebからもCLIからも使えるアプリ設計",
    speakerName: "プログラミングをするパンダ",
  },
  {
    id: "17",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "SESSION",
    title: "TSConfigからTypeScriptの世界を覗く",
    speakerName: "らいと",
  },
  {
    id: "18",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "推論された型の移植性エラーTS2742に挑む",
    overview: `TypeScriptには多くのエラーが存在しますが、中でもTS2742エラーは理解しづらいものの一つです。このトークでは、TS2742エラーはなぜ起こるのかと、その解決方法について具体的な事例を交えながら紹介します。

TS2742エラーのメッセージ例:
'hoge'の推論された型には、'<foo module>'への参照なしで名前を付けることはできません。これは、移植性が無い可能性があります。型の注釈が必要です。(TS2742)

このエラーは、型推論によって導かれる型がプロジェクト内で明示的に参照されていない場合に発生します。特に、pnpmのようなフラットでないnode_modulesを生成するパッケージマネージャーを使用している場合に見られます。しかし、エラーメッセージだけではその解決方法が簡単には分かりません。本トークでは、このエラーが発生する状況の具体例と共に、ユーザ側及びライブラリ側で取れる解決策を紹介します。`,
    speakerName: "elecdeer",
  },
  {
    id: "19",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "TSConfig Solution Style & subpath imports でファイル単位で型を切り替える",
    overview: `Node.js の subpath imports を使うと特定の条件下において参照されるモジュールを切り替えることが可能になるため test や Storybook でモックする手法としてたびたび紹介されます。

ニッチではありますが、特定ファイルでのみ型の参照を切り替える方法として TSConfig の Solution Style と組み合わせて開発者体験を向上させた事例をご紹介します。

具体的には gql.tada による Fragment Colocation が Storybook 体験を複雑化させてしまう問題に対して、.stories.tsx ファイルでは fragment masking を解除させることで型をシンプルにし、Story によってはコード量を25~30%削減させることに成功しました。`,
    speakerName: "kotori",
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
  },
  {
    id: "28",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "Interface vs Types 〜型推論が過多推論〜",
    overview: `通常の業務において、typeとinterfaceの使い分けは必要ないと思っていました。
実際の開発現場では、基本的にtypeを使用する人が多いかなという印象です。

型において、interfaceの方がパフォーマンスがいいですが、これが求められるというシーンはそうそう起こりません。
しかし、typeの交差型を使用して全てがanyになるという事態が発生しました。
主に具体事例、interfaceとtypeをついに使い分ける日がくるとは…というライトな内容で発表しようと思っています。`,
    speakerName: "表 洋樹",
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
  },
  {
    id: "31",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "コンポーネントライブラリで実現する、アクセシビリティの正しい実装パターン",
    overview: `WAI-ARIA属性はリッチなアプリケーション作成を可能にしますが、誤用すると、スクリーンリーダーなどの支援技術で情報が正しく伝わらず、ユーザビリティを著しく損なうことが頻繁に発生します。

SmartHRでは、コンポーネントライブラリを用いてアクセシビリティの実装を隠蔽し、TypeScriptの型定義を活用することで、WAI-ARIA属性の値や組み合わせを制限し、開発者が意図しない誤用を開発時に防ぎます。このコンポーネントライブラリを利用することで、開発者はアクセシビリティについて深く理解していなくても、容易にアクセシブルなサービスを構築できます。LTでは具体的なコンポーネントの実装例や、アクセシビリティを考慮したコンポーネント設計の思想を紹介します。

この発表は、アクセシビリティに関心のあるフロントエンドエンジニアや、Web サービスのアクセシビリティ向上に取り組む方を対象としています。コンポーネントライブラリ導入による開発効率向上、アクセシビリティ担保の容易さ、そして運用上の課題や注意点などを、実例を交えて紹介します。`,
    speakerName: "たじまん",
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
  },
  {
    id: "34",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "feature flag 自動お掃除のための TypeScript メタプログラミング",
    speakerName: "azrsh",
  },
  {
    id: "35",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "技術書をソフトウェア開発する - jsprimerの10年から学ぶ継続的メンテナンスの技術",
    speakerName: "azu",
  },
  {
    id: "36",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "機能的凝集の概念を用いて複数ロール、類似の機能を多く含むシステムのフロントエンドのコンポーネントを適切に分割する",
    speakerName: "IkedaNoritaka",
  },
  {
    id: "37",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "複雑なフォームを継続的に開発していくための技術選定・設計・実装",
    speakerName: "izumin",
  },
  {
    id: "38",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "TypeScript製IaCツールのAWS CDKが様々な言語で実装できる理由 〜他言語変換の仕組み〜",
    speakerName: "k.goto",
  },
  {
    id: "39",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "サウンドネスという概念 - 良いTypeScriptを書くためのマインドセット",
    speakerName: "Kei",
  },
  {
    id: "40",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "TS特化Clineプログラミング",
    speakerName: "mizchi",
  },
  {
    id: "41",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "TypeScript Language Service Plugin で CSS Modules の開発体験を改善する",
    speakerName: "mizdra",
  },
  {
    id: "42",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "君だけのオリジナル async / await を作ろう",
    speakerName: "susisu",
  },
  {
    id: "43",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title: "Web Streams APIの基本と実践、TypeScriptでの活用法",
    speakerName: "tasshi",
  },
  {
    id: "44",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Pragmatic Functional Programming in TypeScript",
    speakerName: "yasaichi",
  },
  {
    id: "45",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "ts-morphを利用して編集可能なコード生成を実現する",
    speakerName: "yuta-ike",
  },
  {
    id: "46",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "SESSION",
    title:
      "TypeScriptとVercel AI SDKで実現するLLMアプリケーション開発：フロントエンドからバックエンド、そしてChrome拡張まで",
    speakerName: "加瀬健太（@Kesin11）",
  },
  {
    id: "47",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Lookback TypeScript ESM support and what should we do now.",
    speakerName: "左治木 隆成",
  },
  {
    id: "48",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title: "フロントエンドがTypeScriptなら、バックエンドはPHPでもいいじゃない",
    speakerName: "富所 亮",
  },
  {
    id: "49",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "SESSION",
    title:
      "型システムを活用した ESLint カスタムルール開発入門 〜固有ドメインにおけるコーディング規約を開発する〜",
    speakerName: "山梨 蓮",
  },
  {
    id: "50",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "React19で変化したuseReducerの型から学ぶTypeScriptの型推論",
    overview: `＠types/reactのバージョン19では、React本体の変更に対する追従の他に幾つかの変更が加えられました。その中の一つとしてuseReducerの型の変更があります。

useReducerの型の変更は型推論の向上を目的として行われました。これまではuseReducerを用いるためにジェネリクスで型を保管するのが一般的でした。しかひ、バージョン19からは引数から型を推論する形に変更され、ジェネリクスを用いないことがベストプラクティスになりました。
これにより、開発者が冗長な型定義を行うことを防ぎつつ、堅安全性を維持することが可能になりました。

本発表では、
・useReducerの新しい使い方
・変更の背景から学ぶ、TypeScriptの型推論の活かし方
を紹介します。

ReactのAPIに関連する内容ですが、本発表はReactのAPIを元にしたTypeScriptユーザー全般に役立つ内容となります。`,
    speakerName: "k8o",
  },
  {
    id: "51",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Type ChallengesにPRを出して新しい問題を追加した話",
    overview: `みなさんはType Challengesをご存知でしょうか？

Type ChallengesはTypeScriptの型システムをハンズオンで学べるOSSリポジトリです。
型の問題がたくさん用意されており、それを解いていくことでTypeScriptの型システムについて学ぶことができます。
私自身もType Challengesを通じてTypeScriptの型システムについて学び、楽しんでいました。しかしそれだけでなく、他の人の学びになるような問題を追加したいと思いPRを出してみました。
結果としてはマージされ、新たな問題として追加されました。
https://github.com/type-challenges/type-challenges/issues/35252

そこでこの発表では、
・Type ChallengesにPRを出すまでにしたこと
・実際に作った問題の解説とポイント
などについてお話しさせていただこうかと思います。`,
    speakerName: "Kanon",
  },
  {
    id: "52",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Panda-CSS はどのように型安全にしているのか",
    overview: `Panda-CSS は型が効く Tailwind という印象を持たれていることが多いように思います。実際、Tailwind と同じような記法で型安全に実装することができるわけですが、どのような方式で型安全にしているのか、というテーマで簡単にお話ししようと思っています。

お話しする内容の詳細について記載します。Panda-CSS では、定義ファイル（panda.config.ts）に対してカラーバリエーション等の定義をします。この定義ファイルが元となり、型定義ファイル（*.d.ts）が出力されています。出力された型定義ファイル（*.d.ts）は、ユーティリティ関数の引数等の型定義に使用されており、開発ではユーティリティ関数を使用するため、型安全に実装することができます。Panda-CSS 以外にも型安全にCSSを実装できるライブラリとして stitches などがありますが、Panda-CSS は事前に定義ファイルから型定義を出力する部分が他のライブラリの異なる点であり、これによって型推論にかかるコストを抑えることができています。ただ、この方式にもデメリットはあり、事前に型定義を出力する、という開発のための事前準備が必要になっています。型を効かせて実装を進めるために、どのタイミングで型に関するコストを支払うか...という問題に帰着します。

また、型定義ファイル（*.d.ts）の出力の仕組みについても、シンプルな実装で実現されているため、Panda-CSS のライブラリの実装を見つつ簡単にお話しします。

（参考：Panda-CSS の型定義の出力の実装）
https://github.com/chakra-ui/panda/blob/1086769eac8867a8a71ddf2369776fd27eeaebb0/packages/generator/src/artifacts/types/token-types.ts#L6`,
    speakerName: "Kato.work",
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
  },
  {
    id: "54",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "ProxyとTypeScriptのおいしい関係",
    overview: `本発表では、ReactのフォームライブラリであるConformを題材に、Proxyによる動的なプログラミングにTypeScriptの型を被せることで優れた開発体験が得られることを見ていきます。
Proxyはオブジェクトに対する操作をインターセプトできるデータ型で、ECMAScriptの標準です。
Proxyを使えば、例えばあるオブジェクトのプロパティに対するget操作にログ出力などの処理を挟むことができます。
しかしConformでは、空オブジェクトをProxyでラップし、プロパティアクセスを全て動的に生成する、という大胆なことをしています。
一見このような動的なプログラミングとTypeScriptは相性が悪そうですが、
ConformはむしろTypeScriptの型を存分に活かした開発体験を提供しています。
本発表では、その点についてConformのサンプルコードや内部実装を追いながらお話します。

https://conform.guide/`,
    speakerName: "Motoki Shakagori",
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
  },
  {
    id: "60",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title:
      "declaration mergingの威力：ライブラリアップデート時の書き換え作業を90%短縮するテクニック",
    overview:
      "# 背景・課題感\nTypeScriptライブラリのバージョンアップに伴う型定義や関数定義の変更は、大規模プロジェクトにおいて広範な影響を及ぼします。\n手動での型の置換作業は、以下の問題があります：\n- 時間がかかる\n- ヒューマンエラーのリスクが高い\n- 変更箇所の見落としが発生しやすい\n\n# 実践内容\ndeclaration mergingを用いてライブラリの型を上書きすることで、古い型を使用している箇所を検出しました。\nさらにエディタのリファクタリング機能を用いることで新しい型に一括置換しました。\n\n# 結果\n## うまくいったこと\n古い型を置き換えることで型エラーを発生させ、修正箇所を自動的にリストアップできました。\nさらにエディタの一括リネーム機能により、大部分の置換作業が迅速かつ正確に行えました。\n\n## うまくいかなかったこと・対処\n一部一括置換ができず手動での修正が必要でした。\nまた型安全でない部分はエラーを検出できないのでテストでの動作確認が必要でした。\n\n# Learning Outcome\ndeclaration merging を利用して、ライブラリアップデート時の作業を大幅に短縮する具体的な方法を学ぶことができます。",
    speakerName: "Yuma Takei",
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
  },
  {
    id: "62",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "Project Referencesを活用した実行環境ごとのtsconfig最適化",
    overview: `本セッションでは、実行環境に合わせて tsconfig を最適化する手法を解説します。

1 つの tsconfig ですべてを実装すると、ブラウザ向けコードで Node.js のライブラリを誤って使用したり、サーバー向けコードで window にアクセスしてしまったりしても気付けないといった課題が生じます。
さらに、対応ブラウザに合わせて target や lib を古いバージョンに設定すると、サーバー内や開発時のみで動くコードにおいても最新のメソッドが使えず、逆に ESNext を指定すると古いブラウザで動かないメソッドを使ってしまうリスクが発生します。

こうした課題を解消するために、Project References を駆使して複数の tsconfig を使い分け、各環境に最適化する具体的なアプローチを紹介します。`,
    speakerName: "板井俊樹",
  },
  {
    id: "63",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScriptのmoduleオプションを改めて整理する",
    overview: `本発表は、TypeScriptにおけるmoduleオプションについて、その基本的な役割と設定時に注意すべきポイントを体系的に整理します。

moduleオプションは、TypeScriptが出力するモジュール形式を指定するための重要な設定項目であり、ESModuleやCommonJSの違い、Node.jsにおける実行時の挙動、さらにはビルド結果の違いを正確に理解しておかねば、意図しないトラブルに見舞われるリスクが高まります。

そこで、発表では実際に私が遭遇したトラブル事例をもとに、moduleオプションがもたらす挙動の微妙な違いとその影響を解説し、さらにTypeScript 5.8で導入された\`nodenext\`の仕様変更がどのような影響を及ぼすのかについても触れます。

主な対象は、日常的にTypeScriptを活用している開発者で、特に\`tsconfig.json\`の設定に携わる機会のある方々です。基本的なTypeScriptの知識があれば参加可能な内容となっています。

発表を通じて複雑なmoduleオプションに対する苦手意識を払拭し、基礎知識と最新の挙動を理解する方法を知ることで、自信をもって設定に臨めることを目指します。`,
    speakerName: "大石 貴則 (bicstone)",
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
  },
  {
    id: "65",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title:
      "これは型破り？型安全？真実はいつもひとつ！（じゃないかもしれない）TypeScriptクイズ〜〜〜〜！！！！！",
    overview: `TypeScriptの最大の強みであると言っても過言ではない型システム、時に役に立ち、時に開発の効率を下げてしまうこともあるかもしれません。
実際の現場で出会いそう or 出会った or そんな使い方しねーよ！など TypeScript の理想的な使い方や、少しクセの効いた使い方、はたまた型破りな使い方をクイズ形式でテンポよく紹介していきます！参加者が実際にクイズに参加してもらうような形式のLTにしたいと思ってます！

題材を選んだ理由は、型安全と型破り（今回のTSkaigiのテーマ）という二つのアプローチを実際に使い分けることで、開発者がこれから出会うであろうコードや一生見ないようなコードを紹介することで、セッションに参加していただいた皆様のこれからのTypeScriptの使い方をより効率的に活用するための知識を提供したいと考えたからです。
クイズ形式で進めることで、参加者が積極的に学びながら楽しめる内容にし、型の概念や実践的な技術を自然に理解してもらうことを目的としています！`,
    speakerName: "君田 祥一",
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
  },
  {
    id: "67",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title:
      "VueUseから学ぶ実践TypeScript〜人気ライブラリのコードベースから見つけた型定義の工夫〜",
    overview: `# トークの主題
VueUse（Vue.js用の人気ユーティリティライブラリ）のコードベースから、TypeScriptの型機能の実践的な使い方を紹介します。

# なぜVueUseなのか
・実践的なTypeScriptの使用例が豊富
・関数単位でコンパクトに実装されており、理解しやすい
・15.7kのGitHubスターを持つ広く使われているライブラリ
TypeScriptの基本を理解している方を対象に、実際のOSSから学べる型システムの活用例をお伝えします。

# 発表内容
特に以下の3つの型機能に注目し、実際のコードを通じてその活用方法を解説します
## 関数のオーバーロード
複数のイベントターゲットに対して型安全なAPIを提供する方法
## 条件付き型
ジェネリクスを使って、使用状況に応じて型を変更する手法
## 型述語
配列操作で型情報を正確に保持する実装パターン`,
    speakerName: "ツノ",
  },
  {
    id: "68",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "型推論の扉を開く―集合論と構造的型制約で理解する中級へのステップ",
    overview: `TypeScript の型システムを「実行時の値の型」としてではなく、「その変数が取り得る値の集合（ドメイン）」として捉える視点を提示し、初心者から中級者へのステップアップのきっかけを作るための発表です。

TypeScript を学ぶ上で、「型」はしばしば静的なラベルのように扱われがちですが、本発表では 「型＝値の集合」 という視点を導入し、型推論や型操作を数学的な集合論の観点から解説します。特に、リテラル型・ユニオン型・交差型などがどのように集合として機能し、和集合・積集合（共通部分）といった集合演算が TypeScript の型システムにどのように反映されるのかを明確にします。

例えば keyof 演算子がユニオン型に適用されたとき never になる理由を、図解や具体例を用いて、5分という短い時間で要点をわかりやすくまとめる予定です。

type A = { a: number };
type B = { b: number };
type Keys = keyof (A | B); // 結果は never`,
    speakerName: "栃川晃佑",
  },
  {
    id: "69",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "型がない世界に生まれ落ちて 〜TypeScript運用進化の歴史〜",
    overview: `5年前、私たちのプロジェクトではJavaScript or flowがコードベースの大部分を占めており、フロントエンドにはTypeScriptの厳密な型が導入されていませんでした。
そのため、型の恩恵を十分に受けられず、運用面での課題が多くありました。
しかし現在、最も開発が活発なリポジトリはTypeScriptオンリーとなっており、ts-ignoreもほとんど存在しない状態になっています。
さらに、フロントエンドのテストカバレッジも90%近くに達しており、型の厳密性とテストの充実が相まって、より堅牢な開発環境が実現されています。

ただ「型安全なコードが理想だから」といった議論だけでは、このような健全なコードベースは実現できませんでした。
現場では、どのように周囲を巻き込み、組織として継続的に運用していくかが重要なポイントとなります。
本発表では、5年前とのBefore ~ Afterの経緯を組織論の視点も交えながらお話しします。TypeScriptの運用に悩んでいる方、型安全なコードベースを目指しつつも組織の壁にぶつかっている方にとって、実践的な知見を共有できればと思います。`,
    speakerName: "成原 聡一朗",
  },
];

export const talkIds = talkList.map((talk) => ({
  id: talk.id,
}));
