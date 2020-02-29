<!--  -->
<template>
<div class="listbox"> 
    <div class="list" v-for="(item,index) in pllist" :key="index">
        <img :src="item.img" alt="">
        <p>{{item.jj}}</p>
        <p>{{item.company}}</p>
        <p>
            <span>{{item.name}}</span>
            <span>咨询人数：{{item.num}}</span>
        </p>
    </div>
</div>
</template>

<script>

export default {
name: '',
components: {},
props:{
    pllist:{gdlistArr:{type:Array}},
},
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

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.listbox{
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;  /*定义，如果一条轴线排不下，如何换行*/
    padding: 0.1rem 0.15rem;
    .list{
        width: 3.5rem;
        height: 5.5rem;
        box-sizing: border-box;
        background: #ffffff;
        margin-bottom: 0.2rem;
        img{
            width: 3.5rem;
            height: 3.5rem;
        }
        p{
            height: 0.6rem;
            line-height: 0.6rem;
            overflow: hidden;
            word-wrap:break-word;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
}
    
</style>