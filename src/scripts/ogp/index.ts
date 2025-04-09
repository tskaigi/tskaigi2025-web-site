import fs from "node:fs";
import { talkList } from "../../constants/talkList";
import { generateImage } from "./generate-image";

async function main() {
  const saveImagePromises = talkList.map(async (talk) => {
    // 画像の生成
    const res = await generateImage(talk);
    if (!res.body) {
      throw new Error("Response body is null");
    }
    // 画像の保存
    const buffer = await res.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    const filePath = `public/ogp/talks/${talk.id}.png`;
    await fs.promises.writeFile(filePath, uint8Array);
    console.log(`Image saved to ${filePath}`);
  });
  await Promise.all(saveImagePromises);
  console.log("All images generated successfully.");
}

main();
