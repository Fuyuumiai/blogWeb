<template>
  <div class="root" ref="root">
    <!-- 导航栏部分 -->
    <Nav :activateNum="activateNum"></Nav>
    <!-- 中间部分 -->
      <Row class="main">
        <!-- 博文部分 -->
        <Col span="22" offset="1" :xl="{span: 13, offset: 2}" :lg="{span: 14, offset: 2}"   style="height: 100%; margin-top: 25px;">
          <Itemize></Itemize>
        </Col>
        <!-- 数据部分 -->
        <Col span="22" offset="1" :xl="{span: 7, offset: 1}" :lg="{span: 6, offset: 1}"  style="height: 100%;margin-top: 25px;">
           <Palette></Palette>
        </Col>
      </Row>
  </div>
</template>

<script>
import Nav from '../../components/nav/Nav'
import Palette from '../../components/content/Palette'
import Itemize from '../../components/content/Itemize'
export default {
  name: 'Classify',
  components: {
    Nav,
    Palette,
    Itemize
  },
  data () {
    return {
      activateNum: -1
    }
  },
  methods: {},
  created () {
  }
}
</script>

<style lang="less" scoped>
  .root {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .main {
    height: auto;
    padding-bottom: 50px;
    z-index: 29;
  }
</style>
