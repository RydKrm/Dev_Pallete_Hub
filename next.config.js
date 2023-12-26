/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo2.wpopal.com',
        port: '',
        pathname: '/unity/wp-content/uploads/2019/08/rev_sliderhome1.jpg',
      },
    ],
  },
  experimental:{
    serverActions:true,
    mdxRs:true,
    serverComponentsExternalPackages: ['mongoose']
  }
}

module.exports = nextConfig
