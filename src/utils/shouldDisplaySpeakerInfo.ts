import type { TalkType } from "@/constants/talkList";

export const shouldDisplaySpeakerInfo = (talkType: TalkType) => {
  return talkType !== "EVENT";
};
