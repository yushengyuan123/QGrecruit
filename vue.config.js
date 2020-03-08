module.exports = {
    // // 下面为代理服务器配置
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        hot: true,
        proxy: {
            '/api': {
                target: 'http://192.168.1.106:8004',
                changeOrigin: true,
                pathRewrite:{"^/api": "/"},
            }
        }
    },
    publicPath: './',
    productionSourceMap: false,
}
