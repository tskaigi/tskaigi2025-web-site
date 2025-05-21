type CommunityEventMonth = "6月" | "7月" | "8月" | "9月" | "11月" | "その他";

type CommunityEvent = {
  name: string;
  link: string;
  schedule: string;
};

export const communityEventList: {
  [key in CommunityEventMonth]: CommunityEvent[];
} = {
  "6月": [
    {
      name: "nakanoshima.dev",
      link: "https://nakanoshima-dev.connpass.com/event/353082/",
      schedule: "6/12 (木)",
    },
    {
      name: "React Osaka",
      link: "https://react-osaka.connpass.com/event/355452/",
      schedule: "6/20 (金)",
    },
    {
      name: "DIST",
      link: "https://dist.connpass.com/event/354170/",
      schedule: "6/27 (金)",
    },
    {
      name: "nagoya.ts",
      link: "https://nagoyats.connpass.com/",
      schedule: "6月上旬",
    },
    {
      name: "東京Node学園",
      link: "https://nodejs.connpass.com/",
      schedule: "6月頃",
    },
    {
      name: "kyoto.js",
      link: "https://kyotojs.connpass.com/",
      schedule: "6月下旬〜7月頃",
    },
  ],
  "7月": [
    {
      name: "shibuya.ts",
      link: "https://shibuya-ts.connpass.com/",
      schedule: "7月頃",
    },
    {
      name: "kansai.ts",
      link: "https://kansaits.connpass.com/",
      schedule: "7月頃",
    },
    {
      name: "Joshi.ts",
      link: "https://joshi-ts.connpass.com/",
      schedule: "7月〜8月頃",
    },
  ],
  "8月": [
    {
      name: "Babylon.js 勉強会",
      link: "https://babylonjs.connpass.com/",
      schedule: "8月頃",
    },
    {
      name: "fukuoka.ts",
      link: "https://fukuoka-ts.connpass.com/",
      schedule: "8月頃",
    },
  ],
  "9月": [
    {
      name: "フロントエンドカンファレンス東京",
      link: "https://x.com/fec_tokyo",
      schedule: "9/21 (日)",
    },
  ],
  "11月": [
    {
      name: "JSConf.jp",
      link: "https://x.com/jsconfjp",
      schedule: "11/16 (日)",
    },
  ],
  その他: [
    {
      name: "Meguro.es",
      link: "https://meguro.es/",
      schedule: "10月以降の年内",
    },
    {
      name: "chibivue land",
      link: "https://github.com/chibivue-land",
      schedule: "月1不定期開催",
    },
  ],
};
