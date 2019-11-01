import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/views/mainPage/Index.vue'], resolve),
      meta: {
        title: '主页'
      }
    },
    {
      path: '/quantity',
      name: 'quantity',
      component: resolve => require(['@/views/mainPage/Quantity.vue'], resolve),
      meta: {
        title: '归档'
      }
    }
  ]
})
