import { CommonTrackEvent } from "@/components/talks/CommonTrackEvent";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { LtWrapper } from "@/components/talks/LtWrapper";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { getTalk } from "@/utils/getTalk";

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
        <TimeSlot timeText="10:50 ~ 11:20" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("41")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("48")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("46")} />}
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
        <TimeSlot timeText="11:30 ~ 12:00" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("37")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("44")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("34")} />}
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
        <TimeSlot timeText="12:10 ~ 13:00" />
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
        <TimeSlot timeText="13:20 ~ 13:50" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("35")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("49")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("43")} />}
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
        <TimeSlot timeText="14:00 ~ 14:30" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("45")} />}
        {visibleTracks.TRACK2 && (
          <LtWrapper
            talks={[getTalk("67"), getTalk("68"), getTalk("64"), getTalk("65")]}
          />
        )}
        {visibleTracks.TRACK3 && (
          <LtWrapper
            talks={[getTalk("53"), getTalk("57"), getTalk("50"), getTalk("58")]}
          />
        )}
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
        <TimeSlot timeText="14:40 ~ 15:10" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("36")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("47")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("42")} />}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="15:10 ~ 15:20" />
        <CommonTrackEvent
          eventText="休憩"
          visibleTrackCount={getVisibleTrackCount()}
        />
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="15:20 ~ 16:00" />
        {visibleTracks.TRACK1 && <SessionWrapper talk={getTalk("40")} />}
        {visibleTracks.TRACK2 && <SessionWrapper talk={getTalk("39")} />}
        {visibleTracks.TRACK3 && <SessionWrapper talk={getTalk("38")} />}
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

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="16:10 ~ 16:40" />
        {visibleTracks.TRACK1 && (
          <LtWrapper
            talks={[getTalk("69"), getTalk("51"), getTalk("54"), getTalk("52")]}
          />
        )}
        {visibleTracks.TRACK2 && (
          <LtWrapper
            talks={[getTalk("56"), getTalk("61"), getTalk("63"), getTalk("62")]}
          />
        )}
        {visibleTracks.TRACK3 && (
          <LtWrapper
            talks={[getTalk("59"), getTalk("60"), getTalk("66"), getTalk("55")]}
          />
        )}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="17:00 ~ 18:00" />
        {visibleTracks.TRACK1 && <EventWrapper>懇親会準備</EventWrapper>}
        {visibleTracks.TRACK2 && <EventWrapper>参加者体験企画</EventWrapper>}
        {visibleTracks.TRACK3 && <EventWrapper>参加者体験企画</EventWrapper>}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="18:00 ~ 20:10" />
        {visibleTracks.TRACK1 && <EventWrapper>懇親会</EventWrapper>}
        {visibleTracks.TRACK2 && (
          <EventWrapper color="gray">クローズ</EventWrapper>
        )}
        {visibleTracks.TRACK3 && (
          <EventWrapper color="gray">クローズ</EventWrapper>
        )}
      </div>
    </>
  );
}
