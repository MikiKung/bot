const isProd = process.env.NODE_ENV === "production";
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
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
