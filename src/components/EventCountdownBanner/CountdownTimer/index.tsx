"use client";

import { useCountdownTimer } from "./useCountdownTimer";

export function CountdownTimer() {
  const { timeLeft } = useCountdownTimer();

  return (
    <div className="w-[330px] md:w-[600px] lg:w-[630px] bg-primary rounded-xl py-4 md:py-8">
      <div className="flex gap-1 md:gap-4 items-end justify-center text-white">
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
  );
}
