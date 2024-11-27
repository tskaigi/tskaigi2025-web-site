import { BrowserMockup } from "@/components/SeekingSponsorsSection/BrowserMockup";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SeekingSponsorsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-16 px-8 pt-10 pb-16">
      <div className="w-full lg:w-[760px] flex flex-col items-center gap-10">
        <h2 className="text-[32px] lg:text-4xl leading-[48px] tracking-[-1.2%] font-bold text-center">
          スポンサー募集開始
        </h2>
        <div className="px-0 md:px-10 font-normal text-m leading-[25px] tracking-[-0.75%]">
          <p>
            TypeScriptコミュニティの発展に共に取り組んでいただけるスポンサー企業を募集いたします。
            希望される企業様はスポンサー向け資料をご確認の上、お申し込みください。
          </p>
          <p className="mt-4 ">
            1次応募締め切りは
            <time className="font-bold tracking-wider">2025/1/7 17:00</time>
            です。応募の状況によっては締め切り後にスポンサーの募集を継続する場合があります。
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
            className="font-bold text-base leading-6"
          >
            抽選を申し込む
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <BrowserMockup className="w-full lg:w-[1024px] max-w-full">
        <iframe
          title="TSKaigi Presentation"
          src="https://docs.google.com/presentation/d/e/2PACX-1vQADF22lFOs_BPlMsJWaJrVT03E-tK_sH03nJSCjRH-GlAl-GorCvlF5jND3iWLH7yubTgxeQrj1NCm/embed?start=false&loop=false&delayms=30000"
          className="aspect-[16/9] w-full"
          allowFullScreen
          allow="fullscreen"
        />
      </BrowserMockup>
    </div>
  );
}
