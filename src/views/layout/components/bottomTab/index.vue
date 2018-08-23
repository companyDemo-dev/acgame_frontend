<template>
<mt-tabbar v-model="selected" class="is-fixed">
  <mt-tab-item id="/dashboard">
    <!-- <svg-icon icon-class="form"></svg-icon> -->
    <i class="iconfont icon-nav-deals"></i> 首页
  </mt-tab-item>
  <mt-tab-item id="/new">

    <i class="iconfont icon-nav-deals"></i> 最新成交
  </mt-tab-item>
  <mt-tab-item id="/my">
    <i class="iconfont icon-nav-mine"></i> 我的
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
export default {
  name: 'button-demo',
  data() {
    return {
      selected: 'dashboard'
    };
  },
  mounted() {
    this.selected = this.$route.path
  },
  components: {},
  watch: {
    // 点击按钮
    selected: function(val, oldVal) {
      // 路由跳转至当前点击的页面
      this.$router.push({
        path: val
      })

    },
    '$route' (to, from) {
       this.selected = to.path
    }

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.bottomNav {
    width: 100%;
}
.bottomNav li {
    width: 33%;
    float: left;
}
.mint-tab-item-icon:empty {
    display: block;
    width: 100%;
    height: 100%;
}
.svg-icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
}
.iconfont {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
}
.md-button.ghost-primary:after {

    border: 0;
}
.page-tabbar {
    overflow: hidden;
    height: 100vh;
}
.page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
}
</style>
