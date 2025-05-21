type CommunityArea =
  | "hokkaido"
  | "tohoku"
  | "kanto"
  | "chubu"
  | "kinki"
  | "chugoku"
  | "shikoku"
  | "kyushu"
  | "okinawa"
  | "online";

type Community = {
  name: string;
  link: string;
};

type CommunityList = {
  [key in CommunityArea]?: {
    label: string;
    communities: Community[];
  };
};

export const communityList: CommunityList = {
  hokkaido: {
    label: "北海道",
    communities: [],
  },
  tohoku: {
    label: "東北",
    communities: [],
  },
  kanto: {
    label: "関東",
    communities: [
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
        name: "Ibaraki.dev",
        link: "https://mito-web-engineer.connpass.com",
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
  },
  chubu: {
    label: "中部",
    communities: [
      {
        name: "nagoya.ts",
        link: "https://nagoyats.connpass.com",
      },
    ],
  },
  kinki: {
    label: "近畿",
    communities: [
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
  },
  chugoku: {
    label: "中国",
    communities: [],
  },
  shikoku: {
    label: "四国",
    communities: [],
  },
  kyushu: {
    label: "九州",
    communities: [
      {
        name: "fukuoka.ts",
        link: "https://fukuoka-ts.connpass.com",
      },
    ],
  },
  okinawa: {
    label: "沖縄",
    communities: [
      {
        name: "v-okinawa",
        link: "https://v-okinawa.connpass.com",
      },
    ],
  },
  online: {
    label: "オンライン",
    communities: [
      {
        name: "chibivue land",
        link: "https://github.com/chibivue-land",
      },
      {
        name: "Joshi.ts",
        link: "https://joshi-ts.connpass.com",
      },
    ],
  },
};
