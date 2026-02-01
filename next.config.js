/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/d_swastik_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/d_swastik_website' : '',
};

module.exports = nextConfig;
