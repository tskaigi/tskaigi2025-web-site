type Props = {
  timeText: string;
  isActive?: boolean;
};

export function TimeSlot({ timeText, isActive = false }: Props) {
  return (
    <div
      className={`relative flex flex-col gap-2 p-2 items-center justify-center text-center w-full md:w-[99px] lg:w-[125px] ${
        isActive
          ? "bg-orange-200 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[5px] after:h-full after:bg-orange-500 after:opacity-50"
          : "bg-yellow-200"
      }`}
    >
      <p
        className={`text-sm lg:text-base font-bold ${
          isActive ? "text-orange-500" : "text-yellow-700"
        }`}
      >
        {timeText}
      </p>
      {isActive && <p className="text-xs text-orange-500 font-normal">now</p>}
    </div>
  );
}
