/** @type {import('next').NextConfig} */
const nextConfig = {
  targert: "static",
  ssr: false,
  generate: {
    fallback: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
};

module.exports = nextConfig;
