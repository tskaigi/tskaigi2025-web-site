type Props = {
  timeText: string;
};

export function TimeSlot({ timeText }: Props) {
  return (
    <div className="bg-yellow-200 py-2 px-1 flex items-center justify-center w-[125px] text-sm font-medium text-yellow-700">
      {timeText}
    </div>
  );
}
