
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
  <div class="" style="padding:30px;font-size:16px">
  <span v-html="item.content"></span> 
  </div>
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
      item:{
        title:'',
        content:""
      }
    }
  },
  mounted() {
    if (this.$route.query.itemS) {
      this.item = JSON.parse(this.$route.query.itemS)
    }
  },

  methods: {
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

<style lang="stylus" scoped>

</style>
<style>

</style>
