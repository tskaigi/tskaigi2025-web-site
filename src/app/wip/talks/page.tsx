"use client";

import { EventDateTab } from "@/components/talks/EventDateTab";
import { useState } from "react";
import type { EventDate } from "@/constants/talkList";

const TalksPage = () => {
  const [currentDate, setCurrentDate] = useState<EventDate>("DAY1");

  const handleTabChange = (date: EventDate) => {
    setCurrentDate(date);
    // 必要に応じて他のロジックを追加
  };
  return (
    <main className="bg-blue-light-100 mt-16 py-16 px-10">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center md:text-3xl lg:text-4xl">
        タイムテーブル
      </h1>
      <div className="text-center mt-8">
        <EventDateTab currentDate={currentDate} onTabChange={handleTabChange} />
      </div>
    </main>
  );
};

export default TalksPage;
