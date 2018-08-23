
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <md-field title="">

    <div v-for="item in list">
      <div class="toDetailPage" v-show="item.content == 'jump'">
        <md-field-item v-show = '!item.border' name="item0" class="border-b" :title="item.title" arrow="arrow-right" value="" align="right">
          <div style="position: absolute;width: 100%;height: 54px;z-index: 1000;top: 0;left: 0;" v-tap="{methods : toDetailPage,url : item.url}" >
          </div>
          <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
        </md-field-item>

          <md-field-item v-show = 'item.border' name="item0"  :title="item.title" arrow="arrow-right" value="" align="right">
            <div style="position: absolute;width: 100%;height: 54px;z-index: 1000;top: 0;left: 0;" v-tap="{methods : toDetailPage,url : item.url}" >
            </div>
            <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
          </md-field-item>
      </div>
      <div class="toDetailPage" v-show="item.content != 'jump'">
        <md-field-item name="item0" v-show = '!item.border' class="border-b" :title="item.title" arrow="arrow-right" value="" align="right">
          <div style="position: absolute;width: 100%;height: 54px;z-index: 1000;top: 0;left: 0;" v-tap="{methods : toDetail,item : item}" @click.stop.prevent="toDetail(item)">
          </div>
          <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
        </md-field-item>
        <md-field-item name="item0" v-show = 'item.border' :title="item.title" arrow="arrow-right" value="" align="right">
          <div style="position: absolute;width: 100%;height: 54px;z-index: 1000;top: 0;left: 0;" v-tap="{methods : toDetail,item : item}" @click.stop.prevent="toDetail(item)">
          </div>
          <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
        </md-field-item>
      </div>

    </div>
  </md-field>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

export default {
  name: 'field-demo',
  components: {
    topNav,
  },
  data() {
    return {
      list: [{
        title: "什么是币众？",
        content: "币众是由ACGame（Anti-Cheating Game）联合InsurChain推出的一个区块链夺宝游戏。ACGame团队成员来自多家知名互联网公司，获得InsurFund基金战略投资，币众是首款应用，将首发在InsurBox客户端。",
        url: '',
        border :false
      }, {
        title: "为什么说区块链夺宝无法作弊？",
        content: "区块链夺宝基于区块链技术，根据未出块的区块签名，自动计算夺宝结果。由于区块签名(哈希值)的随机性和未知性，没有人能够预知，所以保证了结果的公平性。",
        url: '',
        border :false
      }, {
        title: "区块链夺宝结果是如何计算的？",
        content: "jump",
        url: '/my/commonProblem/rule',
        border :false
      }, {
        title: "如何参与区块链夺宝？",
        content: "jump",
        url: '/my/commonProblem/waytoplay',
        border :false
      }, {
        title: "可以用哪些数字资产进行夺宝？",
        content: "币众目前仅支持INSUR进行夺宝，未来还会陆续支持BTC、ETH等更多数字资产。<br>您可以关注ACGame微信公众号'ACGame Zone'，第一时间获取项目进度。",
        url: '',
        border :false
      }, {
        title: "没有数字资产，如何充值？",
        content: "您可以通过以下两种方式获得数字资产： <br>1.下载“InsurBox”APP，通过数据挖宝，免费获得INSUR数字资产奖励。 <br>2.前往OKEX，购买INSUR，将INSUR充值到InsurBox。 <br>InsurBox主账户中的INSUR可以转入至币众钱包，即可参与夺宝游戏。",
        url: '',
        border :false
      }, {
        title: "夺宝的商品有哪些？",
        content: "目前夺宝商品包括IPhone X、大疆、黄金、珠宝、京东购物卡等实物商品以及BTC、ETH、INSUR等虚拟货币商品。未来，还会陆续上线更多种类的商品。您可以关注ACGame微信公众号'ACGame_Zone'，第一时间获取项目进度。",
        url: '',
        border :false
      }, {
        title: "夺宝的商品都是一手正品吗？",
        content: "币众挑选优质服务品牌商家，对所有商品均保证正品行货，正规渠道发货。币众真诚提醒广大夺宝用户，在您收到商品的时候，请尽量亲自签收并当面拆箱验货，如果有问题(运输途中损坏、质量问题等)，请您不要私自处理，妥善保留好原包装，第一时间联系币众客服。",
        url: '',
        border :false
      }, {
        title: "夺宝成功后，怎么领取商品？",
        content: "夺宝成功后，您需要在3日内通过商品详情页提交收货地址。提交后，我们会尽快为您安排发货，您可以通过订单详情查看发货进度和快递单号。",
        url: '',
        border :false
      }, {
        title: "发货地址填错了怎么办？",
        content: "商品发货前，您可以通过“我的”-“联系我们”页面复制客服微信号，添加币众客服微信号反馈。",
        url: '',
        border :false
      }, {
        title: "如何联系我们？",
        content: "jump",
        url: '/my/contactUs',
        border :true
      }]
    }
  },
  methods: {
    toDetail(data) {
      this.$router.push({
        path: '/my/commonProblem/problemDetail',
        query: {
          itemS: JSON.stringify(data.item),
        }

      })
    },
    toDetailPage(data) {
      this.$router.push({
        path: data.url
      })
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>
.md-field .md-field-content .md-field-item,
.md-field .md-field-content .md-input-item-container {
  z-index: 1 !important;
}
</style>
