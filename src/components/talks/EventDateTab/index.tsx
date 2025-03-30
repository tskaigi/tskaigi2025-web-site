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
      <div className="inline-flex rounded-lg overflow-hidden">
        {(Object.keys(EVENT_DATE) as EventDate[]).map((date) => {
          const isActive = date === currentDate;
          const dateText = date === "DAY1" ? "Day 1  5/23" : "Day 2  5/24";

          return (
            <button
              type="button"
              key={date}
              onClick={() => onTabChange(date)}
              className={cn(
                "px-6 py-2 text-base font-medium",
                isActive
                  ? date === "DAY2"
                    ? "bg-pink-500 text-white"
                    : "bg-blue-light-500 text-white"
                  : date === "DAY2"
                    ? "bg-white text-pink-500"
                    : "bg-white text-blue-light-500",
                date === "DAY1"
                  ? "border-y border-l border-blue-light-500 rounded-l-lg"
                  : "border-y border-r border-pink-500 rounded-r-lg",
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
