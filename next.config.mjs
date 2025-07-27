/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  ...(process.env.NODE_DEPLOY_ENV === "prod" && {
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    },
  }),
  images: {
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
