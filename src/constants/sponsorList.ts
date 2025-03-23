export type ExternalLinkProps = { title: string; href: string };
export type SponsorClass = "platinum" | "gold" | "silver" | "bronze";
export type SponsorRole = SponsorClass | "coffee" | "beer" | "naming-rights";

export type Sponsor = {
  id: string;
  name: string;
  logoImage: string;
  logoImageForSponsorsPage?: string;
  logoLink: string;
  addPadding: boolean;
  isTenantChecked: boolean;
  overview?: string[];
  links?: ExternalLinkProps[];
  roles: SponsorRole[];
  detailPageId?: string;
};

type SponsorList = {
  [key in SponsorClass]: Sponsor[];
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
      overview: [
        '■「日本で最もデジタル化の遅れた物流産業で、最高の業務体験を創る」\nアセンド株式会社は日本の物流DXを目指すスタートアップです。\n"物流業界は20兆円の巨大市場でありながら、クラウド利用率は全産業で最低でありデジタル化の遅れ故に2024年問題をはじめとして社会課題を抱える業界です。アセンドはVertical SaaS「ロジックス」を全国の運送会社へ開発提供し、現場業務のデジタル化と経営の高度化を同時に図り、物流業界の変革を推進しています。',
        "■ アセンドとTypeScript\nアセンドは社会課題を解決するプロダクトエンジニア組織を目指して、Frontend/Backend/IaC/DataPipelineの全てをTypeScriptで統一しました。TSでの言語統一により、全エンジニアがフルスタックに開発し、顧客業務やドメインに深く寄り添いプロダクト価値に拘った開発を進めています。開発生産性は6deploys/dayと高い環境であり、少数チームでありながらサービスは案件管理や労務・車両管理といった多岐にわたる複数プロダクトを展開し、運送会社の全ての業務のデジタル化を推進しています。2023年12月にはシリーズAの資金調達を実施し、より多くの運送会社に更なる機能・価値を届けるため、仲間を募集しています。\nTypeScriptを駆使して社会課題解決に挑むプロダクトエンジニアを積極募集中です。お気軽にご連絡ください！",
      ],
      links: [
        {
          title: "アセンド株式会社",
          href: "https://www.ascendlogi.co.jp/",
        },
        {
          title: "エンジニア採用サイト",
          href: "https://product.career.ascendlogi.co.jp/",
        },
        {
          title: "プロダクトエンジニアに関して",
          href: "https://note.com/niwa_takeru/n/n0ae4acf2964d",
        },
      ],
      roles: ["platinum", "naming-rights"],
      detailPageId: "ascend",
    },
    {
      id: "P02",
      name: "クラフトバンク株式会社",
      logoImage: "/sponsors/CraftBank_logo_cmyk_original.png",
      logoLink: "https://corp.craft-bank.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "クラフトバンク株式会社は「世界に誇れる建設職人と建設会社がもっと儲かる仕組みをつくる」をビジョンに掲げ、オールインワンの経営管理システム「CraftBank office」を運営する会社です。 弊社プロダクトはノーコードで柔軟にカスタマイズできることが最大の特徴で、Frontend開発にTypescriptを採用し、コードの拡張性・堅牢性を高めることに大きく寄与しています。 Frontendを一緒に開発する仲間を絶賛募集中ですのでぜひお話しさせてください！",
      ],
      links: [
        {
          title: "クラフトバンク採用情報",
          href: "https://craftbank.notion.site/5fc97cc6a23044b8b4e2ba67766063bc",
        },
      ],
      roles: ["platinum"],
      detailPageId: "craft-bank",
    },
    {
      id: "P03",
      name: "AVITA株式会社",
      logoImage: "/sponsors/AVITA_Logomark_Logotype.png",
      logoLink: "https://avita.co.jp/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        "≪累計約19億円の資金調達に成功≫ アバター＆生成AIで人類をアップデート！\nAVITAは、大阪大学基礎工学研究科の教授・石黒浩が代表を務める大学発のスタートアップ企業です。\n弊社ではフロントエンド開発においてTypeScriptを統一的に使用しており、アバターのリモート接客における利用者間のリアルタイム通信処理やVRMアバターの表示制御にも、TypeScriptの型の恩恵を最大限活用しています。\nまた、TypeScriptはReactやNext.jsによるフロントエンド開発のみならず、APIとの通信における型生成やデザイントークンにも活用しています。バックエンドでは一部Cloudflare WorkersやHonoでもTypeScriptを利用しています。",
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://avita.co.jp/?utm_source=tskaigi&utm_medium=referral&utm_campaign=2025sponsors",
        },
        {
          title: "採用情報",
          href: "https://www.wantedly.com/companies/avita",
        },
      ],
      roles: ["platinum"],
      detailPageId: "avita",
    },
    {
      id: "P04",
      name: "Nstock株式会社",
      logoImage: "/sponsors/nstock_logo_black_horizontal.png",
      logoLink: "https://nstock.co.jp/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        `Nstockは、「スタートアップエコシステムをブーストし、日本からGoogle級の会社を生み出す」ことをミッションに掲げ、スタートアップが大きく育つための様々なプロダクトを提供しています。
現在は下記2つの事業でミッション実現のために一緒に事業をブーストさせるメンバーを募集しています。`,
        `▼株式報酬SaaS事業
株式報酬が持つ本来のポテンシャルを最大限に引き出すSaaSです。株式報酬が持つ運用の課題を解決し、企業が成長する起爆剤になります。`,
        `▼セカンダリー事業
スタートアップのための、非上場株式の取引所です。非上場でもSOを行使し換金できることで、役員・社員の経済的成功を実現し、企業の採用競争力を強化します。`,
        "すべてのプロダクトのフロントエンドでTypeScript & Reactを採用しています。また、CursorやDevinといった生成AI系の開発ツールも積極的に活用しており、事業を支えるエンジニアリングの新しい形を模索しています。",
        "Nstockのミッションに共感し、共にスタートアップ業界を盛り上げてくれる仲間を募集しています。ぜひ会場でお話ししましょう！",
      ],
      links: [
        {
          title: "Nstock 採用サイト",
          href: "https://recruit.nstock.co.jp/work/software-engineer",
        },
        {
          title: "Nstock Tech Blog",
          href: "https://zenn.dev/p/nstock",
        },
        {
          title: "Nstockのテックラジオ",
          href: "https://open.spotify.com/show/0m4TGTqbD6AuHFOrIbpkxx?si=fcb0d9a1f44049a8&nd=1&dlsi=97fdf39efbbe48a2",
        },
      ],
      roles: ["platinum"],
      detailPageId: "nstock",
    },
    {
      id: "P05",
      name: "株式会社ダイニー",
      logoImage: "/sponsors/dinii_v1.png",
      logoLink: "https://recruit2024.dinii.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `株式会社ダイニーは、「”飲食"をもっと楽しくおもしろく。」をミッションに掲げ、すべての人の飲食のインフラとなることをめざし、飲食店に特化した All in  One  Restaurant  Cloud.を開発・提供しています。
モバイルオーダーやID-POSから、売上向上のためのCRM、従業員の管理ツール、そしてモバイル決済まで、飲食店経営のあらゆる課題を解決していきます。
飲食業界に入り込み、店舗や従業員、顧客を深く理解したプロダクト開発により、テクノロジーの力で飲食店の経営をサポートし、お客様の飲食店での体験価値を劇的に変えていきます。
ダイニーでは、フロントエンド、ネイティブアプリ、バックエンドまですべての利用言語を TypeScript に統一してプロダクト開発を行っています。TypeScript を用いることで、さまざまな領域の一連の機能改修までをフルスタックに担当できるため、TypeScript は複数のプロダクトを展開するダイニーにとって必要不可欠なツールです。`,
      ],
      links: [
        {
          title: "ダイニー公式HP",
          href: "https://about.dinii.jp",
        },
        {
          title: "ダイニー公式採用サイト",
          href: "https://recruit2024.dinii.jp",
        },
        {
          title: "Company Deck for Product development",
          href: "https://speakerdeck.com/diniiofficial/dinii-company-deck-for-engineering-2025ver",
        },
      ],
      roles: ["platinum", "beer"],
      detailPageId: "dinii",
    },
    {
      id: "P06",
      name: "株式会社TwoGate",
      logoImage: "/sponsors/twogate_logo.svg",
      logoLink: "https://twogate.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `TwoGateは「心地良いデジタル体験の創出と普及」をミッションに掲げ、エンターテインメント領域を中心に複数のサービスを展開しています。
例えば、整理券・グッズ販売などライブイベントの体験を向上させるアプリの構築サービス「Caravan」や、アーティスト独自のチケット販売サイトを構築できる「TRIPLE」、タイムラインや生配信などファンコミュニケーションに特化したアプリを開発するための「CRAYON」など、推し活を多彩に支えるサービスを提供しています。`,
        `上記のサービスを活用して構築・リリースされたアプリやサイトは200アプリ・150サイトを超え、900万人以上のユーザーにご利用いただいています。
これらのサービスも、アーティストやIPが表現したい世界観を支える重要な要素です。
世界観に合わせた細かな要望に柔軟に応えつつ、マルチテナント方式でフロントエンドを展開することが求められます。`,
        `数多くのサービスは、高専出身者が8割を超えるたった17人（2024年8月現在）の少数精鋭チームによって開発・運用されています。
少人数でのアプリ大量生産体制は、TypeScriptの型支援とAngularのコード生成技術による、テナント構築の効率化と保守コストの大幅削減によって実現しました。
エンターテインメントの舞台裏を支える技術的アプローチに興味がある方は、ぜひ当社ブースまでお越しください。`,
      ],
      links: [
        {
          title: "会社HP",
          href: "https://twogate.com",
        },
      ],
      roles: ["platinum"],
      detailPageId: "twogate",
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
      overview: [
        `レバレジーズ株式会社では、こんなエンジニアを求めています！ピンと来たらぜひご応募ください。
・新規事業や業務改善の提案など、ビジネスからエンジニアリングまで一気通貫でやっていきたい方
・営業、マーケター、デザイナー、事業企画、データアナリストなど、あらゆる職種と協力しながら、イノベーティブなサービスを開発したい方
・「関係者全員の幸福の追求」の理念を共にした仲間と一緒に、社会貢献性の高い事業を行っていきたい方
・先制・再生医療など新しい分野も含め、多角的かつグローバルなサービスに幅広く関わりたい方`,
        `■ 会社紹介         
社会の課題を解決し関係者全員の幸福を追求し続けることをミッションに、IT・医療・介護・若年層を中心とした人材事業や、Webメディア事業、M&Aコンサルティング事業など、社会貢献を軸に様々な領域でこれまで40以上のサービスを展開。2005年に創業以来、黒字経営を継続し19期目の2023年度は年商1149億を突破しました。各分野のスペシャリストが集うオールインハウスの組織構成と、業界を絞らないポートフォリオ経営で、時代を代表するグローバル企業を目指します。`,
      ],
      links: [
        {
          title: "公式サイト",
          href: "https://leverages.jp",
        },
        {
          title: "エンジニア採用",
          href: "https://recruit.leverages.jp/recruit/engineer",
        },
        {
          title: "Leverages Tech Blog",
          href: "https://tech.leverages.jp",
        },
      ],
      roles: ["gold", "naming-rights"],
      detailPageId: "leverages",
    },
    {
      id: "G02",
      name: "KINTOテクノロジーズ株式会社",
      logoImage: "/sponsors/kinto_logoA.png",
      logoLink: "https://www.kinto-technologies.com/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        "KINTOテクノロジーズは、トヨタグループ各社が展開するモビリティサービスやビジネスをテクノロジーで支援するために、2021年4月に創設されたテックカンパニーです。",
        "トヨタグループ内でも唯一の「BtoC・DtoC領域に特化した内製開発組織」であり、世界30ヵ国で展開するグローバルモビリティブランド『KINTO』関連プロダクトや、マルチモーダルモビリティサービス『my route』など、クルマに乗る「人」に焦点を当てた新しいサービスの開発・運用を行っています。",
        "また、弊社はモダンな技術を積極的に採用する文化があります。各種AWSサービスを活用しており、良質なUI・UXを実現するために新しいWeb技術も取り入れています。エンジニアがボトムアップで特定技術の利用を提案し、採用された事例も数多くあります。\n安定した経営環境とベンチャーマインドを持ち合わせ、新しいチャレンジができる会社です！",
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://www.kinto-technologies.com",
        },
        {
          title: "KINTO Tech Blog",
          href: "https://blog.kinto-technologies.com",
        },
        {
          title: "X (＠KintoTech_Dev)",
          href: "https://x.com/KintoTech_Dev",
        },
      ],
      roles: ["gold"],
      detailPageId: "kinto-technologies",
    },
    {
      id: "G03",
      name: "株式会社サイバーエージェント",
      logoImage: "/sponsors/CyberAgent.png",
      logoLink: "https://www.cyberagent.co.jp/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        "サイバーエージェントはインターネットを軸に、メディア&IP事業、インターネット広告事業、ゲーム事業と主に3つの事業を展開しています。新しい未来のテレビ「ABEMA」、「Amebaブログ」や「アメーバピグ」などを展開する国内最大級のメディア「Ameba」、競輪・オートレースの投票サービス「WINTICKET（ウィンチケット）」など多様なプロダクトでTypeScriptを活用しているのが特長です。",
        "当社の強みは、TypeScriptを利用してフロントエンドやバックエンド、ネイティブなど技術領域に関わらず型の恩恵を享受していることです。型によってバグの早期発見や可読性の向上に繋がり、サービス品質の改善や運用コストの低減を実現しています。当社に興味を持ってくださった方は、ぜひコーポレートサイトや採用情報、Developers Blogをご覧ください。",
      ],
      links: [
        {
          title: "サイバーエージェント コーポレートサイト",
          href: "https://www.cyberagent.co.jp/",
        },
        {
          title: "サイバーエージェントグループ採用情報",
          href: "https://hrmos.co/pages/cyberagent-group/jobs",
        },
        {
          title: "CyberAgent Developers Blog",
          href: "https://developers.cyberagent.co.jp/blog/",
        },
      ],
      roles: ["gold"],
      detailPageId: "cyberagent",
    },
    {
      id: "G04",
      name: "株式会社ケップル",
      logoImage: "/sponsors/kepple_logo.png",
      logoLink:
        "https://corp.kepple.co.jp/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi_2025_sponsor&utm_id=tskaigi2025",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `ケップルグループは、「Create New Industries（世界に新たな産業を）」をミッションに掲げ、スタートアップエコシステムの発展に貢献するための様々な事業を展開しています。代表的なものとして、スタートアップエコシステムを可視化するスタートアップメディア「KEPPLE」や、イノベーションを促進するためのスタートアップデータベース「KEPPLE DB」、VC・事業会社向けの未上場株式管理ツール「KEPPLE CRM」等を運営。技術スタックとしては、フロントエンド・バックエンド・インフラなど様々な領域で TypeScript を活用。生成 AI も積極的に活用しながら、事業の価値創出に取り組んでいます。
エンジニアを積極的に採用していますので、開発組織の紹介ページをぜひご覧ください。`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://corp.kepple.co.jp/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi_2025_sponsor&utm_id=tskaigi2025",
        },
        {
          title: "開発組織 紹介サイト",
          href: "https://lab.kepple.co.jp",
        },
        {
          title: "テックブログ",
          href: "https://zenn.dev/p/kepple",
        },
      ],
      roles: ["gold"],
      detailPageId: "kepple",
    },
    {
      id: "G05",
      name: "株式会社カミナシ",
      logoImage: "/sponsors/kaminashi_logo.png",
      logoLink: "https://corp.kaminashi.jp/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        "「ノンデスクワーカーの才能を解き放つ」をミッションに掲げるスタートアップ、カミナシは、ホリゾンタルSaaSの現場DXプラットフォームを提供しています。 PCやデスクのない現場で働く約3,900万人のノンデスクワーカーの働き方を、現場のムダを削減し利益を生む現場づくりを実現する「現場DXプラットフォーム」のカミナシで解決します。 2023年3月にシリーズBで約30億円の資金調達を行い、カミナシはオールインワンSaaSとして、現場のEmployeeやCommunication領域のDXに拡大していきます。",
        `カミナシではPCの管理画面やモバイルアプリのフロントエンド開発を主として、全てのプロダクトでTypeScriptを採用しており、コードの拡張性・堅牢性を高めることに大きく寄与しています。
カミナシのプロダクトを一緒に作る仲間を絶賛採用中ですので、ぜひお話しさせてください！`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://corp.kaminashi.jp",
        },
        {
          title: "採用情報",
          href: "https://careers.kaminashi.jp",
        },
        {
          title: "カミナシ エンジニアブログ",
          href: "https://kaminashi-developer.hatenablog.jp",
        },
      ],
      roles: ["gold"],
      detailPageId: "kaminashi",
    },
    {
      id: "G06",
      name: "GMO Flatt Security株式会社",
      logoImage: "/sponsors/gmo_color_horizontal_default.svg",
      logoImageForSponsorsPage: "/sponsors/gmo_logo_vertical.png",
      logoLink: "https://flatt.tech/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        `GMO Flatt Securityは"エンジニアの背中を預かる"をミッションに掲げ、ソフトウェアの開発組織とそこで働くエンジニアにとって最適なセキュリティサービスを提供する、GMOインターネットグループのスタートアップ企業です。`,
        "脆弱性診断を主軸としてクラウド基盤からアプリケーションまで、プロダクト全体の堅牢化を支援します。",
        "専門のセキュリティエンジニアによる高度な手動診断だけでなく、Web&クラウドまるごと診断ツール「Shisho Cloud(シショウ クラウド)」の開発・運営も行っており、これらを組み合わせることにより脆弱性診断のあり方を現代の開発組織のエコシステムに即したものにアップデートしています。",
      ],
      links: [
        {
          title: "手動脆弱性診断",
          href: "https://flatt.tech/assessment",
        },
        {
          title: "Shisho Cloud - 自動脆弱性診断",
          href: "https://shisho.dev/ja",
        },
        {
          title: "KENRO - セキュアコーディング研修",
          href: "https://flatt.tech/kenro",
        },
      ],
      roles: ["gold"],
      detailPageId: "gmo-flatt-security",
    },
    {
      id: "G07",
      name: "トグルホールディングス株式会社",
      logoImage: "/sponsors/toggle_logo.png",
      logoLink: "https://toggle.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `トグルホールディングスは、「すべてのまちと、まちをつくる人たちのために」というミッションを基に、「不動産」「建築」「金融」の3つの業界をひとつの産業インフラへと統合することを目指しています。
日本の不動産業界はIT資本投資で米国の1/10に留まり、テクノロジーの活用が遅れています。 このギャップは「新しい仕組みで業界変革できる余地が多い」ということでもあり、エンジニアにとって大きなチャンスがあります。
弊社ではプロダクトのコア技術の実装にはフロントエンドからバックエンド、さらにはインフラストラクチャの定義までTypeScriptを用いています。 TypeScriptの厳密な型チェック機能をフル活用することで複雑なドメインの実装を柔軟、かつ安全に行うことを実現しています。`,
      ],
      links: [
        {
          title: "ホームページ",
          href: "https://toggle.co.jp",
        },
        {
          title: "Engineering Handbook",
          href: "https://engineer.toggle.co.jp",
        },
        {
          title: "note",
          href: "https://note.com/toggle",
        },
      ],
      roles: ["gold"],
      detailPageId: "toggle",
    },
    {
      id: "G08",
      name: "株式会社CARTA HOLDINGS",
      logoImage: "/sponsors/logo_carta_black.png",
      logoLink:
        "https://cartaholdings.co.jp/engineering/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi2025_sponsor",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "CARTA HOLDINGSは、デジタルを通じ、多様で新しいサービスやコンテンツを生み出しています。「時代の進化を創る」という目的のもと、企業・産業の進化を推進する「進化推進業」を目指してまいります。デジタル・マーケティング事業およびインターネット関連事業を軸とした多事業展開を行っています。",
        "当日は神ゲー攻略やKaubelを運営するLighthouse Studio のエンジニア横沢がランチタイムスポンサーセッションに登壇いたします。是非お越しください。",
      ],
      links: [
        {
          title: "CARTA HOLDINGSについて",
          href: "https://recruit.cartaholdings.co.jp/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi2025_sponsor",
        },
        {
          title: "CARTA HOLDINGSのエンジニアリング",
          href: "https://cartaholdings.co.jp/engineering/?utm_source=tskaigi2025&utm_medium=Paid+Other&utm_campaign=tskaigi2025_sponsor",
        },
      ],
      roles: ["gold"],
      detailPageId: "carta",
    },
    {
      id: "G09",
      name: "キャディ株式会社",
      logoImage: "/sponsors/caddi_logo_primary_horizontal.png",
      logoLink: "https://caddi.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `キャディは「モノづくり産業のポテンシャル解放」を目指し、「製造業AIデータプラットフォーム CADDi」を世界中に提供しているスタートアップ企業です。
既に大手メーカーから加工会社のお客様にまで活用いただいており、事業はT2D3を大きく上回るスピードで急激に成長を続けています。`,
        `今後の開発としては、
* データプラットフォームとしての機能強化
* 複数の新規プロダクト開発（3年間で数十個単位のリリースを予定）
* 飛躍的に増加するユーザー数・データ量に耐えうる基盤の強化
など、取り組みたいテーマが数多くあります。`,
        "エンジニアリングで社会に大きなインパクトをもたらしたい方、ぜひ会場でお話しましょう。",
      ],
      links: [
        {
          title: "採用情報",
          href: "https://recruit.caddi.tech",
        },
        {
          title: "Tech Blog",
          href: "https://caddi.tech",
        },
        {
          title:
            "3年で数十個”のハイグロースなプロダクト開発に挑むキャディの開発組織",
          href: "https://www.fastgrow.jp/articles/caddi-tech-session",
        },
      ],
      roles: ["gold"],
      detailPageId: "caddi",
    },
    {
      id: "G10",
      name: "株式会社スタメン",
      logoImage: "/sponsors/stmn_logo.png",
      logoLink: "https://stmn.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "株式会社スタメンは、「一人でも多くの人に、感動を届け、幸せを広める。」を経営理念に、2016年に創業しました。その後順調な事業拡大により2020年12月に東証グロース市場に株式上場。",
        "エンゲージメントプラットフォーム「TUNAG（ツナグ）」をはじめとした、複数のサービスを自社で開発・運営しています。2023年2月には、新規事業として、SaaS型サービスである情報漏洩対策ツール「Watchy（ウォッチー）」を正式にリリースしています。",
        "「TUNAG」「Watchy」ともに、TypeScriptを採用しており、エンジニアの方を絶賛募集中です。",
      ],
      links: [
        {
          title: "Tech Blog",
          href: "https://tech.stmn.co.jp",
        },
        {
          title: "プロダクト職種 採用情報（求人一覧）",
          href: "https://herp.careers/v1/stmn/requisition-groups/8d5d0858-2bda-4167-80f2-2401d8fb1891",
        },
        {
          title: "X stmn, inc. Developers",
          href: "https://x.com/stmn_eng",
        },
      ],
      roles: ["gold"],
      detailPageId: "stmn",
    },
    {
      id: "G11",
      name: "Ubie株式会社",
      logoImage: "/sponsors/Ubie_logo_horizon_color.jpg",
      logoLink: "https://ubie.life/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "「テクノロジーで人々を適切な医療に案内する」をミッションに掲げ、医師とエンジニアが2017年5月に創業したヘルステックスタートアップです。AIをコア技術とし、症状から適切な医療へ案内する「ユビー」と、診療の質向上を支援する医療機関向けサービスパッケージ「ユビーメディカルナビ」等を開発・提供し、誰もが自分にあった医療にアクセスできる社会づくりを進めています。",
        "症状検索エンジン「ユビー」は、気になる症状から関連する病名と適切な受診先を調べることができ、月間1,200万人以上が利用しています。「ユビーメディカルナビ」のうち、問診業務効率化を図る「ユビーAI問診」は全国47都道府県・1,800以上の医療機関で導入されております。",
        "ユビーでは、フロントエンドだけでなくバックエンドでもTypeScriptを活用しており、TypeScriptに精通したエンジニアを積極的に採用しています。",
      ],
      links: [
        {
          title: "Ubie株式会社",
          href: "https://ubie.life",
        },
        {
          title: "カジュアル面談",
          href: "https://recruit.ubie.life/casual-meeting",
        },
        {
          title: "採用イベント",
          href: "https://recruit.ubie.life/event",
        },
      ],
      roles: ["gold"],
      detailPageId: "ubie",
    },
    {
      id: "G12",
      name: "匠技研工業株式会社",
      logoImage: "/sponsors/takumi_giken_logo.png",
      logoLink: "https://takumi-force.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "匠技研工業は、ものづくり現場に特化したSaaSと培ったデータを活用して、製造業界にまたとないDXを届けるスタートアップです！",
        "日本の製造業界の99%を占める中小サプライヤー企業に私たちは着目し、SMBから業界変革を起こす逆説的な事業戦略を描いています。中小サプライヤー企業に深く入り込むインフラとなるSaaSを開発し、培ったデータとAI技術を活用して、一気通貫で製造業界にDXおよびAX（AI-Transformation）を届ける挑戦をしています。",
        "技術スタックは、FE/BEともにFull-TypeScriptで、サーバレスも多く活用した構成となっています。プロダクトエンジニア、リードエンジニア、SRE、QAエンジニアなど全方位積極採用中です。製造業DXを実現するコンパウンドプロダクトの1→10や新規立ち上げを一緒に行う仲間募集しています！",
      ],
      links: [
        {
          title: "匠フォース - サービスサイト",
          href: "https://takumi-force.jp/",
        },
        {
          title: "匠技研工業株式会社 - 会社HP",
          href: "https://takumi-giken.co.jp/",
        },
        {
          title: "匠技研工業株式会社 - 採用サイト",
          href: "https://recruit.takumi-giken.co.jp/",
        },
      ],
      roles: ["gold"],
      detailPageId: "takumi-giken",
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
      overview: [
        `Theoria technologiesは、2023年9月に製薬会社エーザイの子会社として設立されました。「認知症との向き合い方を、テクノロジーで変えていく。」をミッションに掲げ、様々なバックグラウンドを持つメンバーが集まり、認知症プラットフォームの実現に向けて日々挑戦しています。解決したい社会課題や取り組みたいプロジェクトが多数あり、新たな仲間を募集中です。あなたの技術と情熱で、共に社会課題の解決に挑みませんか？
まずはカジュアルに話を聞いてみてください。ご連絡お待ちしています！`,
      ],
      links: [
        {
          title: "Theoria technologies 公式サイト",
          href: "https://theoriatec.com",
        },
        {
          title: "Theoria technologies 公式 note",
          href: "https://note.com/theoriatec",
        },
        {
          title: "認知症ポータルサイト「テヲトル」",
          href: "https://theotol.soudan-e65.com",
        },
      ],
      roles: ["silver"],
      detailPageId: "theoria-technologies",
    },
    {
      id: "S03",
      name: "株式会社Linc'well",
      logoImage: "/sponsors/lincwell.png",
      logoLink: "https://linc-well.com/",
      addPadding: true,
      isTenantChecked: false,
      overview: [
        `Linc'wellは「テクノロジーを通じて、医療を一歩前へ」をミッションに掲げ、医療を効率化し患者の利便性と医療の質の向上を目指した事業展開を行っています。
オンライン・オフラインで医療従事者・患者をつなぐヘルスケアプラットフォーム事業を主力としており、「オンライン診療システム提供サービス」「クリニックDX支援サービス」「ヘルスケアECサービス」の3つのサービスを提供しています。`,
      ],
      links: [
        {
          title: "株式会社Linc'well",
          href: "https://linc-well.com",
        },
        {
          title: "エンジニア採用サイト",
          href: "https://recruit.linc-well.com/engineer",
        },
        {
          title: "Note",
          href: "https://note.linc-well.com",
        },
      ],
      roles: ["silver"],
      detailPageId: "linc-well",
    },
    {
      id: "S05",
      name: "株式会社EARTHBRAIN",
      logoImage: "/sponsors/earthbrain_logo.png",
      logoLink:
        "https://earthbrain.notion.site/EARTHBRAIN-Tech-3775fb71b41342aebf0aee6848d722bd",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "EARTHBRAINは、建設現場のデジタル革命で新たな世界を創ることをビジョンに掲げ、2021年に創業したジョイントベンチャーです。建設現場の見える化、施工の最適化のためのプロダクトを複数開発しており、既に世界20カ国以上で利用されています。",
        "EARTHBRAINは現在、さまざまな職種のエンジニアを募集しています。建設現場のデジタル革命を通じて、次の10年、20年後の世界を一緒に創っていきませんか。",
      ],
      links: [
        {
          title: "公式企業サイト",
          href: "https://www.earthbrain.com",
        },
        {
          title: "エンジニア採用特設サイト",
          href: "https://earthbrain.notion.site/EARTHBRAIN-Tech-3775fb71b41342aebf0aee6848d722bd",
        },
      ],
      roles: ["silver"],
      detailPageId: "earthbrain",
    },
    {
      id: "S06",
      name: "MOSH株式会社",
      logoImage: "/sponsors/MOSH_logo.png",
      logoLink: "https://mosh.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "私たちは「情熱がめぐる経済をつくる」というミッションを掲げ、クリエイター向けの事業拡大プラットフォーム「MOSH」を開発・運営しています。",
        "サイト作成、予約、決済、顧客管理など、幅広い機能を提供し、クリエイターが事業を成長させる中で直面するあらゆる課題に取り組んでいます。",
        "創業時から常に顧客の価値を最優先に考えたプロダクトづくりに取り組んできました。 この価値観を軸に、事業の成長を加速させ、グローバルで利用されるプロダクトを目指して進化を続けていきます。",
      ],
      links: [
        {
          title: "サービスサイト",
          href: "https://mosh.jp",
        },
        {
          title: "採用情報サイト",
          href: "https://careers.mosh.jp",
        },
        {
          title: "会社説明資料(Company Deck)",
          href: "https://www.canva.com/design/DAGZtAM5mBU/vlYfAoRZ3ksWjxKm7MTLLA/view",
        },
      ],
      roles: ["silver"],
      detailPageId: "mosh",
    },
    {
      id: "S08",
      name: "株式会社カケハシ",
      logoImage: "/sponsors/kakehashi.png",
      logoLink: "https://hrmos.co/pages/kakehashi",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `株式会社カケハシは日本の医療システムの再構築を目指すヘルステックスタートアップ企業です。テクノロジーを駆使し、患者さんにとってより良い医療を医療現場にとって持続可能な形で実現します。
薬局体験アシスタント「Musubi」のほか、複数プロダクトを開発・提供し、国内の薬局の1万店舗超をカバー。服薬期間中の患者フォローによる治療効果最大化や医薬品の市中在庫可視化・安定供給などをサポートします。薬局や医療機関をはじめとしたステークホルダーとともに、より良い医療を実現するプラットフォームを構築していきます。`,
      ],
      links: [
        {
          title: "採用情報",
          href: "https://hrmos.co/pages/kakehashi",
        },
      ],
      roles: ["silver", "coffee"],
      detailPageId: "kakehashi",
    },
    {
      id: "S11",
      name: "株式会社メドレー",
      logoImage: "/sponsors/medley_rgb.png",
      logoLink: "https://www.medley.jp/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        `メドレーは、「医療ヘルスケアの未来をつくる」ミッションのもと、テクノロジーを活用した事業やプロジェクトを通じて、医療ヘルスケア分野の課題を解決していきます。それにより、病院や行政による「持続可能な医療」の実現と、患者さんやそのご家族にとって「納得できる医療」の実現を目指しています。
医療ヘルスケア領域の成果報酬型人材採用システム「ジョブメドレー」、オンライン動画研修サービス「ジョブメドレーアカデミー」、オンライン診療・服薬指導アプリ「CLINICS」などを運営しています。`,
      ],
      links: [
        {
          title: "株式会社メドレー",
          href: "https://www.medley.jp",
        },
        {
          title: "MEDLEY Developer Portal",
          href: "https://developer.medley.jp",
        },
        {
          title: "メドレー ディベロッパー公式X (@medley_dev)",
          href: "https://twitter.com/medley_dev",
        },
      ],
      roles: ["silver"],
      detailPageId: "medley",
    },
    {
      id: "S12",
      name: "株式会社ドワンゴ",
      logoImage: "/sponsors/dwango_blue.png",
      logoLink: "https://dwango.co.jp/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        `ドワンゴは "ネットの向こうの、リアルを動かす。人間らしさと、つながるデジタルを。" をコーポレートメッセージとして、ネットに特化した通信制高校「N高等学校・S高等学校・R高等学校」、ネットとリアルを融合したオンライン大学「ZEN大学」、オンライン学習アプリ「ZEN Study」、ネットの双方向性を最大限に動画や生放送に取り込んだ「ニコニコ」、ネットとリアルの融合をテーマにした巨大イベント「ニコニコ超会議」など、新しい価値を創り出し、それを事業として成立させていくことに挑戦しつづける企業です。`,
      ],
      links: [
        {
          title: "ZEN Study（旧N予備校）",
          href: "https://www.nnn.ed.nico",
        },
        {
          title:
            "N高等学校・S高等学校・R高等学校プロジェクト採用 | 株式会社ドワンゴ",
          href: "https://www.nnn.ed.nico/recruit",
        },
        {
          title: "ニコニコ",
          href: "https://www.nicovideo.jp",
        },
      ],
      roles: ["silver"],
      detailPageId: "dwango",
    },
    {
      id: "S13",
      name: "株式会社オプティム",
      logoImage: "/sponsors/OPTiM_corp_logo.jpg",
      logoLink: "https://www.optim.co.jp/corporate/outline",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `OPTiMは「ネットを空気に変える」というコンセプトをもとに、AI・IoT・Cloud・Mobile・Robotics技術を土台とし、あらゆる業界のDXを実現させていく企業です。
日本No1シェアのデバイス管理サービスや、農業分野ではドローン農薬散布サービス、建設分野ではスマートフォンで簡単に測量できるサービス、AIによる契約書・電子帳簿管理サービスなどを自社開発しています。`,
        "より良いサービス提供のために、TypeScript等のさまざまな言語・ライブラリ・アルゴリズムを駆使しています。",
      ],
      links: [
        {
          title: "OPTiMの事業紹介",
          href: "https://www.optim.co.jp/corporate/outline",
        },
        {
          title: "OPTiM TECH BLOG",
          href: "https://tech-blog.optim.co.jp",
        },
        {
          title: "採用情報(入社お祝い金キャンペーン実施中)",
          href: "https://www.optim.co.jp/recruit",
        },
      ],
      roles: ["silver"],
      detailPageId: "optim",
    },
    {
      id: "S14",
      name: "株式会社TOKIUM",
      logoImage: "/sponsors/cmyk_tokiumlogo_p.jpg",
      logoLink: "https://corp.tokium.jp/",
      addPadding: true,
      isTenantChecked: false,
      overview: [
        "株式会社TOKIUMは、「未来へつながる時を生む」を志に、企業の支出にまつわる課題の解決を実現するDXサービスを提供しています。",
        "主なサービスとして、請求書受領クラウド「TOKIUMインボイス」、経費精算クラウド「TOKIUM経費精算」、文書管理クラウド「TOKIUM電子帳簿保存」、契約管理クラウド「TOKIUM契約管理」を提供しています。最適なテクノロジーと常識にとらわれない自由な発想、泥臭さもいとわない行動力で支出の最適化を実現し、人と事業を未来へ向けて加速させていきます。",
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://corp.tokium.jp",
        },
        {
          title: "採用サイト",
          href: "https://recruit.tokium.jp",
        },
      ],
      roles: ["silver"],
      detailPageId: "tokium",
    },
    {
      id: "S15",
      name: "フリー株式会社",
      logoImage: "/sponsors/freee_logo_corporate_logo.png",
      logoLink: "https://corp.freee.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        "freeeは「スモールビジネスを、世界の主役に。」というミッションのもと、誰もが自由に経営できる統合型経営プラットフォームを実現する企業です。freee会計、freee人事労務、freee販売など、あらゆる業務課題を解決するプロダクトを展開し、個人事業主から上場企業まで幅広く利用されています。",
        "freeeではほとんどのプロダクトのフロントエンドでTypeScriptとReactを採用しています。TypeScriptの型の恩恵によって大規模なコードベースでも安心して開発をすることを可能にしています。",
      ],
      links: [
        {
          title: "フリー株式会社",
          href: "https://corp.freee.co.jp",
        },
        {
          title: "freee Developers Hub",
          href: "https://developers.freee.co.jp",
        },
        {
          title: "エンジニア採用ページ",
          href: "https://jobs.freee.co.jp/engineers",
        },
      ],
      roles: ["silver"],
      detailPageId: "freee",
    },
    {
      id: "S18",
      name: "フォルシア株式会社",
      logoImage: "/sponsors/FORCIA_logo.png",
      logoLink: "https://www.forcia.com/",
      addPadding: true,
      isTenantChecked: false,
      overview: [
        `フォルシアは、社員の半数近くをフルスタックエンジニアが占める技術者集団です。
膨大・複雑なデータを高速かつ正確に処理できる技術を強みとし、独自の技術基盤を用いたプロダクト開発や、旅行・観光業界のオンライン販売を支援するSaaS型サービスの提供などを行っています。
フロントエンド・バックエンドやインフラ(IaC)などでTypeScriptを使用しており、過去にはTypeScript好きな方々との交流イベントの企画・運営も行ってきました。
フォルシアの技術や社風についてはぜひ下記リンクもご覧ください！`,
      ],
      links: [
        {
          title: "FORCIA Tech Blog",
          href: "https://zenn.dev/p/forcia_tech",
        },
        {
          title: "採用サイト",
          href: "https://www.forcia.com/jobs",
        },
        {
          title: "公式X",
          href: "https://x.com/forcia_pr",
        },
      ],
      roles: ["silver"],
      detailPageId: "forcia",
    },
    {
      id: "S20",
      name: "株式会社スペースマーケット",
      logoImage: "/sponsors/spacemarket_TypeB.png",
      logoLink: "https://spacemarket.co.jp/recruit/engineer/",
      addPadding: false,
      isTenantChecked: false,
      overview: [
        `「スペースシェアをあたりまえに」をミッションに掲げ、あらゆるスペースを時間単位で貸し借りするプラットフォームなどを運営する企業です。
生活のあらゆるシーンにおける考え方や選択肢が多様化していく社会の中で、 日々スペースでは様々な一歩が生まれています。
私たちは、スペースシェアをあたりまえの選択肢にすることで人々の発想を広げ、 多様なチャレンジを生み出し、世の中を面白くしたいと考えています。`,
      ],
      links: [
        {
          title: "スペースマーケット サービスサイト",
          href: "https://www.spacemarket.com",
        },
        {
          title: "スペースマーケット コーポレートサイト",
          href: "https://spacemarket.co.jp",
        },
        {
          title: "スペースマーケット エンジニア採用情報ページ",
          href: "https://spacemarket.co.jp/recruit/engineer",
        },
      ],
      roles: ["silver"],
      detailPageId: "spacemarket",
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
      roles: ["bronze"],
    },
    {
      id: "B03",
      name: "note株式会社",
      logoImage: "/sponsors/note_logo.png",
      logoLink: "https://note.jp/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B04",
      name: "株式会社kickflow",
      logoImage: "/sponsors/kickflow_logo.png",
      logoLink: "https://kickflow.com/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B05",
      name: "株式会社Hacobu",
      logoImage: "/sponsors/Hacobu_logo_rgb_black.png",
      logoLink: "https://hacobu.jp/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B06",
      name: "株式会社はてな",
      logoImage: "/sponsors/hatena_logo_horizontal_primary.png",
      logoLink: "https://hatena.co.jp",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B07",
      name: "メシウス株式会社（旧：グレープシティ）",
      logoImage: "/sponsors/MESCIUS_Logo.png",
      logoLink: "https://developer.mescius.jp/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B08",
      name: "インスタベース",
      logoImage: "/sponsors/rebase_logo.png",
      logoLink: "https://rebase.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B09",
      name: "株式会社ROUTE06",
      logoImage: "/sponsors/route06_logo-ptn2_primary.jpg",
      logoLink: "https://route06.com/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B10",
      name: "株式会社Antway / システムアーキテクト部",
      logoImage: "/sponsors/Antway_logo.png",
      logoLink: "https://antway.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B11",
      name: "株式会社mov（口コミコム）",
      logoImage: "/sponsors/mov_logo.svg",
      logoLink: "https://mov.am/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
    {
      id: "B12",
      name: "株式会社GENDA",
      logoImage: "/sponsors/GENDA_Logo_Positive.png",
      logoLink: "https://genda.jp/",
      addPadding: false,
      isTenantChecked: true,
      roles: ["bronze"],
    },
  ],
};

// スポンサー詳細ページで使用するスポンサーIDのリスト
export const sponsorId = [
  ...sponsorList.platinum.map((sponsor) => ({ id: sponsor.detailPageId })),
  ...sponsorList.gold.map((sponsor) => ({ id: sponsor.detailPageId })),
  ...sponsorList.silver.map((sponsor) => ({ id: sponsor.detailPageId })),
];
