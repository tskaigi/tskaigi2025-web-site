import type { TalkType } from "@/constants/talkList";
import type React from "react";
import { TalkTypeLabel } from "../TalkTypeLabel";

type Props = {
  children: React.ReactNode;
  color?: "white" | "gray";
  talkType?: TalkType;
  textAlign?: "center" | "left";
};

export function EventWrapper({
  children,
  color = "white",
  talkType,
  textAlign = "center",
}: Props) {
  return (
    <div
      className={`${color === "gray" ? "bg-gray-200" : "bg-white"} p-5 min-h-32 flex flex-col gap-2 items-${textAlign === "center" ? "center" : "start"} justify-center text-black-700`}
    >
      {talkType && <TalkTypeLabel talkType={talkType} />}
      <div
        className={`${textAlign === "center" ? "text-center" : "text-left"}`}
      >
        {children}
      </div>
    </div>
  );
}
