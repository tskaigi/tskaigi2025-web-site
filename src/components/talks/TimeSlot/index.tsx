type Props = {
  timeText: string;
};

export function TimeSlot({ timeText }: Props) {
  return (
    <div className="sticky top-14 z-30 shadow shadow-blue-light-100 pt-2 bg-blue-light-100">
      <div className="bg-yellow-200 py-2 px-1 flex items-center justify-center text-center w-full md:w-[99px] lg:w-[125px] text-sm font-medium text-yellow-700">
        {timeText}
      </div>
    </div>
  );
}
