# Vue Render 函数

## 普通渲染组件

首先定义一个组件实例，然后添加到 Vue 实例中：

```js
var login = {       // 定义组件
    template: "<h1>这是登录组件</h1>"
}

var app = new Vue({
    el: "#app",
    data: {},
    methods: {},
    components: {
        login,
    }
})
```

## render 进行渲染

```js
var login = {       // 定义组件
    template: "<h1>这是登录组件</h1>"
}

var app = new Vue({
    el: "#app",
    data: {},
    methods: {},
    // components: {login,}
    render: function (createElements) {   // createElements是一个方法， 调用他能把指定的组件模板渲染为 html 结构
        return createElements(login)
        // 注意： 这里 return 的结果会替换页面中 el 指定的那个容器，即将 div 替换为 login
    }
})
```

`render`进行渲染，会将 el 注册的实例直接替换掉，也就是说 **div 盒子以及其内的内容变为 login 组件**