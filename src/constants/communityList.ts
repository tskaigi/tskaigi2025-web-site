type CommunityArea =
  | "東京"
  | "関東"
  | "中部"
  | "関西"
  | "九州"
  | "沖縄"
  | "オンライン";

type Community = {
  name: string;
  link: string;
};

export const communityList: {
  [key in CommunityArea]: Community[];
} = {
  東京: [
    {
      name: "Babylon.js 勉強会",
      link: "https://babylonjs.connpass.com",
    },
    {
      name: "Browser and UI",
      link: "https://browser-and-ui.connpass.com",
    },
    {
      name: "DIST",
      link: "https://dist.connpass.com",
    },
    {
      name: "JSConf.jp",
      link: "https://jsconf.jp",
    },
    {
      name: "Meguro.es",
      link: "https://meguroes.connpass.com",
    },
    {
      name: "Nihonbashi.js",
      link: "https://nihonbashi-js.connpass.com",
    },
    {
      name: "shibuya.ts",
      link: "https://shibuya-ts.connpass.com",
    },
    {
      name: "TSKaigi mashup",
      link: "https://typescript-jpc.connpass.com",
    },
    {
      name: "フロントエンドカンファレンス東京",
      link: "https://fec-tokyo.connpass.com",
    },
    {
      name: "東京Node学園",
      link: "https://nodejs.connpass.com",
    },
  ],
  関東: [
    {
      name: "Ibaraki.dev",
      link: "https://mito-web-engineer.connpass.com",
    },
  ],
  中部: [
    {
      name: "nagoya.ts",
      link: "https://nagoyats.connpass.com",
    },
  ],
  関西: [
    {
      name: "kansai.ts",
      link: "https://kansaits.connpass.com",
    },
    {
      name: "kyoto.js",
      link: "https://kyotojs.connpass.com",
    },
    {
      name: "nakanoshima.dev",
      link: "https://nakanoshima-dev.connpass.com",
    },
    {
      name: "React Osaka",
      link: "https://react-osaka.connpass.com",
    },
  ],
  九州: [
    {
      name: "fukuoka.ts",
      link: "https://fukuoka-ts.connpass.com",
    },
  ],
  沖縄: [
    {
      name: "v-okinawa",
      link: "https://v-okinawa.connpass.com",
    },
  ],
  オンライン: [
    {
      name: "chibivue land",
      link: "https://github.com/chibivue-land",
    },
    {
      name: "Joshi.ts",
      link: "https://joshi-ts.connpass.com",
    },
  ],
};
