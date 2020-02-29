<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="switchTo('/index')">
            <img :src="$route.path.includes('/index') ? list[0].selected:list[0].normal" alt="">
            <span :class="{on:$route.path.includes('/index')}">首页</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommend')">
            <img :src="$route.path.includes('/recommend') ? list[1].selected:list[1].normal" alt="">
            <span :class="{on:$route.path.includes('/recommend')}">推荐</span>
        </span>
        <span class="tab-item" @click="switchTo('/list')">
            <img :src="$route.path.includes('/list') ? list[1].selected:list[1].normal" alt="">
            <span :class="{on:$route.path.includes('/list')}">列表</span>
        </span>
        <span class="tab-item" @click="switchTo('/cart')">
            <img :src="$route.path.includes('/cart') ? list[2].selected:list[2].normal" alt="">
            <span :class="{on:$route.path.includes('/cart')}">购物车</span>
        </span>
        <span class="tab-item" @click="switchTo('/mine')">
            <img :src="$route.path.includes('/mine') ? list[3].selected:list[3].normal" alt="">
            <span :class="{on:$route.path.includes('/mine')}">我的</span>
        </span>
    </div>
</template>
<script>
export default {
    name:'bottom-tab',
    data(){
        return {
            list:[
                {normal:'static/img/tab/tab-index.png',selected:'static/img/tab/tab-index-selected.png'},
                {normal:'static/img/tab/tab-tuijian.png',selected:'static/img/tab/tab-tuijian-selected.png'},
                {normal:'static/img/tab/tab-list.png',selected:'static/img/tab/tab-list-selected.png'},
                {normal:'static/img/tab/tab-cart.png',selected:'static/img/tab/tab-cart-selected.png'},
                {normal:'static/img/tab/tab-mine.png',selected:'static/img/tab/tab-mine-selected.png'}
            ]
        }
    },
    methods:{
        switchTo(path){
            this.$router.replace(path);
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
    .bottom-tab{
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #ffffff;
        display: flex;
        flex-direction: row;    /*决定主轴的方向（即项目的排列方向）*/
        flex-wrap: nowrap;  /*定义，如果一条轴线排不下，如何换行*/
        justify-content:space-around;   /*定义了项目在主轴上的对齐方式*/
        align-items: flex-start;    /*定义项目在交叉轴上如何对齐*/
        align-content: flex-start;  /*定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用*/
        z-index: 999;
    }
    .tab-item{
        font-size: 14px;
        color: #666;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .tab-item img{
        width: 30%;
    }
    .on{
        color: red;
    }
</style>