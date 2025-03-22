import { Decoration } from "@/components/Decoration";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BuyTicketPageLink = {
  offline: "https://peatix.com/event/4342134",
  online: "https://peatix.com/event/4342139",
} as const;

export const BuyTicketSection = () => {
  return (
    <div className="bg-blue-light-400 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center md:p-10 lg:p-16 px-6 py-10">
        <div className="bg-white p-6 md:px-10 md:py-6 lg:py-6 lg:px-10 flex flex-col items-center rounded-lg  md:rounded-2xl max-w-[940px]">
          <div className="flex flex-col items-center">
            <h2 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
              チケット購入
            </h2>
            <Decoration />
          </div>
          <div className="py-6 md:py-6 lg:py-10">
            <div className="text-[16px] md:text-[18px] text-left leading-[1.8]">
              <p>
                日本最大級のTypeScriptをテーマとした技術カンファレンス「TSKaigi
                2025」開催決定！
              </p>
              <br />
              <p>
                昨年に続き、TSKaigi 2025を開催します！
                今年は神田に会場を移し、2日間にわたって開催。
                昨年よりもさらに充実したプログラムを用意し、皆さんをお迎えします。
              </p>
              <p>
                これまでのコンセプトを継承し、学びの場を提供し、情報交換と交流を促進し、TypeScriptコミュニティをさらに盛り上げます！
              </p>
              <br />
              <p>チケットの購入は以下より行えます。</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 md:flex-col lg:flex-row">
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white pl-10 pr-8"
            >
              <Link
                href={BuyTicketPageLink.offline}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold flex items-center text-22 [&_svg]:size-6"
              >
                <span className="text-18 leading-[1.8]">現地参加はこちら</span>
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white pl-10 pr-8"
            >
              <Link
                href={BuyTicketPageLink.online}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold flex items-center text-22 [&_svg]:size-6"
              >
                <span className="text-18 leading-[1.8]">
                  オンライン参加はこちら
                </span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
