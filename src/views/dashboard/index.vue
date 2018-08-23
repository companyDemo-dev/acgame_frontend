<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">

  <main class="position-box">
    <vue-better-scroll class="wrapper" ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp">

      <md-swiper @before-change="beforeChange" transition="slide" @after-change="afterChange" ref="swiper" :is-prevent="false">
        <md-swiper-item :key="$index" v-for="(item, $index) in simple">
          <!-- <router-link :to="{path:'/dashboard/bannerDetail',query: {name: $index}}"> -->
          <div class="" style="width:100%">
            <img class="" :src="item.url" style="width:100%" v-tap="{methods : toBannerDetail,index : $index}">
            <!-- <img class="" :src="item.url" style="width:100%"  @click.stop.prevent="toBannerDetail($index)"> -->
          </div>

          <!-- </router-link> -->
        </md-swiper-item>
      </md-swiper>
      <md-tabs :titles="titles" :default-index="cid" @indexChanged="loadData">
        <div v-for="title in titles">

          <div class="goods-list-render-view">
            <div class="scroll-wrapper">
              <div class="scroll">

                <ul ref="list" class="foods-wrapper" style="min-height: 65vh">

                  <li v-for="item in lists" class="food-item border-1px">

                    <div class="dis_flex" @click.stop.prevent="toGoodsDetail('1',item.id)" style="width:100%">
                      <!-- <router-link :to="{path:'/dashboard/goodsDetail',query: { goodsValue: item.description}}"> -->
                      <div class="icon" style="flex:2;width:25%">
                        <img width="90" height="90" :src="item.cover">
                      </div>


                      <div class="content">
                        <li style="height: 25px;line-height: 25px;font-size: 14px;color: #07111b;font-weght:500;"> <span class='periods' style="width:60px;">{{item.period}}期</span>{{item.title}}
                        </li>
                        <div style="padding:2px">
                          <p class="desc" style="height: 12px;"></p>
                          <div style=" float:left;width:60%;margin-top: 10px;">
                            <div class="extra">
                              <span class="count">夺宝进度：</span><span style="color: #f01414;">{{item.progress}}%</span>
                            </div>
                            <div class="">
                              <mt-progress :value="item.progress">
                              </mt-progress>
                            </div>
                          </div>
                          <div style=" float:right;width:35%">
                            <md-button size="small" style="width:100%;margin-top: 12px;">立即购买</md-button>
                          </div>
                        </div>
                      </div>



                      <div v-if="item.description == '2'" class="content">
                        <li style="height: 25px;line-height: 25px;font-size: 14px;color: #07111b;font-weght:500;"> <span class='periods' style="width:60px;">105984期</span>{{item.name}}
                        </li>
                        <div style="">
                          <div style=" float:left;margin: 28px  0 10px 0;">
                            <div class="extra">
                              <span class="count" style="margin:0">我参与了</span><span style="color: #f01414;">6</span>人次
                            </div>
                          </div>
                          <div class="clear"></div>
                          <div style=" float:left;width: 100%;">
                            <md-button size="small" style="width: 96%;">幸运区块生成中...</md-button>
                          </div>
                        </div>
                      </div>


                      <div v-if="item.description == '3'" class="content">
                        <div class="dis_flex" style="">
                          <div class="icon" style="margin-right: 10px;flex:1;">
                            <img width="45" height="45" style="border-radius: 50px;" :src="item.icon">
                          </div>
                          <div style="flex:4;">
                            <div style="margin-top: 10px;">
                              <div class="extra">
                                <span class="count" style="margin:0">获得者：</span><span style="color: #09a7e6;">16535896585</span>
                              </div>
                            </div>
                            <div style="margin-top: 10px;">
                              <div class="extra">
                                <span class="count" style="margin:0">获得者购买：</span><span style="color: #f01414;">88</span>人次
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="clear"></div>
                        <div style="margin-top: 5px;">
                          <div class="extra">
                            <span class="count" style="margin:0">幸运号码：0147</span>
                          </div>
                        </div>
                        <div style="margin-top: 5px;">
                          <div class="extra">
                            <span class="count" style="margin:0">揭晓时间：2018-04-10 09:36</span>
                          </div>
                        </div>
                        <div style="margin-top: 5px;">
                          <div class="extra">
                            <span class="count" style="margin:0">个人记录：我参与了</span><span style="color: #f01414;">6</span>人次
                          </div>
                        </div>
                      </div>

                      <div v-if="item.description == '4' || item.description == '5' " class="content">
                        <h2 class="name " style="font-size: 20px;color: #ef4f4f;">恭喜，夺宝成功！</h2>
                        <div style="margin: 15px 0px;height: 15px;">
                          <div style=" margin: 5px 0;">
                            <div class="extra">
                              <span class="count" style="margin:0">幸运号码：0147</span>
                            </div>
                          </div>
                          <div style=" margin: 5px 0;">
                            <div class="extra">
                              <span class="count" style="margin:0">揭晓时间：2018-04-10 09:36</span>
                            </div>
                          </div>
                        </div>
                        <div class="clear"></div>
                        <div style=" float:left;width:100%;">
                          <md-button v-if="item.description == '4'" size="small" style="width: 96%;">领取商品</md-button>
                          <md-button v-if="item.description == '5'" size="small" style="width: 96%;">查看详情</md-button>
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

        </div>
      </md-tabs>
    </vue-better-scroll>

  </main>
</div>
</template>

<script>
import Banner1 from '@/assets/images/Banner1.jpg'
import Banner2 from '@/assets/images/Banner2.jpg'
import VueBetterScroll from '@/components/lib'

import accounting from 'accounting'

import {
  Toast
} from 'mand-mobile'


import {
  getCategories,
  getProductsList
} from '@/api/dashboard'
export default {
  name: 'swiper-demo',
  components: {
    VueBetterScroll
  },
  data() {
    return {
      Banner1,
      lists: [],
      titles: [],
      simple: [{
        "url": Banner1,
      }, {
        "url": Banner2,
      }],

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
      cid: parseInt(window.sessionStorage.getItem('cid')) || 0,
      shownum: 0,
      limit: 10,
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
    this.loadCategories()
    this.loadData()

  },
  methods: {
    cli: function(params) {
      Toast({
        content: '1',
      })
      console.log(params.event);
      console.log(this);
    },
    async loadData(index, preIndex) {
      this.$vux.loading.show()
      this.thloading()
      if (index >= 0) {
        this.shownum = 0
        this.lists = []
        this.cid = index
        window.sessionStorage.setItem('cid', index)
      }
      let obj = {}
      obj.cid = this.cid
      obj.offset = this.shownum
      obj.limit = this.limit
      let {
        products
      } = await getProductsList(obj)

      if (products != null) {
        if (products.length > 0) {
          products.forEach((item) => {
            item.progress = (Math.ceil(parseFloat(accounting.formatNumber((item.currentPortion / item.totalPortion), 4) * 100) * 100).toFixed(2)) / 100
            this.lists = this.lists.concat(item)
          })
          this.$refs.scroll.forceUpdate(true)
        } else {
          this.$refs.scroll.forceUpdate(false)
        }
      } else {
        this.$refs.scroll.forceUpdate(false)
      }
      this.$vux.loading.hide()

    },
    async loadCategories() {
      let {
        categories
      } = await getCategories()
      let arr = ['全部']
      for (var i in categories) {
        arr.push(categories[i].name)
      }
      this.titles = arr
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
      // 模拟上拉 加载更多数据
      this.shownum = this.shownum + this.limit
      this.loadData()

      // if (count < 50) {
      //   this.$refs.scroll.forceUpdate(true)
      // } else {
      //   this.$refs.scroll.forceUpdate(false)
      // }
    },

    toGoodsDetail(index, pid) {
      this.$router.push({
        path: '/dashboard/goodsDetail',
        query: {
          goodsValue: index,
          pid: pid,
        }
      })
    },
    toBannerDetail(params) {

      this.$router.push({
        path: '/dashboard/bannerDetail',
        query: {
          name: params.index
        }
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
    margin-bottom: 5px;
    height: 170px;
    line-height: 170px;
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
