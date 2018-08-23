
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0" style="background:#fff">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <md-field title="" class="border-b">
    <md-field-item name="item0"  :title="item.title" value="" align="right">

    </md-field-item>

  </md-field>
  <div  style="margin:25px;font-size:14px;background:#fff; ">
    <li style="margin-bottom:25px; ">1.用户使用数字资产INSUR购买夺宝人次，每购买1人次，将获得1个系统分配的夺宝号码。</li>
    <li style="margin-bottom:25px; ">2.当该商品的全部夺宝号码分配完毕后，区块链夺宝程序将自动计算出一个幸运号码(计算规则见下一条)， 持有该幸运号码的用户可直接获得该商品(通过快递发货)。</li>
    <li style="margin-bottom:25px; ">3.计算规则：当夺宝号码售罄时，系统会记录下当前InsurChain区块链最新的区块号， 同时等待幸运区块号的生成(售罄区块号+50)。待幸运区块号确认后(大约3-5分钟)，取幸运区块号签名(哈希值)的最后8位，转成10进制数字，基于夺宝总人次进行取余，得到的数字即为幸运号码。" <span style="color:#f59533"> (由于区块哈希值为随机数，无法人为干预，所以保证了幸运号码的随机性和公正性)</span>
    </li>
    <li> <img :src="gz3" alt="" style="width: 100%;"> </li>
    <li style="margin-bottom:25px;">4.ACGame保留对夺宝玩法的最终解释权。</li>
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import gz3 from '@/assets/images/gz3.jpg'
export default {
  name: 'field-demo',
  components: {
    topNav,
  },
  data() {
    return {
      gz3,
      item:{
        title:'',
        content:""
      }
    }
  },
  mounted() {

  },

  methods: {

  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>

</style>
