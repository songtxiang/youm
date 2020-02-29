import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: index,
      redirect:'index/hot',
      children:[
        {path: 'hot',name:'hot',meta:{title:'热门'},component:(resolve) => require(['./../pages/index/children/index.vue'], resolve)},
        {path: 'jinrong',name:'jinrong',meta:{title:'金融'},component:(resolve) => require(['./../pages/index/children/jinrong.vue'], resolve)},
        {path: 'baoxian',name:'baoxian',meta:{title:'保险'},component:(resolve) => require(['./../pages/index/children/baoxian.vue'], resolve)},
        {path: 'falv',name:'falv',meta:{title:'法律'},component:(resolve) => require(['./../pages/index/children/falv.vue'], resolve)},
        {path: 'caiwu',name:'caiwu',meta:{title:'财务'},component:(resolve) => require(['./../pages/index/children/caiwu.vue'], resolve)},
        {
          path: '*',
          redirect: 'hot'
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        title: '列表'
      },
      component: (resolve) => require(['./../pages/list/list.vue'], resolve)
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        title: '聊天'
      },
      component: (resolve) => require(['./../pages/chat/chat.vue'], resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        title: '我的'
      },
      component: (resolve) => require(['./../pages/mine/mine.vue'], resolve),
      redirect:'mine/center',
      children:[
        {path: 'center',name:'cnter',meta:{title:'个人中心'},component:(resolve) => require(['./../pages/mine/center.vue'], resolve)},
        {path: 'publish',name:'publish',meta:{title:'我的发布'},component:(resolve) => require(['./../pages/mine/children/publish.vue'], resolve)},
        {path: 'setup',name:'setup',meta:{title:'设置'},component:(resolve) => require(['./../pages/mine/setup.vue'], resolve)},
        {
          path: '*',
          redirect: 'center'
        }
      ]
    },
    {
      path: '/reg',
      name: 'reg',
      meta: {
        title: '注册'
      },
      component: (resolve) => require(['./../pages/mine/reg.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: (resolve) => require(['./../pages/mine/login.vue'], resolve)
    },
    // {
    //   path: '/mine',
    //   name: 'mine',
    //   meta: {
    //     title: '个人中心'
    //   },
    //   component: (resolve) => require(['../pages/mine/mine.vue'], resolve),
    //   redirect:'mine/center',
    //   children:[
    //     {path: 'center',name:'center',meta:{title:'个人中心'},component:(resolve) => require(['./../pages/mine/center.vue'], resolve)},
    //     {path: 'orderall/:id',name:'orderall',meta:{title:'订单'},component:(resolve) => require(['./../pages/mine/order/orderall.vue'], resolve)},
    //     {path: 'collect',name:'collect',meta:{title:'收藏'},component:(resolve) => require(['./../pages/mine/order/collect.vue'], resolve)},
    //     {path: 'ewm',name:'ewm',meta:{title:'我的二维码'},component:(resolve) => require(['./../pages/mine/myewm.vue'], resolve)},
    //     {path: 'addresslist',name:'addresslist',meta:{title:'我的收货地址'},component:(resolve) => require(['./../pages/mine/address/addresslist.vue'], resolve)},
    //     {path: 'addressadd/:id',name:'addressadd',meta:{title:'我的收货地址'},component:(resolve) => require(['./../pages/mine/address/addressadd.vue'], resolve)},
    //     {path: 'order4',name:'order4',meta:{title:'售后'},component:(resolve) => require(['./../pages/mine/order/order4.vue'], resolve)},
    //     {path: 'orderdetail/:id',name:'orderdetail',meta:{title:'订单详情'},component:(resolve) => require(['./../pages/mine/order/orderdetail.vue'], resolve)},
    //     {path: 'evaluate',name:'evaluate',meta:{title:'评价'},component:(resolve) => require(['./../pages/mine/order/evaluate.vue'], resolve)},
    //     {
    //       path: '*',
    //       redirect: 'center'
    //     }
    //   ]
    // },
    {
      path: '*',
      redirect: 'index'
    }
  ]
})
