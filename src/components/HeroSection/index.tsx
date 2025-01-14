import Image from "next/image";
import HeroImage from "../../../public/hero.png";

export function HeroSection() {
  return (
    <section className="relative -mt-4 md:-mt-8 lg:-mt-16">
      <Image
        src={HeroImage}
        alt="TSKaigi 2025のメインビジュアル。2025年5月23日(金) - 24日(土)に開催。"
        priority
        sizes="100vw"
      />
    </section>
  );
}
