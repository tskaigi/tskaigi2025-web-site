"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white text-sm">
      <div className="px-10 py-16 flex flex-col gap-x-16 gap-y-10 max-w-5xl mx-auto md:flex-row md:p-16 lg:gap-x-24">
        <div className="flex flex-col gap-6 lg:w-72">
          <Image src="/logo-white.svg" alt="TSKaigi" width={126} height={41} />
          <p>一般社団法人 TSKaigi Association</p>
        </div>

        <ul className="flex flex-col gap-2.5 lg:w-72">
          <li>スポンサー一覧</li>
        </ul>

        <div className="flex flex-col gap-3 lg:w-72">
          <p className="font-bold">公式アカウント</p>
          <ul className="flex flex-col gap-2.5 pl-3">
            <li>公式X</li>
            <li>Blog</li>
            <li>公式Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
