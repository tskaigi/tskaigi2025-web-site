import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SeekingSponsorsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8 px-8 pt-10 pb-16">
      <h2 className="text-[32px] lg:text-4xl leading-[48px] tracking-[-1.2%] font-bold text-center">
        スポンサー募集開始
      </h2>
      <div>
        <p>
          一緒にTypeScriptコミュニティを盛り上げていただけるスポンサー企業を募集いたします。
        </p>
      </div>
      <Button
        asChild
        variant="default"
        size="lg"
        className="rounded-full w-[280px] h-[60px] fill-primary hover:bg-[#1854FF]"
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZR2TQr0E6CJ9l9hy9L9xvO5o6Ep5GXcZo57zq-7b_TEt52g/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="ont-bold text-base leading-6"
        >
          抽選を申し込む
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
