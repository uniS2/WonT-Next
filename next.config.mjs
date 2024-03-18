/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: 'http://apis.data.go.kr/B551011/KorService1/:path*',
        destination: `https://apis.data.go.kr/B551011/KorService1/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'tong.visitkorea.or.kr',
        port: '',
        pathname: '/cms/resource/**',
      },
    ],
  },
}

export default nextConfig;
