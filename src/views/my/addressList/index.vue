
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>

  <div class="" v-for="item in list" style="margin-bottom: 10px;">
    <div class="border-b dis_flex" style="padding:10px;font-size:18px;background:#FFF">
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
    <div class="b-w " style=" padding:10px;height:30px">
      <div style="float:right;margin-left: 10px;">
        <div style=" display: flex;">
          <div style="flex:1;align-items: Center; display: flex;">
            <i class="iconfont icon-shanchu" style="font-size: 20;"></i>
          </div>
          <div @touchstart.stop.prevent="toDel(item)" style="flex:3;align-items: Center; display: flex;margin-left: 5px;font-size: 14px;">
            删除
          </div>
        </div>
      </div>

      <div style="float:right;">
        <div style=" display: flex;">
          <div style="flex:1;align-items: Center; display: flex;">
            <i class="iconfont icon-bianji " style="font-size: 20;"></i>
          </div>
          <div v-tap="{methods : toEdit,item : item}"   style="flex:3;align-items: Center; display: flex;margin-left: 5px;font-size: 14px;">
            编辑
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-transfer-dom>
    <confirm v-model="show" :close-on-confirm="false" title="" @on-confirm="onConfirm">
      <p style="text-align:center;">是否确认删除？</p>
    </confirm>
  </div>
  <div v-if="list.length == 0">
    <div class="click-background border-b" v-tap="{methods : toEdit}" >
      <div style="flex:3 1 0;font-size: 14px;text-align: center;background: #fff;padding: 20px;">
        <i class="iconfont icon-tianjia red" style="font-size: 12px;"></i> <span class="red">添加收货地址</span>
      </div>
    </div>

  </div>


</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import {
  Dialog
} from 'mand-mobile'

import {
  getAddresses,
  editAddresses
} from '@/api/my'

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

export default {
  name: 'field-demo',

  components: {
    topNav,
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data() {
    return {
      list: [],
      show: false,
      obj: ''
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      let {
        addresses,
      } = await getAddresses()
      this.list = addresses
    },
    onClick(name) {
      Dialog.alert({
        content: `点击了 ${name}`,
      })
    },

    onCancel() {
      console.log('on cancel')
    },
    async onConfirm() {
      this.obj.status = 0
      let {
        code,
        msg
      } = await editAddresses(this.obj)
      Toast({
        content: msg,
      })
      this.show = false
      this.loadData()
    },
    toDel(data) {
      this.show = true
      this.obj = data
    },
    toEdit(data) {
      this.$router.push({
        path: '/my/orderEdit/addAddress',
        query: {
          data: data.item
        }
      })
    }
  },
}
</script>

<style >

</style>
