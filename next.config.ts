import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/tskaigi2025-web-site" // 本番環境（GitHub Pages）用
      : "", // 開発環境用
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
