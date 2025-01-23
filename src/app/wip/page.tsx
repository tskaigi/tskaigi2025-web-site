import type { Metadata } from "next";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { MissionSection } from "../../components/MissionSection";

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
      </main>
      <Footer />
    </>
  );
}
