<template>
    <div>
      <Card :bordered="false" style="marigin-bottom: 20px;">
            <p slot="title">
              <Icon type="ios-browsers" size="18" style="vertical-align: top;"/> 文章分类
            </p>
            <p><b>{{item.name}}</b> 共有 {{list.length}} 篇文章</p>
      </Card>
      <Row class="article-box" v-for="(item, index) in articleList" :key="index" @click.native="goArticle(item.article_id)">
          <!-- 图片、位于右侧 -->
          <Col span="24" :md="{span: 8, push: 16}">
            <div class="box-img" :style="{backgroundImage: 'url(' + item.body.imgUrl +')'}">
            </div>
          </Col>
          <!-- 博文内容 -->
          <Col span="24" :md="{span: 16, pull: 8}">
            <div class="box-text">
              <!-- 标题 -->
              <div class="text-title">
                <span>{{item.title}}</span>
              </div>
              <!-- 文章主题 -->
              <div class="text-body">
                <span>
                  {{item.body.text}}
                </span>
              </div>
            </div>
             <!-- 按钮组 -->
            <Row class="box-group" type="flex" justify="center" align="bottom">
                <Col span="4"><Icon type="md-eye" size="18" style="vertical-align: middle;"/> {{item.watch_num}}</Col>
                <Col span="5"><Icon type="md-person-add"  size="18" style="vertical-align: middle;"/> {{item.author}}</Col>
                <Col span="6"><Icon type="md-pricetags" size="18" style="vertical-align: middle;"/> {{item.tags[0]}}</Col>
                <Col span="9"><Icon type="md-time" size="18" style="vertical-align: middle;" /> {{item.create_time | dateFormat}}</Col>
            </Row>
          </Col>
      </Row>
      <div style="text-align: center;" v-if="len > 10">
        <Page :total="len" @on-change="pageChange" :current="page"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Essay',
  inject: ['reload'],
  data () {
    return {
      baseImgUrl: '../../../static/imgs/avlt.png',
      term: {},
      page: 1,
      // 数据总条数
      len: 0,
      articleList: [],
      list: [],
      item: []
    }
  },
  filters: {
    dateFormat (val) {
      let str = new Date(val).getHours() <= 12 ? 'AM' : 'PM'
      return val.split('T')[0] + ' ' + str
    }
  },
  beforeRouteLeave (to, from, next) {
    sessionStorage.removeItem('page')
    next()
  },
  created () {
    // 初始化博客列表
    this.item = JSON.parse(this.$route.query.item)
    this.list = this.item.list
    this.page = !sessionStorage.getItem('page') ? 1 : parseInt(sessionStorage.getItem('page'))
    this.getArticle(this.list, this.page, 10)
  },
  methods: {
    // 获取博客
    getArticle (list, page, num) {
      this.$apis.getArticleList({
        list,
        page: (page - 1) * 10,
        num,
        simple: true
      }).then(res => {
        if (res.data.errCode === 200) {
          this.articleList = res.data.data
          this.len = res.data.len
          for (let i = 0; i < this.articleList.length; i++) {
            this.articleList[i].body = JSON.parse(this.articleList[i].body)
          }
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    pageChange (page) {
      this.page = page
      sessionStorage.setItem('page', page)
      this.getArticle(this.list, page, 10)
    },
    goArticle (id) {
      this.$router.push({
        path: '/article',
        query: {
          id
        }
      })
      this.reload()
    }
  }
}
</script>

<style lang="less" scoped>
  .article-box {
    width: 100%;
    height: auto;
    margin-top: 20px;
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
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
