module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/common.scss";'
      }
    }
  }
}
