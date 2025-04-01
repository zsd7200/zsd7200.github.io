import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ouput: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
