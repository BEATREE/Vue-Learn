// 这是我们项目的js入口文件

// 1. 导入 jquery
// 2. 浏览器支持解析的代码没到 ES6，所以无法直接被浏览器识别
import $ from 'jquery'

// 使用 import 语法，引入 css 样式
import './css/index.css'
import './css/index.less'
import './css/index.scss'

//  webpack 默认只能打包处理 js类型的文件， 无法处理其他非 js 类型的文件
// 如果要处理非 js类型的文件，我们需要手动安装 第三方的加载器；
// 1. 如果想要打包处理 css 类型的文件，需要安装 style-loader 和 css-loader 两个
// 2. 打开 webpack.config.js 这个配置文件，在里边新增一个配置 叫做  module ,他是一个对象，在这个moudle对象上，有个 rules 属性，这个 rules 属性是个数组，这个数组中存放了所有第三方模块的 匹配和处理规则

// 注意：webpack 处理第三方文件类型的过程
// 1. 发现这个要处理的文件不是 JS 文件，然后去 webpack.config.js 中查找有没有第三方 loader 规则
// 2. 如果 能找到对应的规则， 就会调用对应的 loader 处理这种文件类型
// 3. 在调用 loader 的时候，从右往左进行调用；
// 4. 当最后一个 loader 调用完毕，会直接吧结果交给webpack进行打包合并，最终 bundle.js 中去

$(function () {
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', function(){
        return "#" + "ff24f0"
    })
})

// webpack 4.29
// 经过 webpack-cli .\src\main.js --output .\dist\bundle.js --mode development 或者 webpack .\src\main.js -o .\dist\bundle.js 的尝试，Webpack可以做：
// 1. webpack 能够处理 JS 文件之间的相互依赖关系
// 2. 能够将浏览器不识别或不兼容的语法，把高级的 脚本语言转化为浏览器可以正常识别的语法