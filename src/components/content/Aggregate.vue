<template>
    <div class="aggregate-root">
      <!-- 标题部分 -->
        <CellGroup>
          <Cell title="文章归档" label="目前共计 9 篇日志，共 33 条评论，加油啊~">
              <Icon type="md-bookmarks" slot="icon"  size="30" style="vertical-align: -.105em;"/>
          </Cell>
        </CellGroup>
         <Dropdown style="padding: 10px 16px;" trigger="click" transfer  transfer-class-name="transfer-style" >
           <div class="time-dropdown">
             <span style="font-size:1.3em;font-weight: 600;">2018年</span>
             <Icon type="md-code-working" size="20" style="vertical-align: sub; transform: rotate(90deg);"/>   
           </div>
           <DropdownMenu slot="list">
               <DropdownItem>2018年</DropdownItem>
               <DropdownItem>2019年</DropdownItem>
           </DropdownMenu>
        </Dropdown>
        <Timeline slot="content" style="padding: 16px;">
            <TimelineItem v-for="(item, index) in 6" :key="index">
                <p class="timeColumn">{{(index + 1) * 2}}月</p>
                <List border>
                   <ListItem>This is a piece of text.</ListItem>
                   <ListItem>This is a piece of text.</ListItem>
                   <ListItem>This is a piece of text.</ListItem>
                </List>
            </TimelineItem>
        </Timeline>
    </div>
</template>

<script>
export default {
  name: 'Aggregate',
  data () {
    return {
      transfer: true
    }
  }
}
</script>

<style lang="less">
    .aggregate-root {
        width: 100%;
        min-height: 150px;
        // max-height: 1500px;
        height: auto;
        border-radius: 4px;
        background-color: #fff;
        padding-bottom: 38px;
       
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
</style>
