const dev = process.env.VUE_APP_DEV;

const path = require("path");
const fs = require("fs");
const styleVariables = require("./src/style/variables.js");
let proxy = {};
if (dev == "mock") {
  // 非mock数据，跑代理
  proxy = {
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js")
  };
} else {
  // dev
  const api = process.env.VUE_APP_API_URL;
  proxy = {
    proxy: {
      "/api": {
        target: api,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  };
}

module.exports = {
  productionSourceMap: false,
  devServer: proxy,
  // global css
  css: {
    loaderOptions: {
      scss: {
        prependData: function() {
          const preValue = Object.keys(styleVariables)
            .map(k => `\$${k}:${styleVariables[k]};`)
            .join("\r\n");
          const scssData = readSassOrScss(
            path.resolve(__dirname, "./src/style/global.scss")
          );
          return preValue + scssData;
        }
      }
    }
  }
};

function readSassOrScss(url) {
  let res = [];
  try {
    const sassStr = fs.readFileSync(url, "utf-8");
    res = sassStr;
  } catch (err) {
    throw new Error(err);
  }

  return res;
}
