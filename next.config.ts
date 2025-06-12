import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'assets.tina.io'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default config;
