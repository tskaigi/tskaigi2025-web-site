"use client";

import { useCountdownTimer } from "./useCountdownTimer";

export default function CountdownTimer() {
  const { timeLeft } = useCountdownTimer();

  return (
    <div className="w-full max-w-full md:max-w-2xl">
      <div className="backdrop-blur-sm bg-white/85 rounded-xl py-4 md:py-8 shadow-lg">
        <div className="flex gap-1 md:gap-4 items-end justify-center text-blue-600">
          <div className="text-center min-w-[3rem]">
            <span className="block text-xs md:text-sm font-bold mb-1 md:mb-3">
              Days
            </span>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.days.toString().padStart(3, "0")}
            </div>
          </div>
          <span
            className="text-2xl md:text-5xl font-bold mb-0.5"
            aria-hidden="true"
          >
            :
          </span>
          <div className="text-center min-w-[3rem]">
            <span className="block text-xs md:text-sm font-bold mb-1 md:mb-3">
              Hour
            </span>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
          </div>
          <span
            className="text-2xl md:text-5xl font-bold mb-0.5"
            aria-hidden="true"
          >
            :
          </span>
          <div className="text-center min-w-[3rem]">
            <span className="block text-xs md:text-sm font-bold mb-1 md:mb-3">
              Minutes
            </span>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
          </div>
          <span
            className="text-2xl md:text-5xl font-bold mb-0.5"
            aria-hidden="true"
          >
            :
          </span>
          <div className="text-center min-w-[3rem]">
            <span className="block text-xs md:text-sm font-bold mb-1 md:mb-3">
              Seconds
            </span>
            <div className="text-2xl md:text-5xl font-bold tabular-nums">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
