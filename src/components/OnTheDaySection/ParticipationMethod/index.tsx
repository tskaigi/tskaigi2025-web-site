import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

function ParticipationMethodCard({
  title,
  description,
  participationButton,
  participationType,
}: {
  /** タイトル */
  title: string;
  /** 説明 */
  description: ReactNode;
  /** 参加ボタン */
  participationButton: {
    /** ボタンのテキスト */
    text: string;
    /** ボタンのリンク */
    href: string;
  };
  /** 参加形式 */
  participationType: "local" | "online";
}) {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center py-5 px-8 gap-4 rounded-lg",
        participationType === "local" && "bg-yellow-200",
        participationType === "online" && "bg-blue-light-300",
      )}
    >
      <h3 className="text-22 font-bold max-md:text-xl">{title}</h3>
      <p className="text-lg max-md:text-base leading-[1.8]">{description}</p>
      <a
        className={cn(
          "w-fit py-3 px-6 rounded-full text-white font-bold flex items-center gap-2 mt-auto max-md:text-[18px] text-[22px]",
          participationType === "local" && "bg-orange-500",
          participationType === "online" && "bg-blue-purple-500",
        )}
        href={participationButton.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="leading-[1.5] max-md:leading-[1.8]">
          {participationButton.text}
        </span>
        <ArrowRight />
      </a>
    </div>
  );
}

/**
 * @description 参加方法の案内
 */
export function ParticipationMethod() {
  return (
    <div className="my-8 flex gap-6 max-md:flex-col">
      <ParticipationMethodCard
        title="現地参加の方"
        description={
          <>
            会場到着後、受付で入場用QRコードの提示が必要になります。
            <br />
            EventHubへのログイン後、入場用QRコードを表示して列に待機してください。
          </>
        }
        participationButton={{
          text: "参加QRを表示する",
          href: "https://peatix.com/event/4342134/view",
        }}
        participationType="local"
      />
      <ParticipationMethodCard
        title="オンライン視聴の方"
        description={
          <>
            オンライン視聴には無料の参加登録が必要です。下記リンクからお進みください。
            <br />
            オンラインは
            <span className="text-xl font-bold text-orange-600 leading-[150%]">
              当日参加
            </span>
            も受け付けていますので、お気軽にご参加ください。
          </>
        }
        participationButton={{
          text: "視聴URLを表示する",
          href: "https://peatix.com/event/4342134/view",
        }}
        participationType="online"
      />
    </div>
  );
}
