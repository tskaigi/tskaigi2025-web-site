import { TimeSlot } from "@/components/talks/TimeSlot";

type Props = {
  timeText: string;
  eventText: string;
  refHandler?: (ref: HTMLDivElement) => void;
};

export function CommonTrackWrapper({ timeText, eventText, refHandler }: Props) {
  return (
    <div className="grid gap-1 mt-4 md:mt-2 grid-cols-[1fr] md:grid-cols-[auto_1fr] scroll-mt-16">
      <TimeSlot timeText={timeText} />
      <div className="bg-gray-50 p-5 h-16 flex items-center justify-center text-black-700">
        {eventText}
      </div>
    </div>
  );
}
