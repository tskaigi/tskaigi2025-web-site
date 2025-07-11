import { Decoration } from "@/components/Decoration";
import { SectionGradation } from "@/components/ui/sectionGradation";
import { Announcement } from "./Announcement";
import { DecorationButton } from "./DecorationButton";
import { ParticipationMethod } from "./ParticipationMethod";
import { PointsOfAttention } from "./PointsOfAttention";

export function OnTheDaySection() {
  return (
    <SectionGradation>
      <div className="mx-6 flex flex-col justify-center lg:max-w-[940px] lg:mx-auto pt-6 lg:pt-16 max-sm:pb-2">
        <div className="flex flex-col items-center self-stretch mb-10">
          <h2 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
            当日のお知らせ
          </h2>
          <Decoration />
        </div>
        <Announcement />
        <DecorationButton />
        <ParticipationMethod />
        <PointsOfAttention />
      </div>
    </SectionGradation>
  );
}
