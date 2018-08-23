<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <div class="">
    <span v-show="selectedShow == '0'"> <img  :src="detail1" width="100%" alt=""></span>
      <span v-show="selectedShow == '1'"> <img  :src="detail2" width="100%" alt=""></span>
  </div>
  <!-- <div class="container-bottom">
    <div @touchstart.stop.prevent="toBuy">
      <md-button size="large" style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;">立即购买</md-button>
    </div>
  </div> -->
</div>
</template>

<script>
import detail1 from '@/assets/images/detail1.jpg'
import detail2 from '@/assets/images/detail2.jpg'

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
      detail2,
      selected: 'account',
      selectedShow :'0'
    }
  },
  mounted() {

    if (this.$route.query.name) {

      this.selectedShow = this.$route.query.name
    }

  },
  methods: {
    toBuy() {
      this.$router.push({
        path: '/dashboard/goodsDetail'
      })
    },
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
