/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
