import { ImageResponse } from "@vercel/og";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import type { Talk as TTalk } from "../../constants/talkList";
import { Talk } from "./Talk";

export async function loadGoogleFont({
  family,
  weight,
  text,
}: {
  family: string;
  weight: number;
  text?: string;
}) {
  const params = new URLSearchParams({
    family: `${family}${weight ? `:wght@${weight}` : ""}`,
  });
  if (text) {
    params.append("text", text);
  } else {
    params.append("subset", "latin");
  }

  const url = `https://fonts.googleapis.com/css2?${params.toString()}`;

  const css = await fetch(url).then((res) => res.text());

  const fontUrl = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  )?.[1];

  if (!fontUrl) {
    throw new Error("Font file not found in CSS fetched from Google Fonts");
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export async function generateImage(talk: TTalk) {
  const notoSans400 = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 400,
  });
  const notoSans700 = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
  });

  const res = new ImageResponse(<Talk {...talk} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Noto Sans JP",
        data: notoSans400,
        style: "normal",
        weight: 400,
      },
      {
        name: "Noto Sans JP",
        data: notoSans700,
        style: "normal",
        weight: 700,
      },
    ],
  });
  return res;
}
