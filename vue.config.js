const dev = process.env.VUE_APP_DEV

let proxy = {};
if (dev == 'mock') {
  // 非mock数据，跑代理
  proxy = {
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js'),
  }
} else {
  // dev
  const api = process.env.VUE_APP_API_URL
  proxy = {
    proxy: {
      '/api': {
        target: api,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}

module.exports = {
  productionSourceMap: false,
  devServer: proxy,
}