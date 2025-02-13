import type { Metadata } from "next";
import { ApplyToProposalSection } from "../../components/ApplyToProposalSection";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroSectionWithMotion } from "../../components/HeroSectionWithMotion";
import { MissionSection } from "../../components/MissionSection";
import { SponsorsBoardSection } from "../../components/SponsorsBoardSection";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSectionWithMotion />
        <MissionSection />
        <ApplyToProposalSection />
        <SponsorsBoardSection isTopPage={false} />
      </main>
      <Footer />
    </>
  );
}
