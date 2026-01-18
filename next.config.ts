import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Transpile the Prosophia package
  transpilePackages: ["@prosophia/lab-classic"],
};

export default nextConfig;
