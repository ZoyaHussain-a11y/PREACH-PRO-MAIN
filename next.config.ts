/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.prod.website-files.com'],
    // Or use remotePatterns for more control (recommended for newer Next.js versions)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/687a22774248f07556bfb7de/**',
      },
    ],
  },
};

module.exports = nextConfig;