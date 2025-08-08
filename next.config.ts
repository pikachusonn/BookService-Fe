import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com', // Thêm cả hostname này cho ảnh mẫu
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Thêm cả hostname này cho avatar
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com', // Thêm cả hostname này cho ảnh mẫu
      },
    ],
  },
};

export default nextConfig;
