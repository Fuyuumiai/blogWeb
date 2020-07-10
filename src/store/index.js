const Vue = require('vue')
const Vuex = require('vuex')
// Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: true
  },
  getters: {
    loading: state => state.loading
  },
  mutations: {
    // 改变loading状态
    CHANGE_LOADING: (state, loading) => {
      state.loading = loading
    }
  },
  actions: {
    record ({commit}, loading) {
      commit('CHANGE_LOADING', {loading})
    }
  }
})

export default store
