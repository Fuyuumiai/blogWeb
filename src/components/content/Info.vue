<template>
    <div class="info-root">
       <Card :bordered="false">
            <p slot="title">作者声明</p>
            <p>这个人是个咸鱼，有兴趣可加qq讨论（2431023920）</p>
        </Card>
    </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {}
  }
}
</script>

<style lang="less">
    .info-root {
        width: 100%;
        min-height: 300px;
        height: auto;
        border-radius: 4px;
        padding-bottom: 20px;
    }
</style>
