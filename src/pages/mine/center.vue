<!--  -->
<template>
<div class='center' :style="'min-height:'+mheight+'px'">
    <div v-if="username">
        <header>
            <img class="imgheader" src="static/icon/tx1.jpg" alt="">
            <span class="user-name">{{username}}</span>
            <span>青铜会员</span>
            <img class="setup" src="static/icon/setup.png" alt="" @click="toSetup">
        </header>
        <div class="myc">
            <router-link to="/mine/publish" tag="span">我的预约</router-link>
            <router-link to="/mine/publish" tag="span">我的预约</router-link>
            <router-link to="/mine/publish" tag="span">我的粉丝</router-link>
            <router-link to="/mine/publish" tag="span">我的顾问</router-link>
        </div>
        <div class="mylist">
            <router-link to="/mine/publish" tag="div">我的关注 <span>></span></router-link>
            <router-link to="/mine/publish" tag="div">我的发布 <span>></span></router-link>
            <router-link to="/mine/publish" tag="div">我的团队 <span>></span></router-link>
            <router-link to="/mine/publish" tag="div">我的客户 <span>></span></router-link>
        </div>
    </div>
    <div class="qdl" v-else>
        <div @click="toLogin">请先登录！</div>
    </div>
    
</div>
</template>

<script>

export default {
name: 'center',
components: {},
data() {
return {
    mheight:0,
    username:'',
    header:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    toSetup(){
        this.$router.push('/mine/setup');
    },
    toLogin(){
        this.$router.push('/login');
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.mheight = document.body.clientHeight;
     console.log(document.body.clientHeight*2/100);
     this.username = sessionStorage.getItem('username');
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
.qdl{
    overflow: hidden;
    div{
        width: 5.0rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-weight: bold;
        text-align: center;
        color: #ffffff;
        background: $color1;
        margin: 0 auto;
        margin-top: 4rem;
    }
}
    header{
        height: 3.0rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;
        background: linear-gradient(90deg, $color1, #86ee2b);
        border-radius: 0 0 300px 300px / 0 0 20px 20px;
        box-shadow: 0 2px 4px #8cdf44;
        color: #ffffff;
        .imgheader{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 0.75rem;
            margin-left: 0.3rem;
            margin-right: 0.2rem;
        }
        span{
            margin-right: 0.2rem;
        }
        .user-name{
            font-size: 22px;
            font-weight: bold;
        }
        .setup{
            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            top: 0.5rem;
            right: 0.2rem;
        }
    }
    .myc{
        height: 1.0rem;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0.2rem auto;
        box-sizing: border-box;
        padding: 0 0.3rem;
    }
    .mylist{
        overflow: hidden;
        background: #ffffff;
        padding: 0.2rem 0.2rem;
        margin-bottom: 0.5rem;
        div{
            height: 0.8rem;
            line-height: 0.8rem;
            span{
                float: right;
            }
        }
    }
</style>