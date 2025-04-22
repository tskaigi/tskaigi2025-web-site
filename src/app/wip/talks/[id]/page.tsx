import type { Metadata } from "next";
import { talkList } from "../../../../constants/talkList";

export async function generateStaticParams() {
  return talkList.map((talk) => ({
    id: talk.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const talk = talkList.find((talk) => talk.id === id);
  if (!talk) {
    throw new Error("Talk not found");
  }
  return {
    twitter: {
      title: talk.title,
      images: [
        {
          url: `/ogp/talks/${talk.id}.png`,
        },
      ],
    },
    openGraph: {
      title: talk.title,
      images: [
        {
          url: `/ogp/talks/${talk.id}.png`,
        },
      ],
    },
  };
}

export default async function TalkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const talk = talkList.find((talk) => talk.id === id);
  if (!talk) {
    throw new Error("Talk not found");
  }

  return <main>talk</main>;
}
