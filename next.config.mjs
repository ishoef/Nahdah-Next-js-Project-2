import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
