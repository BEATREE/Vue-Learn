// 如何在 webpack 中使用 vue 进行网页开发

// 在 webpack 中尝试使用 vue
// 注意在 webpack 中使用 import Vue from 'vue' 导入的 vue 功能不完整，只提供了 runtime-only 这种方式， 并没有提供像网页中的那种 使用方式
// node 中包的查找规则
// 1. 寻找项目根目录中 node_modules 的文件夹
// 2. 在 node_modules 中根据包名找对应文件夹
// 3. 在 vue 文件夹中，找 package.json 的配置文件
// 4. 在 package.json 中查找 main 属性 main 属性制定了这个包在被加载的文件

// import Vue from "../node_modules/vue/dist/vue.js"    // 正确导入方式1
import Vue from 'vue'                 // 方式2 需要在 webpack.config.js 中进行同步配置 resolve 

// var login = {
//     template: "<h1> 这是login组件，是使用 main.js 创建的模板组件 </h1>"
// }

//  1. 导入 login 组件
import login from './login.vue'
// 默认 webpack 无法打包.vue文件，需要安装相关的loader
// npm install vue-loader vue-template-compiler -D  , 其中 vue-template-complier 是内部依赖包
// 在配置文件中新增 loader 配置内容 { test: , use: ""}；
// 同时在配置文件中需要  const VueLoaderPlugin = require('vue-loader/lib/plugin')

var vm = new Vue({
    el: "#app",
    data: {
        msg: "123"
    },
    // components: {
    //     login,
    // },
    render: (createElementes) => {      // 在 webpack 中如果想要通过 vue 把一个组件放到页面中去展示，通过vue中的 render 函数去实现，render 会覆盖原内容
        return createElementes(login)
    }
    // 可直接写成 createElementes => createElementes(login)

})

// 从 test.js 中拿到暴露的对象
 
import person1,{ author as writer, date} from './test.js'     // {} 中的 为js文件 export 暴露的内容，按需导出指定内容即可，其中 as 可定义别名，定义别名后只能使用别名使用数据

console.log('test.js Object：', person1)
console.log("test.js's author value：",  writer)
console.log("test.js's date value：", date)