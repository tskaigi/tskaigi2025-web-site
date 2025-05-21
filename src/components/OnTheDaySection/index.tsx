import { Decoration } from "@/components/Decoration";
import { SectionGradation } from "@/components/ui/sectionGradation";
import { DecorationButton } from "./DecorationButton";

export function OnTheDaySection() {
  return (
    <SectionGradation>
      <div className="p-6 flex flex-col justify-center lg:max-w-[940px] lg:mx-auto lg:py-16">
        <div className="flex flex-col items-center self-stretch mb-10">
          <h2 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
            当日のお知らせ
          </h2>
          <Decoration />
        </div>
        {/* MEMO: 緊急のお知らせを掲載する場合のみ、isVisibleをtrueにする */}
        <UrgentAnnouncement isVisible={false} />
        <div className="mb-8 mt-8 md:mt-10 flex flex-col items-center justify-center">
          <DecorationButton />
        </div>
      </div>
    </SectionGradation>
  );
}
