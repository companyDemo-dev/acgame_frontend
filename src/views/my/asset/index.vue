
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>

  <md-field title="">
    <div v-tap="{methods : toVirtualCoin,name : item.name}"  v-for="(item,index) in list">
      <md-field-item v-if="item.name != 'ACG'" name="item0" class="border-b" :title="item.name" arrow="arrow-right" value="" align="right">
        <div class="icon " style="flex:1 1 0;text-align: center;padding:5px" slot="left">
          <img width="60" height="60" style="" :src="item.iconUrl">
        </div>
        <div class="" slot="right">
          {{item.amount}}
        </div>
        <i class="iconfont icon-right" slot="right"></i>
      </md-field-item>
    </div>
    <div v-tap="{methods : toVirtualCoin,name : item.name}"  v-for="(item,index) in list">
      <md-field-item v-if="item.name == 'ACG'" name="item0" class="border-b" title="ACG" arrow="arrow-right" value="" align="right">
        <div class="icon " style="flex:1 1 0;text-align: center;padding:5px" slot="left">
          <img width="60" height="60" style="":src="item.iconUrl">
        </div>
        <div class="" slot="right">
          即将支持
        </div>
      </md-field-item>
    </div>
  </md-field>
  <div class="button" style="padding:30px;text-align:center;font-size:16px" @touchstart.stop.prevent="toRecord">
    查看交易记录
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import {
  getAssetsList,
} from '@/api/my'

export default {
  name: 'field-demo',
  components: {
    topNav,
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.loadList()
  },
  methods: {
    async loadList() {
      let {
        assets,
      } = await getAssetsList()
        this.list = assets

    },
    toVirtualCoin(params) {
      let data = params.name
      if (data != 'ACG') {
        this.$router.push({
          path: '/my/asset/virtualCoin',
          query: {
            symbo: data
          }
        })
        this.$store.commit('successCon', {
          flag: data
        })
      }
    },
    toRecord() {
      this.$router.push({
        path: '/my/asset/tranRecord'
      })
    },
    toLogin() {
      this.$store.commit('showLogindex')
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>
.md-field-item .md-field-item-extra {
  margin-right: 5px;
}
</style>
