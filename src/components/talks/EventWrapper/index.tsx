import type React from "react";

type Props = {
  children: React.ReactNode;
  color?: "white" | "gray";
};

export function EventWrapper({ children, color = "white" }: Props) {
  return (
    <div
      className={`${color === "gray" ? "bg-gray-200" : "bg-white"} p-5 h-32 flex items-center justify-center text-black-700`}
    >
      {children}
    </div>
  );
}
