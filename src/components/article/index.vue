
<template>
    <div class="article-root" v-if="JSON.stringify(md) !== '{}'" ref="concent">
        <div class="article-title">
          <span class="title-text">{{md.title}}</span>
          <Row class="title-group" type="flex" justify="center" align="bottom">
            <Col span="9" push="5">
              <Icon type="md-flame" size="16" style="vertical-align: text-bottom;" /> {{md.watch_num}}
            </Col>
            <Col span="9">
               <Icon type="md-time" size="16" style="vertical-align: text-bottom;" /> {{md.create_time | dateFormat}}
            </Col>
            <Col span="6" pull="18">
              <Icon type="md-person-add"  size="16" style="vertical-align: text-bottom;"/> {{md.author}}
            </Col>
          </Row>
        </div>
        <div class="article-box" v-html="compiledMarkdown"></div>
        <div class="article-foot">
          <div class="foot-tags">
             <Icon type="md-pricetags" size="18" style="vertical-align: middle;"/>
             <Button v-for="(item, index) in md.tags" :key="index" type="text" size="small">{{item}}</Button>
          </div>
          <div class="foot-state">
            <p>非特殊说明，本博所有文章均为博主原创。</p>
            <p style="margin-top: 5px;">如若转载，请注明出处：http://yuiai.top</p>
          </div>
          <div class="foot-link">
            <div class="link-prev">
              <Icon type="ios-arrow-back" size="18" style="vertical-align: top;"/>
              上一篇： <Button size="small" type="text" @click="goArticle(0)">{{JSON.stringify(prev) === '{}' ?  '没有了~' :  prev.title}}</Button>
            </div>
            <div class="link-next">
              <Icon type="ios-arrow-forward" size="18" style="vertical-align: top;"/>
              下一篇： <Button size="small" type="text" @click="goArticle(1)">{{JSON.stringify(next) === '{}' ?  '没有了~' :  next.title}}</Button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import 'highlight.js/styles/github-gist.css'
let marked = require('marked')
let hljs = require('highlight.js')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})
export default{
  data () {
    return {
      md: {},
      prev: {},
      next: {}
    }
  },
  filters: {
    dateFormat (val) {
      let str = new Date(val).getHours() <= 12 ? 'AM' : 'PM'
      return val.split('T')[0] + ' ' + str
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.md.body, {
        sanitize: true
      })
    }
  },
  created () {
    this.getArticle(parseInt(this.$route.query.id))
  },
  mounted () {
    this.$Spin.hide()
  },
  methods: {
    goArticle (type) {
      if (type === 0 && JSON.stringify(this.prev) === '{}') return false
      if (type === 1 && JSON.stringify(this.next) === '{}') return false
      let id = type === 0 ? this.prev.id : this.next.id
      this.$router.push({
        path: '/grp',
        query: {
          path: '/article',
          config: {
            id
          }
        }
      })
    },
    getArticle (id) {
      this.$apis.getArticle({
        id
      }).then(res => {
        if (res.data.errCode === 200) {
          this.md = res.data.data
          this.prev = res.data.prev
          this.next = res.data.next
        } else {
          this.$Message.error(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    }
  }
}
</script>

<style scoped>
 .article-root {
   width: 100%;
   height: auto;
   border-radius: 4px;
   background-color: #fff;
  }
  .article-title {
    width: 100%;
    padding: 18px 18px 0px 18px;
    border-bottom: 1px solid #e5e5e5;
  }
  .title-text {
    font-size: 1.4em;
    line-height: 1.5;
    font-weight: bold;
    color: #000;
  }
  .title-group {
      width: 100%;
      font-size: .9em;
      margin: 15px 0px;
  }
  .article-foot {
    width: 100%;
    padding: 18px;
    border-top: 1px solid #e5e5e5;
  }
  .foot-state {
    font-size: 0.9em;
    background-color: #e5e5e5;
    margin: 15px 0px;
    padding: 10px 15px;
    border-radius: 4px;
    color: #666;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  }
  .foot-link {
    margin-top: 15px;
    font-size: 0.96em;
  }
  .link-next {
    margin-top: 5px;
  }
  .article-box {
    width: 100%;
    font-size: 14px;
    padding: 10px 30px;
  }
  .article-box >>> pre {
      background-color: #F8F8F8;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
      white-space:pre-wrap;
      white-space:-moz-pre-wrap;
      white-space:-pre-wrap;
      white-space:-o-pre-wrap;
      word-wrap:break-word;
      word-break: break-all;
      overflow-x: auto;
  }
  .article-box >>> img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  }
</style>
