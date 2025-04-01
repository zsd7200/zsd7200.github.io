import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ouput: "export",
  basePath: "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
