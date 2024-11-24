"use client";

import { Divider } from "./Divider";
import { TimeLeft } from "./TimeLeft";
import { useCountdownTimer } from "./useCountdownTimer";

export function CountdownTimer() {
  const { timeLeft } = useCountdownTimer();

  return (
    <div className="relative w-[330px] md:w-[600px] lg:w-[630px] h-[142px] md:h-[154px] lg:h-[182px] bg-primary rounded-lg flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)] overflow-hidden">
      <div className="relative flex items-start gap-3 text-white">
        <TimeLeft
          value={timeLeft.days}
          unit="Days"
          duration={`P${timeLeft.days}D`}
        />
        <Divider />
        <TimeLeft
          value={timeLeft.hours}
          unit="Hour"
          duration={`PT${timeLeft.hours}H`}
        />
        <Divider />
        <TimeLeft
          value={timeLeft.minutes}
          unit="Minutes"
          duration={`PT${timeLeft.minutes}M`}
        />
        <Divider />
        <TimeLeft
          value={timeLeft.seconds}
          unit="Seconds"
          duration={`PT${timeLeft.seconds}S`}
        />
      </div>
    </div>
  );
}
