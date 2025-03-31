import { TimeSlot } from "@/components/talks/TimeSlot";

type Props = {
  timeText: string;
  eventText: string;
};

export function CommonTrackWrapper({ timeText, eventText }: Props) {
  return (
    <div className="grid gap-1 mt-2 grid-cols-[1fr] md:grid-cols-[auto_1fr]">
      <TimeSlot timeText={timeText} />
      <div className="bg-white p-5 h-32 flex items-center justify-center text-black-700">
        {eventText}
      </div>
    </div>
  );
}
