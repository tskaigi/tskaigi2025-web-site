type Sponsor = {
  id: string;
  name: string;
  logoImage: string;
  logoLink: string;
  addPadding: boolean;
};

type SponsorList = {
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
    },
    {
      id: "P02",
      name: "クラフトバンク株式会社",
      logoImage: "/sponsors/CraftBank_logo_cmyk_original.png",
      logoLink: "/",
      addPadding: false,
    },
    {
      id: "P03",
      name: "AVITA株式会社",
      logoImage: "/sponsors/AVITA_Logomark_Logotype.png",
      logoLink: "https://www.wantedly.com/companies/avita",
      addPadding: false,
    },
    {
      id: "P04",
      name: "Nstock株式会社",
      logoImage: "/sponsors/nstock_logo_black_horizontal.png",
      logoLink: "https://nstock.co.jp/\n",
      addPadding: false,
    },
    {
      id: "P05",
      name: "ダイニー",
      logoImage: "/sponsors/dinii_v1.png",
      logoLink: "https://recruit2024.dinii.jp/",
      addPadding: false,
    },
    {
      id: "P06",
      name: "株式会社TwoGate",
      logoImage: "/sponsors/twogate_logo.svg",
      logoLink: "https://twogate.com/",
      addPadding: false,
    },
  ],
  gold: [
    {
      id: "G01",
      name: "レバレジーズ株式会社",
      logoImage: "/sponsors/leverages.jpg",
      logoLink: "https://recruit.leverages.jp/recruit/engineer/",
      addPadding: false,
    },
    {
      id: "G02",
      name: "KINTOテクノロジーズ株式会社",
      logoImage: "/sponsors/kinto_logoA.png",
      logoLink: "https://www.kinto-technologies.com/",
      addPadding: false,
    },
    {
      id: "G03",
      name: "株式会社サイバーエージェント",
      logoImage: "/sponsors/CyberAgent.png",
      logoLink: "https://www.cyberagent.co.jp/",
      addPadding: false,
    },
    {
      id: "G04",
      name: "株式会社ケップル",
      logoImage: "/sponsors/kepple_logo.png",
      logoLink: "https://corp.kepple.co.jp/",
      addPadding: false,
    },
    {
      id: "G05",
      name: "カミナシ",
      logoImage: "/sponsors/kaminashi_logo.png",
      logoLink: "https://corp.kaminashi.jp/",
      addPadding: false,
    },
    {
      id: "G06",
      name: "GMO Flatt Security株式会社",
      logoImage: "/sponsors/color_vertical_default.png",
      logoLink: "https://flatt.tech/",
      addPadding: false,
    },
    {
      id: "G07",
      name: "トグルホールディングス株式会社",
      logoImage: "/sponsors/toggle_logo.png",
      logoLink: "https://toggle.co.jp/",
      addPadding: false,
    },
    {
      id: "G08",
      name: "株式会社CARTA HOLDINGS",
      logoImage: "/sponsors/logo_carta_black.png",
      logoLink:
        "https://cartaholdings.co.jp/engineering/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi2025_sponsor",
      addPadding: false,
    },
    {
      id: "G09",
      name: "キャディ株式会社",
      logoImage: "/sponsors/caddi_logo_primary_horizontal.png",
      logoLink: "https://caddi.com/",
      addPadding: false,
    },
    {
      id: "G10",
      name: "株式会社スタメン",
      logoImage: "/sponsors/stmn_logo.png",
      logoLink: "https://stmn.co.jp/",
      addPadding: false,
    },
    {
      id: "G11",
      name: "Ubie株式会社",
      logoImage: "/sponsors/Ubie_logo_horizon_color.jpg",
      logoLink: "https://ubie.life/",
      addPadding: false,
    },
    {
      id: "G12",
      name: "匠技研工業株式会社",
      logoImage: "/sponsors/takumi_giken_logo.png",
      logoLink: "https://takumi-force.jp/",
      addPadding: false,
    },
  ],
  silver: [
    {
      id: "S02",
      name: "Theoria technologies 株式会社",
      logoImage: "/sponsors/theoria_logo_main.png",
      logoLink: "https://theoriatec.com/",
      addPadding: false,
    },
    {
      id: "S03",
      name: "株式会社Linc'well",
      logoImage: "/logo.svg",
      logoLink: "/",
      addPadding: false,
    },
    {
      id: "S05",
      name: "株式会社EARTHBRAIN",
      logoImage: "/sponsors/earthbrain_logo.png",
      logoLink:
        "https://earthbrain.notion.site/EARTHBRAIN-Tech-3775fb71b41342aebf0aee6848d722bd",
      addPadding: false,
    },
    {
      id: "S06",
      name: "MOSH株式会社",
      logoImage: "/sponsors/MOSH_logo.png",
      logoLink: "https://mosh.jp/",
      addPadding: false,
    },
    {
      id: "S08",
      name: "株式会社カケハシ",
      logoImage: "/sponsors/kakehashi.png",
      logoLink: "https://hrmos.co/pages/kakehashi",
      addPadding: false,
    },
    {
      id: "S11",
      name: "株式会社メドレー",
      logoImage: "/sponsors/medley_rgb.png",
      logoLink: "https://www.medley.jp/",
      addPadding: false,
    },
    {
      id: "S12",
      name: "株式会社ドワンゴ",
      logoImage: "/sponsors/dwango_blue.png",
      logoLink: "https://dwango.co.jp/",
      addPadding: false,
    },
    {
      id: "S13",
      name: "株式会社オプティム",
      logoImage: "/sponsors/OPTiM_corp_logo.jpg",
      logoLink: "https://www.optim.co.jp/corporate/outline",
      addPadding: false,
    },
    {
      id: "S14",
      name: "株式会社TOKIUM",
      logoImage: "/sponsors/cmyk_tokiumlogo_p.jpg",
      logoLink: "https://corp.tokium.jp/",
      addPadding: false,
    },
    {
      id: "S15",
      name: "フリー株式会社",
      logoImage: "/sponsors/freee_logo_corporate_logo.png",
      logoLink: "https://corp.freee.co.jp/",
      addPadding: false,
    },
    {
      id: "S18",
      name: "フォルシア株式会社",
      logoImage: "/sponsors/FORCIA_logo.png",
      logoLink: "https://www.forcia.com/",
      addPadding: true,
    },
    {
      id: "S20",
      name: "SPACEMARKET",
      logoImage: "/sponsors/spacemarket_TypeB.png",
      logoLink: "https://spacemarket.co.jp/",
      addPadding: false,
    },
  ],
  bronze: [
    {
      id: "B02",
      name: "株式会社Gemcook",
      logoImage: "/sponsors/gemcook-logo-white.png",
      logoLink: "https://gemcook.com",
      addPadding: false,
    },
    {
      id: "B03",
      name: "note株式会社",
      logoImage: "/sponsors/note_logo.png",
      logoLink: "https://note.jp/",
      addPadding: false,
    },
    {
      id: "B04",
      name: "株式会社kickflow",
      logoImage: "/sponsors/kickflow_logo.png",
      logoLink: "https://kickflow.com/",
      addPadding: false,
    },
    {
      id: "B05",
      name: "株式会社Hacobu",
      logoImage: "/sponsors/Hacobu_logo_rgb_black.png",
      logoLink: "https://hacobu.jp/",
      addPadding: false,
    },
    {
      id: "B06",
      name: "株式会社はてな",
      logoImage: "/sponsors/hatena_logo_horizontal_primary.png",
      logoLink: "https://hatena.co.jp",
      addPadding: false,
    },
    {
      id: "B07",
      name: "メシウス株式会社（旧：グレープシティ）",
      logoImage: "/sponsors/MESCIUS_Logo.png",
      logoLink: "https://developer.mescius.jp/",
      addPadding: false,
    },
    {
      id: "B08",
      name: "インスタベース",
      logoImage: "/sponsors/rebase_logo.png",
      logoLink: "https://rebase.co.jp/\n",
      addPadding: false,
    },
    {
      id: "B09",
      name: "株式会社ROUTE06",
      logoImage: "/sponsors/route06_logo-ptn2_primary.jpg",
      logoLink: "https://route06.com/",
      addPadding: false,
    },
    {
      id: "B10",
      name: "株式会社Antway / システムアーキテクト部",
      logoImage: "/sponsors/Antway_logo.png",
      logoLink: "https://antway.co.jp/",
      addPadding: false,
    },
    {
      id: "B11",
      name: "株式会社mov（口コミコム）",
      logoImage: "/sponsors/mov_typo_navy_with_space.png",
      logoLink: "https://mov.am/",
      addPadding: false,
    },
    {
      id: "B12",
      name: "株式会社GENDA",
      logoImage: "/sponsors/GENDA_Logo_Positive.png",
      logoLink: "https://genda.jp/",
      addPadding: false,
    },
  ],
};
