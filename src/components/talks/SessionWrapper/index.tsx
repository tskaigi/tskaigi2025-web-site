import { EventWrapper } from "@/components/talks/EventWrapper";
import type { Talk } from "@/constants/talkList";

type Props = {
  talk: Talk;
};

export function SessionWrapper({ talk }: Props) {
  return (
    <EventWrapper talkType="SESSION" textAlign="left" track={talk.track}>
      <div className="flex flex-col gap-1">
        {talk.speaker.username ? (
          <a
            href={`/talks/${talk.speaker.username}`}
            className="hover:underline"
          >
            <p className="text-16">{talk.title}</p>
          </a>
        ) : (
          <p className="text-16">{talk.title}</p>
        )}
        <p className="text-14">{talk.speaker.name}</p>
      </div>
    </EventWrapper>
  );
}
