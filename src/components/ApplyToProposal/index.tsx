import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// TODO: position が整っていないので、整える
const Accent = () => {
  return (
    <div className="relative w-[21px] h-[6px] flex justify-end items-end -gap-7">
      <div className="absolute top-0 right-0">
        <svg
          width="20"
          height="6"
          viewBox="0 0 20 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <title>下飾り(青)</title>
          <path d="M3.5 0H20.5L17.5 6H0.5L3.5 0Z" fill="#6BADE8" />
        </svg>
        <svg
          width="10"
          height="4"
          viewBox="0 0 10 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[2px]"
        >
          <title>下飾り(青)</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 4H0.5L2.5 0H10.5L8.5 4Z"
            fill="#0C7EDC"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0">
        <svg
          width="20"
          height="6"
          viewBox="0 0 20 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <title>下飾り(ピンク)</title>
          <path d="M3.5 0H20.5L17.5 6H0.5L3.5 0Z" fill="#FFC0DB" />
        </svg>
        <svg
          width="12"
          height="5"
          viewBox="0 0 12 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 top-[3px]"
        >
          <title>下飾り(ピンク)</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5H0.5L3.35714 0H12.5L10 5Z"
            fill="#FF86B9"
          />
        </svg>
      </div>
    </div>
  );
};

export const ApplyToProposal = () => {
  return (
    <div className="bg-blue-light-400 flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center md:p-10 lg:p-16 px-6 py-10 rounded-lg">
        <div className="bg-white p-6 md:px-10 md:py-6 lg:py-16 lg:px-10 flex flex-col items-center rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-center pb-4">
              プロポーザル募集
            </h1>
            <Accent />
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
