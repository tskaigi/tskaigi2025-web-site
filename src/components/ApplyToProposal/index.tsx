import { Decoration } from "@/components/Decoration";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// TODO: position が整っていないので、整える
export const ApplyToProposal = () => {
  return (
    <div className="bg-blue-light-400 flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center md:p-10 lg:p-16 px-6 py-10 rounded-lg">
        <div className="bg-white p-6 md:px-10 md:py-6 lg:py-16 lg:px-10 flex flex-col items-center rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
              プロポーザル募集
            </h1>
            <Decoration />
          </div>
          <div className="py-6 md:py-6 lg:py-10">
            <p className="text-[16px] md:text-[18px] text-left">
              プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。プロポーザル募集についてのテキストが入ります。
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full w-[280px] h-[60px] fill-primary bg-blue-purple-500 hover:bg-blue-purple-600 text-white"
            >
              {/* TODO: href を今年の プロポーザル募集のURL に変更 */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZR2TQr0E6CJ9l9hy9L9xvO5o6Ep5GXcZo57zq-7b_TEt52g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[22px] flex items-center space-x-2"
              >
                <span>抽選を申し込む</span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
