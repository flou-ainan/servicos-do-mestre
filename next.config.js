/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/blog",
        destination:"https://mestreflou.blogspot.com/",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
