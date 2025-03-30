import { EventWrapper } from "@/components/talks/EventWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { CommonTrackEvent } from "@/components/talks/CommonTrackEvent";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { getTalk } from "@/utils/getTalk";
import { LtWrapper } from "@/components/talks/LtWrapper";

type Props = {
  getGridTemplateColumns: () => string;
  getVisibleTrackCount: () => number;
  visibleTracks: {
    TRACK1: boolean;
    TRACK2: boolean;
    TRACK3: boolean;
  };
};

export function Day1TimeTable({
  getGridTemplateColumns,
  getVisibleTrackCount,
  visibleTracks,
}: Props) {
  return (
    <>
      {/* 10:00の行 - 開場 */}
      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:00" />
        <CommonTrackEvent
          eventText="開場"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:50 ~ 11:00" />
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
        <TimeSlot timeText="11:00 ~ 11:30" />
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
        <TimeSlot timeText="11:40 ~ 11:50" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="11:00 ~ 11:30" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("2")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("6")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("7")} />}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="12:20" />
        <CommonTrackEvent
          eventText="ランチ配布"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:50 ~ 11:00" />
        {visibleTracks.TRACK1 && (
          <EventWrapper talkType={"SPONSOR_LT"} textAlign="left">
            ランチ + スポンサーセッション * 4
          </EventWrapper>
        )}
        {visibleTracks.TRACK2 && <EventWrapper>ランチ</EventWrapper>}
        {visibleTracks.TRACK3 && <EventWrapper>ランチ</EventWrapper>}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="13:30 ~ 13:40" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="13:40 ~ 14:10" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("16")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("1")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("3")} />}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="14:10 ~ 14:20" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="14:20 ~ 14:50" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("9")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("15")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("17")} />}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="14:50 ~ 15:00" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="15:00 ~ 15:30" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("14")} />}
        {visibleTracks.TRACK2 && (
          <LtWrapper
            talks={[getTalk("18"), getTalk("19"), getTalk("33"), getTalk("31")]}
          />
        )}
        {visibleTracks.TRACK3 && (
          <LtWrapper
            talks={[getTalk("29"), getTalk("32"), getTalk("22"), getTalk("20")]}
          />
        )}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="15:30 ~ 15:50" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="15:50 ~ 16:20" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("11")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("4")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("12")} />}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="16:20 ~ 16:30" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="16:30 ~ 17:00" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("8")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("13")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("5")} />}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="17:00 ~ 17:10" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="17:10 ~ 17:40" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("10")} />}
        {visibleTracks.TRACK2 && (
          <LtWrapper
            talks={[getTalk("28"), getTalk("26"), getTalk("27"), getTalk("25")]}
          />
        )}
        {visibleTracks.TRACK3 && (
          <LtWrapper
            talks={[getTalk("23"), getTalk("21"), getTalk("24"), getTalk("30")]}
          />
        )}
      </div>
    </>
  );
}
