/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: ".",
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
