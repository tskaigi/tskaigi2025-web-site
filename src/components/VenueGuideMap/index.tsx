import { Decoration } from "@/components/Decoration";
import { VenueGuideMapDialog } from "./VenueGuideMapDialog";

function VenueGuideMap() {
  return (
    <div className="p-6 flex flex-col justify-center lg:max-w-[940px] lg:mx-auto lg:py-16">
      <div className="flex flex-col items-center self-stretch mb-8">
        <h2 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
          会場マップ
        </h2>
        <Decoration />
      </div>
      <div className="mx-auto max-w-5xl text-left sm:px-4 lg:text-xl flex flex-col items-center">
        <div className="hidden md:block">
          <img
            src="/venue-guide-map-h.png"
            alt="イベント会場の2階と3階のマップ。2階にはトグルルーム、配布物コーナー、スポンサーブース、受付・本部、スタンプラリーゴールがあり、一方通行の通路がある。3階にはアセンドトラック、レバレジーズトラック、スポンサーブース、Ask the Speaker、3階案内、休憩スペース＆企画エリアがあり、一部通行不可のエリアがある。各階にエレベーターとトイレがある。"
          />
        </div>
        <div className="md:hidden flex flex-col gap-8">
          <img
            src="/venue-guide-map-v.png"
            alt="イベント会場の2階と3階のマップ。2階にはトグルルーム、配布物コーナー、スポンサーブース、受付・本部、スタンプラリーゴールがあり、一方通行の通路がある。3階にはアセンドトラック、レバレジーズトラック、スポンサーブース、Ask the Speaker、3階案内、休憩スペース＆企画エリアがあり、一部通行不可のエリアがある。各階にエレベーターとトイレがある。"
          />
        </div>
        <div className="mt-10">
          <VenueGuideMapDialog />
        </div>
      </div>
    </div>
  );
}

export function VenueGuideMapSection() {
  return (
    <section className="bg-blue-light-100">
      <VenueGuideMap />
    </section>
  );
}
