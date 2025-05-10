import type { SideEventProps } from "@/components/SideEvent";

/**
 * サイドイベントの情報を格納する配列
 * ※ dateは日付と曜日の間に半角スペースを入れること
 */
export const sideEventList: SideEventProps[] = [
  {
    date: "5/21 (水)",
    name: "はじめての静的解析 - TSKaigi 2025公認 前夜祭",
    link: "https://flatt.connpass.com/event/351975",
    thumbnail:
      "https://media.connpass.com/thumbs/5b/ee/5bee0d79b21934003d77a7a0a5dbe51c.png",
    detail: `GMO Flatt Securityは、TSKaigi 2025 公認サイドイベントとして、TypeScript のコードと、ESLint / Semgrepといった静的解析ツールを題材にした前夜祭（実際には前々夜祭）、ハンズオンイベント（飲み物・軽食あり）を開催いたします！！
弊社のセキュリティエンジニアと、"型" だけに頼らないバグ検出技術を一緒に学びましょう！`,
    tags: ["前夜祭", "ハンズオン"],
    sponsors: ["GMO Flatt Security株式会社"],
  },
  {
    date: "5/23 (金)",
    name: "TSKaigi Drinkup presented by Dinii",
    link: "https://dinii.connpass.com/event/351839",
    thumbnail:
      "https://media.connpass.com/thumbs/89/ce/89cef58de0b5b98c98a890220ed91c49.png",
    detail: `TSKaigi 2025 プラチナスポンサーである 株式会社ダイニー は、参加者限定のカジュアルな Drinkupを開催します！

カンファレンスの熱気が冷めやらぬうちに、気軽に立ち寄って、参加者同士で語り合ってみませんか？ TSKaigi 登壇者も数名ゲストとしてお呼びする予定です。 美味しいドリンクや料理をご用意して、みなさんのご参加をお待ちしています🍻`,
    tags: ["Drinkup"],
    sponsors: ["株式会社 ダイニー"],
  },
  {
    date: "5/23 (金)",
    name: "#はじめてのLT - TypeScript好き学生のためのゆる懇親ナイト",
    link: "https://connpass.com/event/352099",
    thumbnail:
      "https://media.connpass.com/thumbs/8d/54/8d54e38915b849b0dec254ea1afaad3e.png",
    detail: `TSKaigiのサブイベントとして開催される、TypeScript好きな学生のためのLT＆懇親イベントです。

LT（ライトニングトーク）を通して、TSとの出会い、最近作ったもの、好きなライブラリなどなどちょっとだけ自分のことを話して、ちょっとだけ誰かのことを知って、そのあと、ゆるっと飲食しながらつながる時間をご用意しています。`,
    tags: ["LT・懇親会", "学生向け"],
    sponsors: [
      "株式会社TOKIUM",
      "トグルホールディングス株式会社",
      "レバレジーズ株式会社",
    ],
  },
  {
    date: "5/29 (木)",
    name: "TSKaigi 2025 本編で話せなかったこと、話し足りなかったこと",
    link: "https://freee.connpass.com/event/351699",
    thumbnail:
      "https://media.connpass.com/thumbs/91/aa/91aa74f2f945c0319310a531f52a366a.png",
    detail:
      "TSKaigi 2025 スポンサーのフリー株式会社・株式会社カミナシ・any株式会社による、登壇者や CfP 応募者が TSKaigi 本編で話せなかったことや話したりなかったことを発表するイベントです。",
    tags: ["AfterTalk", "ハイブリッド開催"],
    sponsors: ["株式会社カミナシ", "any株式会社", "フリー株式会社"],
  },
];
