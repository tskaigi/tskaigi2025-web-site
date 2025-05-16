import { Day1TimeTable } from "@/components/talks/Day1TimeTable";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

const toBeInViewport = (element: Element) => {
  const { top, bottom, left, right } = element.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  expect(
    top >= 0 && bottom <= innerHeight && left >= 0 && right <= innerWidth,
  ).toBeTruthy();
};

test("カンファレンスの開催期間中だけスクロールボタンが表示される", async () => {
  const screen = render(<Day1TimeTable />);

  // 開始前
  vi.setSystemTime(new Date("2025-05-23T10:49:59"));
  await expect
    .element(
      screen.getByRole("button", { name: "現在のセッションにスクロールする" }),
    )
    .not.toBeInTheDocument();

  // オープニング開始
  vi.setSystemTime(new Date("2025-05-23T10:50:00"));
  screen.rerender(<Day1TimeTable />);
  expect(
    screen.getByRole("button", { name: "現在のセッションにスクロールする" }),
  ).toBeInTheDocument();

  // 最終セッション終了
  vi.setSystemTime(new Date("2025-05-23T17:39:59"));
  screen.rerender(<Day1TimeTable />);
  expect(
    screen.getByRole("button", { name: "現在のセッションにスクロールする" }),
  ).toBeInTheDocument();

  // 終了後
  vi.setSystemTime(new Date("2025-05-23T17:40:00"));
  screen.rerender(<Day1TimeTable />);
  await expect
    .element(
      screen.getByRole("button", { name: "現在のセッションにスクロールする" }),
    )
    .not.toBeInTheDocument();
});

test("スクロールボタンをクリックしたときに現在のセッションにスクロールする", async () => {
  vi.setSystemTime(new Date("2025-05-23T13:40:00"));
  const screen = render(<Day1TimeTable />);
  const scrollButton = screen.getByRole("button", {
    name: "現在のセッションにスクロールする",
  });
  await scrollButton.click();
  const header01 = screen.getByText("13:40 ~ 14:10");
  await vi.waitFor(() => {
    toBeInViewport(header01.element());
  });

  vi.setSystemTime(new Date("2025-05-23T17:39:59"));
  screen.rerender(<Day1TimeTable />);
  await scrollButton.click();
  const header02 = screen.getByText("17:10 ~ 17:40");
  await vi.waitFor(() => {
    toBeInViewport(header02.element());
  });

  vi.setSystemTime(new Date("2025-05-23T10:50:00"));
  screen.rerender(<Day1TimeTable />);
  await scrollButton.click();
  const header03 = screen.getByText("10:50 ~ 11:00");
  await vi.waitFor(() => {
    toBeInViewport(header03.element());
  });
});
