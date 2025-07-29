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
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent.*.cdninstagram.com",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
