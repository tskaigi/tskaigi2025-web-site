import { ApplyToProposalSection } from "@/components/ApplyToProposalSection";
import { CoreStaffSection } from "@/components/CoreStaffSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSectionWithMotion } from "@/components/HeroSectionWithMotion";
import { JudgesSection } from "@/components/JudgesSection";
import { MissionSection } from "@/components/MissionSection";
import { SponsorsBoardSection } from "@/components/SponsorsBoardSection";
import { StaffSection } from "@/components/StaffSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-8 overflow-x-hidden">
        <HeroSectionWithMotion />
        <MissionSection />
        <ApplyToProposalSection />
        <SponsorsBoardSection />
        <JudgesSection />
        <CoreStaffSection />
        <StaffSection />
      </main>
      <Footer />
    </>
  );
}
