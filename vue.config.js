const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.entry('index').add('babel-polyfill')
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  css: {
    loaderOptions: {
      stylus: {
        // 全局引用变量和 mixin
        import: [
          '~@/assets/stylus/mixin.styl',
          '~@/assets/stylus/variable.styl'
        ]
      }
    }
  },
  devServer: {
    proxy: {
      // 当地址中包含 /api 时触发此代理
      '/api': {
        target: 'xxx',
        changeOrigin: true
      }
    }
  }
}
