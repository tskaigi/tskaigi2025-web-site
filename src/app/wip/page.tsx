import { HeroSection } from "../../components/HeroSection";
import { MissionSection } from "../../components/MissionSection";
import { Header } from "../../components/ui/header";

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
