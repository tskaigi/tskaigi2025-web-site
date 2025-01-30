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
        className="xl:max-w-[1280px] xl:mx-auto"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </section>
  );
}
