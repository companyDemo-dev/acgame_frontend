
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <main class="position-box">
    <vue-better-scroll class="wrapper" ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp">

      <md-field title="">
        <ul class="foods-wrapper" style="min-height: 95vh">
          <li v-for="item in list">
            <md-field-item name="item0" class="border-b" title="" arrow="arrow-right" value="" align="right">
              <div class="" slot="left" style="padding:10px;font-size:16px;">
                <div class="" style="padding-left:20px">
                  {{item.symbol}}{{item.channel}}
                </div>
                <div class="textGery" style="font-size:14px;height:22px;line-height:22px" v-if="item.status == 1">
                  {{item.endTime}}
                </div>
              </div>
              <div class="" style="padding:10px;font-size:16px;text-align: right;">
                <div class="" v-if="item.channel == '充值' || item.channel == '提现'">
                  <span v-show="item.status == 1" style="font-size:14px;color:#07c141">成功</span>
                  <span v-show="item.status == 2" style="font-size:14px;color:#ef4f4f">处理中</span>
                </div>
                <div class="" slot="right" style="font-size:14px;">
                  <span v-if="item.type == 1">+</span><span v-if="item.type == 0">-</span>{{item.amount}}
                </div>
              </div>

            </md-field-item>
          </li>
        </ul>
      </md-field>

    </vue-better-scroll>
  </main>


</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'

import VueBetterScroll from '@/components/lib'

import {
  getAsset_records,
} from '@/api/my'

import {
  formatTime
} from '@/utils/index'
export default {
  name: 'field-demo',
  components: {
    topNav,
    VueBetterScroll
  },
  data() {
    return {
      actDialog: false,
      list: [],

      // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
      scrollbarObj: {
        fade: true
      },
      // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
      pullDownRefreshObj: {
        threshold: 90,
        stop: 40
      },
      // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
        }
      },
      startY: 0, // 纵轴方向初始化位置
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      shownum: 0,
      limit: 10
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.$vux.loading.show()
      this.thloading()
      let obj = {}
      obj.offset = this.shownum
      obj.limit = this.limit
      let {
        records,
      } = await getAsset_records(obj)
      if (records != null) {
        if (records.length > 0) {
          records.forEach((item) => {
            item.endTime = formatTime(parseInt(item.endTime))
            this.list = this.list.concat(item)
          })
          this.$refs.scroll.forceUpdate(true)
        } else {
          this.$refs.scroll.forceUpdate(false)
        }
        this.$vux.loading.hide()
      }

    },
    // 滚动到页面顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
    },

    onPullingDown() {
      this.shownum = 0
      this.list = []
      this.loadData()

    },
    onPullingUp() {
      this.shownum = this.shownum + this.limit
      this.loadData()

    },
    toDetail(name) {
      this.$router.push({
        path: '/my/commonProblem/problemDetail'
      })
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>
.wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
