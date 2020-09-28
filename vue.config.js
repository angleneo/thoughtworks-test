const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // lintOnSave: false,
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  // css: {
  // },
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '/api': { // 代理api
        target: 'http://localhost:3001', // 服务器api地址-
        changeOrigin: true, // 是否跨域
        ws: true, // proxy websockets
        pathRewrite: { // 重写路径
          '^/v1': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.optimization.minimize(true)
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/font'))
      .end()
    // 创建 icons 规则，设置文件夹包含我们的图标库文件夹目录
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/assets/fon'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()
    //   .use('svgo-loader')
    //   .loader('svgo-loader')
    //   .options({
    //     plugins: [{ removeXMLNS: true }]
    //   })
    //   .end()

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
      .set('service', resolve('src/service'))
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    }
  }
}
