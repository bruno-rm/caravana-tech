import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ni7jt3vm3a.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
