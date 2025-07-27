/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    distDir: "dist",
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
