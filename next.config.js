/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   crossOrigin: 'anonymous'
// }

// module.exports = nextConfig

const repo = 'bahana'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}

