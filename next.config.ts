import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "", // 開発環境用
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
