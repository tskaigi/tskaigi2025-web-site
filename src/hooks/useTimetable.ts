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

  const getCurrentSessionId = useCallback(() => {
    const now = new Date();
    for (const session of sessionTimeTable) {
      if (now >= session.start && now < session.end) {
        return session.id;
      }
    }
    return null;
  }, [sessionTimeTable]);

  const scrollToCurrentSession = useCallback(() => {
    const currentId = getCurrentSessionId();
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
      const currentId = getCurrentSessionId();
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

  return {
    showScrollButton,
    scrollToCurrentSession,
  };
};
