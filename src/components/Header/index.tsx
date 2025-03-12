"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links: {
  href: string;
  label: string;
}[] = [
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
    <header className="fixed top-0 w-full bg-white bg-opacity-90 z-50 flex items-center justify-between shadow-[0px_3px_16px_0px_rgba(0,143,238,0.05)] p-4 md:px-6">
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
      <button
        type="button"
        className="md:hidden"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="メニューを開く"
      >
        <Menu size={24} />
      </button>

      <DrawerMenu isOpen={isDrawerOpen} close={() => setIsDrawerOpen(false)} />
    </header>
  );
}

const DrawerMenu = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: モバイル用のため */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:hidden bg-black-600 transition-opacity duration-300 z-10 m-0 p-0 ${
          isOpen ? "opacity-80" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-label="モバイルメニュー"
      />
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: モバイル用のため */}
      <div
        className={`absolute top-0 right-0 h-screen w-4/5 max-w-xs md:hidden bg-white shadow-lg transform transition-transform duration-300 z-20 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={close}
          aria-label="メニューを閉じる"
        >
          <X size={24} />
        </button>

        <nav className="pt-16 px-6">
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
      </div>
    </>
  );
};
