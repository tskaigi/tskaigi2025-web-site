import { TimeSlot } from "@/components/talks/TimeSlot";
import type { ComponentProps } from "react";

type Props = {
  timeText: string;
  eventText: string;
  refHandler?: (ref: HTMLDivElement | null) => void;
} & Pick<ComponentProps<typeof TimeSlot>, "timeText" | "isActive">;

export function CommonTrackWrapper({
  timeText,
  eventText,
  refHandler,
  isActive,
}: Props) {
  return (
    <div
      ref={refHandler}
      className="grid gap-1 mt-4 md:mt-2 grid-cols-[1fr] md:grid-cols-[auto_1fr]"
    >
      <TimeSlot timeText={timeText} isActive={isActive} />
      <div className="bg-gray-50 p-5 h-16 flex items-center justify-center text-black-700">
        {eventText}
      </div>
    </div>
  );
}
