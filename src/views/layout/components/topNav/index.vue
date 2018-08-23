<template>
  <mt-header :title="headerTitle">
    <mt-button v-if="headerTitle != '最新成交' && headerTitle != '币众' && headerTitle != '我的'" icon="back" slot="left" @click="goBack"></mt-button>
    <!-- <mt-button icon="more" slot="right"></mt-button> -->
  </mt-header>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: 'topNav',
  computed: mapState({
    // avatar: state => state.data.self.avatar,
    headerTitle: state => state.nav.headerTitle
  }),
  methods: {
    goBack() {
      this.$store.commit('bisBack', { flag: true })
     　window.history.go(-1)
    }
    // ...mapMutations(['showSidebar', 'showSearch']),
    // showSidebar_x(flag) {
    //   this.showSidebar({
    //     flag
    //   })
    // }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mu-appbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: '';
}
.mu-avatar {
    margin-left: 12px;
}
.title {
    padding-right: 12px;
}
.title-item {
    margin: 0 auto;
    width: 48%;
    height: 34px;
    line-height: 30px;
    text-align: center;
    border: 1px solid '';
    border-radius: 4px;
    font-weight: 500;
    background: '';
    color: '';
}
</style>
