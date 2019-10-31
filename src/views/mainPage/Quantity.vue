<template>
   <div class="root" ref="root">
      <!-- 导航栏部分 -->
      <Nav :activateNum="activateNum"></Nav>
      <!-- 中间部分 -->
      <Row class="main">
        <!-- 归档数据部分 -->
        <Col span="22" offset="1" :xl="{span: 13, offset: 2}" :lg="{span: 14, offset: 2}"   style="height: 100%; margin-top: 25px;">
          <Aggregate></Aggregate>
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
import Aggregate from'../../components/content/Aggregate'
export default {
  name: 'Quantity',
  components: {
    Nav,
    Palette,
    Aggregate
  },
  data () {
    return {
      activateNum: 1
    }
  }
}
</script>

<style lang="less">
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