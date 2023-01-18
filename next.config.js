/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
  //       source: '/api/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
