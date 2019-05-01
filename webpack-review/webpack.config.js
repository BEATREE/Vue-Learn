// 由于 webpack 是基于node语法进行构建的，所以在 webpack 的配置文件中，任何合法的Node代码都是支持的
var path = require('path')
// 在内存中，根据指定的模板页面生成内存中的首页，同时自动把打包好的 bundle.js 注入到页面底部
var htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令行运行 webpack 或者 webpack-dev-server 的时候，工具会发现，我们并没有提供要打包的文件的 入口和出口文件，此时他会检查项目根目录中的配置文件并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象进行打包构建
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口js文件
    output: {   //指定输出选项
        path: path.join(__dirname, './dist'),   // 输出路径
        filename: 'bundle.js',                  // 指定输出文件的名称
    },
    // 如果要配置插件，需要增加 plugins 节点
    plugins: [  // 所有 webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),     // 指定模板文件路径
            filename: 'index.html'                                  // 设置生成的内存页面的名称
        })
    ],
    module: {   // 配置所有第三方loader
        rules: [// 第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 处理css的loader
            {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=5536&name=[hash:8]-[name].[ext]'},    // 处理图片路径的loader file-loader 是 url-loader 的内部依赖，所以不用写
            // ? 可以传参，其中有个固定的参数 limit 指图片的大小单位为 byte、
            // 当引用的图片大小 >= 设定的 limit时候，不会进行 base64 编码字符串，如果图片大小小于给定的值，则会被转为 base64 字符串
            // 参数 name=[hash:8]-[name].[ext] 表示之前是什么名称，打包后还是什么名称，原来是什么后缀，打包后也不变；然后前边的 [hash:8] 只在名字前加上 hash 前缀，避免不同文件相同名称产生的资源覆盖

            {test: /\.(ttf|woff|svg|eot|woff2)$/, use: "url-loader"}, // 这是处理字体文件的 loader 配置项
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},

        ]
    }
}