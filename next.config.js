   
const nextConfig = { 
    env: {
        SPACE: '2qb7vxf9p1zn',
        TOKEN:'_QCROCfi_yg7MfuJaJIsaVRDvFco2puZlTTckt7Yj_U',
        ENTRY_ID:'2UG3riZoyCJYthaOIcRYSE'
    },
    images: {
      domains: ['images.ctfassets.net'],
      },
      async rewrites() {
        return [
          {
            source: '/posts/:slug',
            destination: '/posts/[slug]',
          },
        ];
      },
};

module.exports = nextConfig