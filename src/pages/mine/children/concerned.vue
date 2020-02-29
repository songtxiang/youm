<!--  -->
<template>
<div class='publish bgc2' :style="'min-height:'+mheight+'px'">
    <mt-header title="我的关注">
        <router-link to="/mine" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <div class="list">
        
    </div>
</div>
</template>

<script>

export default {
name: 'concerned',
components: {},
data() {
return {

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
        padding: 0.3rem 0.2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        
    }
</style>