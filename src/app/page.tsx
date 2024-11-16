import { SeekingSponsorsSection } from "@/components/SeekingSponsorsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">TSKaigi 2025</h1>
      <SeekingSponsorsSection />
    </div>
  );
}
