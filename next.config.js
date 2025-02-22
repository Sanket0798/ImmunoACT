// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// }

// module.exports = nextConfig 



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'immunoact.vercel.app',  // replace with your actual domain
        port: '',
        pathname: '/**',
      },
      // Add more patterns if needed
    ],
  },
}

module.exports = nextConfig 