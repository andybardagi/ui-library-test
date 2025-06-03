import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["@your-org/ui-library"], // Add your UI library package name here [37]
  //... other Next.js configurations
};

export default nextConfig;
