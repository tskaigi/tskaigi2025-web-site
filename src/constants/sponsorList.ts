export type Sponsor = {
  id: string;
  name: string;
  logoImage: string;
  logoLink: string;
  addPadding: boolean;
  isTenantChecked: boolean;
  introduction?: string;
  links?: {
    text: string;
    href: string;
  }[];
};

export type SponsorList = {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
};

export const sponsorList: SponsorList = {
  platinum: [
    {
      id: "P01",
      name: "アセンド株式会社",
      logoImage: "/sponsors/ascend.png",
      logoLink: "https://www.ascendlogi.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      // TODO:
      introduction: `
      ■「日本で最もデジタル化の遅れた物流産業で、最高の業務体験を創る」
アセンド株式会社は日本の物流DXを目指すスタートアップです。
物流業界は20兆円の巨大市場でありながら、クラウド利用率は全産業で最低でありデジタル化の遅れ故に2024年問題をはじめとして社会課題を抱える業界です。アセンドはVertical SaaS「ロジックス」を全国の運送会社へ開発提供し、現場業務のデジタル化と経営の高度化を同時に図り、物流業界の変革を推進しています。

■ アセンドとTypeScript
アセンドは社会課題を解決するプロダクトエンジニア組織を目指して、Frontend/Backend/IaC/DataPipelineの全てをTypeScriptで統一しました。TSでの言語統一により、全エンジニアがフルスタックに開発し、顧客業務やドメインに深く寄り添いプロダクト価値に拘った開発を進めています。開発生産性は6deploys/dayと高い環境であり、少数チームでありながらサービスは案件管理や労務・車両管理といった多岐にわたる複数プロダクトを展開し、運送会社の全ての業務のデジタル化を推進しています。2023年12月にはシリーズAの資金調達を実施し、より多くの運送会社に更なる機能・価値を届けるため、仲間を募集しています。
TypeScriptを駆使して社会課題解決に挑むプロダクトエンジニアを積極募集中です。お気軽にご連絡ください！
      `,
      links: [
        {
          text: "アセンド株式会社",
          href: "https://www.ascendlogi.co.jp/",
        },
        {
          text: "エンジニア採用サイト",
          href: "https://product.career.ascendlogi.co.jp/",
        },
        {
          text: "プロダクトエンジニアに関して",
          href: "https://note.com/niwa_takeru/n/n0ae4acf2964d",
        },
      ],
    },
    {
      id: "P02",
      name: "クラフトバンク株式会社",
      logoImage: "/sponsors/CraftBank_logo_cmyk_original.png",
      logoLink: "https://corp.craft-bank.com/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "P03",
      name: "AVITA株式会社",
      logoImage: "/sponsors/AVITA_Logomark_Logotype.png",
      logoLink: "https://avita.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "P04",
      name: "Nstock株式会社",
      logoImage: "/sponsors/nstock_logo_black_horizontal.png",
      logoLink: "https://nstock.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "P05",
      name: "ダイニー",
      logoImage: "/sponsors/dinii_v1.png",
      logoLink: "https://recruit2024.dinii.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "P06",
      name: "株式会社TwoGate",
      logoImage: "/sponsors/twogate_logo.svg",
      logoLink: "https://twogate.com/",
      addPadding: false,
      isTenantChecked: true,
    },
  ],
  gold: [
    {
      id: "G01",
      name: "レバレジーズ株式会社",
      logoImage: "/sponsors/leverages.jpg",
      logoLink: "https://recruit.leverages.jp/recruit/engineer/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G02",
      name: "KINTOテクノロジーズ株式会社",
      logoImage: "/sponsors/kinto_logoA.png",
      logoLink: "https://www.kinto-technologies.com/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G03",
      name: "株式会社サイバーエージェント",
      logoImage: "/sponsors/CyberAgent.png",
      logoLink: "https://www.cyberagent.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G04",
      name: "株式会社ケップル",
      logoImage: "/sponsors/kepple_logo.png",
      logoLink: "https://corp.kepple.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G05",
      name: "カミナシ",
      logoImage: "/sponsors/kaminashi_logo.png",
      logoLink: "https://corp.kaminashi.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G06",
      name: "GMO Flatt Security株式会社",
      logoImage: "/sponsors/gmo_color_horizontal_default.svg",
      logoLink: "https://flatt.tech/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G07",
      name: "トグルホールディングス株式会社",
      logoImage: "/sponsors/toggle_logo.png",
      logoLink: "https://toggle.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G08",
      name: "株式会社CARTA HOLDINGS",
      logoImage: "/sponsors/logo_carta_black.png",
      logoLink:
        "https://cartaholdings.co.jp/engineering/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi2025_sponsor",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G09",
      name: "キャディ株式会社",
      logoImage: "/sponsors/caddi_logo_primary_horizontal.png",
      logoLink: "https://caddi.com/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G10",
      name: "株式会社スタメン",
      logoImage: "/sponsors/stmn_logo.png",
      logoLink: "https://stmn.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G11",
      name: "Ubie株式会社",
      logoImage: "/sponsors/Ubie_logo_horizon_color.jpg",
      logoLink: "https://ubie.life/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "G12",
      name: "匠技研工業株式会社",
      logoImage: "/sponsors/takumi_giken_logo.png",
      logoLink: "https://takumi-force.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
  ],
  silver: [
    {
      id: "S02",
      name: "Theoria technologies 株式会社",
      logoImage: "/sponsors/theoria_logo_main.png",
      logoLink: "https://theoriatec.com/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S03",
      name: "株式会社Linc'well",
      logoImage: "/logo.svg",
      logoLink: "/",
      addPadding: false,
      isTenantChecked: false,
    },
    {
      id: "S05",
      name: "株式会社EARTHBRAIN",
      logoImage: "/sponsors/earthbrain_logo.png",
      logoLink:
        "https://earthbrain.notion.site/EARTHBRAIN-Tech-3775fb71b41342aebf0aee6848d722bd",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S06",
      name: "MOSH株式会社",
      logoImage: "/sponsors/MOSH_logo.png",
      logoLink: "https://mosh.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S08",
      name: "株式会社カケハシ",
      logoImage: "/sponsors/kakehashi.png",
      logoLink: "https://hrmos.co/pages/kakehashi",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S11",
      name: "株式会社メドレー",
      logoImage: "/sponsors/medley_rgb.png",
      logoLink: "https://www.medley.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S12",
      name: "株式会社ドワンゴ",
      logoImage: "/sponsors/dwango_blue.png",
      logoLink: "https://dwango.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S13",
      name: "株式会社オプティム",
      logoImage: "/sponsors/OPTiM_corp_logo.jpg",
      logoLink: "https://www.optim.co.jp/corporate/outline",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S14",
      name: "株式会社TOKIUM",
      logoImage: "/sponsors/cmyk_tokiumlogo_p.jpg",
      logoLink: "https://corp.tokium.jp/",
      addPadding: true,
      isTenantChecked: true,
    },
    {
      id: "S15",
      name: "フリー株式会社",
      logoImage: "/sponsors/freee_logo_corporate_logo.png",
      logoLink: "https://corp.freee.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "S18",
      name: "フォルシア株式会社",
      logoImage: "/sponsors/FORCIA_logo.png",
      logoLink: "https://www.forcia.com/",
      addPadding: true,
      isTenantChecked: true,
    },
    {
      id: "S20",
      name: "SPACEMARKET",
      logoImage: "/sponsors/spacemarket_TypeB.png",
      logoLink: "https://spacemarket.co.jp/recruit/engineer/",
      addPadding: false,
      isTenantChecked: true,
    },
  ],
  bronze: [
    {
      id: "B02",
      name: "株式会社Gemcook",
      logoImage: "/sponsors/gemcook-logo-white.png",
      logoLink: "https://gemcook.com",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B03",
      name: "note株式会社",
      logoImage: "/sponsors/note_logo.png",
      logoLink: "https://note.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B04",
      name: "株式会社kickflow",
      logoImage: "/sponsors/kickflow_logo.png",
      logoLink: "https://kickflow.com/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B05",
      name: "株式会社Hacobu",
      logoImage: "/sponsors/Hacobu_logo_rgb_black.png",
      logoLink: "https://hacobu.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B06",
      name: "株式会社はてな",
      logoImage: "/sponsors/hatena_logo_horizontal_primary.png",
      logoLink: "https://hatena.co.jp",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B07",
      name: "メシウス株式会社（旧：グレープシティ）",
      logoImage: "/sponsors/MESCIUS_Logo.png",
      logoLink: "https://developer.mescius.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B08",
      name: "インスタベース",
      logoImage: "/sponsors/rebase_logo.png",
      logoLink: "https://rebase.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B09",
      name: "株式会社ROUTE06",
      logoImage: "/sponsors/route06_logo-ptn2_primary.jpg",
      logoLink: "https://route06.com/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B10",
      name: "株式会社Antway / システムアーキテクト部",
      logoImage: "/sponsors/Antway_logo.png",
      logoLink: "https://antway.co.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B11",
      name: "株式会社mov（口コミコム）",
      logoImage: "/sponsors/mov_typo_navy_with_space.png",
      logoLink: "https://mov.am/",
      addPadding: false,
      isTenantChecked: true,
    },
    {
      id: "B12",
      name: "株式会社GENDA",
      logoImage: "/sponsors/GENDA_Logo_Positive.png",
      logoLink: "https://genda.jp/",
      addPadding: false,
      isTenantChecked: true,
    },
  ],
};
