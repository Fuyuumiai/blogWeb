<template>
  <vue-scroll>
    <!-- <Loading v-if="loading"></Loading>
    <div id="app" v-else>
      <router-view  v-if="isRouterlive"/>
    </div> -->
    <div id="app">
      <router-view  v-if="isRouterlive"/>
    </div>
  </vue-scroll>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from './components/loading/index'
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterlive: true
      // 这里是滚动条的配置项
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
  methods: {
    reload () {
      this.isRouterlive = false
      this.$nextTick(function () {
        this.isRouterlive = true
      })
    }
  }
}
</script>

<style>
  html,
  body,
  #app{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    background: url('http://www.yuiai.top:8080/public/img/yuiai1575953713984.png') no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  #app{
    position: relative;
  }
/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  background-color: rgba(30, 30, 30, .4);;
  border-radius: 2px;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius:10px;
}
/* 滚动条 */
::-webkit-scrollbar-thumb {
  background-color: rgba(50, 50, 50, .8);
  border-radius: 2px;
}
</style>
