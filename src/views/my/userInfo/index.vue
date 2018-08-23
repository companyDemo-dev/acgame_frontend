
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>

  <md-field title="">
    <md-field-item name="item1" title="用户头像" arrow="arrow-right" solid style="padding: 20px 0;">
      <div class="icon" style="margin-right: 10px;flex:1 1 0;text-align: center;" slot="right">
        <img width="60" height="60" style="border-radius: 50px;" :src="objData.avatarUrl">
      </div>
    </md-field-item>
  </md-field>

  <md-field title="">
    <div>
      <md-field-item class="border-b" name="item2" title="当前账号" arrow="arrow-right">
        <div class="" slot="right">
          {{objData.phone | substring}}
        </div>
      </md-field-item>
    </div>
    <div @touchstart.stop.prevent="actDialog = true">
      <md-field-item class="border-b" name="item0" title="用户昵称" arrow="arrow-right" value="" align="left">
        <div class="" slot="right">
          {{objData.nickName}}
        </div>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>

    <div v-transfer-dom>
      <confirm v-model="actDialog" show-input ref="confirm" title="用户昵称" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
      </confirm>
    </div>


    <div @touchstart.stop.prevent="toAbout">
      <md-field-item name="item0" title="关于我们" arrow="arrow-right" value="" align="left">
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
  </md-field>

  <div  class="dis_flex"  style="padding: 10px 20px;">

    <!-- <div style=" flex:1;margin-left: 10px;" @touchstart.stop.prevent="toEdit">
      <md-button size="large" style="width: 100%;height: 45px;font-size: 18px;background:#ef4f4f">退出登录</md-button>
    </div> -->
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import {
  Toast
} from 'mand-mobile'

import {
  Confirm,
  Group,
  XSwitch,
  XButton,
  TransferDomDirective as TransferDom
} from 'vux'

import {
  getUser,
} from '@/utils/auth'

import {
  setnickname,
} from '@/api/my'


export default {
  name: 'field-demo',
  directives: {
    TransferDom
  },
  components: {
    topNav,
    Confirm,
    Group,
    XSwitch,
    XButton
  },

  data() {
    return {
      actDialog: false,
      objData: {
        nickName: '',
        phone: '',
        avatarUrl: '',
      }
    }
  },
  mounted() {
    this.objData = JSON.parse(getUser())
  },
  methods: {
    onShow() {
      this.$refs.confirm.setInputValue(this.objData.nickName)
    },
    onHide() {
      console.log('on hide')
    },
    onCancel() {
      // Toast({
      //   content: '你点击了取消',
      // })
      this.actDialog = false
    },
    async onConfirm(value) {
      let obj ={}
      obj.nickName = value
    if (!this.validata.validaUserName(obj)) return
      let {
        code,
        msg
      } = await setnickname(obj)
      this.objData.nickName = value
        Toast({
          content: msg,
        })
        this.actDialog = false
    },
    toAbout() {
      this.$router.push({
        path: '/my/userInfo/aboutUs'
      })
    },
    toLogin() {
      this.$store.commit('showLogindex')
    },
  },
}
</script>

<style lang="stylus" scoped>
.md-example-child-field-0
  .md-field
    margin-bottom 10px
  .md-input-item
    background #FFF
    padding 0 32px
  .strong-tip
    font-size 24px
    color color-text-highlight
</style>
<style>
.md-field-item .md-field-item-content.right {
  font-size: 16px;
}
</style>
