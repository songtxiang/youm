<template>
<div class=''>
    <mt-header title="注册">
        <router-link to="/mine" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <router-link to="/login" slot="right">
            <mt-button >登录</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

    <main>
        <div class="iptbox">
            <input type="number" placeholder="手机号">
        </div>
        <div class="iptbox">
            <input type="text" placeholder="用户名">
        </div>
        <div class="iptbox">
            <input type="password" placeholder="密码">
        </div>
        <div class="iptbox">
            <input type="password" placeholder="确认密码">
        </div>
        <div class="iptbox2 ">
            <input type="text" placeholder="手机验证码">
            <button @click="getCodeFun" :disabled="disabled">
                <template v-if="sending">获取验证码</template>
                <template v-else>{{second}}秒后重发</template>
            </button>
        </div>

        <div class="iptbox">
            <button @click="reg">注册</button>
        </div>
    </main>
</div>
</template>

<script>

export default {
name:'reg',
components: {},
data() {
return {
    phone:'',
    username:'',
    userpassword:'',
    userpassword2:'',
    yzm:'',
    sending: true,      //是否发送验证码
    disabled: false,   //是否禁发验证码
    second:60,        //倒计时间
};
},
computed: {},
watch: {},
methods: {

    getCodeFun(){
        //his.sending原为true,请求成功，!this.sending == true，主要是防止有人把disabled属性去掉，多次点击；
        if( !this.sending )
            return;

        //获取手机验证码

        //获取后执行
        this.sending  = false;
        this.disabled = true;
        this.timeDown();

    },
    timeDown(){
        let result = setInterval( ()=>{
            --this.second;
            if(this.second < 0){
                clearInterval(result);
                this.sending  = true;
                this.disabled = false;
                this.second = 60;
            }
        }, 1000);
    },

    reg(){
        var this_ = this;
        if(!this_.phone){
            this.$toast('请输入手机号！');
            return;
        }
        if(!this_.yzm){
            this.$toast('请输入验证码！');
            return;
        }
        if(!this_.username){
            this.$toast('请输入昵称！');
            return;
        }
        if(!this_.userpassword){
            this.$toast('请输入密码！');
            return;
        }
        if(!this_.userpassword2){
            this.$toast('请确认密码！');
            return;
        }
        if(this_.userpassword != this_.userpassword2){
            this.$toast('两次密码不一致！');
            return;
        }
        sessionStorage.setItem('name',this_.name);
    　　this_.$router.push('/index');
        this_.$toast('注册成功！');

        /*this.$axios.post('/actions.php',this.$qs.stringify({m:'reg',name:this_.username,password:this_.userpassword,phone:this_.phone}))
        .then(function (response) {
            console.log(response);
            var data = eval('(' + response.data + ')'); //使用eval() 将JSON字符串转为JS对象；
            if(data.code == 1){
                sessionStorage.setItem('name',this_.name);
                sessionStorage.setItem('password',this_.password);
            　　this_.$router.push('/index');
                this_.$toast('注册成功！');
            }
            else{
                this_.$toast('注册失败！');
            }
        })
        .catch(function (error) {
        　　console.log(error);
            this_.$toast('注册失败！');
        });*/
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.$store.dispatch('tabIsShow',false);
    if(sessionStorage.getItem('username')){
        this.$router.push('/mine');
        console.log('tomine');
    }
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
    .mint-header{
        background: $color1;
    }
    main{
        overflow: hidden;
        padding: 0.5rem 0;
        .iptbox2{
            height: 1.0rem;
            padding: 0.1rem 0.5rem;
            margin-bottom: 0.2rem;
            input{
                width: 50%;
                height: 0.8rem;
                border: none;
                border-bottom: 1px solid #efefef;
                font-size: 16px;
                outline: none;
            }
            button{
                width: 1.5rem;
                height: 0.8rem;
                float: right;
            }
        }
        .iptbox{
            height: 1.0rem;
            padding: 0.1rem 0.5rem;
            margin-bottom: 0.2rem;
            input{
                width: 100%;
                height: 0.8rem;
                border: none;
                border-bottom: 1px solid #efefef;
                font-size: 16px;
                outline: none;
            }
            button{
                width: 100%;
                height: 0.8rem;
                border-radius: 0.4rem;
                border: none;
                background: $color1;
                color: #ffffff;
                font-size: 16px;
                outline: none;
            }
            .wjmm{
                float: right;
            }
        }
    }
</style>