export const EVENT_DATE = {
  DAY1: "2025-03-23",
  DAY2: "2025-03-24",
} as const;
export type EventDate = keyof typeof EVENT_DATE;

export const TRACK = {
  TRACK1: {
    name: "トグルルーム",
    shortName: "トグル",
    tag: "#tskaigi_toggle",
  },
  TRACK2: {
    name: "アセンドトラック",
    shortName: "アセンド",
    tag: "#tskaigi_ascend",
  },
  TRACK3: {
    name: "レジレジーズトラック",
    shortName: "レジレジーズ",
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
  speakerName: string;
};

export const talkList: Talk[] = [
  {
    id: "1",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "SESSION",
    title: "静的解析で実現したいことから逆算して学ぶTypeScript Compiler",
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
      "AWS LambdaをTypeScriptで動かしてみかった、Node.jsのTypeScriptサポートの利点と課題",
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
    speakerName: "elecdeer",
  },
  {
    id: "19",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "TSConfig Solution Style & subpath imports でファイル単位で型を切り替える",
    speakerName: "kotori",
  },
  {
    id: "20",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "URLPatternから始めるWebフレームワーク開発入門",
    speakerName: "ryuapp",
  },
  {
    id: "21",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "TypeScript だけを書いて Tauri でデスクトップアプリを作ろう",
    speakerName: "tris",
  },
  {
    id: "22",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title:
      "転生したらTypeScriptのEnumだった件〜型安全性とエコシステムの変化で挫けそうになっているんだが〜",
    speakerName: "yamanoku",
  },
  {
    id: "23",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "NovaのTypeScriptサポート",
    speakerName: "Yoshino Yuto",
  },
  {
    id: "24",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "型安全なDrag and Dropの設計を考える",
    speakerName: "yudppp",
  },
  {
    id: "25",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "タイプレベルリファクタリング奮闘記〜この「型パズル」は読めません！〜",
    speakerName: "Yugo Yagita",
  },
  {
    id: "26",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "wasmで多言語資産をTypeScriptで活用する",
    speakerName: "赤木勇統",
  },
  {
    id: "27",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "型パズルを好きになるために、弱プロを型システムだけで解いてみることにした",
    speakerName: "いまいまい",
  },
  {
    id: "28",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "Interface vs Types 〜型推論が過多推論〜",
    speakerName: "表 洋樹",
  },
  {
    id: "29",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "ハッカソンでTypeScriptを使った実体験",
    speakerName: "河村悠太",
  },
  {
    id: "30",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "GitHub ActionsをTypeScriptで作ろう！",
    speakerName: "じょーし",
  },
  {
    id: "31",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title:
      "コンポーネントライブラリで実現する、アクセシビリティの正しい実装パターン",
    speakerName: "たじまん",
  },
  {
    id: "32",
    eventDate: "DAY1",
    track: "TRACK3",
    talkType: "LT",
    title: "『Python→TypeScript』オンボーディング奮闘記",
    speakerName: "龍野 卓己",
  },
  {
    id: "33",
    eventDate: "DAY1",
    track: "TRACK2",
    talkType: "LT",
    title: "主要ライブラリの実例に学ぶ、TypeScriptで実現する型安全な座標定義",
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
    title: "Web Streams APIの基本と実装、TypeScriptでの活用法",
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
    speakerName: "k8o",
  },
  {
    id: "51",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Type ChallengesにPRを出して新しい問題を追加した話",
    speakerName: "Kanon",
  },
  {
    id: "52",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "Panda-CSSはどのように型安全にしているのか",
    speakerName: "Kato.work",
  },
  {
    id: "53",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "Result型、自前で書くか、ライブラリ使うか",
    speakerName: "majimaccho",
  },
  {
    id: "54",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "ProxyとTypeScriptのおいしい関係",
    speakerName: "Motoki Shakagori",
  },
  {
    id: "55",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "Standard Schema: スキーマライブラリの統一規格とは何か",
    speakerName: "Nozomu Ikuta",
  },
  {
    id: "56",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "令和最新版TypeScriptでのnpmパッケージ開発",
    speakerName: "odan",
  },
  {
    id: "57",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "型付け力を強化するための Hoogle のすゝめ",
    speakerName: "TAKASE Kazuyuki (@Guvalif)",
  },
  {
    id: "58",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title:
      "クラサバ境界を失った現代 TypeScript コードベースに秩序をもたらしたい",
    speakerName: "Yo Iwamoto",
  },
  {
    id: "59",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "ts-morph実践：型を利用するcodemodのテクニック",
    speakerName: "ypresto",
  },
  {
    id: "60",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title:
      "declaration mergingの威力：ライブラリアップデート時の書き換え作業を90%短縮するテクニック",
    speakerName: "Yuma Takei",
  },
  {
    id: "61",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "コンパイルオプションで変わる型世界",
    speakerName: "池田 敦祐",
  },
  {
    id: "62",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "Project Referencesを活用した実行環境ごとのtsconfig最適化",
    speakerName: "板井 俊樹",
  },
  {
    id: "63",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScriptのmoduleオプションを改めて整理する",
    speakerName: "大石 真則 (bicstone)",
  },
  {
    id: "64",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "TypeScript ASTとJSDocで実現するコードの自動削除",
    speakerName: "川野賢一",
  },
  {
    id: "65",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title:
      "これは型破り？型安全？真実はいつもひとつ！（じゃないかもしれない）TypeScriptクイズ〜〜〜〜！！！！！",
    speakerName: "君田 祥",
  },
  {
    id: "66",
    eventDate: "DAY2",
    track: "TRACK3",
    talkType: "LT",
    title: "バリデーションライブラリ徹底比較",
    speakerName: "田中勇太",
  },
  {
    id: "67",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title:
      "VueUseから学ぶ実践TypeScript〜人気ライブラリのコードベースから見つけた型定義の工夫〜",
    speakerName: "ツノ",
  },
  {
    id: "68",
    eventDate: "DAY2",
    track: "TRACK2",
    talkType: "LT",
    title: "型推論の扉を開く ―集合論と構造的型制約で理解する中級へのステップ",
    speakerName: "栃川晃佑",
  },
  {
    id: "69",
    eventDate: "DAY2",
    track: "TRACK1",
    talkType: "LT",
    title: "型がない世界に生まれ落ちて 〜TypeScript運用進化の歴史〜",
    speakerName: "成原 聡一朗",
  },
];
