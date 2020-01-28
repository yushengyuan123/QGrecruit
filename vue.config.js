module.exports = {
    // lintOnSave: false,
    // // 下面为代理服务器配置
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        hot: true,
        // rules: [
        //     {
        //         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //         loader: 'url-loader',
        //         options: {
        //             limit: 10000,
        //             name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        //         },
        //     }
        // ]
        // proxy: {
        //     '/api': {
        //         target: 'http://xxx',          // 目标服务器的基础地址
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': '/'
        //         }
        //     }
        // }
    },
    publicPath: '/',
}
