<template>
    <div class="cause-root">
      <!-- 打卡标题 -->
        <CellGroup class="cause-title">
          <Cell title="打卡记录" :label="label">
              <Icon type="md-checkbox" slot="icon"  size="30" style="vertical-align: -.105em;"/>
          </Cell>
        </CellGroup>
        <!-- 打卡时间轴 -->
        <Timeline style="padding: 16px;" v-if="list.length !== 0">
          <TimelineItem v-for="(item, index) in list" :key="index">
              <CellGroup>
                <Cell :title="getTitle(item.start_time, item.status)"></Cell>
              </CellGroup>
              <Collapse v-model="item._id" >
                  <Panel name="1">
                     {{item.title}}
                      <template v-if="item.concent.length !== 0">
                         <Timeline slot="content" v-for="(val, key) in item.concent" :key="key" pending>
                           <TimelineItem>
                              <p class="time">{{val.create_time | dateFormat}}</p>
                              <p class="content">{{val.title}}</p>
                            </TimelineItem>
                             <TimelineItem v-if="item.status === 0">
                               <span style="cursor: pointer; color: #2b85e4;">打卡进行中~</span>
                            </TimelineItem>
                            <TimelineItem v-else>
                               <span style="cursor: pointer; color: #333;">打卡已结束~</span>
                            </TimelineItem>
                         </Timeline>
                      </template>
                       <span class="null-box-small" slot="content" v-else>当前打卡暂无内容</span>
                  </Panel>
              </Collapse>
          </TimelineItem>
        </Timeline>
        <span class="null-box" v-else>当前年份暂无内容</span>
    </div>
</template>

<script>
export default {
  name: 'Cause',
  data () {
    return {
      value1: '1',
      label: '',
      numInfo: {},
      list: []
    }
  },
  created () {
    this.clockInfo()
    this.collatingData()
  },
  filters: {
    dateFormat (val) {
      let str = new Date(val).getHours() <= 12 ? 'AM' : 'PM'
      return val.split('T')[0] + ' ' + str
    }
  },
  methods: {
    getTitle (val, status) {
      let str = status === 0 ? ' 开始 ' : ' 结束 '
      return val.split('T')[0].replace(/-/g, '/') + str
    },
    clockInfo () {
      this.$apis.clockInfo().then(res => {
        if (res.data.errCode === 200) {
          this.numInfo = res.data.data
          this.label = '目前共计 ' + this.numInfo.num + ' 个打卡，进行中 ' + this.numInfo.onNum + ' 个， 有 ' + this.numInfo.conNumm + ' 条记录。'
        } else {
          this.$Message.error(res.data.errMsg)
        }
      }).catch(() => {
        this.$Message.error('服务器开小差了~')
      })
    },
    collatingData () {
      let obj = JSON.parse(sessionStorage.getItem('clock'))
      let title = obj.doc || []
      let concent = obj.concent || []
      for (let i = 0; i < title.length; i++) {
        title[i].concent = []
        for (let j = 0; j < concent.length; j++) {
          if (concent[j].clock_id === title[i].clock_id) {
            title[i].concent.push(concent[j])
            concent.splice(j, 1)
          }
        }
      }
      this.list = title
    }
  }
}
</script>

<style lang="less" scoped>
    .cause-root {
        width: 100%;
        min-height: 100px;
        height: auto;
        border-radius: 4px;
        background-color: #fff;
        padding-bottom: 20px;
    }
    .cause-title {
      width: 100%;
      height: auto;
      border-radius: 4px 4px 0px 0px;
      overflow: hidden;
    }
    .null-box {
         display: inline-block;
         width: 100%;
         font-size: 1.2em;
         color: #000;
         text-align: center;
       }
    .null-box-small {
      display: inline-block;
         width: 100%;
         font-size: 1em;
         color: #666;
         text-align: center;
    }
</style>
