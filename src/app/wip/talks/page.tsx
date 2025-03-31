"use client";
import { Day1TimeTable } from "@/components/talks/Day1TimeTable";
import { Day2TimeTable } from "@/components/talks/Day2TimeTable";
import { EventDateTab } from "@/components/talks/EventDateTab";
import { GridWrapper } from "@/components/talks/GridWrapper";
import { TrackHeader } from "@/components/talks/TrackHeader";
import type { EventDate, Track } from "@/constants/talkList";
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
    let template = "auto "; // 時間列は常に表示

    if (visibleTracks.TRACK1) template += "minmax(210px, 1fr) ";
    if (visibleTracks.TRACK2) template += "minmax(210px, 1fr) ";
    if (visibleTracks.TRACK3) template += "minmax(210px, 1fr)";

    return template;
  };

  // 表示されているトラック数を計算
  const getVisibleTrackCount = () => {
    return Object.values(visibleTracks).filter(Boolean).length;
  };

  return (
    <main className="bg-blue-light-100 mt-16 py-10 px-1 md:py-16 md:px-3 lg:px-10">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center md:text-3xl lg:text-4xl">
        タイムテーブル
      </h1>
      <div className="text-center mt-8">
        <EventDateTab currentDate={currentDate} onTabChange={handleTabChange} />
      </div>

      <div className="overflow-x-auto mt-10">
        <div className="min-w-full">
          <GridWrapper>
            <div className="w-[70px] md:w-[99px] lg:w-[125px]" />
            <TrackHeader track={"TRACK1"} />
            <TrackHeader track={"TRACK2"} />
            <TrackHeader track={"TRACK3"} />
          </GridWrapper>

          {currentDate === "DAY1" ? (
            <Day1TimeTable />
          ) : (
            <Day2TimeTable
              getGridTemplateColumns={getGridTemplateColumns}
              getVisibleTrackCount={getVisibleTrackCount}
              visibleTracks={visibleTracks}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default TalksPage;
