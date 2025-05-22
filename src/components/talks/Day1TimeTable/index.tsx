import { CommonTrackWrapper } from "@/components/talks/CommonTrackWrapper";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { GridWrapper } from "@/components/talks/GridWrapper";
import { LtWrapper } from "@/components/talks/LtWrapper";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { SponsorLtWrapper } from "@/components/talks/SponsorLtWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { Button } from "@/components/ui/button";
import { useTimetable } from "@/hooks/useTimetable";
import { cn } from "@/lib/utils";
import { getTalk } from "@/utils/getTalk";
import { useRef } from "react";

const date = "2025-05-23";
const sessionTimeTable = [
  {
    id: "10:50",
    start: new Date(`${date}T10:50:00`),
    end: new Date(`${date}T11:00:00`),
  },
  {
    id: "11:00",
    start: new Date(`${date}T11:00:00`),
    end: new Date(`${date}T11:40:00`),
  },
  {
    id: "11:40",
    start: new Date(`${date}T11:40:00`),
    end: new Date(`${date}T11:50:00`),
  },
  {
    id: "11:50",
    start: new Date(`${date}T11:50:00`),
    end: new Date(`${date}T12:20:00`),
  },
  {
    id: "12:20",
    start: new Date(`${date}T12:20:00`),
    end: new Date(`${date}T12:30:00`),
  },
  {
    id: "12:30",
    start: new Date(`${date}T12:30:00`),
    end: new Date(`${date}T13:30:00`),
  },
  {
    id: "13:30",
    start: new Date(`${date}T13:30:00`),
    end: new Date(`${date}T13:40:00`),
  },
  {
    id: "13:40",
    start: new Date(`${date}T13:40:00`),
    end: new Date(`${date}T14:10:00`),
  },
  {
    id: "14:10",
    start: new Date(`${date}T14:10:00`),
    end: new Date(`${date}T14:20:00`),
  },
  {
    id: "14:20",
    start: new Date(`${date}T14:20:00`),
    end: new Date(`${date}T14:50:00`),
  },
  {
    id: "14:50",
    start: new Date(`${date}T14:50:00`),
    end: new Date(`${date}T15:00:00`),
  },
  {
    id: "15:00",
    start: new Date(`${date}T15:00:00`),
    end: new Date(`${date}T15:30:00`),
  },
  {
    id: "15:30",
    start: new Date(`${date}T15:30:00`),
    end: new Date(`${date}T15:50:00`),
  },
  {
    id: "15:50",
    start: new Date(`${date}T15:50:00`),
    end: new Date(`${date}T16:20:00`),
  },
  {
    id: "16:20",
    start: new Date(`${date}T16:20:00`),
    end: new Date(`${date}T16:30:00`),
  },
  {
    id: "16:30",
    start: new Date(`${date}T16:30:00`),
    end: new Date(`${date}T17:00:00`),
  },
  {
    id: "17:00",
    start: new Date(`${date}T17:00:00`),
    end: new Date(`${date}T17:10:00`),
  },
  {
    id: "17:10",
    start: new Date(`${date}T17:10:00`),
    end: new Date(`${date}T17:40:00`),
  },
];

export function Day1TimeTable() {
  const sessionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { showScrollButton, scrollToCurrentSession, isSessionActive } =
    useTimetable({
      sessionTimeTable,
      sessionElements: sessionRefs.current,
    });

  return (
    <>
      <CommonTrackWrapper timeText="10:00" eventText="開場" />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["10:50"] = el;
        }}
      >
        <TimeSlot
          timeText="10:50 ~ 11:00"
          isActive={isSessionActive("10:50")}
        />
        <EventWrapper track="TRACK1">オープニングトーク</EventWrapper>
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["11:00"] = el;
        }}
      >
        <TimeSlot
          timeText="11:00 ~ 11:40"
          isActive={isSessionActive("11:00")}
        />
        <SessionWrapper talk={getTalk("70")} />
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper
        timeText="11:40 ~ 11:50"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["11:40"] = el;
        }}
        isActive={isSessionActive("11:40")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["11:50"] = el;
        }}
      >
        <TimeSlot
          timeText="11:50 ~ 12:20"
          isActive={isSessionActive("11:50")}
        />
        <SessionWrapper talk={getTalk("2")} />
        <SessionWrapper talk={getTalk("6")} />
        <SessionWrapper talk={getTalk("7")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="12:20 ~ 12:30"
        eventText="ランチ配布"
        refHandler={(el) => {
          sessionRefs.current["12:20"] = el;
        }}
        isActive={isSessionActive("12:20")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["12:30"] = el;
        }}
      >
        <TimeSlot
          timeText="12:30 ~ 13:30"
          isActive={isSessionActive("12:30")}
        />
        <SponsorLtWrapper
          talks={[getTalk("72"), getTalk("73"), getTalk("74"), getTalk("75")]}
        />
        <EventWrapper track="TRACK2">ランチ</EventWrapper>
        <EventWrapper track="TRACK3">ランチ</EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper
        timeText="13:30 ~ 13:40"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["13:30"] = el;
        }}
        isActive={isSessionActive("13:30")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["13:40"] = el;
        }}
      >
        <TimeSlot
          timeText="13:40 ~ 14:10"
          isActive={isSessionActive("13:40")}
        />
        <SessionWrapper talk={getTalk("16")} />
        <SessionWrapper talk={getTalk("1")} />
        <SessionWrapper talk={getTalk("3")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="14:10 ~ 14:20"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["14:10"] = el;
        }}
        isActive={isSessionActive("14:10")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["14:20"] = el;
        }}
      >
        <TimeSlot
          timeText="14:20 ~ 14:50"
          isActive={isSessionActive("14:20")}
        />
        <SessionWrapper talk={getTalk("9")} />
        <SessionWrapper talk={getTalk("15")} />
        <SessionWrapper talk={getTalk("17")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="14:50 ~ 15:00"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["14:50"] = el;
        }}
        isActive={isSessionActive("14:50")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["15:00"] = el;
        }}
      >
        <TimeSlot
          timeText="15:00 ~ 15:30"
          isActive={isSessionActive("15:00")}
        />
        <SessionWrapper talk={getTalk("14")} />
        <LtWrapper
          talks={[getTalk("18"), getTalk("19"), getTalk("33"), getTalk("31")]}
        />
        <LtWrapper
          talks={[getTalk("29"), getTalk("32"), getTalk("22"), getTalk("20")]}
        />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="15:30 ~ 15:50"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["15:30"] = el;
        }}
        isActive={isSessionActive("15:30")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["15:50"] = el;
        }}
      >
        <TimeSlot
          timeText="15:50 ~ 16:20"
          isActive={isSessionActive("15:50")}
        />
        <SessionWrapper talk={getTalk("11")} />
        <SessionWrapper talk={getTalk("4")} />
        <SessionWrapper talk={getTalk("12")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="16:20 ~ 16:30"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["16:20"] = el;
        }}
        isActive={isSessionActive("16:20")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["16:30"] = el;
        }}
      >
        <TimeSlot
          timeText="16:30 ~ 17:00"
          isActive={isSessionActive("16:30")}
        />
        <SessionWrapper talk={getTalk("8")} />
        <SessionWrapper talk={getTalk("13")} />
        <SessionWrapper talk={getTalk("5")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="17:00 ~ 17:10"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["17:00"] = el;
        }}
        isActive={isSessionActive("17:00")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["17:10"] = el;
        }}
      >
        <TimeSlot
          timeText="17:10 ~ 17:40"
          isActive={isSessionActive("17:10")}
        />
        <SessionWrapper talk={getTalk("10")} />
        <LtWrapper
          talks={[getTalk("28"), getTalk("26"), getTalk("27"), getTalk("25")]}
        />
        <LtWrapper
          talks={[getTalk("23"), getTalk("21"), getTalk("24"), getTalk("30")]}
        />
      </GridWrapper>

      {showScrollButton && (
        <div
          className={cn(
            "fixed bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 z-50",
            "translate-y-0 pointer-events-auto",
          )}
        >
          <Button
            type="button"
            className="font-bold bg-blue-light-500 hover:bg-blue-light-500 rounded-full md:hidden"
            onClick={scrollToCurrentSession}
            tabIndex={0}
          >
            現在のセッションにスクロールする
          </Button>
        </div>
      )}
    </>
  );
}
