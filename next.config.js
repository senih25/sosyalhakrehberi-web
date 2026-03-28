/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // Production güvenli ayarlar
  reactStrictMode: true,

  // Railway / container uyumluluğu
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

module.exports = nextConfig;