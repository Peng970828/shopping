const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('views',resolve('src/views'))
    },
    devServer: {
        host: '192.168.4.215', // ip
        // host: '192.168.3.247',
        //host: '192.168.1.102', // ip
        port: 8080, // 设置端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy:null
    }
}
