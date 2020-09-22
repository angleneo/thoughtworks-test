const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // lintOnSave: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    modules: true,
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash:base64:4]',
        camelCase: 'only'
      }
    }
  },
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '/v1': { // 代理api
        target: 'http://localhost:3001/v1', // 服务器api地址-
        changeOrigin: true, // 是否跨域
        ws: true, // proxy websockets
        pathRewrite: { // 重写路径
          '^/v1': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'chunkstark-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          maxSize: 100,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  }
}
