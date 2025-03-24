export const EVENT_DATE = {
  DAY1: "2025-03-23",
  DAY2: "2025-03-24",
} as const;
export type EventDate = keyof typeof EVENT_DATE;

export const TRACK = {
  TRACK1: {
    name: "トグルルーム",
  },
  TRACK2: {
    name: "アセンドトラック",
  },
  TRACK3: {
    name: "レジレジーズトラック",
  },
} as const;
export type Track = keyof typeof TRACK;

const TalkType = {
  SESSION: {
    name: "セッション",
  },
  KEYNOTE: {
    name: "基調講演",
  },
  LT: {
    name: "LT",
  },
  SPONSOR_LT: {
    name: "スポンサーLT",
  },
};
type TalkType = keyof typeof TalkType;

type Talk = {
  id: string;
  eventDate: EventDate;
  track: Track;
  talkType: TalkType;
  title: string;
  speakerName: string;
};
