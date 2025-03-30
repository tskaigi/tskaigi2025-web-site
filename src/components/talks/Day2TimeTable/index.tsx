import { TimeSlot } from "@/components/talks/TimeSlot";
import { CommonTrackEvent } from "@/components/talks/CommonTrackEvent";

type Props = {
  getGridTemplateColumns: () => string;
  getVisibleTrackCount: () => number;
  visibleTracks: {
    TRACK1: boolean;
    TRACK2: boolean;
    TRACK3: boolean;
  };
};

export function Day2TimeTable({
  getGridTemplateColumns,
  getVisibleTrackCount,
  visibleTracks,
}: Props) {
  return (
    <>
      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="9:30" />
        <CommonTrackEvent
          eventText="開場"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>
    </>
  );
}
