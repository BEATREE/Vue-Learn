<template>
    <div>
        <h1>这是登录组件</h1>
    </div>
</template>
<script>
    
</script>
<style scoped>
    /* style 中设置的样式是 全局样式 ， 加上 scoped 后变为仅自己使用对应样式 */
    /* 样式的 scoped 属性，是通过 css 的选择器实现的，定义完 scoped 后会自动给当前组件的 div 添加一个属性用于选择 */
    div {
        color: red;
    }
</style>