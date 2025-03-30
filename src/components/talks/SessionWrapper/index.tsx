import { EventWrapper } from "@/components/talks/EventWrapper";
import type { Talk } from "@/constants/talkList";

type Props = {
  talk: Talk;
};

export function SessionWrapper({ talk }: Props) {
  return (
    <EventWrapper talkType="SESSION" textAlign="left">
      <div className="flex flex-col gap-1">
        <p className="text-16">{talk.title}</p>
        <p className="text-14">{talk.speakerName}</p>
      </div>
    </EventWrapper>
  );
}
