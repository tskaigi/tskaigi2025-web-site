import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TSKaigi 2025 参加者アンケート",
  twitter: {
    title: "TSKaigi 2025 参加者アンケート",
  },
  openGraph: {
    title: "TSKaigi 2025 参加者アンケート",
  },
  robots: "noindex, nofollow",
};

const SurveyPage = () => {
  return (
    <main className="bg-blue-light-100 pt-16 py-10 md:px-8">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16 md:text-3xl lg:text-4xl">
        TSKaigi 2025 参加者アンケート
      </h1>
      <div className="bg-white p-6 flex flex-col gap-6 max-w-2xl mx-auto md:rounded-xl lg:p-10 text-lg">
        <div className="text-[16px] md:text-[18px] text-left leading-[1.8]">
          <p>本日はTSKaigi 2025にご参加いただきありがとうございました。</p>
          <p>有意義な時間をお過ごしいただくことはできましたでしょうか？</p>
          <p>少しでも学びのある場になっていれば幸いです。</p>
          <p>
            今後のTSKaigi開催の参考にさせていただくため、アンケートへのご協力をお願いいたします。
          </p>
          <p className="pt-4">所要時間：5分程度</p>
          <p>回答期限：5月31日まで</p>
        </div>
        <div className="flex justify-center">
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white pl-10 pr-8"
          >
            <a
              href="https://forms.gle/bEhr7VXJ7v2vzRpv6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold flex items-center text-22 [&_svg]:size-6"
            >
              <span className="text-18 md:text-22 leading-[1.8]">
                アンケートを回答する
              </span>
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SurveyPage;
