import { TALK_TYPE, type TalkType } from "@/constants/talkList";

type Props = {
  talkType: TalkType;
};

export function TalkTypeLabel({ talkType }: Props) {
  const colors = {
    INVITATION: "border-green-500 text-green-500",
    ORGANIZER: "border-green-500 text-green-500",
    SESSION: "border-blue-light-500 text-blue-light-500",
    LT: "border-orange-600 text-orange-600",
    SPONSOR_LT: "border-pink-500 text-pink-500",
    EVENT: "border-red-500 text-red-500",
  };

  return (
    <div
      className={`inline-block px-3 py-1 text-sm border rounded-md ${colors[talkType]} font-bold`}
    >
      {TALK_TYPE[talkType].name}
    </div>
  );
}
