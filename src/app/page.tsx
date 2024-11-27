import { EventCountdownBanner } from "@/components/EventCountdownBanner";
import { SeekingSponsorsSection } from "@/components/SeekingSponsorsSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <EventCountdownBanner />
      <SeekingSponsorsSection />
    </main>
  );
}
