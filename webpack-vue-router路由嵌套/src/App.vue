<template>
    <div>
        <h1>这是 APP 组件</h1>
        <!-- mt-button 为 mint-UI 中的button标签 -->
        <mt-button type="default" size="small" disable>default</mt-button>
        <mt-button type="primary" size="normal" icon="more" @click="getList()">primary</mt-button>
        <mt-button type="danger" size="large">danger</mt-button>

        <mybtn type="primary" size="normal" icon="more" @click="getList()">12345</mybtn>


        <!-- router-link 用于指定路由的地址 -->
        <router-link to="/account">Account</router-link>
        <router-link to="/goodList">GoodList</router-link>
        <!-- 占位符，用于放入 vue-router 对应的组件 -->
        <router-view></router-view>
    </div>
</template>

// 定义逻辑
<script>
    
    import { Toast } from 'mint-ui' // 按需导入 Toast 组件
    export default {
        data(){
            return {
                toast1: null,

            }
        },
        created(){
                this.getList();
        },
        methods: {
            getList(){  
                // 模拟获取列表的方法， 一个  AJax 方法
                // 在获取数据之前，立即弹出 toast 正在加载数据
                this.show();
                setTimeout(() => {
                    // 在 3s 后将 Toast 移除
                    this.toast1.close();
                }, 3000)
            },
            show(){
                this.toast1 = Toast({
                    message: "调用了 show 方法",
                    position: 'top',
                    duration: -1,
                    iconClass: 'icon icon-success', // 需自己准备图标
                    className: 'myToast',           // 自定义 Toast 的样式，需要自己提供一个类名
                })
            }
        }
    }
</script>

// 定义样式
<style>
    
</style>