import { BuyTicketSection } from "@/components/BuyTicketSection";
import { CoreStaffSection } from "@/components/CoreStaffSection";
import { JudgesSection } from "@/components/JudgesSection";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroSectionWithMotion } from "../../components/HeroSectionWithMotion";
import { MissionSection } from "../../components/MissionSection";
import { SponsorsBoardSection } from "../../components/SponsorsBoardSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-8 overflow-x-hidden">
        <HeroSectionWithMotion />
        <BuyTicketSection />
        <MissionSection />
        <SponsorsBoardSection isWip />
        <JudgesSection />
        <CoreStaffSection />
      </main>
      <Footer />
    </>
  );
}
