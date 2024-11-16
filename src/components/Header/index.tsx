"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-background">
      <div className="flex h-14 items-center justify-end px-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
