<template>
  <div id="app">
    <router-view/>
    
    <mt-tabbar v-model="selected" v-show="this.$store.state.tabIsShow" style="position:fixed;">
      <mt-tab-item id="首页"  @click.native="toggleTab('I')">
        <img slot="icon" src="static/icon/tab-index-s.png" v-show="!s.isI">
        <img slot="icon" src="static/icon/tab-index.png" v-show="s.isI">
        首页
      </mt-tab-item>
      <mt-tab-item id="列表"  @click.native="toggleTab('L')">
        <img slot="icon" src="static/icon/tab-list-s.png" v-show="!s.isL">
        <img slot="icon" src="static/icon/tab-list.png" v-show="s.isL">
        列表
      </mt-tab-item>
      <mt-tab-item id="聊天"  @click.native="toggleTab('C')">
        <img slot="icon" src="static/icon/tab-chat-s.png" v-show="!s.isC">
        <img slot="icon" src="static/icon/tab-chat.png" v-show="s.isC">
        聊天
      </mt-tab-item>
      <mt-tab-item id="我的"  @click.native="toggleTab('M')">
        <img slot="icon" src="static/icon/tab-mine-s.png" v-show="!s.isM">
        <img slot="icon" src="static/icon/tab-mine.png" v-show="s.isM">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tab-bar"
export default {
  name: 'App',
  components: {
    tabbar
  },
  data () {
    return {
      selected: '首页',
      s: { //分别对应四个 tab
        isI: !1,
        isL: !0,
        isC: !0,
        isM: !0
      },
    }
  },
  methods: {
    clear: function(state) { //清空状态
      for (var k in this.s) 
        this.$set(this.s, k, !0);
    },
    toggleTab: function(state) {  //更换图标
      this.clear(state); // 选中前先重置其他tab
      if (this.s["is" + state]) //如果没有选中则取反显示
      	this.$set(this.s, ["is" + state], !1);
    }
  },
  watch: {
    selected: function (val, oldVal) {
      console.log(val)
      switch (val) {
        case '首页':
          this.$router.replace('/');
          break
        case '列表':
          this.$router.replace('/list');
          break
        case '聊天':
          this.$router.replace('/chat');
          break
        case '我的':
          this.$router.replace('/mine');
          break
      }
    }
  },
  mounted(){
    /*let this_ =this;
    this.$bus.on("updbar",function(){
      this_.toggleTab('I');
    });*/
  },
  destroyed:function(){
    //this.$bus.off("updbar");
  }
}
</script>

<style lang='scss'>

#app {
  font-size: 14px;
  color: $color2;
}
.mint-tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
}
a{
  color: black;
  text-decoration: none;
}
/* a:hover{
  color: red;
  font-weight: bold;
} */
li{
  list-style: none;
}
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}


.mint-tabbar > .mint-tab-item.is-selected{
    color: $color1;
  }
</style>
