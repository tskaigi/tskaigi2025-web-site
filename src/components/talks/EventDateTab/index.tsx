import type { EventDate } from "@/constants/talkList";
import { EVENT_DATE } from "@/constants/talkList";
import { cn } from "@/lib/utils";

type Props = {
  currentDate: EventDate;
  onTabChange: (date: EventDate) => void;
};

export function EventDateTab({ currentDate, onTabChange }: Props) {
  return (
    <div className="w-full flex justify-center">
      <div className="inline-flex rounded-md overflow-hidden">
        {(Object.keys(EVENT_DATE) as EventDate[]).map((date) => {
          const isActive = date === currentDate;
          const dateText = date === "DAY1" ? "Day 1  5/23" : "Day 2  5/24";

          return (
            <button
              type="button"
              key={date}
              onClick={() => onTabChange(date)}
              className={cn(
                "px-6 py-2 text-sm font-medium transition-colors",
                isActive
                  ? date === "DAY2"
                    ? "bg-pink-500 text-white"
                    : "bg-blue-light-500 text-white"
                  : "bg-black-300 text-white",
              )}
            >
              {dateText}
            </button>
          );
        })}
      </div>
    </div>
  );
}
