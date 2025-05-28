import { CoreStaffSection } from "@/components/CoreStaffSection";
import { HeroSectionWithMotion } from "@/components/HeroSectionWithMotion";
import { JobBoardSection } from "@/components/JobBoardSection";
import { JudgesSection } from "@/components/JudgesSection";
import { MissionSection } from "@/components/MissionSection";
import { OnTheDaySection } from "@/components/OnTheDaySection";
import PersonalSponsorsSection from "@/components/PersonalSponsorsSection";
import { SponsorsBoardSection } from "@/components/SponsorsBoardSection";
import { StaffSection } from "@/components/StaffSection";
import { VenueGuideMapSection } from "@/components/VenueGuideMap";

export default function Home() {
  return (
    <main className="pt-8 overflow-x-hidden">
      <HeroSectionWithMotion />
      <OnTheDaySection />
      <VenueGuideMapSection />
      <MissionSection />
      <JobBoardSection />
      <SponsorsBoardSection />
      <PersonalSponsorsSection />
      <JudgesSection />
      <CoreStaffSection />
      <StaffSection />
    </main>
  );
}
