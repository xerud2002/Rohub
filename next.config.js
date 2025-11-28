const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['rohub.co.uk', 's.w.org', 'res.cloudinary.com'],
  },
}
