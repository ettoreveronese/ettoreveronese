/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "": undefined,
  output: "export",
  reactStrictMode: true,
   experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
