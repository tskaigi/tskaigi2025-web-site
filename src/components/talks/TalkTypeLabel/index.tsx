import { TALK_TYPE, type TalkType } from "@/constants/talkList";

type Props = {
  talkType: TalkType;
};

export function TalkTypeLabel({ talkType }: Props) {
  const colors = {
    KEYNOTE: "border-green-500 text-green-500",
    SESSION: "border-blue-light-500 text-blue-light-500",
    LT: "border-orange-500 text-orange-700",
    SPONSOR_LT: "border-yellow-600 text-yellow-600",
  };

  return (
    <div
      className={`inline-block px-3 py-1 text-sm border rounded-md ${colors[talkType]}`}
    >
      {TALK_TYPE[talkType].name}
    </div>
  );
}
