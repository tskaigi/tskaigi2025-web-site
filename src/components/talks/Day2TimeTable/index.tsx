import { CommonTrackEvent } from "@/components/talks/CommonTrackEvent";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";

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

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:40 ~ 10:50" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="11:20 ~ 11:30" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="12:00 ~ 12:10" />
        <CommonTrackEvent
          eventText="ランチ配布"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="13:00 ~ 13:20" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="13:50 ~ 14:00" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="14:30 ~ 14:40" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="15:10 ~ 15:30" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="16:00 ~ 16:10" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>
    </>
  );
}
