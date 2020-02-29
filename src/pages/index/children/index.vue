<!--  -->
<template>
<div class='hot'>
    <mt-swipe :auto="4000" :stopPropagation="true" style="height:140px;">
      <mt-swipe-item 
          v-for="(item,index) in lbimgArr"
          :key="index" 
      >
          <img :src="item.src" :alt="item.title" style="width:100%;">
      </mt-swipe-item>
    </mt-swipe>

    <etlist :etlist="etlistArr"></etlist>

    <div class="ad">
        <img src="static/img/tp1.png" alt="">
    </div>

    <pllist :pllist="pllist"></pllist>
</div>
</template>

<script>
import etlist from './../../../components/enter-list'
import pllist from './../../../components/personlist'
export default {
name: 'hot',
components: {
    etlist,
    pllist
},
data() {
return {
    pllist:[
        {id:12,name:'王先生',img:'static/img/header.png',jj:'从事金融顾问5年，曾就职与阿里巴巴集团',company:'重庆思行科技有限公司',num:69},
        {id:12,name:'王先生',img:'static/img/header.png',jj:'从事金融顾问5年，曾就职与阿里巴巴集团',company:'重庆思行科技有限公司',num:69},
        {id:12,name:'王先生',img:'static/img/header.png',jj:'从事金融顾问5年，曾就职与阿里巴巴集团',company:'重庆思行科技有限公司',num:69},
        {id:12,name:'王先生',img:'static/img/header.png',jj:'从事金融顾问5年，曾就职与阿里巴巴集团',company:'重庆思行科技有限公司',num:69},
        {id:12,name:'王先生',img:'static/img/header.png',jj:'从事金融顾问5年，曾就职与阿里巴巴集团',company:'重庆思行科技有限公司',num:69},
    ],
    lbimgArr:[
        {id:11,src:'static/img/sp1.png',title:''},
        {id:11,src:'static/img/sp2.png',title:''},
        {id:11,src:'static/img/sp3.png',title:''},
        {id:11,src:'static/img/sp4.png',title:''},
        {id:11,src:'static/img/sp5.png',title:''},
    ],
    etlistArr:[
                {name:'日常办公',src:'./../../../static/img/enterlist/etlist2.png',url:''},
                {name:'高薪招聘',src:'./../../../static/img/enterlist/etlist3.png',url:''},
                {name:'招商',src:'./../../../static/img/enterlist/etlist4.png',url:''},
                {name:'融资',src:'./../../../static/img/enterlist/etlist5.png',url:''},
                {name:'活动发布',src:'./../../../static/img/enterlist/etlist6.png',url:''},
                {name:'知识课堂',src:'./../../../static/img/enterlist/etlist1.png',url:''},
                {name:'链接名片',src:'./../../../static/img/enterlist/etlist10.png',url:''},
                {name:'政府招标',src:'./../../../static/img/enterlist/etlist7.png',url:''},
            ]
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
    .ad{
        height: 2.2rem;
        box-sizing: border-box;
        // background: $color1;
        img{
            width: 100%;
        }
    }
    .listbox{
        margin-bottom: 1.2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  /*定义，如果一条轴线排不下，如何换行*/
        padding: 0.1rem 0.15rem;
        
    }
</style>