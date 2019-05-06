var path = require("path")

var htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),   // 指定文件的入口
    output: {
        path: path.join(__dirname, "./dist"),       // 指定输出文件的路径
        filename: "bundle.js",                      // 指定输出文件的名称
    },
    plugins: [
        new htmlWebpackPlugin ({
            template: path.join(__dirname, "./src/index.html"),     // 指定模板文件路径
            filename: 'index.html'                                  // 设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: {   // 配置第三方 loader
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']}, // 处理 css 文件的loader
            { test: /\.(jpg|jpeg|gif|png)$/, use: ["url-loader?limit?=5536&name=[hash:8]-[name].[ext]"] }, // 处理图片路径的loader file-loader 是 url-loader 的内部依赖
            //参数 name=[hash:8]-[name].[ext] 表示之前是什么名称，打包后还是什么名称，原来是什么后缀，打包后也不变；然后前边的 [hash:8] 只在名字前加上 hash 前缀，避免不同文件相同名称产生的资源覆盖
            { test: /\.(ttf|woff|svg|eot|woff2)$/, use: "url-loader" },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.vue$/, use: "vue-loader" },       // 处理 .vue 的loader
        ]
    },
    resolve: {
        alias: {    // 修改 vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}
