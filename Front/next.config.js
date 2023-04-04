/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  image: {
    domains: ["images.unsplash.com"],
  },
};
