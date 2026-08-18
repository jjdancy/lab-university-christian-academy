/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/electives",
        destination: "/academics#electives",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

