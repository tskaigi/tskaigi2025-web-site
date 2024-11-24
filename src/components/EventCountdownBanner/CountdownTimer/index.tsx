"use client";

import { Divider } from "./Divider";
import { TimeLeft } from "./TimeLeft";
import { useCountdownTimer } from "./useCountdownTimer";

export function CountdownTimer() {
  const { timeLeft } = useCountdownTimer();

  return (
    <div className="relative w-[330px] h-[142px] md:w-[600px] md:h-[154px] lg:w-[630px] lg:h-[182px] bg-primary rounded-lg flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)]">
      <div
        className="absolute inset-0 opacity-10 bg-[length:24px_24px] lg:bg-[length:32px_32px]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          mask: `
            linear-gradient(135deg, black, transparent 30%),
            linear-gradient(315deg, black, transparent 30%)
          `,
          WebkitMask: `
            linear-gradient(135deg, black, transparent 30%),
            linear-gradient(315deg, black, transparent 30%)
          `,
        }}
      />
      <div className="relative flex items-start gap-4 text-white">
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
