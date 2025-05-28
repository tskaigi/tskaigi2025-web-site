import { OnTheDaySection } from "@/components/AnnouncementSection";
import { CoreStaffSection } from "@/components/CoreStaffSection";
import { HeroSectionWithMotion } from "@/components/HeroSectionWithMotion";
import { JobBoardSection } from "@/components/JobBoardSection";
import { JudgesSection } from "@/components/JudgesSection";
import { MissionSection } from "@/components/MissionSection";
import PersonalSponsorsSection from "@/components/PersonalSponsorsSection";
import { SponsorsBoardSection } from "@/components/SponsorsBoardSection";
import { StaffSection } from "@/components/StaffSection";

export default function Home() {
  return (
    <main className="pt-8 overflow-x-hidden">
      <HeroSectionWithMotion />
      <OnTheDaySection />
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
