<template>
<div>
  <!-- <sidebar class="sidebar-container"></sidebar> -->
  <div v-if="show" class="container-top">
    <top-nav></top-nav>
  </div>

  <!--内容-->
  <div class="patch3"></div>

  <div class="container-content">

    <router-view></router-view>

  </div>

  <div class="patch8"></div>
  <!-- <app-main></app-main> -->
  <div class="container-bottom">
    <bottom-tab class="tab"></bottom-tab>
  </div>

</div>
</template>

<script>
import {
  bottomTab,
  topNav
} from '@/views/layout/components'




export default {
  name: 'layout',
  components: {
    bottomTab,
    topNav,
  },
  data() {
    return {
      show: true
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/acgame.styl'
</style>

<style lang="scss">
@import '../../styles/index.scss'; // 全局自定义的css样式
</style>
