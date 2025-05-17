import { CommonTrackWrapper } from "@/components/talks/CommonTrackWrapper";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { GridWrapper } from "@/components/talks/GridWrapper";
import { LtWrapper } from "@/components/talks/LtWrapper";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { getTalk } from "@/utils/getTalk";
import { useEffect, useMemo, useState } from "react";

const sessions = [
  { id: "10:50", start: "10:50:00", end: "11:00:00" },
  { id: "11:00", start: "11:00:00", end: "11:40:00" },
  { id: "11:40", start: "11:40:00", end: "11:50:00" },
  { id: "11:50", start: "11:50:00", end: "12:20:00" },
  { id: "12:20", start: "12:20:00", end: "12:30:00" },
  { id: "12:30", start: "12:30:00", end: "13:30:00" },
  { id: "13:30", start: "13:30:00", end: "13:40:00" },
  { id: "13:40", start: "13:40:00", end: "14:10:00" },
  { id: "14:10", start: "14:10:00", end: "14:20:00" },
  { id: "14:20", start: "14:20:00", end: "14:50:00" },
  { id: "14:50", start: "14:50:00", end: "15:00:00" },
  { id: "15:00", start: "15:00:00", end: "15:30:00" },
  { id: "15:30", start: "15:30:00", end: "15:50:00" },
  { id: "15:50", start: "15:50:00", end: "16:20:00" },
  { id: "16:20", start: "16:20:00", end: "16:30:00" },
  { id: "16:30", start: "16:30:00", end: "17:00:00" },
  { id: "17:00", start: "17:00:00", end: "17:10:00" },
  { id: "17:10", start: "17:10:00", end: "17:40:00" },
];

const startDate = new Date("2025-05-23T10:50:00");
const endDate = new Date("2025-05-23T17:40:00");

const isConferencePeriod = () => {
  const now = new Date();
  return now >= startDate && now < endDate;
};

export function Day1TimeTable() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!isConferencePeriod()) return;

    // パフォーマンスを考慮して、5秒ごとに現在時刻を更新
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSessionId = useMemo(() => {
    if (!isConferencePeriod()) return null;

    for (const session of sessions) {
      const start = new Date(`2025-05-23T${session.start}`);
      const end = new Date(`2025-05-23T${session.end}`);
      if (currentTime >= start && currentTime < end) {
        return session.id;
      }
    }
    return null;
  }, [currentTime]);

  const getIsOngoing = (sessionId: string) => {
    return currentSessionId === sessionId;
  };

  const getTimeSlot = (sessionId: string) => {
    const session = sessions.find((s) => s.id === sessionId);
    if (!session) return null;

    return (
      <TimeSlot
        timeText={`${session.start.slice(0, 5)} ~ ${session.end.slice(0, 5)}`}
        isOngoing={getIsOngoing(session.id)}
      />
    );
  };

  const getCommonTrack = (sessionId: string, eventText: string) => {
    const session = sessions.find((s) => s.id === sessionId);
    if (!session) return null;

    return (
      <CommonTrackWrapper
        timeText={`${session.start.slice(0, 5)} ~ ${session.end.slice(0, 5)}`}
        eventText={eventText}
        isOngoing={getIsOngoing(session.id)}
      />
    );
  };

  return (
    <>
      <CommonTrackWrapper timeText="10:00" eventText="開場" />

      <GridWrapper>
        {getTimeSlot("10:50")}
        <EventWrapper track="TRACK1">オープニングトーク</EventWrapper>
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <GridWrapper>
        {getTimeSlot("11:00")}
        <SessionWrapper talk={getTalk("70")} />
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      {getCommonTrack("11:40", "休憩")}

      <GridWrapper>
        {getTimeSlot("11:50")}
        <SessionWrapper talk={getTalk("2")} />
        <SessionWrapper talk={getTalk("6")} />
        <SessionWrapper talk={getTalk("7")} />
      </GridWrapper>

      {getCommonTrack("12:20", "ランチ配布")}

      <GridWrapper>
        {getTimeSlot("12:30")}
        <EventWrapper track="TRACK1" talkType={"SPONSOR_LT"} textAlign="left">
          ランチ + スポンサーセッション * 4
        </EventWrapper>
        <EventWrapper track="TRACK2">ランチ</EventWrapper>
        <EventWrapper track="TRACK3">ランチ</EventWrapper>
      </GridWrapper>

      {getCommonTrack("13:30", "休憩")}

      <GridWrapper>
        {getTimeSlot("13:40")}
        <SessionWrapper talk={getTalk("16")} />
        <SessionWrapper talk={getTalk("1")} />
        <SessionWrapper talk={getTalk("3")} />
      </GridWrapper>

      {getCommonTrack("14:10", "休憩")}

      <GridWrapper>
        {getTimeSlot("14:20")}
        <SessionWrapper talk={getTalk("9")} />
        <SessionWrapper talk={getTalk("15")} />
        <SessionWrapper talk={getTalk("17")} />
      </GridWrapper>

      {getCommonTrack("14:50", "休憩")}

      <GridWrapper>
        {getTimeSlot("15:00")}
        <SessionWrapper talk={getTalk("14")} />
        <LtWrapper
          talks={[getTalk("18"), getTalk("19"), getTalk("33"), getTalk("31")]}
        />
        <LtWrapper
          talks={[getTalk("29"), getTalk("32"), getTalk("22"), getTalk("20")]}
        />
      </GridWrapper>

      {getCommonTrack("15:30", "休憩")}

      <GridWrapper>
        {getTimeSlot("15:50")}
        <SessionWrapper talk={getTalk("11")} />
        <SessionWrapper talk={getTalk("4")} />
        <SessionWrapper talk={getTalk("12")} />
      </GridWrapper>

      {getCommonTrack("16:20", "休憩")}

      <GridWrapper>
        {getTimeSlot("16:30")}
        <SessionWrapper talk={getTalk("8")} />
        <SessionWrapper talk={getTalk("13")} />
        <SessionWrapper talk={getTalk("5")} />
      </GridWrapper>

      {getCommonTrack("17:00", "休憩")}

      <GridWrapper>
        {getTimeSlot("17:10")}
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
