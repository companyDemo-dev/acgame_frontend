
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <!-- <div >
      <router-link :to="{path:'/my/orderEdit/addAddress'}" style="text-decoration: none;" class="click-background">
    <div class="click-background border-b" >
      <div style="flex:3 1 0;font-size: 14px;text-align: center;background: #fff;padding: 20px;">
        <i class="iconfont icon-tianjia red" style="font-size: 12px;"></i> <span class="red">添加收货地址</span>
      </div>
    </div>
    </router-link>
</div> -->
  <div class="" v-for="item in list">
    <div v-if="list.length > 0" class="border-b dis_flex" style="padding:10px;font-size:18px;background:#FFF">
      <div class="icon" style="margin-right: 10px;flex:1 1 0;text-align: center; display: flex;align-items: Center;">
        <i class="iconfont icon-weibiaoti-3 red" style="font-size: 24px;"></i>
      </div>
      <div style="flex:15 1 0;font-size: 12px;">

        <div style="margin-top: 5px;">
          <div style="font-size: 16px;height: 30px;color: #000;">
            <div style="float:left">{{item.realName}}</div>
            <div style="float:left;margin-left: 30px;">{{item.phone}}</div>
          </div>
        </div>
        <div style="">
          <div class="extra">
            <span class="count textGeryc" style="margin:0;font-size:16px;">{{item.address}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div v-if="list.length == 0">
    <router-link :to="{path:'/my/orderEdit/addAddress'}" style="text-decoration: none;" class="click-background">
      <div class="click-background border-b">
        <div style="flex:3 1 0;font-size: 18px;text-align: center;background: #fff;padding: 20px;">
          <i class="iconfont icon-tianjia red" style="font-size: 12px;"></i> <span class="red">添加收货地址</span>
        </div>
      </div>
    </router-link>
  </div>
  <div class="border-b border-t dis_flex" style="padding:10px;font-size:18px;background:#FFF;margin-top:10px;">
    <div class="icon" style="margin-right: 10px;flex:1 1 0;text-align: center;">
      <img width="80" height="80" :src="objData.cover">
    </div>
    <div style="flex:3 1 0;font-size: 12px;">

      <div style="margin-top: 5px;">
        <div style="font-size: 16px;">
          <li style="font-size: 14px;color: #07111b;font-weght:500;"> <span class='periods' style="width:60px;">{{objData.period}}期</span>{{objData.title}}
          </li>
        </div>
      </div>

      <div style="margin-top: 6px;">
        <div class="extra">
          <span class="count textGeryc" style="margin:0">揭晓时间：2018-7-15 2:10:03</span>
        </div>
      </div>

    </div>
  </div>

  <div class="dis_flex" style="padding: 10px 20px;">

    <div style=" flex:1;margin-left: 10px;" @touchstart.stop.prevent="submint">
      <md-button size="large" style="width: 100%;height: 45px;font-size: 18px;">提交订单</md-button>
    </div>
    <div v-transfer-dom>
      <confirm v-model="show" :close-on-confirm="false" title="" @on-confirm="onConfirm">
        <p style="text-align:center;">收货地址一旦提交无法修改，请确认信息填写无误。</p>
      </confirm>
    </div>




  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import {
  Confirm,
  Group,
  XSwitch,
  XButton,
  TransferDomDirective as TransferDom
} from 'vux'

import {
  getAddresses,
} from '@/api/my'

import {
  getProducts,
} from '@/api/dashboard'

import {
  Toast
} from 'mand-mobile'

export default {
  name: 'field-demo',
  data() {
    return {
      show: false,
      list: [],
      addressId: '',
      objData: '',
      prizeType: ''
    }
  },
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
  mounted() {
    if (this.$route.query.data) {
      this.objData = JSON.parse(this.$route.query.data)
      this.prizeType = this.$route.query.prizeType
    }
    this.loadData()
  },
  methods: {
    async loadData() {
      let {
        addresses,
      } = await getAddresses()
      if (addresses.length > 0) {
        this.list.push(addresses[0])
        this.addressId = addresses[0].id
      }
    },
    toDetails() {
      this.$router.push({
        path: '/dashboard/orderEdit/orderDetails'
      })
    },
    onCancel() {
      console.log('on cancel')
    },
    submint() {
      if (this.list.length <= 0) {
        Toast({
          content: '请填写收货地址！',
        })
        return
      }
      this.show = true
    },
    async onConfirm(msg) {
      let obj = {}
      obj.addressId = this.addressId
      let {
        data,
        code
      } = await getProducts(obj, this.objData.id)
      if (code == 200) {
        debugger
        Toast({
          content: '订单提交成功',
        })
        this.$router.push({
          path: '/dashboard/orderEdit/orderDetails',
          query: {
            awardId: data.awardId,
            prizeType: this.prizeType
          }
        })
      }

    },
    onHide() {
      console.log('on hide')
    },
    onShow() {
      console.log('on show')
    },
    onClick(name) {
      Dialog.alert({
        content: `点击了 ${name}`,
      })
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
