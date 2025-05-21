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

const date = "2025-05-24";
const sessionTimeTable = [
  {
    id: "9:50",
    start: new Date(`${date}T09:50:00`),
    end: new Date(`${date}T10:00:00`),
  },
  {
    id: "10:00",
    start: new Date(`${date}T10:00:00`),
    end: new Date(`${date}T10:40:00`),
  },
  {
    id: "10:40",
    start: new Date(`${date}T10:40:00`),
    end: new Date(`${date}T10:50:00`),
  },
  {
    id: "10:50",
    start: new Date(`${date}T10:50:00`),
    end: new Date(`${date}T11:20:00`),
  },
  {
    id: "11:20",
    start: new Date(`${date}T11:20:00`),
    end: new Date(`${date}T11:30:00`),
  },
  {
    id: "11:30",
    start: new Date(`${date}T11:30:00`),
    end: new Date(`${date}T12:00:00`),
  },
  {
    id: "12:00",
    start: new Date(`${date}T12:00:00`),
    end: new Date(`${date}T12:10:00`),
  },
  {
    id: "12:10",
    start: new Date(`${date}T12:10:00`),
    end: new Date(`${date}T13:10:00`),
  },
  {
    id: "13:10",
    start: new Date(`${date}T13:10:00`),
    end: new Date(`${date}T13:20:00`),
  },
  {
    id: "13:20",
    start: new Date(`${date}T13:20:00`),
    end: new Date(`${date}T13:50:00`),
  },
  {
    id: "13:50",
    start: new Date(`${date}T13:50:00`),
    end: new Date(`${date}T14:00:00`),
  },
  {
    id: "14:00",
    start: new Date(`${date}T14:00:00`),
    end: new Date(`${date}T14:30:00`),
  },
  {
    id: "14:30",
    start: new Date(`${date}T14:30:00`),
    end: new Date(`${date}T14:40:00`),
  },
  {
    id: "14:40",
    start: new Date(`${date}T14:40:00`),
    end: new Date(`${date}T15:10:00`),
  },
  {
    id: "15:10",
    start: new Date(`${date}T15:10:00`),
    end: new Date(`${date}T15:30:00`),
  },
  {
    id: "15:30",
    start: new Date(`${date}T15:30:00`),
    end: new Date(`${date}T16:00:00`),
  },
  {
    id: "16:00",
    start: new Date(`${date}T16:00:00`),
    end: new Date(`${date}T16:10:00`),
  },
  {
    id: "16:10",
    start: new Date(`${date}T16:10:00`),
    end: new Date(`${date}T16:50:00`),
  },
  {
    id: "17:00",
    start: new Date(`${date}T17:00:00`),
    end: new Date(`${date}T18:00:00`),
  },
  {
    id: "18:00",
    start: new Date(`${date}T18:00:00`),
    end: new Date(`${date}T20:10:00`),
  },
];

export function Day2TimeTable() {
  const sessionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { showScrollButton, scrollToCurrentSession, isSessionActive } =
    useTimetable({
      sessionTimeTable,
      sessionElements: sessionRefs.current,
    });

  return (
    <>
      <CommonTrackWrapper timeText="9:30" eventText="開場" />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["9:50"] = el;
        }}
      >
        <TimeSlot timeText="9:50 ~ 10:00" isActive={isSessionActive("9:50")} />
        <EventWrapper track="TRACK1">オープニングトーク</EventWrapper>
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["10:00"] = el;
        }}
      >
        <TimeSlot
          timeText="10:00 ~ 10:40"
          isActive={isSessionActive("10:00")}
        />
        <SessionWrapper talk={getTalk("71")} />
        <EventWrapper track="TRACK2">サテライト</EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper
        timeText="10:40 ~ 10:50"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["10:40"] = el;
        }}
        isActive={isSessionActive("10:40")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["10:50"] = el;
        }}
      >
        <TimeSlot
          timeText="10:50 ~ 11:20"
          isActive={isSessionActive("10:50")}
        />
        <SessionWrapper talk={getTalk("41")} />
        <SessionWrapper talk={getTalk("48")} />
        <SessionWrapper talk={getTalk("46")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="11:20 ~ 11:30"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["11:20"] = el;
        }}
        isActive={isSessionActive("11:20")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["11:30"] = el;
        }}
      >
        <TimeSlot
          timeText="11:30 ~ 12:00"
          isActive={isSessionActive("11:30")}
        />
        <SessionWrapper talk={getTalk("37")} />
        <SessionWrapper talk={getTalk("44")} />
        <SessionWrapper talk={getTalk("34")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="12:00 ~ 12:10"
        eventText="ランチ配布"
        refHandler={(el) => {
          sessionRefs.current["12:00"] = el;
        }}
        isActive={isSessionActive("12:00")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["12:10"] = el;
        }}
      >
        <TimeSlot
          timeText="12:10 ~ 13:10"
          isActive={isSessionActive("12:10")}
        />
        <SponsorLtWrapper
          talks={[getTalk("76"), getTalk("77"), getTalk("78"), getTalk("79")]}
        />

        <EventWrapper track="TRACK2">ランチ</EventWrapper>
        <EventWrapper track="TRACK3">ランチ</EventWrapper>
      </GridWrapper>

      <CommonTrackWrapper
        timeText="13:10 ~ 13:20"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["13:10"] = el;
        }}
        isActive={isSessionActive("13:10")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["13:20"] = el;
        }}
      >
        <TimeSlot
          timeText="13:20 ~ 13:50"
          isActive={isSessionActive("13:20")}
        />
        <SessionWrapper talk={getTalk("35")} />
        <SessionWrapper talk={getTalk("49")} />
        <SessionWrapper talk={getTalk("43")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="13:50 ~ 14:00"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["13:50"] = el;
        }}
        isActive={isSessionActive("13:50")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["14:00"] = el;
        }}
      >
        <TimeSlot
          timeText="14:00 ~ 14:30"
          isActive={isSessionActive("14:00")}
        />
        <SessionWrapper talk={getTalk("45")} />
        <LtWrapper
          talks={[getTalk("67"), getTalk("68"), getTalk("64"), getTalk("65")]}
        />
        <LtWrapper
          talks={[getTalk("53"), getTalk("57"), getTalk("50"), getTalk("58")]}
        />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="14:30 ~ 14:40"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["14:30"] = el;
        }}
        isActive={isSessionActive("14:30")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["14:40"] = el;
        }}
      >
        <TimeSlot
          timeText="14:40 ~ 15:10"
          isActive={isSessionActive("14:40")}
        />
        <SessionWrapper talk={getTalk("36")} />
        <SessionWrapper talk={getTalk("47")} />
        <SessionWrapper talk={getTalk("42")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="15:10 ~ 15:30"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["15:10"] = el;
        }}
        isActive={isSessionActive("15:10")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["15:30"] = el;
        }}
      >
        <TimeSlot
          timeText="15:30 ~ 16:00"
          isActive={isSessionActive("15:30")}
        />
        <SessionWrapper talk={getTalk("40")} />
        <SessionWrapper talk={getTalk("39")} />
        <SessionWrapper talk={getTalk("38")} />
      </GridWrapper>

      <CommonTrackWrapper
        timeText="16:00 ~ 16:10"
        eventText="休憩"
        refHandler={(el) => {
          sessionRefs.current["16:00"] = el;
        }}
        isActive={isSessionActive("16:00")}
      />

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["16:10"] = el;
        }}
      >
        <TimeSlot
          timeText="16:10 ~ 16:50"
          isActive={isSessionActive("16:10")}
        />
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

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["17:00"] = el;
        }}
      >
        <TimeSlot
          timeText="17:00 ~ 18:00"
          isActive={isSessionActive("17:00")}
        />
        <EventWrapper track="TRACK1">懇親会準備</EventWrapper>
        <EventWrapper track="TRACK2">休憩スペース</EventWrapper>
        <SessionWrapper talk={getTalk("80")} />
      </GridWrapper>

      <GridWrapper
        refHandler={(el) => {
          sessionRefs.current["18:00"] = el;
        }}
      >
        <TimeSlot
          timeText="18:00 ~ 20:10"
          isActive={isSessionActive("18:00")}
        />
        <EventWrapper track="TRACK1">懇親会</EventWrapper>
        <EventWrapper track="TRACK2" color="gray">
          クローズ
        </EventWrapper>
        <EventWrapper track="TRACK3" color="gray">
          クローズ
        </EventWrapper>
      </GridWrapper>

      <div
        className={cn(
          "fixed bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 z-50",
          showScrollButton
            ? "translate-y-0 pointer-events-auto"
            : "translate-y-[150%] pointer-events-none",
        )}
      >
        <Button
          type="button"
          className="font-bold bg-blue-light-500 hover:bg-blue-light-500 rounded-full md:hidden"
          onClick={scrollToCurrentSession}
          aria-hidden={!showScrollButton}
          tabIndex={showScrollButton ? 0 : -1}
        >
          現在のセッションにスクロールする
        </Button>
      </div>
    </>
  );
}
