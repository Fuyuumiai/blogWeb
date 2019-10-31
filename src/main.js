// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import vuescroll from 'vuescroll'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(vuescroll, {
  // 这里是对vuescroll进行全局配置
  ops: {
    scrollPanel: {
      speed: 600
    },
    rail: {
      background: '#000',
      size: '4px'
    },
    bar: {
      background: '#111',
      opacity: 0.8,
      size: '4px'
    }
  } // 这里配置全局属性
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
