
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>

  <md-field class="border-b" title="" style="font-size:14px;">
    <md-field-item name="item0" title="售罄时间" arrow="arrow-right" value="" align="left">
      <div slot="right">{{objData.lotteryTime}}</div>
    </md-field-item>
    <md-field-item name="item0" title="售罄时区块号" arrow="arrow-right" value="" align="left" @click="goExp(objData.blockNum)">
      <div slot="right" style="color:#09a7e6">{{objData.blockNum}}</div>
    </md-field-item>
    <md-field-item name="item0" title="幸运区块号" arrow="arrow-right" value="" align="left" @click="goExp(objData.blockNum + 50)">
      <div slot="right" style="color:#09a7e6">{{objData.blockNum}}+50</div>
    </md-field-item>
    <md-field-item name="item0" title="幸运区块哈希值" arrow="arrow-right" value="" align="left">
      <div slot="right" v-if="objData.luckyHash == null">等待确认</div>
      <div slot="right" v-if="objData.luckyHash != null">{{objData.luckyHash}}</div>
    </md-field-item>
    <md-field-item name="item0" title="夺宝总人次" arrow="arrow-right" value="" align="left">
      <div slot="right">{{objData.totalPortion}}</div>
    </md-field-item>
    <md-field-item name="item0" title="本期幸运号码" arrow="arrow-right" value="" align="left">
      <div slot="right"  v-if="objData.luckyNum || objData.luckyNum == 0" style="color:#f01414">{{objData.luckyNum}}</div>
      <div slot="right"  v-if="!objData.luckyNum && objData.luckyNum !=0" style="color:#f01414">等待揭晓</div>
    </md-field-item>
  </md-field>
  <div class="around-border" style="padding: 20px;margin: 10px;">
    <table style="text-align: center;width: 100%;">
      <tr class="textGeryc">
        <th>faw89gh7转10进制</th>
        <th>取余</th>
        <th>夺宝总人次</th>
        <td></td>
        <th>幸运号码</th>
      </tr>
      <tr style="font-size:16px;">
        <td>{{objData.luckyHashTEN}}</td>
        <td>%</td>
        <td>{{objData.totalPortion}}</td>
        <td>=</td>
        <td style="color:#f01414">{{objData.luckyNum}}</td>
      </tr>
    </table>
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'
import {
  getProductDetaillottery
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
      objData: '',
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    goExp(blockNum) {
      location.href = 'http://browser.insurchain.org/#/Details/' + blockNum;
    },
    async loadData() {
      let {
        productLottery,
      } = await getProductDetaillottery(this.$route.query.pid)
      this.objData = productLottery
      if(productLottery.lotteryTime != null){
        this.objData.lotteryTime = formatTime(parseInt(productLottery.lotteryTime))
      }else{
        this.objData.lotteryTime = 'null'
      }
      if(productLottery.luckyHash != null){
        debugger
        this.objData.luckyHashTEN = parseInt(productLottery.luckyHash,16)
        this.objData.luckyNum = this.objData.luckyHashTEN  %  this.objData.totalPortion
      }else{
        this.objData.luckyHashTEN = '********'
        this.objData.luckyNum = '****'
      }
      // this.objData.average
    },
  },
}
</script>


<style lang="stylus" scoped>
.md-example-child-field-0
  .md-field
    margin-bottom 20px
  .md-input-item
    background #FFF
    padding 0 32px
  .strong-tip
    font-size 24px
    color color-text-highlight
</style>
