import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: 'anonymous',
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
