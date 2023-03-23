/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.autotechiq.com',
        port: '',
        pathname: '/symptom/**'
      }
    ]
  }
};

module.exports = nextConfig;
