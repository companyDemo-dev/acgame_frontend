
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <md-field title="" >
    <div @touchstart.stop.prevent="toLogin">
      <md-field-item  name="item1" :title="objnickName" :brief="objmemberNum"  solid style="padding: 20px 0;">
        <div class="icon" style="margin-right: 10px;flex:1 1 0;text-align: center;" slot="left">
          <img width="70" height="70" style="border-radius: 50px;" :src="objData.avatarUrl">
        </div>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
  </md-field>

  <md-field title="">
    <div  @touchstart.stop.prevent="toAsset">
      <md-field-item class="border-b" name="item0" title="我的资产"  value="" align="left">
        <i class="iconfont icon-list-assets" slot="left"></i>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
    <div @touchstart.stop.prevent="toPart">
      <md-field-item class="border-b" name="item0" title="参与记录"  value="" align="left">
        <i class="iconfont icon-list-records" slot="left"></i>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
    <div @touchstart.stop.prevent="toAddress">
      <md-field-item name="item0" title="收货地址"  value="" align="left">
        <i class="iconfont icon-list-addresses" slot="left"></i>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
  </md-field>
  <md-field title="">
    <div @touchstart.stop.prevent="toProblem">
      <md-field-item class="border-b" name="item0" title="常见问题"  value="" align="left">
        <i class="iconfont icon-list-questions" slot="left"></i>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
    <div @touchstart.stop.prevent="toContact">
      <md-field-item name="item0" title="联系我们"  value="" align="left">
        <i class="iconfont icon-list-contact" slot="left"></i>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
  </md-field>

</div>
</template>
<script>
import {
  Dialog
} from 'mand-mobile'

import {
  getUsersDetail,
} from '@/api/my'

import {
  setUser,
} from '@/utils/auth'

export default {
  name: 'field-demo',
  components: {},
  data() {
    return {
      objData: '',
      objmemberNum:'',
      objnickName:'',
    }
  },
   mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      let {
        user
      } = await getUsersDetail()

        setUser(user)
        this.objData = user
        this.objnickName = '用户名：'+user.nickName
        this.objmemberNum = '币众第<a style="color:#09a7e6">'+user.memberNum +'</a>位居民'

    },
    toPart() {
      this.$router.push({
        path: '/my/partRecord'
      })
    },
    toAsset() {
      this.$router.push({
        path: '/my/asset'
      })
    },
    toAddress() {
      this.$router.push({
        path: '/my/orderEdit/addressList'
      })
      // this.$store.commit('showLogindex')

    },
    toContact() {
      this.$router.push({
        path: '/my/contactUs'
      })
      // this.$store.commit('showLogindex')

    },
    toProblem() {
      this.$router.push({
        path: '/my/commonProblem'
      })
      // this.$store.commit('showLogindex')

    },
    toLogin() {
      this.$router.push({
        path: '/my/userInfo'
      })
    },
  }
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
.gap-1 {
  height: 1vh
}
</style>
