<template>
    <!-- 该页面为页面右侧功能栏 -->
    <div>
    <!-- 每日一句 -->
    <Card class="sentence-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-bulb" size="18" style="vertical-align: -.105em;"></Icon>
          每日一句
        </p>
        <span class="sentenceList-text">愿你走出半生，归来仍是少年。</span>
    </Card>
    <!-- 标签云 -->
    <Card class="column-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-code" size="18" style="vertical-align: -.105em;"></Icon>
          标签云
        </p>
        <Tag type="border" v-for="(item, index) in 15" :key="index" :color="getRadomColor()" style="margin-right: 8px;">{{index + 'val'}}</Tag>
        <!-- <span class="null-box">暂无内容</span> -->
    </Card>
    <!-- 栏目分类 -->
    <Card class="column-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="ios-folder-open-outline" size="18" style="vertical-align: -.105em;"></Icon>
          栏目分类
        </p>
        <div :class="[columnList > 4 ? 'column-box' : '']">
          <vue-scroll>
           <List size="small" :split="false">
              <ListItem v-for="(item, index) in 3" :key="index">
                <ListItemMeta title="胡思乱想">
                  <template slot="avatar">
                   <Icon type="ios-bookmark-outline" size="18" style="vertical-align: -.105em;"></Icon>
                  </template>
                </ListItemMeta>
                <template slot="action">
                  <Tag checkable color="default">{{item}}</Tag>
                </template>
              </ListItem>
           </List>
          </vue-scroll>
        </div>
        <!-- <span class="null-box">暂无内容</span> -->
    </Card>
    <!-- 动态栏 -->
    <Card class="data-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="ios-cafe-outline" size="18" style="vertical-align: -.105em;"></Icon>
          动态栏
        </p>
          <Timeline :class="[trendsList > 5 ? 'big-box' : '']">
            <vue-scroll>
             <TimelineItem v-for="(item, index) in 8" :key="index">
                 <p style="fontWeight: 600">2018-12-15</p>
                 <p>前方的路永远会有更美的风景</p>
             </TimelineItem>
            </vue-scroll>
          </Timeline>
        <!-- <span class="null-box">暂无内容</span> -->
    </Card>
    <!-- 友情链接 -->
      <Card class="data-list" :bordered="false" :shadow="true">
        <p slot="title">
          <Icon type="md-contacts" size="18" style="vertical-align: -.105em;"></Icon>
          友情链接
        </p>
        <Tooltip content="前往申请" slot="extra" placement="top-start">
          <Icon type="ios-arrow-forward" size="20" style="vertical-align: middle;" />
        </Tooltip>
        <div :class="[linkList > 4 ? 'big-box' : '']">
          <vue-scroll>
            <List>
              <ListItem v-for="(item, index) in 8" :key="index" style="cursor: pointer;">
                  <ListItemMeta avatar="../../../static/imgs/home.png" title="友情链接" description="一个非常有趣的网站，可以帮助大家学习。" />
              </ListItem>
            </List>
         </vue-scroll>
        </div>
      </Card>
      <!-- <span class="null-box">暂无内容</span> -->
    </div>
</template>

<script>
export default {
  name: 'palette',
  data () {
    return {
      // 标签随机颜色,自定义颜色容易看不清字
      colorList: ['default', 'magenta', 'red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple' ],
      // 存储句子的字段
      sentence: '愿你走过半生，归来仍是少年。',
      // 存储标签的数组
      tagList: [],
      // 存储关于栏目的数组
      columnList: 3,
      // 存储动态的数组
      trendsList: 8,
      // 存储链接的数组
      linkList: 8
    }
  },
  methods: {
    // 随机获取标签的颜色
    getRadomColor () {
      let num = Math.floor(Math.random() * this.colorList.length)
      return this.colorList[num]
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