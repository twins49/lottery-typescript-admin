// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const name = 'Vue Typescript Admin'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  // publicPath:
  //   process.env.NODE_ENV === 'production'
  //     ? '/vue-typescript-admin-template/'
  //     : '/', // TODO: Remember to change this to fit your need
  lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name,
  },
  devServer: {
    proxy: {
      // 同nginx代理配置 将'/api'的请求代理到target目标设置的<url>去
      '/api': {
        target: `http://127.0.0.1:8000`,
        ws: true, // proxy websockets
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/api/',
        },
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
      ],
    },
  },
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
  },
  configureWebpack: config => {
    const plugins = []
    if (process.env.NODE_ENV === 'development') {
      plugins.push(
        new StylelintPlugin({
          files: ['src/**/*.vue', 'src/assets/**/*.scss'],
          fix: true, //打开自动修复（谨慎使用！注意上面的配置不要加入js或html文件，会发生问题，js文件请手动修复）
        }),
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  },
}
