import { Day1TimeTable } from "@/components/talks/Day1TimeTable";
import { Day2TimeTable } from "@/components/talks/Day2TimeTable";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

const isInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
};

describe("1日目のタイムテーブル", () => {
  test("カンファレンスの開催期間中だけスクロールボタンが表示される", async () => {
    // 開始前
    vi.setSystemTime(new Date("2025-05-23T10:49:59"));
    const screen = render(<Day1TimeTable />);
    const scrollButton = screen
      .getByText("現在のセッションにスクロールする")
      .element();
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeFalsy();
    });

    // 開催中
    vi.setSystemTime(new Date("2025-05-23T12:50:00"));
    screen.rerender(<Day1TimeTable />);
    // 日付の判定を走らせるため少しスクロール
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeTruthy();
    });

    // 最終セッション終了
    vi.setSystemTime(new Date("2025-05-23T17:39:59"));
    screen.rerender(<Day1TimeTable />);
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeTruthy();
    });

    // 終了後
    vi.setSystemTime(new Date("2025-05-23T17:40:00"));
    screen.rerender(<Day1TimeTable />);
    // 日付の判定を走らせるため少しスクロール
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeFalsy();
    });
  });

  test("スクロールボタンをクリックしたときに現在のセッションにスクロールする", async () => {
    vi.setSystemTime(new Date("2025-05-23T13:40:00"));
    const screen = render(<Day1TimeTable />);
    const scrollButton = screen.getByText("現在のセッションにスクロールする");
    await scrollButton.click();
    const header01 = screen.getByText("13:40 ~ 14:10");
    await vi.waitFor(() => {
      expect(isInViewport(header01.element())).toBeTruthy();
    });

    vi.setSystemTime(new Date("2025-05-23T17:39:59"));
    screen.rerender(<Day1TimeTable />);
    await scrollButton.click();
    const header02 = screen.getByText("17:10 ~ 17:40");
    await vi.waitFor(() => {
      expect(isInViewport(header02.element())).toBeTruthy();
    });

    vi.setSystemTime(new Date("2025-05-23T10:50:00"));
    screen.rerender(<Day1TimeTable />);
    await scrollButton.click();
    const header03 = screen.getByText("10:50 ~ 11:00");
    await vi.waitFor(() => {
      expect(isInViewport(header03.element())).toBeTruthy();
    });
  });

  test("現在開催中のセッションを表示している際はスクロールボタンが非表示になる", async () => {
    vi.setSystemTime(new Date("2025-05-23T13:40:00"));
    const screen = render(<Day1TimeTable />);
    const scrollButton = screen.getByText("現在のセッションにスクロールする");
    await scrollButton.click();

    // 現在のセッションが表示されてスクロールボタンが隠れる
    await vi.waitFor(
      () => {
        expect(isInViewport(scrollButton.element())).toBeFalsy();
      },
      { timeout: 2000 },
    );

    // 現在のセッションが非表示になってスクロールボタンが現れる
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton.element())).toBeTruthy();
    });
  });

  test("現在開催中のセッションのUIがアクティブになる", async () => {
    vi.setSystemTime(new Date("2025-05-23T13:39:59"));
    const screen = render(<Day1TimeTable />);
    const timeSlot = screen.getByText("13:40 ~ 14:10");
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-yellow-700");
    });

    vi.setSystemTime(new Date("2025-05-23T13:40:00"));
    screen.rerender(<Day1TimeTable />);
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-orange-500");
    });

    vi.setSystemTime(new Date("2025-05-23T14:09:59"));
    screen.rerender(<Day1TimeTable />);
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-orange-500");
    });

    vi.setSystemTime(new Date("2025-05-23T14:10:00"));
    screen.rerender(<Day1TimeTable />);
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-yellow-700");
    });
    const nextTimeSlot = screen.getByText("14:10 ~ 14:20");
    await vi.waitFor(() => {
      expect(nextTimeSlot.element()).toHaveClass("text-orange-500");
    });
  });
});

describe("2日目のタイムテーブル", () => {
  test("カンファレンスの開催期間中だけスクロールボタンが表示される", async () => {
    // 開始前
    vi.setSystemTime(new Date("2025-05-24T09:49:59"));
    const screen = render(<Day2TimeTable />);
    const scrollButton = screen
      .getByText("現在のセッションにスクロールする")
      .element();
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeFalsy();
    });

    // 開催中
    vi.setSystemTime(new Date("2025-05-24T13:30:00"));
    screen.rerender(<Day2TimeTable />);
    // 日付の判定を走らせるため少しスクロール
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeTruthy();
    });

    // 最終セッション終了
    vi.setSystemTime(new Date("2025-05-24T20:09:59"));
    screen.rerender(<Day2TimeTable />);
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeTruthy();
    });

    // 終了後
    vi.setSystemTime(new Date("2025-05-24T20:10:00"));
    screen.rerender(<Day2TimeTable />);
    // 日付の判定を走らせるため少しスクロール
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton)).toBeFalsy();
    });
  });

  test("スクロールボタンをクリックしたときに現在のセッションにスクロールする", async () => {
    vi.setSystemTime(new Date("2025-05-24T13:40:00"));
    const screen = render(<Day2TimeTable />);
    const scrollButton = screen.getByText("現在のセッションにスクロールする");
    await scrollButton.click();
    const header01 = screen.getByText("13:20 ~ 13:50");
    await vi.waitFor(() => {
      expect(isInViewport(header01.element())).toBeTruthy();
    });

    vi.setSystemTime(new Date("2025-05-24T17:59:59"));
    screen.rerender(<Day2TimeTable />);
    await scrollButton.click();
    const header02 = screen.getByText("17:00 ~ 18:00");
    await vi.waitFor(() => {
      expect(isInViewport(header02.element())).toBeTruthy();
    });

    vi.setSystemTime(new Date("2025-05-24T09:50:00"));
    screen.rerender(<Day2TimeTable />);
    await scrollButton.click();
    const header03 = screen.getByText("9:50 ~ 10:00");
    await vi.waitFor(() => {
      expect(isInViewport(header03.element())).toBeTruthy();
    });
  });

  test("現在開催中のセッションを表示している際はスクロールボタンが非表示になる", async () => {
    vi.setSystemTime(new Date("2025-05-24T13:40:00"));
    const screen = render(<Day2TimeTable />);
    const scrollButton = screen.getByText("現在のセッションにスクロールする");
    await scrollButton.click();

    // 現在のセッションが表示されてスクロールボタンが隠れる
    await vi.waitFor(
      () => {
        expect(isInViewport(scrollButton.element())).toBeFalsy();
      },
      { timeout: 2000 },
    );

    // 現在のセッションが非表示になってスクロールボタンが現れる
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
    await vi.waitFor(() => {
      expect(isInViewport(scrollButton.element())).toBeTruthy();
    });
  });

  test("現在開催中のセッションのUIがアクティブになる", async () => {
    vi.setSystemTime(new Date("2025-05-24T09:59:59"));
    const screen = render(<Day2TimeTable />);
    const timeSlot = screen.getByText("10:00 ~ 10:40");
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-yellow-700");
    });

    vi.setSystemTime(new Date("2025-05-24T10:00:00"));
    screen.rerender(<Day2TimeTable />);
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-orange-500");
    });

    vi.setSystemTime(new Date("2025-05-24T10:39:59"));
    screen.rerender(<Day2TimeTable />);
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-orange-500");
    });

    vi.setSystemTime(new Date("2025-05-24T10:40:00"));
    screen.rerender(<Day2TimeTable />);
    await vi.waitFor(() => {
      expect(timeSlot.element()).toHaveClass("text-yellow-700");
    });
    const nextTimeSlot = screen.getByText("10:40 ~ 10:50");
    await vi.waitFor(() => {
      expect(nextTimeSlot.element()).toHaveClass("text-orange-500");
    });
  });
});
