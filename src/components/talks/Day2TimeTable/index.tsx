import { TimeSlot } from "@/components/talks/TimeSlot";
import { CommonTrackEvent } from "@/components/talks/CommonTrackEvent";
import { EventWrapper } from "@/components/talks/EventWrapper";

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

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="9:50 ~ 10:00" />
        {visibleTracks.TRACK1 && (
          <EventWrapper>オープニングトーク</EventWrapper>
        )}
        {visibleTracks.TRACK2 && <EventWrapper>サテライト</EventWrapper>}
        {visibleTracks.TRACK3 && (
          <EventWrapper color="gray">クローズ</EventWrapper>
        )}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:00 ~ 10:30" />
        {visibleTracks.TRACK1 && (
          <EventWrapper talkType="KEYNOTE" textAlign="left">
            基調講演
          </EventWrapper>
        )}
        {visibleTracks.TRACK2 && <EventWrapper>サテライト</EventWrapper>}
        {visibleTracks.TRACK3 && (
          <EventWrapper color="gray">クローズ</EventWrapper>
        )}
      </div>
    </>
  );
}
