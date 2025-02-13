import type { CompanyProps, SponsorClass } from "./type";

const companies: { [key in SponsorClass]: CompanyProps[] } = {
  Platinum: [
    {
      name: "アセンド株式会社",
      overview: [
        `■「日本で最もデジタル化の遅れた物流産業で、最高の業務体験を創る」
アセンド株式会社は日本の物流DXを目指すスタートアップです。
物流業界は20兆円の巨大市場でありながら、クラウド利用率は全産業で最低でありデジタル化の遅れ故に2024年問題をはじめとして社会課題を抱える業界です。アセンドはVertical SaaS「ロジックス」を全国の運送会社へ開発提供し、現場業務のデジタル化と経営の高度化を同時に図り、物流業界の変革を推進しています。`,
        `■ アセンドとTypeScript
アセンドは社会課題を解決するプロダクトエンジニア組織を目指して、Frontend/Backend/IaC/DataPipelineの全てをTypeScriptで統一しました。TSでの言語統一により、全エンジニアがフルスタックに開発し、顧客業務やドメインに深く寄り添いプロダクト価値に拘った開発を進めています。開発生産性は6deploys/dayと高い環境であり、少数チームでありながらサービスは案件管理や労務・車両管理といった多岐にわたる複数プロダクトを展開し、運送会社の全ての業務のデジタル化を推進しています。2023年12月にはシリーズAの資金調達を実施し、より多くの運送会社に更なる機能・価値を届けるため、仲間を募集しています。
TypeScriptを駆使して社会課題解決に挑むプロダクトエンジニアを積極募集中です。お気軽にご連絡ください！`,
      ],
      roles: ["Platinum"],
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
    {
      name: "一般社団法人 TSKaigi",
      overview: [],
      roles: ["Platinum", "Coffee"],
    },
  ],
  Gold: [
    {
      name: "一般社団法人 TSKaigi",
      overview: [],
      roles: ["Gold"],
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
  ],
  Silver: [
    {
      name: "一般社団法人 TSKaigi",
      overview: [],
      roles: ["Silver"],
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
  ],
  Bronze: [
    {
      name: "一般社団法人 TSKaigi",
      overview: [],
      roles: ["Bronze"],
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
  ],
};

export default companies;
