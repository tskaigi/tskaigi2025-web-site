import type { SideEventProps } from "@/components/SideEvent";

/**
 * サイドイベントの情報を格納する配列
 * ※ dateは日付と曜日の間に半角スペースを入れること
 */
export const sideEventList: SideEventProps[] = [
  {
    date: "5/23 (金)",
    name: "TSKaigi Drinkup presented by Dinii",
    link: "https://dinii.connpass.com/event/351839",
    thumbnail: "/sideEvents/event1.png",
    detail: `TSKaigi 2025 プラチナスポンサーである 株式会社ダイニー は、参加者限定のカジュアルな Drinkupを開催します！

カンファレンスの熱気が冷めやらぬうちに、気軽に立ち寄って、参加者同士で語り合ってみませんか？ TSKaigi 登壇者も数名ゲストとしてお呼びする予定です。 美味しいドリンクや料理をご用意して、みなさんのご参加をお待ちしています🍻`,
    tags: ["Drinkup"],
    sponsors: ["株式会社 ダイニー"],
  },
];
