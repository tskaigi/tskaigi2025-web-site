import { TRACK } from "@/constants/talkList";
import type { Track } from "@/constants/talkList";
import { cn } from "@/lib/utils";

type Props = {
  visibleTracks: {
    [key in Track]: boolean;
  };
  onToggleTrack: (trackId: Track) => void;
};

export function TrackToggle({ visibleTracks, onToggleTrack }: Props) {
  return (
    <div className="w-full flex items-center justify-center gap-3 md:gap-4">
      <p className="text-sm font-bold">絞り込み:</p>
      <div className="inline-flex rounded-md overflow-hidden">
        {(Object.keys(TRACK) as Track[]).map((trackId) => {
          const isVisible = visibleTracks[trackId];

          return (
            <button
              type="button"
              key={trackId}
              onClick={() => {
                if (
                  isVisible &&
                  Object.values(visibleTracks).filter(Boolean).length <= 1
                ) {
                  return;
                }
                onToggleTrack(trackId);
              }}
              className={cn(
                "px-4 md:px-6 py-1 text-sm font-medium transition-colors flex items-center justify-center",
                isVisible
                  ? `bg-[${TRACK[trackId].color}] ${TRACK[trackId].textColor}`
                  : "bg-black-300 text-white",
              )}
            >
              <span className={"hidden md:inline ld:inline"}>
                {TRACK[trackId].name}
              </span>
              <span className={"md:hidden lg:hidden"}>
                {TRACK[trackId].shortName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
