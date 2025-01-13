import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { MissionSection } from "../../components/MissionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
      </main>
    </>
  );
}
