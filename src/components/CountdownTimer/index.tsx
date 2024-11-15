"use client";

import { useCountdownTimer } from "./useCountdownTimer";

export default function CountdownTimer() {
  const { timeLeft } = useCountdownTimer();

  return (
    <div className="w-full max-w-full md:max-w-2xl">
      <div className="backdrop-blur-sm bg-white/85 rounded-xl py-4 md:py-8 shadow-lg">
        <div className="flex gap-1 md:gap-4 items-end justify-center text-blue-600">
          <div className="text-center min-w-[3rem]">
            <div className="text-xs md:text-sm font-bold mb-1 md:mb-3">
              Days
            </div>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.days.toString().padStart(3, "0")}
            </div>
          </div>
          <div className="text-2xl md:text-5xl font-bold mb-0.5">:</div>
          <div className="text-center min-w-[3rem]">
            <div className="text-xs md:text-sm font-bold mb-1 md:mb-3">
              Hour
            </div>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-2xl md:text-5xl font-bold mb-0.5">:</div>
          <div className="text-center min-w-[3rem]">
            <div className="text-xs md:text-sm font-bold mb-1 md:mb-3">
              Minutes
            </div>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-2xl md:text-5xl font-bold mb-0.5">:</div>
          <div className="text-center min-w-[3rem]">
            <div className="text-xs md:text-sm font-bold mb-1 md:mb-3">
              Seconds
            </div>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
