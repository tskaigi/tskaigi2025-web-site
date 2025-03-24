type Props = {
  eventText: string;
  visibleTrackCount: number;
};

export function CommonTrackEvent({ eventText, visibleTrackCount }: Props) {
  return (
    <div
      className="bg-white p-5 h-32 flex items-center justify-center text-black-700"
      style={{
        gridColumn: `span ${visibleTrackCount}`,
      }}
    >
      {eventText}
    </div>
  );
}
