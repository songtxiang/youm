<!--  -->
<template>
<div class='index'>
    <div class="searchbox">
        <img src="static/icon/saomiao.png" alt="">
        <div>
            <img src="static/icon/search.png" alt="">
            <input type="text" placeholder="搜索">
            <span>搜索</span>
        </div>
        <img src="static/icon/tab-mine-s.png" alt="" class="shbimg2">
    </div>
     <hd-nav></hd-nav>
     <router-view></router-view>
    <!-- <mt-tab-container v-model="active" :swipeable="swipeable">
        <mt-tab-container-item id="hot">
            <hot></hot>
        </mt-tab-container-item>
        <mt-tab-container-item id="jinrong">
            <jinrong></jinrong>
        </mt-tab-container-item>
        <mt-tab-container-item id="baoxian">
            <baoxian></baoxian>
        </mt-tab-container-item>
        <mt-tab-container-item id="caiwu">
            <caiwu></caiwu>
        </mt-tab-container-item>
        <mt-tab-container-item id="falv">
            <falv></falv>
        </mt-tab-container-item>
        <mt-tab-container-item id="jinrong">
            <guquan></guquan>
        </mt-tab-container-item>
    </mt-tab-container> -->
</div>
</template>

<script>
import hdbar from './../../components/index-hd-tab';
import jinrong from './children/jinrong';
import baoxian from './children/baoxian';
import caiwu from './children/caiwu';
import falv from './children/falv';
import guquan from './children/guquan';
import hot from './children/index';
export default {
name: '',
components: {
    'hd-nav':hdbar,
    jinrong,
    baoxian,
    caiwu,
    falv,
    guquan,
    hot
},
data() {
return {
    swipeable:true,
    active:'index'
};
},
computed: {},
watch: {
    
},
//方法集合
methods: {
    activeChange(val){
        this.active = val;
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.active = this.$store.state.tab_active;
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
.index>div:nth-child(3){
  margin-top: 2.0rem;
}
.index{
    overflow: hidden;
    background: #f4f4f4;
}
.searchbox{
    width: 100%;
    height: 1.0rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    margin-top: 0;
    display: flex;
    align-items: center;
    padding: 0.1rem 0.1rem;
    background: #ffffff;
    z-index: 99;
    div{
        width: 5.8rem;
        height: 0.8rem;
        box-sizing: border-box;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        position: relative;
        img{
            position: absolute;
            width: 0.6rem;
            height: 0.6rem;
            
            top: 0.1rem;
            left: 0.1rem;
        }
        input{
            width: 5.8rem;
            height: 0.8rem;
            box-sizing: border-box;
            border-radius: 0.4rem;
            border: 1px solid $color1;
            outline: none;
            padding: 0.1rem 0.8rem;
            padding-right: 1.6rem;
        }
        span{
            position: absolute;
            top: 0;
            right: 0;
            width:1.5rem;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            background: $color1;
            color: #ffffff;
            border-radius: 0.4rem;
        }
    }
    
    img{
        width: 0.5rem;
        height: 0.5rem;
    }
    
}
</style>