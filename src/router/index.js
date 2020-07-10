import Vue from 'vue'
import Router from 'vue-router'

// Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: 'app',
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
    },
    {
      path: '/trends',
      name: 'trends',
      component: resolve => require(['@/views/mainPage/Trends.vue'], resolve),
      meta: {
        title: '动态'
      }
    },
    {
      path: '/me',
      name: 'me',
      component: resolve => require(['@/views/mainPage/Me.vue'], resolve),
      meta: {
        title: '关于我'
      }
    },
    {
      path: '/article',
      name: '/article',
      component: resolve => require(['@/views/mainPage/Article.vue'], resolve),
      meta: {
        title: '博文'
      }
    },
    {
      path: '/grp',
      name: '/grp',
      component: resolve => require(['@/views/mainPage/Grp.vue'], resolve),
      meta: {
        title: '空白页'
      }
    },
    {
      path: '/class',
      name: '/class',
      component: resolve => require(['@/views/mainPage/Classify.vue'], resolve),
      meta: {
        title: '分类'
      }
    },
    {
      path: '/404',
      name: '/404',
      // component: resolve => require(['@/views/404.vue'], resolve)
      component: resolve => require(['@/components/loading'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})

export default router
