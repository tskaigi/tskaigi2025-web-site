import { Decoration } from "@/components/Decoration";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ApplyToProposalSection = () => {
  return (
    <div className="bg-blue-light-400 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center md:p-10 lg:p-16 px-6 py-10 rounded-lg">
        <div className="bg-white p-6 md:px-10 md:py-6 lg:py-6 lg:px-10 flex flex-col items-center rounded-lg max-w-[940px]">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
              プロポーザル募集
            </h1>
            <Decoration />
          </div>
          <div className="py-6 md:py-6 lg:py-10">
            <div className="text-[16px] md:text-[18px] text-left">
              <p>
                私たちの願いは、フロントエンドからバックエンド、インフラに至るまで、多様な分野のTypeScriptエンジニアたちが集い、普段は交流の少ないエンジニアたちが、それぞれの得意分野や最新の知見を交換し合う交流の場を創り出すことです。
              </p>
              <br />
              <p>
                あなたの発表が、誰かのキャリア、あるいはプロジェクトに新たな光をもたらすかもしれません。
              </p>
              <p>ぜひ一緒に日本のTypeScriptコミュニティを盛り上げましょう！</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full w-[280px] h-[60px] fill-primary bg-blue-purple-500 hover:bg-blue-purple-600 text-white"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScKXPc8dLC3QSqu_pMTGJdED3LuuFi0QCVsCMWIrC6nPcxRnA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold flex items-center text-22 [&_svg]:size-6"
              >
                <span className="text-18 md:text-22">応募する</span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
