import { BuyTicketSection } from "@/components/BuyTicketSection";
import { CoreStaffSection } from "@/components/CoreStaffSection";
import { HeroSectionWithMotion } from "@/components/HeroSectionWithMotion";
import { JudgesSection } from "@/components/JudgesSection";
import { MissionSection } from "@/components/MissionSection";
import PersonalSponsorsSection from "@/components/PersonalSponsorsSection";
import { SponsorsBoardSection } from "@/components/SponsorsBoardSection";
import { StaffSection } from "@/components/StaffSection";

export default function Home() {
  return (
    <main className="pt-8 overflow-x-hidden">
      <HeroSectionWithMotion />
      <BuyTicketSection />
      <MissionSection />
      <SponsorsBoardSection />
      <PersonalSponsorsSection />
      <JudgesSection />
      <CoreStaffSection />
      <StaffSection />
    </main>
  );
}
