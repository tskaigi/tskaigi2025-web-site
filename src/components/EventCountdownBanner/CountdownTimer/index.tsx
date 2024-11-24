"use client";

import { useCountdownTimer } from "./useCountdownTimer";

export function CountdownTimer() {
  const { timeLeft } = useCountdownTimer();

  return (
    <div className="w-full max-w-full md:max-w-2xl">
      <div className="backdrop-blur-sm bg-white/85 rounded-xl py-4 md:py-8 shadow-lg">
        <div className="flex gap-1 md:gap-4 items-end justify-center text-blue-600">
          <div className="text-center min-w-[3rem]">
            <span className="block text-xs md:text-sm font-bold mb-1 md:mb-3">
              Days
            </span>
            <time
              className="block text-2xl md:text-5xl font-bold tabular-nums"
              dateTime={`P${timeLeft.days}D`}
            >
              {timeLeft.days.toString().padStart(3, "0")}
            </time>
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
            <time
              className="block text-2xl md:text-5xl font-bold tabular-nums"
              dateTime={`PT${timeLeft.hours}H`}
            >
              {timeLeft.hours.toString().padStart(2, "0")}
            </time>
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
            <time
              className="block text-2xl md:text-5xl font-bold tabular-nums"
              dateTime={`PT${timeLeft.minutes}M`}
            >
              {timeLeft.minutes.toString().padStart(2, "0")}
            </time>
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
            <time
              className="block text-2xl md:text-5xl font-bold tabular-nums"
              dateTime={`PT${timeLeft.seconds}S`}
            >
              {timeLeft.seconds.toString().padStart(2, "0")}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
