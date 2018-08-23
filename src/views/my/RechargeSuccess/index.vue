<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <div class="text-c" style="margin:10px">
    <i class="iconfont icon-success" style="color: #32ab31;font-size: 89px;"></i>
    <div class="textBase" style="font-size: 18px;">
      成功购买8人次
    </div>
    <div style="margin: 10px;" @touchstart.stop.prevent="backToDetail">
      <md-button size="large" style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;margin-top:85px">查看进度</md-button>
    </div>
  </div>

</div>
</template>

<script>
import Banner1 from '@/assets/images/Banner1.jpg'

import {
  topNav
} from '@/views/layout/components'

export default {
  components: {
    topNav,
  },
  data() {
    return {
      money: '请输入充值金额',
      Banner1,
      selected: 'account'
    }
  },
  methods: {
    backToDetail() {
        window.history.go(-2);
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.mint-tabbar {
    position: initial;
}
</style>

<style lang="stylus" scoped>
@import '../../../styles/acgame.styl'
</style>
