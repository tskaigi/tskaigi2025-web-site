import { BuyTicketSection } from "@/components/BuyTicketSection";
import { CoreStaffSection } from "@/components/CoreStaffSection";
import { JudgesSection } from "@/components/JudgesSection";
import { HeroSectionWithMotion } from "../../components/HeroSectionWithMotion";
import { MissionSection } from "../../components/MissionSection";
import { SponsorsBoardSection } from "../../components/SponsorsBoardSection";

export default function Home() {
  return (
    <main className="pt-8 overflow-x-hidden">
      <HeroSectionWithMotion />
      <BuyTicketSection />
      <MissionSection />
      <SponsorsBoardSection isWip />
      <JudgesSection />
      <CoreStaffSection />
    </main>
  );
}
