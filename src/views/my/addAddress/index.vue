
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <div class="" style="padding: 0 22px;background:#fff;font-size:16px;">

    <div class="addressContent border-b">
      *&nbsp;<input id="realName" v-model="obj.realName" @touchstart="setdownObj('realName')" placeholder="收货人姓名" type="text" style=" border: 0;width:90%;font-size:16px;" autoComplete="off">
    </div>

    <div class="addressContent border-b">
      *&nbsp;<input id="phoneNum"  type="number" @touchstart="setdownObj('phoneNum')" v-model="obj.phone" placeholder="手机号码" style=" border: 0;width:90%;font-size:16px;" autoComplete="off">
    </div>

    <div id="addressTh" style="height: 50px;  font-size: 16px;border-bottom:1px solid#D9D9D9;width: 100%;text-align: left;display: flex;align-items: center;"  @click.stop.prevent="showTC">
      *&nbsp;<span style="color: #d0d0d0;">{{addressTh}}</span>
    </div>
    <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>

    <!-- <md-popup v-model="isPopupShow.bottom" position="bottom" style="height:100%"> -->
    <!-- <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area> -->
    <!-- </md-popup> -->
    <div class="addressContent">
      *&nbsp;<input id="address2" type="text" @touchstart="setdownObj('address2')" v-model="address2" placeholder="详细地址" style=" border: 0;width:90%;font-size:16px;" autoComplete="off">
    </div>
<input id="display" type="text" name="" value="" style="display:none">
  </div>
  <div style="padding:15px;">

    * 为保证您能及时收到商品，请务必正确填写地址信息
  </div>

  <div class="dis_flex" style="padding: 10px 20px;">

    <div style=" flex:1;margin-left: 10px;" @touchstart.stop.prevent="toSave">
      <md-button size="large" style="width: 100%;height: 45px;font-size: 18px;">保存地址</md-button>
    </div>
  </div>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'
import {
  addAddresses,
  editAddresses
} from '@/api/my'

import {
  Toast
} from 'mand-mobile'


import vueArea from 'vue-area'
export default {
  name: 'field-demo',
  components: {
    topNav,
    vueArea
  },
  data() {
    return {
      // isPopupShow: {},
      onkeydownObj:'',
      result: null,
      show: false,
      obj: {
        realName: '',
        phone: '',
        address: '',
        addressId: ''
      },
      address2: '',
      addressTh: '省 / 市 / 区'
    }
  },
  mounted() {
    if (this.$route.query.data) {
      let arr = this.$route.query.data.address.split('-')
      this.addressTh = arr[0]
      this.address2 = arr[1]
      this.obj = this.$route.query.data
    }
  },
  methods: {
    async toSave() {
      if (this.address2) {
        this.obj.address = this.addressTh + '-' + this.address2
      } else {
        this.obj.address = ''
      }
      if (!this.validata.validaAddadress(this.obj)) return

      if (this.$route.query.data) {
        this.obj.status = 1
        let {
          code,
          msg
        } = await editAddresses(this.obj)
        Toast({
          content: msg,
        })
      } else {
        let {
          code,
          msg
        } = await addAddresses(this.obj)
        Toast({
          content: msg,
        })
      }

      window.history.go(-1);


    },
    setdownObj(obj){
      this.onkeydownObj = obj
    },

    showTC() {
      this.objBlur('display')
      this.show = true
    },
    showPopUp(type) {
      this.$set(this.isPopupShow, type, true)
    },
    areaResult: function(show, result) {
    // this.objfocus('address2')
      this.show = show
      this.result = result
      let province = result.province.name
      let city = result.city.name
      let area = result.area.name
      this.addressTh = province + city + area
    }
  },
}
</script>

<style lang="stylus" scoped>
.md-example-child-field-0
  .md-field
    margin-bottom 20px
  .md-input-item
    background #FFF
    padding 0 32px
  .strong-tip
    font-size 24px
    color color-text-highlight
</style>
<style>
.addressContent input{
     outline:none;
     height: 50px;
}
.ProvCityBox {
  position: fixed;
  z-index: 10000 !important;
  background: #fff;
  bottom: 0;
  left: 0;
  right: 0;
}

.ProvCityHeaderCancle {
  color: #999;
}

.ProvCityHeaderConfirm {
  color: #5d8fe6;
}

.ProvCitySelectedTop {
  bottom: 100px;
}

.ProvCitySelectedBottom {
  bottom: 150px;
}
</style>
