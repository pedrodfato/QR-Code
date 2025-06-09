import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/<qr-code>',
  trailingSlash: true,
};

export default nextConfig;
