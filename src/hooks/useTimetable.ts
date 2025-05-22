import { useCallback, useEffect, useState } from "react";

const isInViewport = (el: HTMLElement | null) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
};

function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (this: unknown, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export const useTimetable = ({
  sessionTimeTable,
  sessionElements,
}: {
  sessionTimeTable: {
    id: string;
    start: Date;
    end: Date;
  }[];
  sessionElements: { [key: string]: HTMLDivElement | null };
}) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const isConferencePeriod = useCallback(() => {
    const now = new Date();
    const start = sessionTimeTable[0].start;
    const end = sessionTimeTable[sessionTimeTable.length - 1].end;
    return now >= start && now < end;
  }, [sessionTimeTable]);

  const getCurrentSessionId = useCallback(
    (now: Date) => {
      for (const session of sessionTimeTable) {
        if (now >= session.start && now < session.end) {
          return session.id;
        }
      }
      return null;
    },
    [sessionTimeTable],
  );

  const scrollToCurrentSession = useCallback(() => {
    const now = new Date();
    const currentId = getCurrentSessionId(now);
    if (currentId && sessionElements[currentId]) {
      sessionElements[currentId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [getCurrentSessionId, sessionElements]);

  useEffect(() => {
    const checkButtonVisibility = () => {
      if (!isConferencePeriod()) {
        setShowScrollButton(false);
        return;
      }
      const now = new Date();
      const currentId = getCurrentSessionId(now);
      const currentEl = currentId ? sessionElements[currentId] : null;
      setShowScrollButton(currentEl ? !isInViewport(currentEl) : false);
    };

    // NOTE: スクロールやリサイズが終わってからチェックする
    const debouncedCheck = debounce(checkButtonVisibility, 100);

    checkButtonVisibility();
    window.addEventListener("scroll", debouncedCheck);
    window.addEventListener("resize", debouncedCheck);

    return () => {
      window.removeEventListener("scroll", debouncedCheck);
      window.removeEventListener("resize", debouncedCheck);
    };
  }, [sessionElements, getCurrentSessionId, isConferencePeriod]);

  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const now = new Date();
    const isConferenceDay =
      now.getFullYear() === 2025 &&
      now.getMonth() === 4 &&
      (now.getDate() === 23 || now.getDate() === 24);
    if (!isConferenceDay) return;

    setCurrentTime(new Date());
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isSessionActive = (sessionId: string) => {
    const currentId = getCurrentSessionId(currentTime);
    return currentId === sessionId;
  };

  return {
    showScrollButton,
    scrollToCurrentSession,
    isSessionActive,
  };
};
