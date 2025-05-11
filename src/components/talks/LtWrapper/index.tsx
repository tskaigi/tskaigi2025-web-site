import { EventWrapper } from "@/components/talks/EventWrapper";
import type { Talk } from "@/constants/talkList";
import Link from "next/link";

type Props = {
  talks: Talk[];
};

export function LtWrapper({ talks }: Props) {
  return (
    <EventWrapper talkType="LT" textAlign="left" track={talks[0]?.track}>
      <div className="flex flex-col gap-5">
        {talks.map((talk) => (
          <div key={talk.id} className="flex flex-col gap-1">
            {talk.speaker.username ? (
              <Link
                href={`/talks/${talk.speaker.username}`}
                className="hover:underline"
              >
                <p className="text-16">{talk.title}</p>
              </Link>
            ) : (
              <p className="text-16">{talk.title}</p>
            )}
            <div className="flex items-center gap-2">
              <span className="text-14">{talk.speaker.name}</span>
              {talk.speaker.profileImagePath && (
                <img
                  src={`/talks/speaker/${talk.speaker.profileImagePath}`}
                  alt={`${talk.speaker.name}のプロフィール画像`}
                  className="h-6 w-6 rounded-full aspect-square shrink-0 object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </EventWrapper>
  );
}
