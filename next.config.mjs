// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // this is a must for <Image /> with static export
  },
};

export default nextConfig;
