/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pexels.com'],
  },

  experimental: {
    appDir: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
