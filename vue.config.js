module.exports = {
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
}