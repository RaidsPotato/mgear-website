import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/contact", destination: "/request-demo", permanent: true }];
  },
};

export default nextConfig;
