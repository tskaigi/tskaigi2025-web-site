import { EventCountdownBanner } from "@/components/EventCountdownBanner";
import Footer from "@/components/Footer";
import { SeekingSponsorsSection } from "@/components/SeekingSponsorsSection";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center">
        <EventCountdownBanner />
        <SeekingSponsorsSection />
      </main>
      <Footer />
    </>
  );
}
