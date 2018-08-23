
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0" style="background:#fff">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>

  <div class="">
    <img :src="detail2" width="100%" alt="">
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import detail2 from '@/assets/images/detail2.jpg'
export default {
  name: 'field-demo',
  components: {
    topNav,
  },
  data() {
    return {
      detail2,
      item: {
        title: '',
        content: ""
      }
    }
  },
  mounted() {

  },

  methods: {

  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>

</style>
