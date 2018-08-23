
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>

  <div class="" style="padding:10px;font-size: 16px;">
    订单商品:
  </div>
  <div class="dis_flex border-b border-t" style="padding:10px;font-size:18px;background:#FFF;">
    <div class="icon" style="margin-right: 10px;flex:1 1 0;text-align: center;">
      <img width="80" height="80" :src="objData.pCover">
    </div>
    <div style="flex:3 1 0;font-size: 12px;">

      <div style="margin-top: 5px;">

        <div style="font-size: 16px;">
          <li style="font-size: 14px;color: #07111b;font-weght:500;"> <span class='periods' style="width:60px;">{{objData.period}}期</span>{{objData.pTitle}}
          </li>
        </div>
      </div>

      <div style="margin-top: 6px;">
        <div class="extra">
          <span class="count textGeryc" style="margin:0">揭晓时间：{{objData.lotteryTime}}</span>
        </div>
      </div>

    </div>
  </div>
  <div class="" v-if="prizeType == '1'">
    <div class="" style="padding:10px;font-size: 16px;">
      收货地址:
    </div>
    <div class="dis_flex border-b border-t" style="padding:10px;font-size:18px;background:#FFF">
      <div style="flex:15 1 0;font-size: 12px;">

        <div style="margin-top: 5px;">
          <div style="font-size: 16px;height: 30px;">
            <div style="float:left">{{objData.realName}}</div>
            <div style="float:left;margin-left: 30px;">{{objData.phone}}</div>
          </div>
        </div>
        <div style="">
          <div class="extra">
            <span class="count textGeryc" style="margin:0;font-size:16px;">{{objData.address}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="dis_flex border-b border-t" style="padding:10px;font-size:18px;background:#FFF;margin-top:10px;">
    <div style="flex:15 1 0;font-size: 12px;">

      <div style="margin-top: 5px;">
        <div style="font-size: 16px;height: 30px;">
          <div v-if="objData.status == '1'" style="float:left">订单状态：发货中</div>
          <div v-if="objData.status == '2' && prizeType == '1'" style="float:left">订单状态：已发货</div>
          <div v-if="prizeType == '2'" style="float:left">订单状态：已到账</div>
          <!-- <div v-if="objData.status == '2'" style="float:left">订单号：顺丰快递 123123123</div> -->
        </div>
      </div>

    </div>
  </div>


  <div class="dis_flex" style="padding: 10px 20px;">
    <div style="flex:1;margin-left: 10px;" @touchstart.stop.prevent="toEdit">
      <md-button size="large" style="width: 100%;height: 45px;font-size: 18px;">返回</md-button>
    </div>
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import {
  getAwardOrder,
} from '@/api/dashboard'
import {
  formatTime
} from '@/utils/index'

export default {
  name: 'field-demo',
  components: {
    topNav,
  },
  data() {
    return {
      objData: {
        pCover: '',
        period: '',
        pTitle: '',
        lotteryTime: '',
      },
      prizeType: ''
    }
  },
  mounted() {
    if (this.$route.query.awardId) {
      this.loadData(this.$route.query.awardId)
      this.prizeType = this.$route.query.prizeType
    } else if (this.$route.query.data) {
      let obj = JSON.parse(this.$route.query.data)
      this.objData.pCover = obj.cover
      this.objData.period = obj.period
      this.objData.pTitle = obj.title
      this.objData.lotteryTime = this.$route.query.lotteryTime
      this.prizeType = obj.prizeType
    }
  },
  methods: {
    async loadData(awardId) {
      let {
        award,
      } = await getAwardOrder(awardId)
      this.objData = award
      this.objData.lotteryTime = formatTime(parseInt(award.lotteryTime))
    },
    toEdit() {
      if (this.$route.query.prizeType == "1") {
        window.history.go(-2);
      } else {
        window.history.go(-1);
      }
    },
    toAsset() {
      this.$router.push({
        path: '/my/asset'
      })
    },
    toLogin() {
      this.$store.commit('showLogindex')
    }
  },
}
</script>

<style >

</style>
