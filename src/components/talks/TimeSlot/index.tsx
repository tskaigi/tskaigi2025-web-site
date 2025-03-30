type Props = {
  timeText: string;
};

export function TimeSlot({ timeText }: Props) {
  return (
    <div className="bg-yellow-200 py-2 px-1 flex items-center justify-center text-center w-[70px] md:w-[99px] lg:w-[125px] text-sm font-medium text-yellow-700">
      {timeText}
    </div>
  );
}
