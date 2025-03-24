import { TRACK } from "@/constants/talkList";
import type { Track } from "@/constants/talkList";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  visibleTracks: {
    [key in Track]: boolean;
  };
  onToggleTrack: (trackId: Track) => void;
};

export function TrackToggle({ visibleTracks, onToggleTrack }: Props) {
  return (
    <div className="w-full flex justify-center">
      <div className="inline-flex rounded-md overflow-hidden">
        {(Object.keys(TRACK) as Track[]).map((trackId) => {
          const isVisible = visibleTracks[trackId];
          const displayTrackId =
            trackId === "TRACK1"
              ? "track1"
              : trackId === "TRACK2"
                ? "track2"
                : "track3";

          return (
            <button
              type="button"
              key={trackId}
              onClick={() => onToggleTrack(trackId)}
              className={cn(
                "px-6 py-1 text-sm font-medium transition-colors flex items-center gap-2",
                isVisible
                  ? trackId === "TRACK1"
                    ? "bg-[#0CF8C0] text-black"
                    : trackId === "TRACK2"
                      ? "bg-[#005FAA] text-white"
                      : "bg-[#000000] text-white"
                  : "bg-black-300 text-white",
              )}
            >
              {displayTrackId}
              {isVisible ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
