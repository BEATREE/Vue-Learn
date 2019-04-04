# 路由

## 什么是路由

1. **后端路由：** 对于普通网站，所有的超链接都是url地址，所有url地址都对应服务器上的资源；

2. **前端路由：** 对于 ***单页面*** 程序来说，主要通过URL中的`hash`（#号）来实现不同页面之间的切换，同时，`hash`有一个特点； http请求中，不会包含 `hash` 相关的内容，所以，单页面程序中的页面跳转主要通过 hash 实现；相当于锚记链接

3. 在单页面中，这种通过hash改变切换页面的方式成为前端路由。（区别于后端路由）

## 在Vue中引用 vue-router

### Vue-router js引入安装：

    1. 前往下载：[下载](https://unpkg.com/vue-router/dist/vue-router.js)
    2. CDN：https://unpkg.com/vue-router@2.0.0/dist/vue-router.js

### NPM 安装

```sh
npm install vue-router
```

如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)  // 将VueRouter注册给 Vue，属于手动安装
```

如果使用全局的 script 标签，则**无须如此 (手动安装)**。
