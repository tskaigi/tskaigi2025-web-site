import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 flex items-center justify-between shadow-[0px_3px_16px_0px_rgba(0,143,238,0.05)] opacity-90 p-4 md:px-6">
      <Link href="/" className="text-blue-600 font-bold text-xl">
        <Image
          src="/logo.svg"
          alt="TSKaigi"
          width={98}
          height={36}
          className="w-[78px] h-[28px] md:w-[98px] md:h-[36px]"
        />
      </Link>
      <Link href="/sponsors" className="text-blue-purple-500 font-bold text-14">
        スポンサー
      </Link>
    </header>
  );
}
