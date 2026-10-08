import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The screenshots are 2000px-wide sources; Next's default list goes up to
    // 3840, which upscales them for high-DPI screens and balloons decoded
    // size for no visible gain. Cap at the source's native width.
    deviceSizes: [640, 828, 1080, 1280, 1600, 2000],
  },
  async redirects() {
    return [{ source: "/contact", destination: "/request-demo", permanent: true }];
  },
};

export default nextConfig;
