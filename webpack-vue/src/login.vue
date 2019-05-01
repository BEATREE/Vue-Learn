<template>
    <div>
        <h1>这是一个 由.vue 定义的login 组件 {{ msg }}</h1>
    </div>
</template>


<script>
    export default {    // es6 中向外暴露成员的一种方式
        data() { // 注意组件中的 data 必须是 function
            return {
                msg: '这是 export default 中的 data 属性'
            }
        },
        methods: {
            show(){
                console.log("调用了.vue 中的 show 方法。")
            }
        }
    }
</script>

<style> 
    
</style>