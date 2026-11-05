import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps the cake photos as crisp as the design's originals.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
