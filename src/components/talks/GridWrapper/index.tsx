import type React from "react";

type Props = {
  children: React.ReactNode;
};

export function GridWrapper({ children }: Props) {
  return (
    <div className="grid gap-1 pt-4 md:pt-2 grid-cols-[1fr] md:grid-cols-[auto_minmax(210px,1fr)_minmax(210px,1fr)_minmax(210px,1fr)]">
      {children}
    </div>
  );
}
