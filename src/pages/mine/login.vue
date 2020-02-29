<template>
<div class=''>
    <mt-header title="登录">
        <router-link to="/mine" slot="left">
            <mt-button  @click="toInd" icon="back">返回</mt-button>
        </router-link>
        <router-link to="/reg" slot="right">
            <mt-button >注册</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

    <main>
        <div class="boxiptname"  v-show="dlfs">
            <input type="text" placeholder="用户名/手机号" v-model="username">
        </div>
        <div class="boxiptname"  v-show="!dlfs">
            <input type="text" placeholder="手机号" v-model="phone">
        </div>
        <div class="boxiptname" v-show="dlfs">
            <input type="password" placeholder="密码" v-model="userpassword">
        </div>
        <div class="iptbox2 " v-show="!dlfs">
            <input type="text" placeholder="手机验证码" v-model="yzm">
            <button @click="getCodeFun" :disabled="disabled">
                <template v-if="sending">获取验证码</template>
                <template v-else>{{second}}秒后重发</template>
            </button>
        </div>
        <div class="boxiptname">
            <button @click="login">登录</button>
        </div>
        <div class="boxiptname">
            <span @click="btnqf">{{fs}}</span>
            <span class="wjmm">忘记密码？</span>
        </div>
    </main>
</div>
</template>

<script>

export default {
name:'login',
components: {},
data() {
return {
    dlfs:true,
    fs:'短信验证码登录',
    phone:'',
    username:'',
    userpassword:'',
    yzm:'',
    sending: true,      //是否发送验证码
    disabled: false,   //是否禁发验证码
    second:60,        //倒计时间
};
},
computed: {},
watch: {},
methods: {
    toInd(){
        console.log(123)
        //this.$bus.emit('updbar');
    },
    btnqf(){
        if(this.dlfs){
            this.fs = '密码登录'
            this.dlfs = false;
        }
        else{
            this.fs = '短信验证码登录'
            this.dlfs = true;
        }
    },

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

     login(){
        var this_ = this;
        
        
        let dt = {};
        if(this_.dlfs){ //密码登录
            if(!this.username){
                this.$toast('请输入账号！');
                return;
            }
            if(this.username.length < 4){
                this.$toast('账号长度至少为4位！');
                return;
            }
            if(!this.userpassword){
                this.$toast('请输入密码！');
                return;
            }
            if(this.userpassword.length < 4){
                this.$toast('密码不得小于4位！');
                return;
            }
            dt = {m:'login',type:1,name:this_.username,password:this_.userpassword};
        }
        else{           //短信验证码登录
            if(!this.phone){
                this.$toast('请输入手机号！');
                return;
            }
            if(!this.yzm){
                this.$toast('请输入验证码！');
                return;
            }
            dt = {m:'login',type:2,phone:this_.phone,yzm:this_.yzm};
        }

        sessionStorage.setItem('username',this_.username);
        this_.$router.push('/mine');
        this_.$toast('登录成功！');
        /*this.$axios.post('/actions.php',this.$qs.stringify(dt))
        .then(function (response) {
            
            var data = eval('(' + response.data + ')'); //使用eval() 将JSON字符串转为JS对象；
            console.log(data);

            if(data.code == 1){
                sessionStorage.setItem('name',this_.name);
                sessionStorage.setItem('password',this_.password);
                console.log(sessionStorage.getItem('name'));
            　　this_.$router.push('/index');
                this_.$toast('登录成功！');
            }
            else{
                this_.$toast('账号或密码错误！');
            }
            
        })
        .catch(function (error) {
        　　console.log(error);
            this_.$toast('账号或密码错误！')
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
        this.$router.push('/index');
        console.log('toindex');
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
        .boxiptname{
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
    }
</style>