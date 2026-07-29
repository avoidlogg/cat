import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/heroicbp',
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://163.123.238.146:5349/api/:path*'
      }
    ]
  }
}

export default nextConfig
