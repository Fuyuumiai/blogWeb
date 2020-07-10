<template>
   <div class="root" ref="root">
      <!-- 导航栏部分 -->
      <Nav :activateNum="activateNum"></Nav>
      <!-- 中间部分 -->
      <Row class="main">
        <!-- 关于我的 -->
        <Col span="22" offset="1" :xl="{span: 13, offset: 2}" :lg="{span: 14, offset: 2}"   style="height: 100%; margin-top: 25px;">
          <Info></Info>
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
import Info from '../../components/content/Info'
export default {
  name: 'Me',
  components: {
    Nav,
    Palette,
    Info
  },
  data () {
    return {
      activateNum: 3
    }
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
