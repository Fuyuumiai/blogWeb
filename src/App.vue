<template>
  <vue-scroll>
    <div id="app">
      <router-view/>
    </div>
  </vue-scroll>
</template>

<script>
export default {
  name: 'App'
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
    font-family: "Consolas","Microsoft JhengHei","Apple LiGothic Medium,Microsoft YaHei","微软雅黑","Arial",sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    background: url('../static/imgs/home.png') no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  #app{
    position: relative;
  }
</style>
