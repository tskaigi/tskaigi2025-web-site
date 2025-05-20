import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function DecorationButton() {
  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="rounded-full w-[286px] md:w-[356px] h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white px-8 md:px-10 lg:px-10"
    >
      <Link
        href="/talks"
        className="font-bold flex items-center [&_svg]:size-6 relative pl-8 before:content-[''] before:absolute before:left-[-24px] before:top-[-8px] before:w-[58px] before:h-11 before:bg-[url('/yellow.svg')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:right-[-8px] after:bottom-[-14px] after:w-[33px] after:h-[47px] after:bg-[url('/purple.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:rotate-[186deg]"
      >
        <span className="text-18 lg:text-24 leading-[1.8]">
          タイムテーブルはこちら
        </span>
        <ArrowRight />
      </Link>
    </Button>
  );
}
