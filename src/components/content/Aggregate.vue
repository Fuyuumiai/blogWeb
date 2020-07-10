<template>
    <div class="aggregate-root">
      <!-- 标题部分 -->
        <CellGroup>
          <Cell title="文章归档" :label="title">
              <Icon type="md-bookmarks" slot="icon"  size="30" style="vertical-align: -.105em;"/>
          </Cell>
        </CellGroup>
        <Dropdown style="padding: 10px 16px;" trigger="click" transfer  transfer-class-name="transfer-style">
           <div class="time-dropdown">
             <span style="font-size:1.3em;font-weight: 600;">{{ defaultTime }}年</span>
             <Icon type="md-code-working" size="20" style="vertical-align: sub; transform: rotate(90deg);"/>
           </div>
           <DropdownMenu slot="list">
               <DropdownItem v-for="item in infoList.timeList" :key="item"  @click.native="changeDrop(item)">{{item}}年</DropdownItem>
           </DropdownMenu>
        </Dropdown>
        <Timeline slot="content" style="padding: 16px;" v-if="JSON.stringify(articleList) !== '{}'" pending>
            <TimelineItem v-for="(val, key, index) in articleList" :key="index">
                <p class="timeColumn">{{ key }}月</p>
                <List border>
                   <ListItem v-for="(item, i) in val" :key="i" style="cursor: pointer;font-weight: 600;" @click.native="goArticle(item.id)">
                     <div style="width: 100%;">
                            {{item.title}}
                     <Icon type="ios-arrow-forward" style="float: right; font-size: 1.2em;"/>
                     </div>
                   </ListItem>
                </List>
            </TimelineItem>
             <TimelineItem>
                <p class="timeColumn">继续加油吧~</p>
            </TimelineItem>
        </Timeline>
        <span class="null-box" v-else>当前年份暂无内容</span>
    </div>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'Aggregate',
  data () {
    return {
      transfer: true,
      defaultTime: sessionStorage.getItem('year') ? sessionStorage.getItem('year') : new Date().getFullYear(),
      title: '',
      // 存储统计数据
      infoList: [],
      // 统计文章数据
      articleList: {}
    }
  },
  created () {
    this.getArticleInfo()
    this.getTimeArticle(this.defaultTime)
  },
  methods: {
    // 获取统计参数
    getArticleInfo () {
      this.$apis.getArticleInfo().then(res => {
        if (res.data.errCode === 200) {
          this.infoList = res.data.data
          this.setTitle()
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    // 获取文章数据
    getTimeArticle (time) {
      this.$apis.getTimeArticle({
        time
      }).then(res => {
        if (res.data.errCode === 200) {
          this.articleList = res.data.list
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    // 设置标题数据
    setTitle () {
      this.title = '目前共计 ' + this.infoList.len + ' 篇文章，共有 ' + this.infoList.watchNum + ' 次观看，加油啊~'
    },
    // 改变年份
    changeDrop (time) {
      if (time === this.defaultTime) {
        return false
      }
      this.defaultTime = time
      sessionStorage.setItem('year', time)
      this.getTimeArticle(time)
    },
    // 前往博文页
    goArticle (id) {
      this.$Spin.show()
      this.reload()
      this.$router.push({
        path: '/article',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .aggregate-root {
        width: 100%;
        min-height: 150px;
        // max-height: 1500px;
        height: auto;
        border-radius: 4px;
        background-color: #fff;
        padding-bottom: 20px;
        // vertical-align: middle;
    }
    .timeColumn {
        font-size: 1.2em;
        font-weight: 600;
    }
    .time-dropdown {
       cursor: pointer;
    }
    .transfer-style {
        margin-left: 16px;
    }
    .null-box {
         display: inline-block;
         width: 100%;
         font-size: 1.2em;
         color: #000;
         text-align: center;
       }
</style>
