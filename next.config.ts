import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_PATH || "/tskaigi2025-web-site" // PR環境または本番環境のパスを使用
      : "", // 開発環境用
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
