module.exports = {
    // 配置postcss-pxtorem
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 37.5,
              unitPrecision: 5,
              propList: ['*'],
              selectorBlackList: [],
              replace: true,
              mediaQuery: false,
              minPixelValue: 0,
              exclude: /node_modules/i
            })
          ]
        }
      }
    },
    // 配置代理 http-proxy-middleware
    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: 'https://m.you.163.com',
          changeOrigin: true,
          pathRewrite: {
            '/api': '/'
          }
        }
      }
    }
  }

  // https://m.you.163.com/item/list.json?__timestamp=1600255194432&categoryId=1005000
  // 
  
  
  