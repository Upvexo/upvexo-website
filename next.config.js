/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/upvexo-website' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/upvexo-website/' : '',
    reactStrictMode: true,
  }
  
  module.exports = nextConfig