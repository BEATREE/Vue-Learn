<template>
    <div>
        <h1>这是 APP 组件</h1>
        <!-- router-link 用于指定路由的地址 -->
        <router-link to="/account">Account</router-link>
        <router-link to="/goodList">GoodList</router-link>
        <!-- 占位符，用于放入 vue-router 对应的组件 -->
        <router-view></router-view>
    </div>
</template>

// 定义逻辑
<script>
    
</script>

// 定义样式
<style>
    
</style>