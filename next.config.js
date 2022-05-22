/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MY_ENV_VAR: process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
    MY_API_PREFIX: process.env.NODE_ENV === 'production' ? "" : "http://localhost:3000"
}
}

module.exports = nextConfig
