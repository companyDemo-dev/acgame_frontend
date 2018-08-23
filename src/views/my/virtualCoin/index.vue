
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <md-field title="">

    <md-field-item name="item0" class="border-b" title="名称" arrow="arrow-right" value="" align="right">
      <div class="" slot="right" style="font-size:18px;font-weight:100">
      {{objData.name}}
      </div>
    </md-field-item>
    <md-field-item name="item0" class="border-b" title="数量" arrow="arrow-right" value="" align="right">
      <div class="red" slot="right" style="font-size:18px;font-weight:100">
      {{objData.amount}}
      </div>
    </md-field-item>
    <div class="" style="padding: 20px 0;font-size:16px">
      <div class="">
        简介
      </div>
      <div class="" style="padding:10px;font-size:12px">
      {{objData.description}}
      </div>
    </div>
  </md-field>

  <div >
    <div class="dis_flex" v-if="objData.open_recharge == 1" style="padding: 20px 20px 10px">
      <div style=" flex:1;margin-left: 10px;" @touchstart.stop.prevent="toRecharge">
        <md-button size="large" style="width: 100%;height: 45px;font-size: 18px;background:#ef4f4f">充值</md-button>
      </div>
    </div>
    <div class="dis_flex" v-if="objData.open_withdraw == 1" style="padding: 10px 20px;">
      <div style=" flex:1;margin-left: 10px;" @touchstart.stop.prevent="toPutForward">
        <md-button size="large" style="width: 100%;height: 45px;font-size: 18px;background:#5d8fe6">提现</md-button>
      </div>
    </div>
    <div class="dis_flex" v-if="objData.open_withdraw == 0 && objData.name == 'INSUR'" style="padding: 10px 20px;">
      <div style=" flex:1;margin-left: 10px;">
        <md-button size="large" type="default" disabled style="width: 100%;height: 45px;font-size: 18px;background: #ccc;
    color: #fff;">提现</md-button>
      </div>
    </div>
  </div>
  <div v-if=" objData.isShowTips == '1' " style="padding:10px;font-size:13px;text-align: center;">
    {{objData.tipsText}}
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import {
  getAssetsDetail,
} from '@/api/my'

export default {
  name: 'field-demo',
  components: {
    topNav
  },
  data() {
    return {
      way: '',
      objData: ''
    }
  },
  mounted() {
    if (this.$route.query.symbo) {
      let obj = {}
      obj.symbo = this.$route.query.symbo
      this.loadData(obj)
    }
  },
  methods: {
    async loadData(obj) {
      let {
        asset
      } = await getAssetsDetail(obj)
      this.objData = asset
    },
    toRecharge() {
      this.$router.push({
        path: '/dashboard/virtualCoin/recharge'
      })
      this.$store.commit('successCon', {
        flag: 'virtual'
      })
    },
    toPutForward() {
      this.$router.push({
        path: '/my/asset/virtualCoin/putForward'
      })
      this.$store.commit('successCon', {
        flag: 'putForward'
      })
    },

  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>

</style>
