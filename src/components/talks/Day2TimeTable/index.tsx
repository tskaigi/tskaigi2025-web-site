import { CommonTrackWrapper } from "@/components/talks/CommonTrackWrapper";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { GridWrapper } from "@/components/talks/GridWrapper";
import { LtWrapper } from "@/components/talks/LtWrapper";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { getTalk } from "@/utils/getTalk";

export function Day2TimeTable() {
  return (
    <>
      <CommonTrackWrapper timeText="9:30" eventText="開場" />

      <GridWrapper>
        <TimeSlot timeText="9:50 ~ 10:00" />
        <EventWrapper track="TRACK1">オープニングトーク</EventWrapper>
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <GridWrapper>
        <TimeSlot timeText="10:00 ~ 10:40" />
        <EventWrapper track="TRACK1">Coming Soon...</EventWrapper>
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper timeText="10:40 ~ 10:50" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="10:50 ~ 11:20" />
        <SessionWrapper talk={getTalk("41")} />
        <SessionWrapper talk={getTalk("48")} />
        <SessionWrapper talk={getTalk("46")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="11:20 ~ 11:30" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="11:30 ~ 12:00" />
        <SessionWrapper talk={getTalk("37")} />
        <SessionWrapper talk={getTalk("44")} />
        <SessionWrapper talk={getTalk("34")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="12:00 ~ 12:10" eventText="ランチ配布" />

      <GridWrapper>
        <TimeSlot timeText="12:10 ~ 13:10" />
        <EventWrapper track="TRACK1" talkType={"SPONSOR_LT"} textAlign="left">
          ランチ + スポンサーセッション * 4
        </EventWrapper>
        <EventWrapper track="TRACK2">ランチ</EventWrapper>
        <EventWrapper track="TRACK3">ランチ</EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper timeText="13:10 ~ 13:20" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="13:20 ~ 13:50" />
        <SessionWrapper talk={getTalk("35")} />
        <SessionWrapper talk={getTalk("49")} />
        <SessionWrapper talk={getTalk("43")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="13:50 ~ 14:00" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="14:00 ~ 14:30" />
        <SessionWrapper talk={getTalk("45")} />
        <LtWrapper
          talks={[getTalk("67"), getTalk("68"), getTalk("64"), getTalk("65")]}
        />
        <LtWrapper
          talks={[getTalk("53"), getTalk("57"), getTalk("50"), getTalk("58")]}
        />
      </GridWrapper>

      <CommonTrackWrapper timeText="14:30 ~ 14:40" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="14:40 ~ 15:10" />
        <SessionWrapper talk={getTalk("36")} />
        <SessionWrapper talk={getTalk("47")} />
        <SessionWrapper talk={getTalk("42")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="15:10 ~ 15:30" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="15:30 ~ 16:00" />
        <SessionWrapper talk={getTalk("40")} />
        <SessionWrapper talk={getTalk("39")} />
        <SessionWrapper talk={getTalk("38")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="16:00 ~ 16:10" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="16:10 ~ 16:50" />
        <LtWrapper
          talks={[getTalk("69"), getTalk("51"), getTalk("54"), getTalk("52")]}
        />
        <LtWrapper
          talks={[getTalk("56"), getTalk("61"), getTalk("63"), getTalk("62")]}
        />
        <LtWrapper
          talks={[getTalk("59"), getTalk("60"), getTalk("66"), getTalk("55")]}
        />
      </GridWrapper>

      <GridWrapper>
        <TimeSlot timeText="17:00 ~ 18:00" />
        <EventWrapper track="TRACK1">懇親会準備</EventWrapper>
        <EventWrapper track="TRACK2">休憩スペース</EventWrapper>
        <EventWrapper track="TRACK3">OST</EventWrapper>
      </GridWrapper>

      <GridWrapper>
        <TimeSlot timeText="18:00 ~ 20:10" />
        <EventWrapper track="TRACK1">懇親会</EventWrapper>
        <EventWrapper track="TRACK2" color="gray">
          クローズ
        </EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>
    </>
  );
}
