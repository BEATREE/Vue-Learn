# 在 webpack 中使用 vue

[页面演示](src)

## 如何使用 vue

1. 安装 vue 的包：`npm install vue -S` 即，运行时装载的包
2. 由于在webpack中，推荐使用 `.vue` 这个组件模板文件定义组件， 所以需要安装能够解析这种文件的loader：
    `npm install vue-loader vue-template-complier -D`
3. 在 main.js 中导入 vue 模块 `import Vue from 'vue'`
4. 定义 .vue 结尾的组件，其中，组价由三部分组成： template script style
5. 使用 `import login from './login.vue'` 导入组件
6. 创建 vm 的实例： `var vm = new Vue({ el: "#app", render: c => c(login) })`
7. 在页面中创建一个 id 为 app 的 div 元素， 作为我们 vm 实例要控制的区域；


新建以`.vue`结尾的模板文件， 例如 `login.vue`
```
    <template></template>   // 定义模板文件
    <script></script>       // 定义业务逻辑
    <style></style>         // 定义样式文件
```

**注意：Vue Loader v15 now requires an accompanying webpack plugin to function properly:**

```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}

```
