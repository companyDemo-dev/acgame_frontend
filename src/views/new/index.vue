<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">

  <main class="position-box">
    <vue-better-scroll class="wrapper" ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
      <div class="goods-list-render-view">
        <div class="scroll-wrapper">
          <div class="scroll">

            <ul ref="list" class="foods-wrapper" style="min-height: 95vh">
              <li v-for="item in lists" class="food-item border-1px">

                <div  class="dis_flex"  @click.stop.prevent="toGoodsDetail(item)" style="width:100%">
                  <!-- <router-link :to="{path:'/dashboard/goodsDetail',query: { goodsValue: item.description}}"> -->
                  <div class="icon" style="flex:2;width:25%">
                    <img width="90" height="90" :src="item.cover">
                  </div>


                  <div v-if="item.state == '2'" class="content">
                    <li style="height: 25px;line-height: 25px;font-size: 14px;color: #07111b;font-weght:500;"> <span class='periods' style="width:60px;">{{item.period}}期</span>{{item.title}}
                    </li>
                    <div style="">
                      <div style=" float:left;margin: 28px  0 10px 0;">
                        <!-- <div class="extra">
                          <span class="count" style="margin:0">我参与了</span><span style="color: #f01414;">{{item.myPortionNum || 0}}</span>人次
                        </div> -->
                      </div>
                      <div class="clear"></div>
                      <div style=" float:left;width: 100%;">
                        <md-button size="small" style="width: 96%;">幸运区块生成中...</md-button>
                      </div>
                    </div>
                  </div>


                  <div v-if="item.state == '3'  && item.winnerId != uid" class="content">
                    <div  class="dis_flex" style="">
                      <div class="icon" style="margin-right: 10px;flex:1;">
                        <img width="45" height="45" style="border-radius: 50px;" :src="item.winnerAvatarUrl">
                      </div>
                      <div style="flex:4;">
                        <div style="margin-top: 10px;">
                          <div class="extra">
                            <span class="count" style="margin:0">获得者：</span><span style="color: #09a7e6;">{{item.winnerNickName}}</span>
                          </div>
                        </div>
                        <div style="margin-top: 10px;">
                          <div class="extra">
                            <span class="count" style="margin:0">获得者购买：</span><span style="color: #f01414;">{{item.winnerPortionNum || 0}}</span>人次
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="clear"></div>
                    <div style="margin-top: 5px;">
                      <div class="extra">
                        <span class="count" style="margin:0">幸运号码：{{item.luckyNum}}</span>
                      </div>
                    </div>
                    <div style="margin-top: 5px;">
                      <div class="extra">
                        <span class="count" style="margin:0">揭晓时间：{{item.lotteryTime}}</span>
                      </div>
                    </div>
                  </div>

                  <div v-if="item.state == '3' && item.winnerId == uid" class="content">
                    <h2 class="name " style="font-size: 20px;color: #ef4f4f;">恭喜，夺宝成功！</h2>
                    <div style="margin: 15px 0px;height: 15px;">
                      <div style=" margin: 5px 0;">
                        <div class="extra">
                          <span class="count" style="margin:0">幸运号码：{{item.luckyNum}}</span>
                        </div>
                      </div>
                      <div style=" margin: 5px 0;">
                        <div class="extra">
                          <span class="count" style="margin:0">揭晓时间：{{item.lotteryTime}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                    <div style=" float:left;width:100%;">
                      <md-button size="small" v-if="item.awardId == null" style="width: 96%;">领取商品</md-button>
                      <md-button size="small" v-if="item.awardId != null" style="width: 96%;">查看详情</md-button>
                    </div>
                  </div>

                </div>

                <!-- </router-link> -->

              </li>
              <li v-if="lists.length == 0" style="text-align:center;font-size:14px;color: #ccc;">
                <div style="">
                  <i class="iconfont icon-wenjian" style="font-size: 78px;"></i>
                </div>
                <div class="">
                  暂无数据
                </div>
              </li>
            </ul>


          </div>
        </div>
      </div>

    </vue-better-scroll>
  </main>
</div>
</template>

<script>
import VueBetterScroll from '@/components/lib'

import {
  topNav
} from '@/views/layout/components'

import accounting from 'accounting'

import {
  getProducts_records
} from '@/api/dashboard'

import {
  getUid
} from '@/utils/auth'

import {
  formatTime
} from '@/utils/index'

export default {
  name: 'swiper-demo',
  components: {
    topNav,
    VueBetterScroll
  },
  data() {
    return {
      lists: [],

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
      limit: 10,
      uid: '',
    }
  },
  mounted() {
    window.triggerSwiper0 = () => {
      this.goto()
    }
    window.triggerSwiper1 = () => {
      this.play()
    }
    window.triggerSwiper2 = () => {
      this.stop()
    }

    this.loadData()
  },
  methods: {
    async loadData() {
      this.uid = getUid()
      this.$vux.loading.show()
      this.thloading()
      let obj = {}
      obj.offset = this.shownum
      obj.limit = this.limit
      let {
        products
      } = await getProducts_records(obj)
      if (products != null) {
        if (products.length > 0) {
          products.forEach((item) => {
            if(item.lotteryTime){
              item.lotteryTime = formatTime(parseInt(item.lotteryTime))
            }

            this.lists = this.lists.concat(item)
          })
          this.$refs.scroll.forceUpdate(true)
        } else {
          this.$refs.scroll.forceUpdate(false)
        }
        this.$vux.loading.hide()

      }else{
        this.$refs.scroll.forceUpdate(false)
      }
    },
    // 滚动到页面顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
    },

    onPullingDown() {
      // 模拟下拉刷新
      this.shownum = 0
      this.lists = []
      this.loadData()
    },
    onPullingUp() {
      this.shownum = this.shownum + this.limit
      this.loadData()
    },
    toGoodsDetail(data) {
      let goodsValue
      if (data.state == '2') {
        goodsValue = '2'
          debugger
      } else if (data.state == '3' &&  data.winnerId == this.uid) {
        if (data.awwardId == null) {
          goodsValue = '4'
        } else {
          goodsValue = '5'
        }
      } else if (data.state == '3' &&  data.winnerId != this.uid) {
        goodsValue = '3'
      }
      this.$router.push({
        path: '/dashboard/goodsDetail',
        query: {
          goodsValue: goodsValue,
          pid: data.pid,
        }
      })
    },
    toBug() {
      this.$router.push({
        path: '/dashboard/goodsDetail'
      })
    },
    setValue(id, value) {
      document.querySelector(id) && (document.querySelector(id).innerHTML = value)
    },
    beforeChange(from, to) {
      this.setValue('#valueSwiper0', from)
      this.setValue('#valueSwiper1', to)
    },
    afterChange(from, to) {
      this.setValue('#valueSwiper2', from)
      this.setValue('#valueSwiper3', to)
    },
    fn(index) {

      this.setValue('#valueSwiper4', index)
    },
    goto() {
      this.$refs.swiper.goto(2)
    },
    play() {
      this.$refs.swiper.play()
    },
    stop() {
      this.$refs.swiper.stop()
    },
    toLogin() {
      this.$store.commit('showLogindex')
    }
  },
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.mint-tabbar {
    position: initial;
}
.wrapper {
    height: 100%;
    overflow: hidden;
}

.md-swiper,
.md-swiper-box {
    height: 100px;
}

.md-example-child {
    height: 100%;
}
.goods-list-render-view .scroll-wrapper {
    position: initial !important;
}

.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content {
    flex: 4;
}
.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .icon {
    margin-right: 0;
}
.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item {
    margin: 0;
    padding: 4%;
}

.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item a {
    width: 100%;
}
.md-button .md-button-inner {
    font-size: 14px!important;
}
.md-button.primary.large,
.md-button.primary.small {
    height: 30px;
}
</style>


<style lang="stylus">
  .md-example-child
    .banner-item
      float left
      width 100%
      height 100%
      line-height 100px
      text-align center
      font-size 28px
      color #FFF
      box-align center
      align-items center
      box-pack center
      justify-content center
      text-decoration-line none
  .goods-list-render-view
    width: 100%
    height: 100%
    .scroll-wrapper
      position: absolute
      background-color: white
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: hidden
      .scroll
        height: 100%
        .foods-wrapper
          overflow: hidden
          .food-item
            display: flex
            margin: 18px
            padding-bottom: 18px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            &:last-child
              border-none()
              margin-bottom: 0
            .icon
              flex: 0 0 57px
              margin-right: 10px
            .content
              flex: 1
              .name
                margin: 2px 0 8px 0
                height: 14px
                line-height: 14px
                font-size: 14px
                color: rgb(7, 17, 27)
              .desc, .extra
                line-height: 10px
                font-size: 12px
                color: rgb(147, 153, 159)
              .desc
                line-height: 12px
                margin-bottom: 8px
              .extra
                .count
                  margin-right: 12px
              .price
                font-weight: 700
                line-height: 24px
                .now
                  margin-right: 8px
                  font-size: 14px
                  color: rgb(240, 20, 20)
                .old
                  text-decoration: line-through
                  font-size: 12px
                  color: rgb(147, 153, 159)
              .cartcontrol-wrapper
                position: absolute
                right: 0
                bottom: 12px
</style>
