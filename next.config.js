/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_API_TOKEN:process.env.SANITY_API_TOKEN
  },
  images: {
    domains: ['cdn.sanity.io','lh3.googleusercontent.com']
  }
}
