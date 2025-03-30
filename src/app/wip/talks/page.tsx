"use client";

import { CommonTrackEvent } from "@/components/talks/CommonTrackEvent";
import { EventDateTab } from "@/components/talks/EventDateTab";
import { EventWrapper } from "@/components/talks/EventWrapper";
import { LtWrapper } from "@/components/talks/LtWrapper";
import { SessionWrapper } from "@/components/talks/SessionWrapper";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { TrackToggle } from "@/components/talks/TrackToggle";
import { type EventDate, TRACK, type Track } from "@/constants/talkList";
import { getTalk } from "@/utils/getTalk";
import { useState } from "react";

const TalksPage = () => {
  const [currentDate, setCurrentDate] = useState<EventDate>("DAY1");

  const handleTabChange = (date: EventDate) => {
    setCurrentDate(date);
    // 必要に応じて他のロジックを追加
  };

  // トラックの表示状態を管理
  const [visibleTracks, setVisibleTracks] = useState<{
    [key in Track]: boolean;
  }>({
    TRACK1: true,
    TRACK2: true,
    TRACK3: true,
  });

  // トラックの表示/非表示を切り替える処理
  const handleToggleTrack = (trackId: Track) => {
    setVisibleTracks((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  const getGridTemplateColumns = () => {
    let template = "125px "; // 時間列は常に表示

    if (visibleTracks.TRACK1) template += "1fr ";
    if (visibleTracks.TRACK2) template += "1fr ";
    if (visibleTracks.TRACK3) template += "1fr";

    return template;
  };

  // 表示されているトラック数を計算
  const getVisibleTrackCount = () => {
    return Object.values(visibleTracks).filter(Boolean).length;
  };

  // 最小幅の計算（各トラックのセルを最低200pxの幅で確保）
  const getMinWidth = () => {
    const timeColumnWidth = 125; // 時間列の幅
    const trackColumnWidth = 200; // 各トラックの最小幅
    const visibleTrackCount = getVisibleTrackCount();

    return timeColumnWidth + visibleTrackCount * trackColumnWidth;
  };

  return (
    <main className="bg-blue-light-100 mt-16 py-10 px-1 md:py-16 md:px-3 lg:px-10">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center md:text-3xl lg:text-4xl">
        タイムテーブル
      </h1>
      <div className="text-center mt-8">
        <EventDateTab currentDate={currentDate} onTabChange={handleTabChange} />
      </div>
      <div className="text-center mt-6">
        <TrackToggle
          visibleTracks={visibleTracks}
          onToggleTrack={handleToggleTrack}
        />
      </div>

      {/* タイムテーブル全体を横スクロール可能なコンテナで囲む */}
      <div className="overflow-x-auto mt-10">
        <div style={{ minWidth: `${getMinWidth()}px` }}>
          {/* ヘッダー行 - トラック名 */}
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: getGridTemplateColumns() }}
          >
            <div className="w-[125px]" />
            {visibleTracks.TRACK1 && (
              <div className="bg-[#0CF8C0] p-2 text-center font-bold">
                {TRACK.TRACK1.name}
              </div>
            )}
            {visibleTracks.TRACK2 && (
              <div className="bg-[#005FAA] p-2 text-center text-white font-bold">
                {TRACK.TRACK2.name}
              </div>
            )}
            {visibleTracks.TRACK3 && (
              <div className="bg-[#000000] p-2 text-center text-white font-bold">
                {TRACK.TRACK3.name}
              </div>
            )}
          </div>

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

          {/* 10:50~11:00の行 */}
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
                talks={[
                  getTalk("18"),
                  getTalk("19"),
                  getTalk("33"),
                  getTalk("31"),
                ]}
              />
            )}
            {visibleTracks.TRACK3 && (
              <LtWrapper
                talks={[
                  getTalk("29"),
                  getTalk("32"),
                  getTalk("22"),
                  getTalk("20"),
                ]}
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
                talks={[
                  getTalk("28"),
                  getTalk("26"),
                  getTalk("27"),
                  getTalk("25"),
                ]}
              />
            )}
            {visibleTracks.TRACK3 && (
              <LtWrapper
                talks={[
                  getTalk("23"),
                  getTalk("21"),
                  getTalk("24"),
                  getTalk("30"),
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TalksPage;
