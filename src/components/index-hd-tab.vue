<template>
  <div class="main">
    <div class="mainbox">
        <span :class="{on:$store.state.tab_active == 'hot'}" @click="navTo('hot')">热门</span>
        <span :class="{on:$store.state.tab_active == 'mensclo'}" @click="navTo('jinrong')">金融</span>
        <span :class="{on:$store.state.tab_active == 'womensclo'}" @click="navTo('baoxian')">保险</span>
        <span :class="{on:$store.state.tab_active == 'phone'}" @click="navTo('caiwu')">财务</span>
        <span :class="{on:$store.state.tab_active == 'box'}" @click="navTo('falv')">法律</span>
        <span :class="{on:$store.state.tab_active == 'food'}" @click="navTo('guquan')">股权</span>
        <span :class="{on:$store.state.tab_active == 'appliance'}" @click="navTo('yiliao')">医疗</span>
        <span :class="{on:$store.state.tab_active == 'car'}" @click="navTo('daikuan')">贷款</span>

        <!-- <span :class="{on:$route.path.includes('/beautymakeup')}" @click="navTo('beautymakeup')">美妆</span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'hd-tab',
  data () {
    return {
      
    }
  },
  methods:{
      navTo(path){
        console.log(path);
        /*this.$store.dispatch('updtTabActive',path);
        this.$emit('hdtab',path);*/
        this.$router.replace(path);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    width: 100%;
    height: 0.8rem;
    position: fixed;
    left: 0;
    top: 1.2rem;
    background: #1aad19;
    columns: #ffffff;
    overflow: hidden;
    overflow-x: auto;
    z-index: 999;
}
.mainbox{
     left: 0px;
    top: 0px;
    position: absolute;
    height: 40px;
    overflow-x: auto;  
    white-space: nowrap;
    display: flex;
}
.mainbox span{
    font-size: 16px;
    text-decoration: none;
    padding: 1px 5px;
    line-height: 40px;
    box-sizing: border-box;
    color: #ffffff;
}
.on{
    border-bottom: 1px solid #ffffff;
    font-weight: bold;
    font-size: 20px;
}
::-webkit-scrollbar {
        display: none;
        
        /* 或者这样
        width: 0;
        height: 0;
        */
    }
</style>
