/** @type {import('next').NextConfig} */
 
module.exports = {
    experimental: {
      serverActions: {
        bodySizeLimit: '3mb',
      },
    },
  }


  module.exports = {
  env: {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
  },
};