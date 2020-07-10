// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import api from './http/api'
import store from './store/index'

Vue.config.productionTip = false

Vue.prototype.$apis = api
// 这里是对vuescroll进行配置
Vue.prototype.$vuescrollConfig = {
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
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
