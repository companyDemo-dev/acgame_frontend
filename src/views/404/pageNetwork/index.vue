<template>
<div  style="position:fixed;top:0px;top: 0px;width: 100%;height: 100%;background: #fff;font-size: 14px;">
  <div  @touchstart.stop.prevent="refresh" v-show="networkindex == 1" class="" style="text-align: center;padding:10%;position:relative;top:20%">
    <img :src="Banner1" width="40%" alt="">
    <div class="">
      网络连接异常
    </div>
  <div class="">
    点击屏幕，重新加载
  </div>
  </div>
  <div v-show="networkindex == 2" class="" style="text-align: center;padding:10%;position:relative;top:20%">
    <img :src="none" width="40%" alt="">
    <div class="">
      内测用户逐步开放中……
    </div>
  <div class="">
    币众即将正式上线
  </div>
<div class="">
  敬请期待！
</div>
  </div>
</div>
</template>

<script>
import Banner1 from '@/assets/images/error.png'
import none from '@/assets/images/none.png'
export default {
  name: 'result-page-demo',
  components: {},
  data() {
    return {
      Banner1,
      none,
      networkindex :this.$store.getters.networkindex
    }
  },
  mounted() {
    this.$vux.loading.hide()
  },
  methods: {
    refresh(){
    this.$store.commit('shownetwork',0)
        window.history.go(-1);
    }
  }

}
</script>

<style lang="stylus">
.md-result-page.customized
  img
    height 131px
</style>
