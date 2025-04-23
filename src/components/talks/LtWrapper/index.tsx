import { EventWrapper } from "@/components/talks/EventWrapper";
import type { Talk } from "@/constants/talkList";

type Props = {
  talks: Talk[];
};

export function LtWrapper({ talks }: Props) {
  return (
    <EventWrapper talkType="LT" textAlign="left" track={talks[0]?.track}>
      <div className="flex flex-col gap-5">
        {talks.map((talk) => (
          <div key={talk.id} className="flex flex-col gap-1">
            <p className="text-16">{talk.title}</p>
            <p className="text-14">{talk.speaker.name}</p>
          </div>
        ))}
      </div>
    </EventWrapper>
  );
}
