import { ChevronDown } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { GridBackground } from "./GridBackground";

export function EventCountdownBanner() {
  return (
    <div className="w-full h-[674px] lg:h-[850px]  relative flex flex-col items-center text-center">
      <GridBackground />

      <img
        src="/logo.svg"
        className="absolute top-6 left-6 w-40 lg:w-64 lg:top-10 lg:left-10"
        alt="logo"
      />

      <div className="mt-[178px] lg:mt-[248px]">
        <CountdownTimer />
      </div>

      <div className="mt-[52px] text-2xl font-semibold space-y-1">
        <time
          dateTime="2025-05-23"
          className="text-[28px] leading-[36px] tracking-[-.75%] font-semibold"
        >
          5/23, 5/24
        </time>
        <p className="text-[23px] leading-[36px] tracking-[-.75%] font-bold">
          ベルサール神田
        </p>
      </div>

      <h1 className="mt-[30px] lg:mt-[40px] text-[50px] lg:text-[59px] leading-[48px] tracking-[-1.2%] font-bold text-primary w-96 lg:w-full">
        TSKaigi 2025 Coming Soon
      </h1>

      <div className="mt-[46px] lg:mt-[74px] flex flex-col items-center">
        <span className="text-xl leading-[25px] tracking-[-1.2%] font-semibold lg:font-bold text-primary">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-primary" />
      </div>
    </div>
  );
}
