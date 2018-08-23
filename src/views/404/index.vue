<template>
<div class="md-example-child md-example-child-result-page md-example-child-result-page-1">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <div style="text-align:center;font-size:14px;color: #ccc;margin-top: 30%;">
    <div style="">
      <i class="iconfont icon-tupianjiazaishibai03" style="font-size: 78px;"></i>
    </div>
    <div class="">
      页面加载失败
    </div>
  </div>
  <div class="dis_flex" style="padding: 10px 20px;">

    <div style=" flex:1;margin-left: 10px;" @touchstart.stop.prevent="toIndex">
      <md-button size="large" style="width: 200px;height: 45px;font-size: 18px;margin: auto;">刷新</md-button>
    </div>

  </div>
</div>
</template>

<script>
import {
  topNav
} from '@/views/layout/components'

export default {
  name: 'result-page-demo',
  data() {
    return {}
  },
  components: {
    topNav,
  },
  methods: {
    toIndex() {
      this.$router.push({
        path: '/dashboard'
      })
    },
  }
}
</script>

<style lang="stylus">
.md-result-page.customized
  img
    height 131px
</style>
