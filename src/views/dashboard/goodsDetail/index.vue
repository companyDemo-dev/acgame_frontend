<template>
<div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <main class="position-box">
    <vue-better-scroll class="wrapper" ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp">

      <div class="">
        <md-swiper @before-change="beforeChange" transition="slide" @after-change="afterChange" ref="swiper" :is-prevent="false">
          <md-swiper-item :key="$index" v-for="(item, $index) in simple">
            <img class="previewerImg" :src="item.src" width="100" @click="show($index)">
          </md-swiper-item>
        </md-swiper>
        <div v-transfer-dom>
          <previewer :list="simple" ref="previewer" :options="options"></previewer>
        </div>
      </div>
      <div v-if="goodsValues=='1' " style="padding:10px;text-align: left;font-size:18px;background:#fff;margin-top:10px;border-bottom: 1px solid#D9D9D9;">
        <div  class="dis_flex"  style="padding: 5px;margin: 5px;border-bottom: 1px solid#D9D9D9;font-size: 16px; ">
          <li style="">
            <span class='periods' style="width:60px;">{{objData.period}}期</span>{{objData.title}}
          </li>
        </div>
        <div style="padding:10px;">
          <div  class="dis_flex"  style="height:20px;line-height: 20px;margin-top: 20px;">
            <div style="flex:1;text-align:left ">
              <p class="goodsDetail_text desc " style=" ">总需{{objData.totalPortion || 0}}人次</p>
            </div>
            <div style="flex:1;text-align:right ">
              <p class="goodsDetail_text desc " style=" ">剩余:<span style="color: #000;"> {{objData.surplus}}</span></p>
            </div>
          </div>
          <div>
            <mt-progress :value="objData.progress">
            </mt-progress>
          </div>

          <div  class="dis_flex"  style="height:20px;line-height: 20px;text-align:left;justify-content:center; align-items:Center;">
            <div class="" style="flex:1;text-align: left;">
              <img :src="insur" alt="" style="width:10px;">
            </div>
            <div class="" style="flex:10; ">
              <!-- portionPrice -->
              <p class="goodsDetail_text desc " style="margin: 0;height: 20px;position: relative;left: -15px;top: 1px;">{{objData.portionPrice || 0}} INSUR/人次</p>
            </div>
          </div>


        </div>
      </div>
      <div v-if="goodsValues=='2' " style="padding:10px;font-size:18px;text-align: left;background:#fff;border-bottom: 1px solid#D9D9D9 ">
        <div  class="dis_flex"  style="padding: 5px;margin: 5px;font-size: 16px; ">
          <li style="">
            <span class='periods' style="width:60px;">{{objData.period}}期</span>{{objData.title}}
          </li>
        </div>
        <div @touchstart.stop.prevent="toLuckyNum" style="padding:10px;">
          <md-button size="small " style="width: 100%;margin-top:10px;height:40px; ">点击查看幸运号码 预计3分钟内揭晓...</md-button>
        </div>
      </div>

      <div v-if="goodsValues=='3' " style="padding:10px;font-size:18px;text-align: left;background:#fff;border-bottom: 1px solid#D9D9D9 ">
        <div  class="dis_flex"  style="padding: 5px;margin: 5px;font-size: 16px;border-bottom: 1px solid#D9D9D9; ">
          <li style="">
            <span class='periods' style="width:60px;">{{objData.period}}期</span>{{objData.title}}
          </li>
        </div>

        <div class="clear "></div>
        <div  class="dis_flex"  style="padding:10px;font-size:18px;">
          <div class="icon " style="margin-right: 10px;flex:1 1 0;text-align: center; ">
            <img width="80 " height="80 " style="border-radius: 50px;margin-top: 10px; " :src="awardData.winnerAvatarUrl">
            <span class="six" style="background: #5d8fe6;color: #fff;font-size: 16px;position: relative;top: -18px;padding: 5px;border-radius: 4px;">获得者</span>
          </div>
          <div style="flex:3 1 0;font-size: 12px; text-align: left;">

            <div style="margin-top: 5px; ">
              <div class="extra ">
                <span class="count " style="margin:0 ">获得者：</span><span style="color: #09a7e6; ">{{awardData.winnerNickName}}</span>
              </div>
            </div>
            <div style="margin-top: 5px; ">
              <div class="extra  dis_flex style="">
                <div style="flex:1;padding-top: 7px; ">
                  <span class="count " style="margin:0 ">本期参与：</span><span style="color: #f01414; ">{{awardData.winnerPortionNum || 0}}</span>人次
                </div>
                <div style="flex:1 " @click.stop.prevent="toLuckyNum">
                  <md-button size="small " style="width: 100%;border-radius:15px; ">查看幸运号码</md-button>
                </div>
              </div>
            </div>
            <div style="margin-top:4px; ">
              <div class="extra ">
                <span class="count " style="margin:0 ">幸运号码：</span><span style="color: #f01414; ">{{awardData.luckyNum}}</span>
              </div>
            </div>
            <div style="margin-top: 6px; ">
              <div class="extra ">
                <span class="count " style="margin:0 ">揭晓时间：{{awardData.lotteryTime}}</span>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div v-if="goodsValues=='4' || goodsValues=='5' " style="padding:10px;font-size:18px;text-align: left;background:#fff;border-bottom: 1px solid#D9D9D9">
        <div  class="dis_flex"  style="padding: 5px;margin: 5px;font-size: 16px;border-bottom: 1px solid#D9D9D9; ">
          <li style="">
            <span class='periods' style="width:60px;">{{objData.period}}期</span>{{objData.title}}
          </li>
        </div>

        <div class="clear "></div>
        <div  class="dis_flex"  style="margin:10px;font-size:18px;">
          <div class="icon " style="margin-right: 10px;flex:1 1 0;text-align: center; ">
            <img width="80 " height="80 " style="border-radius: 50px; " :src="awardData.winnerAvatarUrl">
          </div>
          <div style="flex:3 1 0;font-size: 12px; text-align: left;">

            <h2 class="name " style="font-size: 20px;color: #ef4f4f;margin: 0; ">恭喜，夺宝成功！</h2>
            <div style="margin:15px 0px;height: 15px; ">
              <div style=" margin: 5px 0; ">
                <div class="extra ">
                  <span class="count " style="margin:0 ">幸运号码：{{awardData.luckyNum}}</span>
                </div>
              </div>
              <div style=" margin: 5px 0; ">
                <div class="extra ">
                  <span class="count " style="margin:0 ">揭晓时间：{{awardData.lotteryTime}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear "></div>
        <div  class="dis_flex"  style="padding: 0 20px;">
          <div v-if="awardId == null" style=" flex:1;margin-right: 10px; " @touchstart.stop.prevent="toGetgoods">
            <md-button size="small " style="width: 100%;cursor:pointer ">领取商品</md-button>
          </div>
          <div v-if="awardId!= null" style=" flex:1;margin-right: 10px; " @touchstart.stop.prevent="toGetgoodsDetail">
            <md-button size="small " style="width: 100%; ">订单详情</md-button>
          </div>
          <div style=" flex:1;margin-left: 10px; " @touchstart.stop.prevent="toLuckyNum ">
            <md-button size="small " style="width: 100%; ">查看幸运号码</md-button>
          </div>
        </div>
        <div class="clear "></div>
      </div>
      <div class="" style="background:#fff;padding:0 10px;margin-top:10px;border-bottom: 1px solid#D9D9D9">
        <div  class="dis_flex"  style="height:40px;line-height: 40px;text-align:left;padding: 5px;margin: 5px;">
          <div style=" flex:1; ">
            <p class="desc " style="height: 40px;font-size: 12px;color:#93999f; ">夺宝记录：

              <span v-if="portionNum == 0" style="color: #000;font-weight: bold; ">本期未参与</span>
              <span v-if="portionNum != 0"><span v-if="portionNum != 0" class="count " style="margin:0 ">我参与了</span><span style="color: #f01414; ">{{portionNum || 0}}</span>人次</span>

            </p>
          </div>
          <div v-if="!showRecord && portionNum != 0" @touchstart.stop.prevent="showRecord = true" style=" flex:1; ">
            <p style="height: 40px;font-size: 12px;color:#93999f;text-align:right;">持有号码 <i class="iconfont icon-right" style="font-size: 12px;"></i>
            </p>
          </div>
          <div v-if="showRecord && portionNum != 0" @touchstart.stop.prevent="showRecord = false" style=" flex:1; ">
            <p style="height: 40px;font-size: 12px;color:#93999f;text-align:right;">持有号码 <i class="iconfont icon-jiantouxia" style="font-size: 12px;"></i>
            </p>
          </div>
        </div>
        <div v-if="showRecord" class="" style=" font-weight: bold;border-top: 1px solid#D9D9D9;padding: 5px;margin: 5px;">
          <span v-for='(code,index) in portionRecords'> {{code}}  <span v-if="(index+1) < portionRecords.length">、</span></span>
        </div>
      </div>


      <md-tabs class="goodsTab" :titles="titles " style="margin-top:10px " @indexChanged="changeDOM">
        <div v-for="(title, index) of titles " :key="index " style="min-height: 149px; ">
          <div id="showcylists" v-show="index==0 " class="goods-list-render-views">
            <div class="scroll-wrapper ">
              <div class="scroll ">

                <ul class="foods-wrapper " style="padding:0px;margin:0;min-height: 77px; ">
                  <li v-for="item in lists " class="food-item border-b ">
                    <div class="icon " style="margin-right: 15px; ">
                      <img width="45 " height="45 " style="border-radius: 100px;margin-left: 10px; " :src="item.avatarUrl ">
                    </div>
                    <div class="content ">

                      <div style="display:flex">
                        <div style="flex:1">
                          <h2 class="name text_ellipsis ">{{item.nickName | substringIP}}</h2>
                          <p class="desc " style="height: 6px;font-size: 14px; ">参与了 <span style="color: #ef4f4f;font-weight: bold; ">{{item.portionNum}}</span>次</p>
                        </div>

                        <div style="flex:3">

                          <h2 class="name " style="color: #93999f;font-weight: inherit;font-size: 12px ">(IP:<span>{{item.ip | substringIP}}</span>)</h2>
                          <p class="desc " style="height: 6px;font-size: 12px;width: 170px;">{{item.createAt}}</p>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li v-if="lists.length == 0" style="text-align:center;font-size:14px;color: #ccc;">
                    <i class="iconfont icon-wenjian" style="font-size: 78px;"></i>
                    <div class="">
                      暂无参与记录
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div id="showplay" v-show="index==1 " style="margin:25px;font-size:14px;background:#fff;height:905px;">
            <li style="margin-bottom:25px; ">1.用户使用数字资产INSUR购买夺宝人次，每购买1人次，将获得1个系统分配的夺宝号码。</li>
            <li style="margin-bottom:25px; ">2.当该商品的全部夺宝号码分配完毕后，区块链夺宝程序将自动计算出一个幸运号码(计算规则见下一条)， 持有该幸运号码的用户可直接获得该商品(通过快递发货)。</li>
            <li style="margin-bottom:25px; ">3.计算规则：当夺宝号码售罄时，系统会记录下当前InsurChain区块链最新的区块号， 同时等待幸运区块号的生成(售罄区块号+50)。待幸运区块号确认后(大约3-5分钟)，取幸运区块号签名(哈希值)的最后8位，转成10进制数字，基于夺宝总人次进行取余，得到的数字即为幸运号码。" <span style="color:#f59533"> (由于区块哈希值为随机数，无法人为干预，所以保证了幸运号码的随机性和公正性)</span>
            </li>
            <li> <img :src="gz3" alt="" style="width: 100%;"> </li>
            <li style="margin-bottom:25px;">4.ACGame保留对夺宝玩法的最终解释权。</li>
          </div>
        </div>
      </md-tabs>

    </vue-better-scroll>
  </main>
  <!-- <div class="patch8"></div> -->
  <div class="container-bottom"  v-if="goodsValues =='1'">
    <div id="surplusPopUp" ref="surplusPopUp2" v-show="objData.surplus !=0" class="" @touchstart.stop.prevent="showPopUp('bottom')" style="height:100%">
      <md-button size="large" style="width: 100%;height: 100%;font-size: 18px;border-radius: 0;">立即购买</md-button>
    </div>


    <md-popup v-model="isPopupShow.bottom" position="bottom" style="height:100%">
      <div class="b-w" style="padding:20px;font-size:14px;">
        <div class="" @touchstart.stop.prevent="onBasicConfirm">
          账户余额：{{yuAmount}} INSUR <span class="textlink" >充值></span>
        </div>
        <div class="" style="width:300px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">
          需要 <span class="textlink-r">{{totalAmount}}</span> INSUR <span style="color:#93999f;">({{objData.portionPrice || 0}} INSUR/人次)</span>
        </div>
        <div style="padding:10px">
          <!-- <div v-if="showtip" class="" style="color:#ef4f4f;position:relative; top:42px;z-index: 1000;left: 170px;font-weight:bold;font-size: 16px;width: 80px;">

          </div> -->
          <div class="goodsDs" style="position:absolute; top:86px;z-index: 999;left:  86px;font-weight:bold;font-size: 16px;width: 195px;height: 35px;" @touchstart.stop.prevent="total_feeRef">
            <input id="totalNum" class="text"  onfocus="this.blur()"  type="tel"   v-text="number" v-model="total_fee"  min="0.0001"  style="width: 195px;height:35px;border: 0px;color: #e65050;font-size: 22px;display:none">
<!-- autofocus="autofocus" -->
            <!-- <span v-show="showtip"  style="color:#ef4f4f;position:relative; top:-31px;z-index: 1000;left:135px;font-weight:bold;font-size: 16px;">（包尾）</span> -->
          </div>
          <x-number  v-model="stepperValues" :min="0" @on-change="Calculation" align='center'  class="dis_flex"></x-number>
        </div>
        <div style="display: inline-flex;width: 100%;">
          <div style="margin:15px;width: 25%;" @touchstart.stop.prevent="setStepperValue(5)">
            <md-button type="ghost" style="width: 100%;color:#000">5</md-button>
          </div>
          <div style="margin:15px;width: 25%;" @touchstart.stop.prevent="setStepperValue(10)">
            <md-button type="ghost" style="width: 100%;color:#000">10</md-button>
          </div>
          <div style="margin:15px;width: 25%;" @touchstart.stop.prevent="setStepperValue(50)">
            <md-button type="ghost" style="width: 100%;color:#000">50</md-button>
          </div>
          <div style="margin:15px;width: 25%;" @touchstart.stop.prevent="setStepperValue(objData.surplus,'isCover')">
            <md-button type="ghost" style="width: 100%;color:#000">包尾</md-button>
          </div>
        </div>
        <div v-if="showtip" class="" style="color:#93999f;">
          <span>温馨提示：包尾买法系统将自动为您买入剩余人次，但由于夺宝进度实时波动，实际成交人次可能小于当前剩余。</span>



        </div>
        <div  v-show="distoBuy" @touchstart.stop.prevent="toBuy">
          <md-button   size="large" style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;">立即购买</md-button>
        </div>
        <div  v-show="!distoBuy">
            <md-button size="large" style="width: 100%;height:45px;font-size: 18px;border-radius: 5px;">loading</md-button>
        </div>
        <div class="keyboardH"  style="height:200px;">
          <md-number-keyboard
             v-model="isKeyBoardShow"
             @enter="onNumberEnter"
             type="simple"
             @delete="onNumberDelete"
           ></md-number-keyboard>
        </div>

      </div>


      <md-dialog title="" v-model="basicDialog.open" :btns="basicDialog.btns">
您当前账户余额不足
      </md-dialog>
    </md-popup>

  </div>
</div>
</template>

<script>
import insur from '@/assets/images/INSUR.png'
import gz3 from '@/assets/images/gz3.jpg'
import data from '@/api/goods-list.json'

import {
  Toast,
} from 'mand-mobile'
import {
  topNav
} from '@/views/layout/components'

import {
  Previewer,
  TransferDom,
  XNumber
} from 'vux'

import {
  getProductDetail,
  getProductDetailJionTime,
  getAllProducts_records,
  getProductDetailaward,
  payOrder,
    getProducts,
} from '@/api/dashboard'

import {
  getAssetsDetail,
} from '@/api/my'

import VueBetterScroll from '@/components/lib'

import accounting from 'accounting'

import { XInput,Group } from 'vux'
import {
  formatTime,
  formatTimes
} from '@/utils/index'

export default {
  name: 'swiper-demo',
  directives: {
    TransferDom
  },
  components: {
    topNav,
    Previewer,
    XNumber,
    VueBetterScroll,
     XInput,
     Group
  },
  data() {
    return {
      isKeyBoardShow :false,
      total_fee: '',
      ipNum: '',
      goodsValues: '',
      insur,
      gz3,
      basicDialog: {
        open: false,
        btns: [{
            text: '去充值',
            handler: this.onBasicConfirm,
          },
          {
            text: '取消',
            handler: this.onActCancel,
          },
        ],
      },
      isPopupShow: {},
      showRecord: false,
      simple: [],
      options: {
        getThumbBoundsFn(index) {
          let thumbnail = document.querySelectorAll('.previewerImg')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          }
        }
      },
      titles: ['参与记录', '夺宝规则'],
      topStatus: '',
      allLoaded: false,
      showtip: false,
      objData: '',
      awardData: '',
      objnum: '',
      prizeType: '',
      portionNum: 0,

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
      lists: [],
      yuAmount: '',
      totalAmount: '',
      stepperValues: 1,
      awardId:'',
      distoBuy: true
    }
  },
  mounted() {
    this.$vux.loading.show()
    this.thloading()
    if (this.$route.query.goodsValue) {
      this.goodsValues = this.$route.query.goodsValue
      this.loadData()
      this.loadgProductDetailJionTime()
      this.loadAllProducts_records(true)
      if (this.goodsValues == 3  || this.goodsValues == 4 || this.goodsValues == 5) this.loadProductDetailaward()//以获奖人获取

    }
    window.triggerSwiper0 = () => {
      this.goto()
    }
    window.triggerSwiper1 = () => {
      this.play()
    }
    window.triggerSwiper2 = () => {
      this.stop()
    }


  },
  methods: {
    total_feeRef() {
        this.isKeyBoardShow = true
    },
    onNumberEnter(val) {
      if(this.total_fee == 0){
        this.total_fee =  val
      }else{
        this.total_fee =  this.total_fee.toString() + val
      }

      this.totalAmount = parseFloat(this.total_fee * this.objData.portionPrice).toFixed(4)
      this.stepperValues = parseInt(this.total_fee)
      if(parseInt(this.stepperValues) > parseInt(this.objData.surplus) ){
        this.Calculation()
      }

    },
    onNumberDelete() {
      if (this.total_fee === '') {
        return
      }
      this.total_fee =  this.total_fee.toString()
      this.total_fee = this.total_fee.substr(0, this.total_fee.length - 1)
      if(this.total_fee  === ''){
        this.total_fee = 0
      }
      this.totalAmount = parseFloat(this.total_fee * this.objData.portionPrice).toFixed(4)
      this.stepperValues = parseInt(this.total_fee)
    },
    async loadData() {
      let {
        product,
      } = await getProductDetail(this.$route.query.pid)
      this.prizeType = product.prizeType
      product.introPics = product.introPics.replace(/[ ]/g, "").replace(/'/g, "")
      let arr = product.introPics.slice(1, -1).split(',')
      arr = arr.map(key => ({
        msrc: key,
        src: key
      }))
      this.simple = arr//轮播图格式处理
      this.objData = product
      this.objData.progress = (Math.ceil(parseFloat(accounting.formatNumber((product.currentPortion / product.totalPortion),4) * 100)* 100).toFixed(2))/100
      this.objData.surplus = parseFloat(product.totalPortion - product.currentPortion)
      if(this.objData.surplus == 0 && this.goodsValues == '1'){
        this.goodsValues = '2'
      }

      // this.objData.average
    },

    async loadProductDetailaward() {
      let {
        productAward,
      } = await getProductDetailaward(this.$route.query.pid)

      this.awardData = productAward
      if(productAward.awardId != null){
        this.awardId = productAward.awardId
      }else {
        this.awardId = null
      }
      this.awardData.lotteryTime = formatTimes(parseInt(productAward.lotteryTime))
      // this.objData.average
    },

    async loadgProductDetailJionTime() {
      let {
        portionData,
      } = await getProductDetailJionTime(this.$route.query.pid)

      if (portionData.portionNum != null) {
        this.portionNum = portionData.portionNum
      } else {
        this.portionNum = 0
      }
      if (portionData.portionRecords && portionData.portionRecords != null) {
        this.portionRecords = portionData.portionRecords
      } else {
        this.portionRecords = []
      }
      // this.objData.average
    },
    async loadAllProducts_records(flag) {
      if(flag){
        this.lists = []
      }
      let obj = {}
      obj.pid = this.$route.query.pid
      obj.offset = this.shownum
      obj.limit = this.limit
      let {
        productRecords,
      } = await getAllProducts_records(obj)
      if (productRecords != null) {
        if (productRecords.length > 0) {
          productRecords.forEach(item => {
            item.createAt = formatTimes(item.createAt)
            this.lists = this.lists.concat(item)
          })
          this.$refs.scroll.forceUpdate(true)
        } else {
          this.$refs.scroll.forceUpdate(false)
        }
      }else{
        this.$refs.scroll.forceUpdate(false)
      }
      this.$vux.loading.hide()
      this.changeDOM(0)
    },
    // 滚动到页面顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
    },

    onPullingDown() {
      this.shownum = 0
      this.lists = []
      this.loadAllProducts_records()

    },
    onPullingUp() {
      this.shownum = this.shownum + this.limit
      this.loadAllProducts_records()

    },
    show(index) {
      this.$refs.previewer.show(index)
    },
    toLuckyNum() {
      this.$router.push({
        path: '/dashboard/luckyNum',
        query: {
        pid: this.$route.query.pid
        }
      })
    },
    changeDOM(index, preIndex){
      var h1 = document.getElementById('showcylists')
      let h1H = h1.offsetHeight
      var h2 = document.getElementById('showplay')
      let h2H = parseInt(h2.style.height.replace('px', ''))
      if(index == 1){
        this.pullUpLoadObj = false
        document.getElementsByClassName("md-tab-content-wrapper")[0].style.height = '965px'
      }else{
        this.pullUpLoadObj = true
        document.getElementsByClassName("md-tab-content-wrapper")[0].style.height = h1H +'px'
      }
    },
  async toGetgoods() {
      if (this.prizeType == '1') {
        this.$router.push({
          path: '/dashboard/orderEdit',
          query: {
            data: JSON.stringify(this.objData),
            prizeType: this.prizeType
          }
        })
      } else if (this.prizeType == '2') {
        let {
          data,
          code
        } = await getProducts('',this.objData.id)
        if (code == 200) {
          Toast({
            content: '订单提交成功',
          })
          this.$router.push({
            path: '/dashboard/orderEdit/orderDetails',
            query: {
              data: JSON.stringify(this.objData),
              lotteryTime: this.awardData.lotteryTime,
              prizeType: this.prizeType
            }
          })
        }

      }
    },
    toGetgoodsDetail() {
      this.$router.push({
        path: '/dashboard/orderEdit/orderDetails',
        query: {
        awardId: this.awardId,
        prizeType : this.prizeType
        }
      })

    },
    onBasicConfirm() {
      this.$router.push({
        path: '/dashboard/virtualCoin/recharge'
      })
      this.$store.commit('successCon', {
        flag: 'goods'
      })
      this.basicDialog.open = false
    },
    async toBuy() {
      this.isKeyBoardShow = false
      document.getElementsByClassName("keyboardH")[0].style.height = '0px'
      if(this.distoBuy){
      if(parseInt(this.totalAmount) >  parseInt(this.yuAmount)){
        this.basicDialog.open = true
        return
      }
      if (!this.validata.validaTOdetail(parseFloat(this.total_fee))) return
      this.distoBuy = false
      let obj = {}
      obj.portionNum = this.total_fee
      obj.symbol = 'INSUR'
      this.showtip == true ? obj.isCover = 1 : obj.isCover = 0
      obj.sequenceNo = this.getSequenceNo(3,'INSUR')

      let {
        msg,
        code,
        data
      } = await payOrder(obj, this.$route.query.pid)

        if(code == 400) {
          if(msg == '账户余额不足'){
            this.basicDialog.open = true
            this.distoBuy = true
          }else if(msg == '剩余可夺宝人次不足'){
            Toast({
              content: msg,
            })
            //重置数据
            this.loadData()
            this.loadgProductDetailJionTime()
            this.loadAllProducts_records(true)
            if (this.goodsValues == 3  || this.goodsValues == 4 || this.goodsValues == 5) this.loadProductDetailaward()//以获奖人获取


            this.hidePopUp('bottom')
           //重置数据
          }
          return
        }
      if (code ==200) {
        this.distoBuy = true
        //虚拟币直接购买成功，无订单

        this.$router.push({
          path: '/dashboard/virtualCoin/recharge/joinSuccess',
          query: {
            winnerPortionNum: data.portion,
          }

        })
        this.$store.commit('successCon', {
          flag: 'buy'
        })
      }
    }else{
          setTimeout(() => {
              this.distoBuy = true
          }, 3000);
    }
    },
    onActCancel() {
      this.basicDialog.open = false
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

    async showPopUp(type) {
      this.$set(this.isPopupShow, type, true)
      this.isKeyBoardShow = true
      let obj = {}
      obj.symbo = 'INSUR'
      let {
        asset
      } = await getAssetsDetail(obj)
      this.yuAmount = asset.amount
      this.Calculation()
        // var surplusPopUp = document.getElementById("surplusPopUp")
        // var input = document.getElementById("totalNum");
        //    this.$refs.surplusPopUp2.focus()
        //   surplusPopUp.addEventListener("touchend",function(e){
        //    input.focus();
        // });
    },
    setStepperValue(num, is) {
      debugger
      if(parseInt(num) > parseInt(this.objData.surplus) ){
        Toast({
          content: '参与次数不可大于可投次数',
        })
        return
        }else {
            this.stepperValues = num
        }
      is == 'isCover' ? this.showtip = true : this.showtip = false
    },
    Calculation() {//加减号切换
      if(parseInt(this.stepperValues) > parseInt(this.objData.surplus) ){
        Toast({
          content: '参与次数不可大于可投次数',
        })
        //重置
        this.total_fee = this.objData.surplus
        this.stepperValues = this.objData.surplus
        this.totalAmount = parseFloat(this.stepperValues * this.objData.portionPrice).toFixed(4)
          //重置
        return
      }else if(parseInt(this.stepperValues) < parseInt(this.objData.surplus) ){
        this.showtip = false
      }

      this.totalAmount = parseFloat(this.stepperValues * this.objData.portionPrice).toFixed(4)
      this.total_fee = parseInt(this.stepperValues)//模拟input赋值

    },
    // Calculation2() {//手动输入
    //   this.totalAmount = parseFloat(this.total_fee * this.objData.portionPrice).toFixed(4)
    //   this.stepperValues = parseInt(this.total_fee)
    // },
    hidePopUp(type) {
      this.$set(this.isPopupShow, type, false)
    },
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
 .goodsDs input.text{
   text-align:center!important;
   outline:none;
 }

.md-swiper,
.md-swiper-box {
    border-bottom: 1px solid#D9D9D9;
}

.md-example-child {
    height: 100%;
}
.goods-list-render-views .scroll-wrapper {
    position: initial !important;
}
.goodsDetail_text {
    height: 6px;
    font-size: 12px;
    color: #93999f;
}
.mt-progress-progress {
    height: 8px !important;
}
.md-button.ghost-primary.large,
.md-button.ghost.large {
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
}
.md-field-item {
    background-color: #fff!important;
}
.six {
    height: 59px;
}
.six:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right: 57px;
    border-width: 14px 8px;
    border-style: solid;
    top: 1px;
    border-color: transparent #5d8fe6 transparent transparent;
}
.six:after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: 57px;
    border-width: 14px 8px;
    border-style: solid;
    top: 1px;
    border-color: transparent transparent transparent #5d8fe6;
}
</style>


<style lang="stylus">
  @import '../../../styles/acgame.styl'
  @import '../../../styles/mixin.styl'

  .md-example-child
    .banner-item
      float left
      width 100%
      height 100%
      line-height 250px
      text-align center
      font-size 28px
      color #FFF
      box-align center
      align-items center
      box-pack center
      justify-content center
      text-decoration-line none
  .goods-list-render-views
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
