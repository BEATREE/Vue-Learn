// 该 JS 文件用于抽离出 路由模块

import VueRouter from 'vue-router'  // 1. 导入 vue-router 路由包

import account from "./vue/Account.vue"
import goodList from "./vue/GoodList.vue"
import login from "./vueChildren/Login.vue"
import register from "./vueChildren/Register.vue"
// 3. 创建路由对象 
var router = new VueRouter({
    routes: [
        // account、goodlist 
        {
            path: '/account', 
            component: account,
            children: [     // 定义子组件
                { path: 'login', component: login},     // 路由中 子组件前边路径不加 "/" 符号
                { path: 'register', component: register},
            ]
        },
        { path: '/goodList', component: goodList},
    ]
})

export default router   // 把路由对象暴露出去