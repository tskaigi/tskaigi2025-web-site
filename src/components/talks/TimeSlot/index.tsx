type Props = {
  isOngoing?: boolean;
  timeText: string;
};

export function TimeSlot({ isOngoing = false, timeText }: Props) {
  return (
    <div
      className={`relative flex flex-col gap-2 p-2 items-center justify-center text-center w-full md:w-[99px] lg:w-[125px] ${
        isOngoing
          ? "bg-orange-200 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[5px] after:h-full after:bg-orange-500 after:opacity-50"
          : "bg-yellow-200"
      }`}
    >
      <p
        className={`text-sm lg:text-base font-bold ${
          isOngoing ? "text-orange-500" : "text-yellow-700"
        }`}
      >
        {timeText}
      </p>
      {isOngoing && <p className="text-xs text-orange-500 font-normal">now</p>}
    </div>
  );
}
