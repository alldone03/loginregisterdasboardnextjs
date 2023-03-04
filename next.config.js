/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  async redirect() {
    return [{
      source: '/',
      destination: '/login',
      permanent: false,
    }
    ]
  }
}
