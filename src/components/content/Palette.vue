<template>
    <!-- 该页面为页面右侧功能栏 -->
    <div>
    <!-- 每日一句 -->
    <Card class="sentence-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-bulb" size="18" style="vertical-align: -.105em;"></Icon>
          每日一句
        </p>
        <span class="sentenceList-text">{{sentence}}</span>
    </Card>
    <!-- 标签云 -->
    <Card class="column-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-code" size="18" style="vertical-align: -.105em;"></Icon>
          标签云
        </p>
        <span v-if="tagList.length === 0" class="null-box">暂无内容</span>
        <Tag v-else type="border" v-for="(item, index) in tagList" :key="index" :color="getRadomColor()" @click.native="goClassify(item)" style="margin-right: 8px;">{{item.name}}</Tag>
    </Card>
    <!-- 栏目分类 -->
    <Card class="column-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-chatboxes"  size="18" style="vertical-align: -.105em;"/>
          栏目分类
        </p>
        <div :class="[columnList.length > 4 ? 'column-box' : '']" v-if="columnList.length > 0">
          <vue-scroll>
           <List size="small" :split="false">
              <ListItem v-for="(item, index) in columnList" :key="index">
                <ListItemMeta :title="item.name">
                  <template slot="avatar">
                   <Icon type="logo-windows" size="18" style="vertical-align: -.105em; color: #409EFF;"></Icon>
                  </template>
                </ListItemMeta>
                <template slot="action">
                  <Tag checkable color="blue" @click.native="goClassify(item)">{{ item.num }}篇</Tag>
                </template>
              </ListItem>
           </List>
          </vue-scroll>
        </div>
        <span  v-else class="null-box">暂无内容</span>
    </Card>
    <!-- 动态栏 -->
    <Card class="data-list" :bordered="false" :shadow="true" style="overflow: hidden;">
        <p slot="title">
          <Icon type="md-cafe" size="18" style="vertical-align: -.105em;"></Icon>
          动态栏
        </p>
          <Timeline :class="[trendsList.length > 2 ? 'big-box' : '']" v-if="trendsList.length > 0" pending>
            <vue-scroll>
             <TimelineItem v-for="(item, index) in trendsList" :key="index">
                <template v-if="item.status === undefined">
                   <Icon type="md-clipboard" slot="dot" />
                   <p style="fontWeight: 600">{{item.create_time | isoFormat}}（打卡记录）</p>
                   <p>所属：{{item.clock_title}}。</p>
                   <p>内容：{{item.title}}.</p>
                   <p>备注：{{item.remarks || '无'}}.</p>
                </template>
                 <template v-else-if="item.status === 0">
                   <Icon type="md-checkmark-circle-outline" slot="dot" />
                   <p style="fontWeight: 600">{{item.start_time | isoFormat}}（新增打卡）</p>
                   <p>内容：{{item.title}}.</p>
                   <p>备注：{{item.start_remarks || '无'}}.</p>
                </template>
                <template v-else-if="item.status === 1">
                   <Icon type="md-close-circle" slot="dot" />
                   <p style="fontWeight: 600">{{item.end_time | isoFormat}}（结束打卡）</p>
                   <p>内容：{{item.title}}.</p>
                   <p>备注：{{item.end_remarks || '无'}}.</p>
                </template>
             </TimelineItem>
             <TimelineItem>
                <Icon type="ios-pulse" slot="dot" />
                <p style="fontWeight: 600">我的历程 现在开始</p>
             </TimelineItem>
            </vue-scroll>
          </Timeline>
        <span v-else class="null-box">暂无内容</span>
    </Card>
    <!-- 友情链接 -->
      <Card class="data-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-contacts" size="18" style="vertical-align: -.105em;"></Icon>
          友情链接
        </p>
        <!-- <Tooltip content="前往申请" slot="extra" placement="top-start" style="cursor: pointer;">
          <Icon type="ios-arrow-forward" size="20" style="vertical-align: middle;" />
        </Tooltip> -->
        <div :class="[linkList.length > 4 ? 'big-box' : '']" v-if="linkList.length !== 0">
          <vue-scroll>
             <CellGroup>
               <!-- style="background-color: #f8f8f8; border-radius: 5px;  box-shadow: 0 0 6px rgba(0, 0, 0, .04); -->
                <Cell v-for="(item, index) in linkList" :key="index" :label="item.tags.join(' # ')" :to="item.link" target="_blank">
                    <h4>{{item.name}}</h4>
                </Cell>
            </CellGroup>
         </vue-scroll>
        </div>
         <span class="null-box" v-else>暂无内容</span>
      </Card>
    </div>
</template>

<script>
export default {
  name: 'palette',
  data () {
    return {
      // 标签随机颜色,自定义颜色容易看不清字
      colorList: [ 'magenta', 'red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple' ],
      // 存储句子的数组
      sentenceList: [
        '愿你走过半生，归来仍是少年。',
        '如今最好，别说来日方长，时光难留，只有一去不返。',
        '一花一世界，一木一浮生，一草一天堂，一叶一如来，一砂一极乐，一方一净土，一笑一尘缘，一念一清静。',
        '宠辱不惊，看庭前花开花落，去留无意，望天上云卷云舒。0',
        '一朝春去红颜老，花落人亡两不知。',
        '人生恰如三月花，倾我一生一世念。来如飞花散似烟，醉里不知年华限。',
        '念念不忘，必有回响；不忘初心，方得始终。'
      ],
      // 句子的字段
      sentence: '',
      // 存储标签的数组
      tagList: [],
      // 存储关于栏目的数组
      columnList: [],
      // 存储动态的数组
      trendsList: [],
      // 存储链接的数组
      linkList: [],
      split: false
    }
  },
  created () {
    this.getTags()
    this.getTypes()
    this.getClock()
    this.getAssignedLink()
    this.getSentence()
  },
  filters: {
    // 格式化iso日期
    isoFormat (time) {
      // 2019-12-01T00:00:00.000Z
      let date = time.split('T')
      return date[0]
    }
  },
  methods: {
    // 获取所有打卡记录
    getClock () {
      this.$apis.findClock().then(res => {
        if (res.data.errCode === 200) {
          this.trendsList = [].concat(res.data.data, res.data.doc)
          let obj = {
            concent: res.data.data,
            doc: res.data.doc
          }
          sessionStorage.setItem('clock', JSON.stringify(obj))
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    // 随机获取标签的颜色
    getRadomColor () {
      let num = Math.floor(Math.random() * this.colorList.length)
      return this.colorList[num]
    },
    // 获取标签
    getTags () {
      this.$apis.getTags({
        term: {},
        page: 0,
        num: 15
      }).then(res => {
        if (res.data.errCode === 200) {
          this.tagList = res.data.data
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    getTypes () {
      this.$apis.getTypes({
        term: {},
        page: 0,
        num: 6
      }).then(res => {
        if (res.data.errCode === 200) {
          this.columnList = res.data.data
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    getAssignedLink () {
      this.$apis.getAssignedLink({
        term: {},
        page: 0,
        num: 10
      }).then(res => {
        if (res.data.errCode === 200) {
          this.linkList = res.data.doc
        } else {
          this.$Message.warning(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    getSentence () {
      this.sentence = this.sentenceList[new Date().getDay()]
    },
    goClassify (item, type) {
      this.$router.push({
        path: '/grp',
        query: {
          path: '/class',
          config: {
            item: JSON.stringify(item)
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
   .sentence-list {
       width: 100%;
       height: 120px;
       margin-bottom: 20px;
       background-color: #fff;
       .sentenceList-text {
         width: 100%;
         height: 40px;
         color: #000;
         display: -webkit-box;
         -webkit-line-clamp: 2;
         -webkit-box-orient: vertical;
         overflow : hidden;
       }
    }
    .column-list {
      width: 100%;
      min-height: 120px;
      max-height: 250px;
      margin-bottom: 20px;
      background-color: #fff;
      .column-box {
         width: 100%;
         height: 170px;
         overflow-y: auto;
      }
    }
    .data-list {
       width: 100%;
       min-height: 120px;
       max-height: 350px;
       margin-bottom: 20px;
      //  overflow: hidden;
       background-color: #fff;
       .big-box {
         width: 100%;
         height: 270px;
         overflow-y: auto;
       }
       .null-box {
         display: inline-block;
         width: 100%;
         color: #000;
         text-align: center;
       }
    }
    // 1420
</style>
