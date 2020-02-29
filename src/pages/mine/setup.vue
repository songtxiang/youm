<!--  -->
<template>
<div class='setup' :style="'min-height:'+mheight+'px'">
    <mt-header title="设置">
        <router-link to="/mine" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <div class="list">
        <div>账号安全 <span>></span></div>
        <div>服务协议 <span>></span></div>
        <div>隐私政策 <span>></span></div>
        <div>关于我们 <span>></span></div>
        <div>当前版本 <span>></span></div>
        <div>退出登录</div>
    </div>
    
</div>
</template>

<script>

export default {
name: 'setup',
components: {},
data() {
return {
    mheight:0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.$store.dispatch('tabIsShow',false);
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    
    this.mheight = document.body.clientHeight;
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {
    this.$store.dispatch('tabIsShow',true);
}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
    .list{
        overflow: hidden;
        
        
        margin-bottom: 0.5rem;
        &>div:first-child{
            margin-bottom: 0.2rem;
        }
        &>div:last-child{
            margin-top: 0.2rem;
            text-align: center;
            font-weight: bold;
        }
        div{
            background: #ffffff;
            height: 0.8rem;
            line-height: 0.8rem;
            span{
                float: right;
            }
        }
    }
</style>