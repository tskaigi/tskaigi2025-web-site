import { Button } from "@/components/ui/button";
import { TRACK, type Track } from "@/constants/talkList";
import { Copy } from "lucide-react";
import { useState } from "react";

type Props = {
  track: Track;
};

export function TrackHeader({ track }: Props) {
  const [copySuccess, setCopySuccess] = useState(false);

  // ハッシュタグをクリップボードにコピーする
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("クリップボードへのコピーに失敗しました", err);
    }
  };

  return (
    <div className={`bg-[${TRACK[track].color}] p-2 text-center`}>
      <span
        className={`font-bold ${track === "TRACK1" ? "text-black" : "text-white"}`}
      >
        {TRACK[track].name}
      </span>
      <div className="hidden md:flex justify-center mt-2">
        <Button
          onClick={() => copyToClipboard(TRACK[track].tag)}
          className="rounded-full bg-white text-black hover:bg-gray-100 px-4 py-1 text-sm font-medium h-auto flex items-center gap-2"
        >
          {copySuccess ? (
            <span>コピーしました！</span>
          ) : (
            <>
              <span>{TRACK[track].tag}</span>
              <Copy className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
