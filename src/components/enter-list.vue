<template>
    <div class="enter-list">
        <span v-for="(item,index) in etlist" :key="index">
            <img :src="item.src" alt="">
            <p>{{item.name}}</p>
        </span>
    </div>
</template>
<script>
export default {
    name:'enter-list',
    props:{etlist:{type: Array}},
    data(){
        return {
            /*etlistArr:[
                {name:'限时秒杀',src:'./../../../static/img/enterlist/etlist2.png',url:''},
                {name:'超市精品',src:'./../../../static/img/enterlist/etlist3.png',url:''},
                {name:'一起团购',src:'./../../../static/img/enterlist/etlist4.png',url:''},
                {name:'爆款手机',src:'./../../../static/img/enterlist/etlist5.png',url:''},
                {name:'精品家电',src:'./../../../static/img/enterlist/etlist6.png',url:''},
                {name:'免费兑换',src:'./../../../static/img/enterlist/etlist1.png',url:''},
                {name:'我要赚钱',src:'./../../../static/img/enterlist/etlist10.png',url:''},
                {name:'签到好礼',src:'./../../../static/img/enterlist/etlist7.png',url:''},
                {name:'领券中心',src:'./../../../static/img/enterlist/etlist8.png',url:''},
                {name:'更多',src:'./../../../static/img/enterlist/etlist9.png',url:''},
            ]*/
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .enter-list{
        width: 100%;
        height: 2.4rem;
        background: #ffffff;
        margin-top: 10px;
        display: flex;
        flex-direction: row;    /*决定主轴的方向（即项目的排列方向）*/
        flex-wrap: wrap;  /*定义，如果一条轴线排不下，如何换行*/
        justify-content:space-around;   /*定义了项目在主轴上的对齐方式*/
        align-items: flex-start;    /*定义项目在交叉轴上如何对齐*/
        align-content: flex-start;  /*定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用*/
    }
    .enter-list span{
        width: 25%;
        height: 60px;
        font-size: 12px;
        text-align: center;
    }
    .enter-list span img{
        width: 50%;
    }
    
</style>