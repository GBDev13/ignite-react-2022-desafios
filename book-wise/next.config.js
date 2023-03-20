/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3-alpha-sig.figma.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig
