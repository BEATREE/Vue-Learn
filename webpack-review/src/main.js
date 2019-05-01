// js 入口文件
console.log('123')

// 如果要通过路径的形式去引入 node_modules 中相关的文件，可以直接省略 路径前边的 node_modules 这一层目录，直接写 包的名称，然后跟上具体的文件路径
// 不写 node_modules 这层目录就会直接到 node_modules 中去寻找
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'

// class 关键字， 是 ES6 中提供的新语法，用来 实现 ES6 中面向对象编程的方法
class Person{
    // static 类似于 Java 中的相似 ，可通过 类名.变量名 进行访问，还有 实例属性 
    static info = {name: "zs", age: 20} 
}
// 太他妈亲切了， 我是 Java 出身滴
var p1 = new Person()

console.log(p1.info)
console.log(Person.info)

// 在 webpack 中默认只能处理一部分的 ES6 的语法，一些更高级的 ES6 或者 ES7 的语法，webpack 是处理不了的；这时候需要借助第三方的loader，  来帮助 webpack 处理这些高级的语言，当第三方loader把 高级语法转化为 低级语法后，会把结果交给 webpack 打包到 bundle.js 中

// 通过 Babel， 可以帮我们讲 高级的语法转化为 低级的语法；
// 1. 在 webpack 中，可以运行如下两套命令，安装两套包，去安装 Babel 相关的 loader 功能 
//  1.1 第一套包： npm install babel-core babel-loader@7.1.5 babel-plugin-transform-runtime -D 仅进行转化
//                  默认会装最新 babel8 会需要更多依赖安装，建议直接装 7.1.5
//  1.2 第二套包： npm install babel-preset-env barbel-preset-stage-0 -D    相当于字典，进行语法解析
// 2. 打开 webpack 的配置文件， 在 module 节点下的 rules 数组中，添加一个 新的 匹配规则：
//  2.1 { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}  
//  2.2 在配置 barbel-loader 的规则的时候，必须通过把 node_modules 目录，通过 exclude 排除掉； 原因有两个：
//      2.2.1 如果不排除 node_modules， 则 Babel 会把 node_modules 中所有的第三方js文件， 都打包编译，会非常消耗资源，同时打包速度非常慢
//      2.2.2 哪怕，最终 Babel 把所有 node_modules 中的 js 转化完毕，但是项目也无法正常运行！故要排除
// 3. 在项目的根目录中，新建一个 .babelrc 的 barbel 配置文件，这个配置文件， 属于 JSON 格式，必须符合 JSON 规范，所以在写的时候必须符合 JSON 规范
//  3.1 在 .babelrc 写如下的配置 : 可以将 presets 翻译成语法的意思
        // {
        //     "presets": ["env", "stage-0"],
        //     "plugins": ["transform-runtime"]
        // }
// 4. 了解： 目前我们安装的 babel-preset-env，是比较新的 ES 语法，它包含了和 ES** 相关的语法
