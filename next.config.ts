import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/your-repo-name" // 本番環境（GitHub Pages）用
      : "", // 開発環境用
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
