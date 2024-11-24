type Props = {
  value: number;
  unit: string;
  duration: string;
};

export function TimeLeft({ value, unit, duration }: Props) {
  return (
    <div className="text-center w-[50px] md:w-[100px]">
      <time
        className="block text-3xl md:text-5xl lg:text-6xl font-semibold md:font-normal tracking-[-0.75%]"
        dateTime={duration}
      >
        {value}
      </time>
      <span className="text-xs font-light mt-1">{unit}</span>
    </div>
  );
}