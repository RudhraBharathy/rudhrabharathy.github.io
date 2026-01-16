/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_DEPLOY_ENV === "prod";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  ...(isProd && {
    output: "export",
    distDir: "dist",
  }),
  images: {
    ...(isProd && { unoptimized: true }),
  },
  devIndicators: false,
};

export default nextConfig;
