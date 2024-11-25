import { CountdownTimer } from "./CountdownTimer";
import { GridBackground } from "./GridBackground";

export function EventCountdownBanner() {
  return (
    <div className="w-full h-[644px] lg:h-[850px]  relative flex flex-col items-center justify-center gap-10 text-center">
      <GridBackground />

      <img
        src="/logo.svg"
        className="absolute top-6 left-6 w-40 lg:w-64 lg:top-10 lg:left-10"
        alt="logo"
      />

      <CountdownTimer />

      <div className="text-2xl font-semibold space-y-1">
        <time
          dateTime="2025-05-23"
          className="text-[28px] leading-[36px] tracking-[-.75%] semibold"
        >
          5/23, 5/24
        </time>
        <p className="text-[23px] leading-[36px] tracking-[-.75%] font-bold">
          ベルサール神田
        </p>
      </div>

      <h1 className="text-[59px] leading-[48px] tracking-[-1.2%] font-bold text-primary w-96 lg:w-full">
        TSKaigi 2025 Coming Soon
      </h1>
    </div>
  );
}
