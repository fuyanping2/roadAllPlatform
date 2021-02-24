const webpack = require('webpack')
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, '..'1, dir)
// }

module.exports = {
  lintOnSave: false,
  publicPath: './', // 部署项目路径
  // baseUrl: process.env_NODE_ENV == 'production' ? '/vehiclerepair/' : '', // 部署项目路径
  devServer: {
    // host: '10.1.',
    open: true, // 配置自动启动浏览器
    proxy: {
      '/slBusServer': {
        target: 'http://10.1.30.204:50019/slBusServer',
        changeOrigin: true,
        pathRewrite: {
          '^/slBusServer': '/'
        }
      }
    }
  },
  configureWebpack: {
    // webpack 配置项
    // resolve: {
    //   alias: {
    //     vue$: 'vue/dist/vue.esm.js'
    //     // '@': resolve('src'),
    //     // 'views': resolve('src/views')
    //   }
    // },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/global.scss";`
      }
    }
  }
}
