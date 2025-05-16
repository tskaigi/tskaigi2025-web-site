import { Day1TimeTable } from "@/components/talks/Day1TimeTable";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

test("renders name", async () => {
  const { getByText } = render(<Day1TimeTable />);

  expect(getByText("10:00")).toBeInTheDocument();
});
