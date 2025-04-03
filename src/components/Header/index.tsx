"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/talks",
    label: "タイムテーブル",
  },
  {
    href: "/sponsors",
    label: "スポンサー",
  },
  {
    href: "/code-of-conduct",
    label: "行動規範",
  },
];

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white opacity-90 z-50 flex items-center justify-between shadow-[0px_3px_16px_0px_rgba(0,143,238,0.05)] p-4 md:px-6">
      <Link href="/" className="text-blue-600 font-bold text-xl">
        <Image
          src="/logo.svg"
          alt="TSKaigi"
          width={98}
          height={36}
          className="w-[78px] h-[28px] md:w-[98px] md:h-[36px]"
        />
      </Link>

      {/* PC 用ナビゲーション */}
      <nav className="hidden md:flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-blue-purple-500 font-bold text-14"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* モバイル用ナビゲーション */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <SheetHeader className="sr-only">
            <SheetTitle>メニュー</SheetTitle>
            <SheetDescription>TSKaigi のメニュー</SheetDescription>
          </SheetHeader>
          <nav className="pt-12 px-4">
            <ul className="space-y-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-blue-purple-500 font-bold text-14 block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
