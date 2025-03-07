import { sponsorList } from "@/constants/sponsorList";
import type { Sponsor } from "@/constants/sponsorList";

/**
 * IDを元にスポンサー情報を取得する
 * @param id - スポンサーのID
 * @returns スポンサー情報
 */
export function getSponsor(id: string): Sponsor {
  const sponsor = Object.values(sponsorList)
    .flat()
    .find((sponsor) => sponsor.detailPageId === id);

  if (!sponsor) {
    throw new Error(`スポンサーが見つかりませんでした。id: ${id}`);
  }

  return sponsor;
}
