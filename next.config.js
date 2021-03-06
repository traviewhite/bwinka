const withImages = require('next-images')
const path = require('path')

module.exports = {
  target: "serverless",
  distDir: 'build',
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /*
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  */
  withImages() {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};