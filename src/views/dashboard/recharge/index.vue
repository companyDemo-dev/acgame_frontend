<template>
<div id="main">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <md-notice-bar>没有设置过资金密码的用户，请到“InsurBox-我的-安全中心”设置</md-notice-bar>
  <div class="text-c" style="margin:10px">
    将InsurBox中的INSUR资产转移到您的币众的账户
  </div>
  <!-- <md-field title="">
    <md-input-item title="充值金额" type="money" v-model="total_fee"></md-input-item>
  </md-field> -->
  <div v-show='toRechargeing'>
    <div class="" @touchstart.stop.prevent="total_feeRef">
      <group>
        <x-input title="充值金额" name="" onfocus="this.blur()" type="tel" keyboard="number" v-model="total_fee" placeholder="请输入充值金额" min="0.0001"></x-input>
      </group>
    </div>

    <md-number-keyboard v-model="isKeyBoardShow" @enter="onNumberEnter" @delete="onNumberDelete"></md-number-keyboard>

    <div class="text-c" style="margin:10px">
      *请确保账户余额充足，此次充值将不收取手续费
    </div>
    <div style="margin: 10px;" @touchstart.stop.prevent="toRecharge">
      <md-button size="large" style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;">充值</md-button>
    </div>

  </div>
</div>
</template>

<script>
import {
  topNav
} from '@/views/layout/components'
import {
  XInput,
  Group
} from 'vux'
import {
  jssdkSign,
  withdraw,
  recharge,
  out_trade_no
} from '@/api/jssdk'

import {
  Toast
} from 'mand-mobile'

export default {
  components: {
    topNav,
    XInput,
    Group
  },
  data() {
    return {
      isKeyBoardShow: false,
      jycz: true,
      selected: 'account',
      openid: window.localStorage.getItem('openid'),
      total_fee: '',
      out_trade_no: '',
      choosePay: {
        appId: '',
        jsTimeStamp: 0,
        nonce: '',
        prepayId: '',
        signature: '',
      },
      toRechargeing: true
    }
  },
  async mounted() {
    this.loadjssdkSign()
    this.isKeyBoardShow = true
  },
  methods: {
    total_feeRef() {
      this.isKeyBoardShow = true
    },
    onNumberEnter(val) {
      this.total_fee += val
    },
    onNumberDelete() {
      if (this.total_fee === '') {
        return
      }
      this.total_fee = this.total_fee.substr(0, this.total_fee.length - 1)
    },
    async toRecharge() {
      if (!this.validata.validarecharge(parseFloat(this.total_fee))) return
      let obj = {}
      obj.openid = this.openid
      obj.total_fee = parseFloat(this.total_fee)
      obj.sequenceNo = this.getSequenceNo(1, 'INSUR')
      let {
        pre_pay_id,
        out_trade_no
      } = await recharge(obj)
      if (pre_pay_id) {
        this.toRechargeing = false
        this.choosePay.prepayId = pre_pay_id
        this.out_trade_no = out_trade_no
        InsurBox.choosePay({
          appId: this.choosePay.appId,
          jsTimeStamp: this.choosePay.jsTimeStamp,
          nonce: this.choosePay.nonce,
          prepayId: this.choosePay.prepayId, // 后端调用统一下单接口后返回该字段6. signature: '',
          signature: this.choosePay.signature,
          success: (res) => {
            Toast({
              content: '支付成功',
            })
            // location.href = `https://${location.hostname}/#/my/asset/tranRecord`
            this.$router.push({
              path: '/my/asset/tranRecord',
            })
            this.$store.commit('successCon', {
              flag: 'INSUR'
            }) //顶部条标题
          },
          cancel: (res) => {
            this.toRechargeing = true
          },
          fail: (res) => {
            this.toRechargeing = true
            Toast({
              content: '支付失败' + res.msg,
            })
          }
        })
      }
    },
    async loadout_trade_no() {
      let data = await out_trade_no(this.out_trade_no)
      Toast({
        // content: JSON.stringify(data),
        content: '取消支付',
      })
    },
    async loadjssdkSign() {
      let {
        appId,
        jsTimeStamp,
        nonce,
        signature
      } = await jssdkSign()
      this.choosePay.appId = appId
      this.choosePay.jsTimeStamp = jsTimeStamp
      this.choosePay.nonce = nonce
      this.choosePay.signature = signature

      InsurBox.config({
        debug: true, // 调试预留字段 true|false, 生产环境请设置为false，目前无相
        appId: appId, // InsurBox 应用 appID
        jsTimeStamp: jsTimeStamp, // 时间戳，10位
        nonce: nonce, // 签名随机串 /^[a-zA-Z0-9]{6,32}$/
        signature: signature, // 签名信息 /^[A-Z0-9]{32}$/
        jsApiList: ['choosePay'] // JS API 接口, 如 config,checkJsApi
      });

      InsurBox.checkJsApi({
        jsApiList: ['choosePay'],
        success: function(res) {
          // Toast({
          //   content: '接口权限通过',
          // })
          if (res.choosePay) {

          }
        },
        fail: function(res) {
          Toast({
            content: JSON.stringify(res),
          })
          setTimeout(() => {
            Toast({
              content: '您的软件版本太低，请及时更新最新版本!',
            })
          }, 1000);
          // {code:400, msg:"内部错误", result:{}}
        }
      });
    }

  },
  watch: {　　
    toRechargeing: function(curVal) {
      if (curVal == true && this.out_trade_no != '') {
        this.loadout_trade_no()
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/index.scss";
#main {
    position: absolute;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #f4f4f6;
}
.weui-cell {
    display: flex!important;
}
</style>
