/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_DEPLOY_ENV === "prod";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  ...(isProd && {
    output: "export",
    distDir: "dist",
  }),
  images: {
    ...(isProd && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
