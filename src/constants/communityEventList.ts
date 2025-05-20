type CommunityEventMonth = "6月" | "7月" | "8月" | "9月" | "11月" | "その他";

type CommunityEvent = {
  name: string;
  link: string;
};

export const communityEventList: {
  [key in CommunityEventMonth]: CommunityEvent[];
} = {
  "6月": [
    {
      name: "nagoya.ts",
      link: "https://nagoyats.connpass.com/",
    },
    {
      name: "nakanoshima.dev",
      link: "https://nakanoshima-dev.connpass.com/event/353082/",
    },
    {
      name: "東京Node学園",
      link: "https://nodejs.connpass.com/",
    },
    {
      name: "DIST",
      link: "https://dist.connpass.com/event/354170/",
    },
    {
      name: "kyoto.js",
      link: "https://kyotojs.connpass.com/",
    },
    {
      name: "React Osaka",
      link: "https://react-osaka.connpass.com/event/355452/",
    },
  ],
  "7月": [
    {
      name: "shibuya.ts",
      link: "https://shibuya-ts.connpass.com/",
    },
    {
      name: "kansai.ts",
      link: "https://kansaits.connpass.com/",
    },
    {
      name: "Joshi.ts",
      link: "https://joshi-ts.connpass.com/",
    },
  ],
  "8月": [
    {
      name: "Babylon.js 勉強会",
      link: "https://babylonjs.connpass.com/",
    },
    {
      name: "fukuoka.ts",
      link: "https://fukuoka-ts.connpass.com/",
    },
  ],
  "9月": [
    {
      name: "フロントエンドカンファレンス東京",
      link: "https://x.com/fec_tokyo",
    },
  ],
  "11月": [
    {
      name: "JSConf.jp",
      link: "https://x.com/jsconfjp",
    },
  ],
  その他: [
    {
      name: "Meguro.es",
      link: "https://meguro.es/",
    },
    {
      name: "chibivue land",
      link: "https://github.com/chibivue-land",
    },
  ],
};
