<template>
   <!-- 导航栏部分 -->
    <Row class="nav">
      <!-- 移动端图标 -->
      <Col span="4" push="1"  :md="{span: 0}" style="line-height: 65px;">
       <Dropdown trigger="click" :transfer="transfer">
        <a href="javascript:void(0)">
            <Icon type="ios-menu" size="32" color="#666" />
        </a>
        <DropdownMenu slot="list">
            <DropdownItem v-for="(item, index) in menuItemList" :key="index" @click.native="$router.push(item.path)">{{item.name}}</DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </Col>
      <!-- 导航栏标题 -->
      <Col span="14" push="6" :md="{span: 10, push: 2}">
        <span style="cursor: pointer;" class="nav-text">分享我的故事</span>
      </Col>
      <!-- 导航栏功能组 -->
      <Col span="0" :md="{span: 12, offset: 2, pull: 1}" style="height: 100%;">
        <Menu mode="horizontal" :active-name="activateNum" class="group-item">
          <MenuItem v-for="(item, index) in menuItemList" :name="index" :to="item.path" :key="index" class="items">
              {{item.name}}
          </MenuItem>
        </Menu>
      </Col>
    </Row>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    activateNum: Number
  },
  data () {
    return {
      menuItemList: [
        {name: '首页', icon: '', path: '/'},
        {name: '归档', icon: '', path: '/quantity'},
        {name: '动态', icon: '', path: '/'},
        {name: '关于我', icon: '', path: '/'}
      ],
      transfer: true
    }
  }
}
</script>

<style lang="less" scoped>
  .nav {
    width: 100%;
    height: 65px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 19;
  }
  .nav-text {
      font-size: 1.6em;
      letter-spacing: 1px;
      line-height: 65px;

  }
  .group-item {
      height: 100%;
      float: right;
      .items {
        width: auto;
        margin-right: 15px;
      }
    }
</style>
