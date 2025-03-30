"use client";
import { Day1TimeTable } from "@/components/talks/Day1TimeTable";
import { EventDateTab } from "@/components/talks/EventDateTab";
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

          <Day1TimeTable
            getGridTemplateColumns={getGridTemplateColumns}
            getVisibleTrackCount={getVisibleTrackCount}
            visibleTracks={visibleTracks}
          />
        </div>
      </div>
    </main>
  );
};

export default TalksPage;
