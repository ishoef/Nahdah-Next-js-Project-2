import withPWA from "next-pwa";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  webpack(config, { webpack }) {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
  // Remove experimental.turbo or set it correctly
  experimental: {
    // Option 1: Omit turbo entirely to use Webpack (recommended for next-pwa)
    // turbo: false, // Remove this line
  },
};

const pwaConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

export default {
  ...nextConfig,
  ...pwaConfig,
};
