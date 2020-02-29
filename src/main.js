// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueBus from 'vue-bus'
import axios from 'axios'
import qs from 'qs'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import apiConfig from '../config/api.config';
Vue.use(Mint);
Vue.use(VueBus);

axios.defaults.baseURL = apiConfig.baseUrl;
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.$http = axios;
Vue.prototype.qs = qs;           //全局注册，使用方法为:this.qs
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
