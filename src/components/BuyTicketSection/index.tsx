import { Decoration } from "@/components/Decoration";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionGradation } from "../ui/sectionGradation";

const BuyTicketPageLink = {
  offline: "https://peatix.com/event/4342134",
  online: "https://peatix.com/event/4342139",
} as const;

export const BuyTicketSection = () => {
  return (
    <SectionGradation>
      <div className="p-6 flex flex-col justify-center md:p-10 lg:max-w-[940px] lg:mx-auto lg:py-16">
        <div className="bg-white p-6 md:px-10 md:py-6 lg:py-10 lg:px-16 flex flex-col items-center rounded-lg  md:rounded-2xl max-w-[940px]">
          <div className="flex flex-col items-center md:px-6 self-stretch">
            <h2 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
              チケットを購入
            </h2>
            <Decoration />
          </div>
          <div className="flex py-6 lg:py-10">
            <div className="text-[16px] md:text-[18px] text-left leading-[1.8] self-stretch">
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

          <div className="w-full border-l-4 border-yellow-500 bg-yellow-100 p-6 rounded-r-lg mb-6">
            <h3 className="text-22 font-bold text-red-500 mb-2">
              現地参加チケット完売のお知らせ
            </h3>
            <p className="text-16 md:text-18 text-black-500 leading-[1.8]">
              多数のお申し込みをいただき、現地参加チケットは完売いたしました。引き続きオンライン参加チケットはお申し込みいただけますので、ぜひご検討ください。
            </p>
          </div>

          <div className="flex flex-col justify-center gap-5 md:flex-col lg:flex-row p-[10px] flex-1">
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white pl-8 pr-6 md:pl-10 md:pr-8 lg:pl-10 lg:pr-8 self-stretch"
            >
              <Link
                href={BuyTicketPageLink.offline}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold flex items-center text-22 [&_svg]:size-6"
              >
                <span className="text-18 lg:text-22 leading-[1.8]">
                  現地参加チケット
                </span>
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full h-[60px] bg-white hover:bg-black-100 text-blue-purple-500 pl-8 pr-6 md:pl-10 md:pr-8 lg:pl-10 lg:pr-8 border-[2px] border-black-500 self-stretch"
            >
              <Link
                href={BuyTicketPageLink.online}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold flex items-center text-22 [&_svg]:size-6"
              >
                <span className="text-18 lg:text-22 leading-[1.8]">
                  オンライン参加チケット
                </span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionGradation>
  );
};
