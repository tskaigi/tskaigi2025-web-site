import { type Talk, talkList } from "@/constants/talkList";
import { notFound } from "next/navigation";

/**
 * Usernameを元にトーク情報を取得する
 * @param username - スピーカーのusername
 * @returns トーク情報
 */
export function getTalk(username: string): Talk {
  const talk = Object.values(talkList)
    .flat()
    // TODO: 最終的には username のみを見る
    .find((talk) => talk.speaker.username === username || talk.id === username);

  if (!talk) notFound();

  return talk;
}
