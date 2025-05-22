"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const VenueGuideMapDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="rounded-full h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white px-8"
        >
          <span className="text-18 md:text-22 leading-[1.8]">
            マップを拡大する
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-w-7xl bg-white flex flex-col items-center p-1 pb-4">
        <DialogHeader className="sr-only">
          <DialogTitle>会場マップ</DialogTitle>
          <DialogDescription>会場マップの拡大図です。</DialogDescription>
        </DialogHeader>
        <div className="hidden md:block">
          <img
            src="/venue-guide-map-h.png"
            alt="イベント会場の2階と3階のマップ。2階にはトグルルーム、配布物コーナー、スポンサーブース、受付・本部、スタンプラリーゴールがあり、一方通行の通路がある。3階にはアセンドトラック、レバレジーズトラック、スポンサーブース、Ask the Speaker、3階案内、休憩スペース＆企画エリアがあり、一部通行不可のエリアがある。各階にエレベーターとトイレがある。"
          />
        </div>
        <div className="md:hidden flex flex-col gap-8">
          <img
            src="/venue-guide-map-v.png"
            alt="イベント会場の2階と3階のマップ。2階にはトグルルーム、配布物コーナー、スポンサーブース、受付・本部、スタンプラリーゴールがあり、一方通行の通路がある。3階にはアセンドトラック、レバレジーズトラック、スポンサーブース、Ask the Speaker、3階案内、休憩スペース＆企画エリアがあり、一部通行不可のエリアがある。各階にエレベーターとトイレがある。"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="default"
              size="lg"
              className="rounded-full h-[60px] bg-blue-purple-500 hover:bg-blue-purple-600 text-white px-8"
            >
              <span className="text-18 md:text-22 leading-[1.8]">とじる</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
