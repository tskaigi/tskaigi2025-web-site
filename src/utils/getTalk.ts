import { notFound } from "next/navigation";
import { type Talk, talkList } from "@/constants/talkList";

/**
 * IDを元にトーク情報を取得する
 * @param id - トークのID
 * @returns トーク情報
 */
export function getTalk(id: string): Talk {
  const talk = Object.values(talkList)
    .flat()
    .find((talk) => talk.id === id);

  if (!talk) notFound();

  return talk;
}
