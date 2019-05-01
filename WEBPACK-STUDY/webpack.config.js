const path = require("path")
// 启用热更新的第 2 步
const webpack = require("webpack")
// 导入在内存中生成html页面的插件
// 只要是插件，就要放在 plugins 中
// 这个插件的两个作用；
// 1. 自动在内存中，根据指定页面生成一个内存的页面
// 2. 自动把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require("html-webpack-plugin")


// 这个文件，其实就是一个 js 文件，通过 node.js 中的模块操作，向外暴漏了一个 配置对象
module.exports = {  // 模块的导出
    // 在配置文件中需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'),   // 入口 表示要使用 webpack 打包哪个文件
    output: {   // 输出文件相关配置
        path: path.join(__dirname, './dist'),   // 指定打包好的文件，输出到哪个目录
        filename: 'bundle.js'   // 这是指定输出的文件的名称
    },
    devServer: {    // 这是配置dev-server 命令参数的第二种形式，相对来说麻烦一些
        //  --open --port 3000 --contentBase src --hot
        open: true, // 自定打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true,  // 启用 热更新 第 1 步

    },
    plugins: [  // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),    // new 一个热更新的模块对象 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个在内存中生成html页面的插件
            template: path.join(__dirname, './src/index.html'),  // 指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    module: {   // 这个节点用于配置所有的第三方模块加载器
        rules:[ // 所有第三方的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, 
            // 正则，进行.css文件匹配 “//”中间进行正则表达式编写，“$” 表示以...结尾“\”转义符转义 “.”
            // use中进行配置第三方 loader 处理的组件规则，调用对应loader时候，从右到左进行调用
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理 less
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 sass
        ]

    }
}
// 当我们在控制台，直接输入 webpack 命令执行的时候， webpack做了以下几步：
// 1. 首先，webpack 发现我们并没有通过命令的形式指定入口和出口
// 2. webpack 就会去项目的根目录中查找 webpack.config.js 配置文件
// 3. 当找到配置文件后，webpack 会去解析执行文件
// 4. 当解析执行完配置文件后，就得到了配置文件中导出的配置对象  line:4 的内容
// 5. 当webpack 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包组件

// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm install webpack-dev-server -D 这个工具安装到，项目的本地开发依赖
// 2. 安装完毕后，这个工具的用法 和 webpack 的用法完全一样
// 3. 如果是项目中安装的 webpack-dev-server 所以无法把他当作我们的脚本命令，在终端中直接运行
//      只有安装到全局 -g 的工具才能在终端正常执行
// 4. 注意： webpack-dev-server 这个工具，如果想要正常运行，在本地项目中也得安装 webpack, 全局装过也要在本地装
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有放到实际的物理磁盘上；
//      而是， 直接托管到了电脑的 内存 中，所以我们在项目根目录中根本找不到这个打包好的bundle.js;
// 6. 我们可以认为 webpack-dev-server 把这个打包好的文件，以一种虚拟的方式托管到了 项目的根目录中，虽然我们看不到它
//      但是可以认为和 dist 、src 、node_modules 平级，有一个看不见的额文件，叫做 bundle.js

// 在package.json 中 
// "webpack-dev-server --open --port 3000 --contentBase src"; --open 打开浏览器， --port 指定端口 --contentBase 指定默认根目录
// 不会重新完全生成 bundle.js 而是 添加一个js文件和json文件，进行局部修改，避免了多次修改造成的浪费