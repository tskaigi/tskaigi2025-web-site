import { useCallback, useEffect, useState } from "react";

const isInViewport = (el: HTMLElement | null) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
};

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

    checkButtonVisibility();
    window.addEventListener("scroll", checkButtonVisibility);
    window.addEventListener("resize", checkButtonVisibility);

    return () => {
      window.removeEventListener("scroll", checkButtonVisibility);
      window.removeEventListener("resize", checkButtonVisibility);
    };
  }, [sessionElements, getCurrentSessionId, isConferencePeriod]);

  return {
    showScrollButton,
    scrollToCurrentSession,
  };
};
