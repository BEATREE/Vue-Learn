import Vue from 'vue'       // 导入 vue 包初始化 vue 基础环境
import VueRouter from 'vue-router'  // 1. 导入 vue-router 路由包
// 2. 手动安装 vue-router 
Vue.use(VueRouter)  


//导入所有的 Mint-UI 组件
// import MintUI from 'mint-ui'    // 将 mint-ui中的组件进行导入了
// // 这里可以省略 node_modules 这一层目录
// import 'mint-ui/lib/style.css'
// // 将mint ui安装到 vue中
// Vue.use(MintUI)                 // 将组件注册为了全局组件

// 按需导入 mintui
import { Button } from 'mint-ui'
// 使用 vue.component 注册组件
// Vue.component("mybtn", Button)
Vue.component(Button.name, Button)


import app from "./App.vue" // 导入 app组件

// 导入自定义路由模块
import router from "./router.js"
import './css/app.css'


var vm = new Vue({
    el: "#app",
    render: c => { return c(app) },    // 单参数箭头函数，单返回值 c(app)
    router         // 4. 将路由对象挂载到 vm 实例上
})

// 注意： APP 组件是通过 VM 实例的 render 函数渲染出来的， render 函数渲染的组件只能放到 el 所指定的元素节点中
// Account 和 goodList组件是通过  路由匹配监听的，所以这两个组件，只能展示到 属于路由的 router-view 中去。