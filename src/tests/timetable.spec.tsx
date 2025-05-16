import { Day1TimeTable } from "@/components/talks/Day1TimeTable";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
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

test("カンファレンスの開催期間中だけスクロールボタンが表示される", async () => {
  const screen = render(<Day1TimeTable />);

  // 開始前
  vi.setSystemTime(new Date("2025-05-23T10:49:59"));
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
  await vi.waitFor(() => {
    expect(isInViewport(scrollButton.element())).toBeFalsy();
  });

  // 現在のセッションが非表示になってスクロールボタンが現れる
  window.scrollTo({
    top: 200,
    behavior: "smooth",
  });
  await vi.waitFor(() => {
    expect(isInViewport(scrollButton.element())).toBeTruthy();
  });
});
