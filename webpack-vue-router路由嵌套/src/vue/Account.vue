<template>
    <div>
        <h1>这个是 account 组件</h1>
        <router-link to="/account/login" tag="button"> 登录 </router-link>
        <!-- 加上 /account/ 指定父路由的路径，否则会无法正常显示; tag 指定 渲染成什么组件 -->
        <router-link to="/account/register" tag="button"> 注册 </router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    
</script>

<style scoped>
/* 普通的 style 标签只支持 普通的 css， 如果要使用 scss 或者 less，需要为 style 设置 lang 属性 */
/* 只要 style 标签，实在 .vue 中定义的，推荐都为 style 添加 scoped 属性； 从而只定义自己的组件 css 样式内容 */
    body div{
       font-style: italic;
    }
</style>
