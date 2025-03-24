"use client";

import { EventDateTab } from "@/components/talks/EventDateTab";
import { useState } from "react";
import type { EventDate, Track } from "@/constants/talkList";
import { TrackToggle } from "@/components/talks/TrackToggle";

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

  return (
    <main className="bg-blue-light-100 mt-16 py-16 px-10">
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
    </main>
  );
};

export default TalksPage;
