<template>
<div id="main">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <md-notice-bar>没有设置过资金密码的用户，请到“InsurBox-我的-安全中心”设置</md-notice-bar>
  <div class="text-c" style="margin:10px">
    将币众中的INSUR资产转移到您的InsurBox账户
  </div>


  <div class="" @touchstart.stop.prevent="amountRef">
  <group >
    <x-input v-show='toWithdrawing' title="提现金额" onfocus="this.blur()" name="" keyboard="number" type="tel" v-model="amount" placeholder="请输入提现金额" min="0.0001"></x-input>
  </group>
  </div>
  <md-number-keyboard v-model="isKeyBoardShow" @enter="onNumberEnter" @delete="onNumberDelete"></md-number-keyboard>

  <div style="margin: 10px;" @touchstart.stop.prevent="toWithdraw">
    <md-button size="large" style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;">提现</md-button>
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
  recharge
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
      code: '请输入验证码',
      selected: 'account',
      openid: window.localStorage.getItem('openid'),
      amount: '',
      choosePay: {
        appId: '',
        jsTimeStamp: 0,
        nonce: '',
        prepayId: '',
        signature: '',
        toWithdrawing : true
      }
    }
  },
  async mounted() {
    this.loadjssdkSign()
    this.isKeyBoardShow = true
  },
  methods: {
      amountRef() {
        this.isKeyBoardShow = true
      },

      onNumberEnter(val) {
        this.amount += val
      },
      onNumberDelete() {
        if (this.amount === '') {
          return
        }
        this.amount = this.amount.substr(0, this.amount.length - 1)
      },
    async toWithdraw() {
        this.toWithdrawing = false

      if (!this.validata.validawithdraw(parseFloat(this.amount))) return
      let obj = {}
      obj.openid = this.openid
      obj.amount = parseFloat(this.amount)
      obj.sequenceNo = this.getSequenceNo(2, 'INSUR')
      let data = await withdraw(obj)
      if (data) {
        Toast({
          content: '提取成功',
        })
        // location.href =  `https://${location.hostname}/#/my/asset/tranRecord`
        this.$router.push({
          path: '/my/asset/tranRecord',
        })
        this.$store.commit('successCon', {
          flag: 'INSUR'
        })//顶部条标题
      }
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

        },
        fail: function(res) {
          Toast({
            content: JSON.stringify(res),
          })
          // {code:400, msg:"内部错误", result:{}}
        }
      });
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
