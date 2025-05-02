import fs from "node:fs";
import { type Talk, talkList } from "@/constants/talkList";

// Talkの内容をもとに画像のファイル名をidからusernameに変更する
export function changeImageFilename(talks: Talk[]) {
  for (const talk of talks) {
    const { speaker } = talk;
    const { username } = speaker;

    // 画像のファイル名を変更する
    const oldFilename = `public/talks/speaker/${talk.speaker.profileImagePath}`;
    if (
      talk.speaker.profileImagePath === "" ||
      talk.speaker.profileImagePath === undefined
    ) {
      continue;
    }

    const newFilename = `public/talks/speaker/${username}${talk.speaker.profileImagePath.slice(
      talk.speaker.profileImagePath.lastIndexOf("."),
    )}`;

    console.log(`Renaming file from ${oldFilename} to ${newFilename}`);
    // ファイル名を変更する処理を実行
    fs.rename(oldFilename, newFilename, (err) => {
      if (err) {
        console.error(
          `Error renaming file from ${oldFilename} to ${newFilename}:`,
          err,
        );
      } else {
        console.log(`Successfully renamed ${oldFilename} to ${newFilename}`);
      }
    });
  }
}

// すべてのトークの画像のファイル名を変更する
console.log("Renaming all talk images...");
changeImageFilename(talkList);
console.log("All talk images have been renamed.");
