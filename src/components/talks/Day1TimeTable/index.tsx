import { CommonTrackWrapper } from "@/components/talks/CommonTrackWrapper";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { GridWrapper } from "@/components/talks/GridWrapper";
import { LtWrapper } from "@/components/talks/LtWrapper";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { SponsorLtWrapper } from "@/components/talks/SponsorLtWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { getTalk } from "@/utils/getTalk";

export function Day1TimeTable() {
  return (
    <>
      <CommonTrackWrapper timeText="10:00" eventText="開場" />

      <GridWrapper>
        <TimeSlot timeText="10:50 ~ 11:00" />
        <EventWrapper track="TRACK1">オープニングトーク</EventWrapper>
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <GridWrapper>
        <TimeSlot timeText="11:00 ~ 11:40" />
        <SessionWrapper talk={getTalk("70")} />
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper timeText="11:40 ~ 11:50" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="11:50 ~ 12:20" />
        <SessionWrapper talk={getTalk("2")} />
        <SessionWrapper talk={getTalk("6")} />
        <SessionWrapper talk={getTalk("7")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="12:20 ~ 12:30" eventText="ランチ配布" />

      <GridWrapper>
        <TimeSlot timeText="12:30 ~ 13:30" />
        <SponsorLtWrapper
          talks={[getTalk("72"), getTalk("73"), getTalk("74"), getTalk("75")]}
        />
        <EventWrapper track="TRACK2">ランチ</EventWrapper>
        <EventWrapper track="TRACK3">ランチ</EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper timeText="13:30 ~ 13:40" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="13:40 ~ 14:10" />
        <SessionWrapper talk={getTalk("16")} />
        <SessionWrapper talk={getTalk("1")} />
        <SessionWrapper talk={getTalk("3")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="14:10 ~ 14:20" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="14:20 ~ 14:50" />
        <SessionWrapper talk={getTalk("9")} />
        <SessionWrapper talk={getTalk("15")} />
        <SessionWrapper talk={getTalk("17")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="14:50 ~ 15:00" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="15:00 ~ 15:30" />
        <SessionWrapper talk={getTalk("14")} />
        <LtWrapper
          talks={[getTalk("18"), getTalk("19"), getTalk("33"), getTalk("31")]}
        />
        <LtWrapper
          talks={[getTalk("29"), getTalk("32"), getTalk("22"), getTalk("20")]}
        />
      </GridWrapper>

      <CommonTrackWrapper timeText="15:30 ~ 15:50" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="15:50 ~ 16:20" />
        <SessionWrapper talk={getTalk("11")} />
        <SessionWrapper talk={getTalk("4")} />
        <SessionWrapper talk={getTalk("12")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="16:20 ~ 16:30" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="16:30 ~ 17:00" />
        <SessionWrapper talk={getTalk("8")} />
        <SessionWrapper talk={getTalk("13")} />
        <SessionWrapper talk={getTalk("5")} />
      </GridWrapper>

      <CommonTrackWrapper timeText="17:00 ~ 17:10" eventText="休憩" />

      <GridWrapper>
        <TimeSlot timeText="17:10 ~ 17:40" />
        <SessionWrapper talk={getTalk("10")} />
        <LtWrapper
          talks={[getTalk("28"), getTalk("26"), getTalk("27"), getTalk("25")]}
        />
        <LtWrapper
          talks={[getTalk("23"), getTalk("21"), getTalk("24"), getTalk("30")]}
        />
      </GridWrapper>
    </>
  );
}
