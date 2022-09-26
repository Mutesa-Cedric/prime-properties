/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    FIREBASE_API_KEY:process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN:process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_APP_ID:process.env.FIREBASE_APP_ID,
  }
}
