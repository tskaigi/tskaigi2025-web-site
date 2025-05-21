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
      <DialogContent className="modal-box w-11/12 max-w-7xl bg-white flex flex-col items-center p-1 pb-4">
        <DialogHeader className="sr-only">
          <DialogTitle>会場マップ</DialogTitle>
          <DialogDescription>会場マップの拡大図です。</DialogDescription>
        </DialogHeader>
        <div className="hidden md:block">
          <img src="/venue-guide-map-h.png" alt="PC用会場図" />
        </div>
        <div className="md:hidden flex flex-col gap-8">
          <img src="/venue-guide-map-v.png" alt="モバイル用会場図" />
        </div>
        <DialogFooter className="sm:justify-start">
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
