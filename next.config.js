/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? '/bahana' : '',
}

module.exports = nextConfig
