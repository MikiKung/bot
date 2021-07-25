const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
  },
}
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
