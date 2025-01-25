import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
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
        <HeroSection />
        <MissionSection />
        <SponsorsBoardSection />
      </main>
    </>
  );
}
