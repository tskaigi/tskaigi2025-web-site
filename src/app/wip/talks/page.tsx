"use client";

import { EventDateTab } from "@/components/talks/EventDateTab";
import { TimeSlot } from "@/components/talks/TimeSlot";
import { TrackToggle } from "@/components/talks/TrackToggle";
import { type EventDate, TRACK, type Track } from "@/constants/talkList";
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

    if (visibleTracks.TRACK1) template += "1fr ";
    if (visibleTracks.TRACK2) template += "1fr ";
    if (visibleTracks.TRACK3) template += "1fr";

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
      <div className="text-center mt-6">
        <TrackToggle
          visibleTracks={visibleTracks}
          onToggleTrack={handleToggleTrack}
        />
      </div>
      <div
        className="grid gap-1 mt-10"
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

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:00" />
        {getVisibleTrackCount() > 0 && (
          <div
            className="bg-white p-5 h-32 flex items-center justify-center text-black-700"
            style={{
              gridColumn: `span ${getVisibleTrackCount()}`,
            }}
          >
            開場
          </div>
        )}
      </div>

      <div
        className="grid gap-1 mt-2"
        style={{ gridTemplateColumns: getGridTemplateColumns() }}
      >
        <TimeSlot timeText="10:50 ~ 11:00" />
        {visibleTracks.TRACK1 && (
          <div className="bg-white p-5 h-32 flex items-center justify-center text-black-700">
            オープニングトーク
          </div>
        )}
        {visibleTracks.TRACK2 && (
          <div className="bg-white p-5 h-32 flex items-center justify-center text-black-700">
            サテライト
          </div>
        )}
        {visibleTracks.TRACK3 && (
          <div className="bg-gray-200 p-5 h-32 flex items-center justify-center text-black-700">
            クローズ
          </div>
        )}
      </div>
    </main>
  );
};

export default TalksPage;
