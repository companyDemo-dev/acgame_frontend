<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <div class="">
    <img :src="detail1" width="100%" alt="">
  </div>
</div>
</template>

<script>
import detail1 from '@/assets/images/detail1.jpg'

import {
  topNav
} from '@/views/layout/components'

export default {
  components: {
    topNav,
  },
  data() {
    return {
      detail1,
      selected: 'account'
    }
  },
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
