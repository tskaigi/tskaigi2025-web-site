import type { TalkType } from "@/constants/talkList";
import type { Track } from "@/constants/talkList";
import type React from "react";
import type { CSSProperties } from "react";
import { TalkTypeLabel } from "./TalkTypeLabel";

type Props = {
  children: React.ReactNode;
  color?: "white" | "gray";
  talkType?: TalkType;
  textAlign?: "center" | "left";
  track: Track;
};

export function EventWrapper({
  children,
  color = "white",
  talkType,
  textAlign = "center",
  track,
}: Props) {
  const getTriangleStyle = (): CSSProperties => {
    if (!track) return {};

    const color =
      track === "TRACK1"
        ? "var(--track-toggle)"
        : track === "TRACK2"
          ? "var(--track-ascend)"
          : "var(--track-leverages)";

    return {
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 24px 24px 0",
      borderColor: `transparent ${color} transparent transparent`,
      position: "absolute",
      top: 0,
      right: 0,
    } as CSSProperties;
  };

  return (
    <div
      className={`${color === "gray" ? "bg-gray-200" : "bg-white"} p-5 min-h-32 flex flex-col gap-2 items-${textAlign === "center" ? "center" : "start"} justify-center text-black-700 relative`}
    >
      {track && <div style={getTriangleStyle()} />}
      {talkType && <TalkTypeLabel talkType={talkType} />}
      <div
        className={`${textAlign === "center" ? "text-center" : "text-left"}`}
      >
        {children}
      </div>
    </div>
  );
}
