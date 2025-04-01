import { TRACK, type TalkType } from "@/constants/talkList";
import type { Track } from "@/constants/talkList";
import { cn } from "@/lib/utils";
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

  const getBgColorClass = (() => {
    switch (track) {
      case "TRACK1":
        return "bg-track-toggle";
      case "TRACK2":
        return "bg-track-ascend";
      case "TRACK3":
        return "bg-track-leverages";
      default:
        return track satisfies never;
    }
  })();
  const textColorClass = () => {
    switch (track) {
      case "TRACK1":
        return "text-black";
      case "TRACK2":
        return "text-white";
      case "TRACK3":
        return "text-white";
      default:
        return track satisfies never;
    }
  };

  return (
    <div
      className={`${color === "gray" ? "bg-gray-200" : "bg-white"} px-5 pt-10 pb-4 md:py-5 min-h-32 flex flex-col gap-2 items-${textAlign === "center" ? "center" : "start"} justify-center ${talkType ? "lg:justify-start" : "lg:justify-center"} text-black-700 relative`}
    >
      <div
        className={cn(
          getBgColorClass,
          textColorClass(),
          "block md:hidden py-1 px-2 absolute top-0 left-0 text-xs font-bold",
        )}
      >
        {TRACK[track].name}
      </div>
      <div className="hidden md:block" style={getTriangleStyle()} />
      {talkType && <TalkTypeLabel talkType={talkType} />}
      <div
        className={`${textAlign === "center" ? "text-center" : "text-left"}`}
      >
        {children}
      </div>
    </div>
  );
}
