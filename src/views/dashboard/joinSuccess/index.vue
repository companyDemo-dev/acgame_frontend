<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <div class="text-c" style="margin:10px">
    <i class="iconfont icon-success" style="color: #32ab31;font-size: 89px;"></i>
    <div class="textBase" style="font-size: 18px;">
      {{successCon}}
    </div>
    <div style="margin: 10px;"  @touchstart.stop.prevent="backToDetail">
      <md-button size="large"  style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;margin-top:85px">{{buttonCon}}</md-button>
    </div>
  </div>

</div>
</template>

<script>
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
      selected: 'account',
      successCon: '',
      buttonCon: '',
      winnerPortionNum:''
    }
  },

  mounted() {//标题处理 App.vue
    let isSuccess = this.$store.state.recharge.isSuccess
    debugger
    if (isSuccess == 'virtual') {
      this.successCon = '充值成功'
      this.buttonCon = '查看我的资产'
    } else if (isSuccess == 'goods' ) {
      this.successCon = '充值成功'
      this.buttonCon = '查看进度'
    }else if (isSuccess == 'buy') {
      this.successCon = '成功购买8人次'
      this.buttonCon = '查看进度'
    }else if (isSuccess == 'Receive') {
      this.successCon = '领取成功'
      this.buttonCon = '查看我的资产'
    }else if (isSuccess == 'putForward') {
      this.successCon = '提现成功'
      this.buttonCon = '查看我的资产'
    }
    if (this.$route.query.winnerPortionNum) {
      this.successCon = '成功购买'+this.$route.query.winnerPortionNum+'人次'
    }

  },

  methods: {
    backToDetail() {
      let isSuccess = this.$store.state.recharge.isSuccess
      if (isSuccess == 'buy') {
        window.history.go(-1);
      } else if (isSuccess == 'Receive') {
        this.$router.push({
          path: '/my/asset/virtualCoin',
          query: {
            symbo: 'INSUR'
          }
        })

      }else if (isSuccess == 'virtual' || isSuccess == 'putForward'){
        window.history.go(-3);
      }else {
        window.history.go(-2);
      }
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
