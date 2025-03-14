import { sponsorList } from "@/constants/sponsorList";
import type { Sponsor } from "@/constants/sponsorList";

/**
 * IDを元にスポンサー情報を取得する
 * WIPではないスポンサー詳細ページで使用するため、テナントのチェックが必要
 * @param id - スポンサーのID
 * @returns スポンサー情報
 */
export function getSponsor(id: string): Sponsor {
  const sponsor = Object.values(sponsorList)
    .flat()
    .find((sponsor) => sponsor.detailPageId === id && sponsor.isTenantChecked);

  if (!sponsor) {
    throw new Error(`スポンサーが見つかりませんでした。id: ${id}`);
  }

  return sponsor;
}

/**
 * IDを元にスポンサー情報を取得する
 * WIPのスポンサー詳細ページで使用するため、テナントのチェックは不要
 * @param id - スポンサーのID
 * @returns スポンサー情報
 */
export function getWipSponsor(id: string): Sponsor {
  const sponsor = Object.values(sponsorList)
    .flat()
    .find((sponsor) => sponsor.detailPageId === id);

  if (!sponsor) {
    throw new Error(`スポンサーが見つかりませんでした。id: ${id}`);
  }

  return sponsor;
}
