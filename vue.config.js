// 请求后端的接口地址
const path = require('path')
const DEV_SERVER_HOST = 'http://10.1.61.39:8008' //39
const DEV_SAEARVER_HOST_BEIJING = 'http://10.1.62.113:8888/ccbop'
const port = 8889
const name = 'web-member'

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    outputDir: 'demo',
    assetsDir: 'demo-static',
    // 打包时不生成.map文件
    productionSourceMap: false,
    devServer: {
        open: true, //自动打开浏览器
        port,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            //配置接口转发
            '/api/v1/memfunction': {
                target: DEV_SERVER_HOST, //后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true
                // pathRewrite: {
                //     '^/api/v1': ''
                // }
            },
            '/api/v1/system-manage': {
                target: DEV_SAEARVER_HOST_BEIJING, //后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true
            }
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    css: {
        loaderOptions: {
            // 注入全局样式
            sass: {
                prependData: `
              @import "@/style/variables.scss";
            `
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
        //微应用配置
        // output: {
        //     library: `${name}-[name]`,
        //     libraryTarget: 'umd',
        //     jsonpFunction: `webpackJsonp_${name}`
        // }
    }
}
