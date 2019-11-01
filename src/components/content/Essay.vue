<template>
    <div>
    <Row class="article-box" v-for="(item, index) in 10" :key="index">
        <!-- 图片、位于右侧 -->
        <Col span="24" :md="{span: 8, push: 16}">
          <div class="box-img" :style="{backgroundImage: 'url(' + imgUrl +')'}">
          </div>
        </Col>
        <!-- 博文内容 -->
        <Col span="24" :md="{span: 16, pull: 8}">
          <div class="box-text">
            <!-- 标题 -->
            <div class="text-title">
              <span>前方的路永远会有更美的风景</span>
            </div>
            <!-- 文章主题 -->
            <div class="text-body">
              <span>
                随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。随着时间的流逝，你会成长，会有更多的经历，会渐渐曾经发生的事情是多么的平常。
              </span>
            </div>
          </div>
           <!-- 按钮组 -->
          <Row class="box-group" type="flex" justify="center" align="bottom">
              <Col span="5"><Icon type="md-eye" size="18" style="vertical-align: middle;"/> 99+</Col>
              <Col span="5"><Icon type="md-chatbubbles" size="18" style="vertical-align: middle;"/> 99+</Col>
              <Col span="6"><Icon type="md-pricetags" size="18" style="vertical-align: middle;"/> 奇思妙想</Col>
              <Col span="8"><Icon type="md-time" size="18" style="vertical-align: middle;" /> 2018-12-12 PM</Col>
          </Row>
        </Col>
    </Row>
    </div>
</template>

<script>
export default {
  name: 'Essay',
  data () {
    return {
      imgUrl: '../../../static/imgs/avlt.png'
    }
  }
}
</script>

<style lang="less">
  .article-box {
    width: 100%;
    height: auto;
    min-height: 170px;
    cursor: pointer;
    background: #fff;
    padding: 15px 0px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .box-img {
      width: calc(100% - 30px);
      min-height: 140px;
      height: calc(100% - 50px);
      margin-left: 15px;
      padding-right: 15px;
      border-radius: 2px;
      background-repeat: no-repeat;
      background-size: cover;
      text-align: center;
    }
    .box-text {
      width: calc(100% - 30px);
      margin-left: 15px;
      min-height: 110px;
      height: auto;
      .text-title {
        width: 100%;
        height: 35px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 1.4em;
        font-weight: 700;
        overflow: hidden;
        letter-spacing: .5px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .text-body {
        width: 100%;
        max-height: 75px;
        height: auto;
        font-size: 1.2em;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow : hidden;
      }
    }
    .box-group {
      width: calc(100% - 30px);
      margin-left: 15px;
      min-height: 30px;
      font-size: .9em;
      height: auto;
    }
    .article-page {
      width: 100%;
      height: 30px;
      background-color: #fff;
    }
  }
</style>
