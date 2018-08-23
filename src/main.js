// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // 权限

// import JsBridge from './components/jsBridge'
// Vue.use(JsBridge)

import validate from './utils/validate' // 验证
import {getNowFormatDate} from './utils/index' // 验证
Vue.prototype.validata = validate

import 'lib-flexible/flexible'
import BScroll from 'better-scroll'

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import {
  Toast
} from 'mand-mobile'
Vue.use(mandMobile)

// import { Swiper, SwiperItem,Tabs, Button ,Field, FieldItem ,InputItem,Popup, PopupTitleBar,Stepper,Dialog  } from 'mand-mobile'
//
// Vue.component(Dialog.name, Dialog)
// Vue.component(Stepper.name, Stepper)
// Vue.component(Field.name, Field)
// Vue.component(FieldItem.name, FieldItem)
// Vue.component(Tabs.name, Tabs)
// Vue.component(Swiper.name, Swiper)
// Vue.component(SwiperItem.name, SwiperItem)
// Vue.component(InputItem.name, InputItem)
// Vue.component(Popup.name, Popup)
// Vue.component(PopupTitleBar.name, PopupTitleBar)
// Vue.component(Button.name, Button);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import {Navbar,  Tabbar, TabItem , Header,Progress } from 'mint-ui';
//
//
// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Navbar.name, Navbar);
// Vue.component(Progress.name, Progress);


import {
  LoadingPlugin,
} from 'vux'
Vue.use(LoadingPlugin)

const uuidV4 = require('uuid/v4');
 const sha256 = require("js-sha256").sha256;



Vue.prototype.getSequenceNo = function(type,symbol) {
  let orderType = ''
  switch (type) {
    case 1:
      orderType = 'REC'
      break;
    case 2:
      orderType = 'WIT'
      break;
    case 3:
      orderType = 'PAY'
      break;
    case 4:
      orderType = 'PRI'
      break;
    default:
      orderType = 'DEF'
      break;
  }
  const hashCodeV = sha256(uuidV4()).toString()
  const prefix = orderType +symbol +getNowFormatDate()
  const orderId = prefix + hashCodeV.substr(0,32-prefix.length).toUpperCase()
  return orderId
}

Vue.prototype.thloading = function() {
  var $html = `<div class="weui-cell__ft" style="text-align: center;position: absolute;top: 30%;left: 30%;"> <span class="vux-spinner vux-spinner-bubbles" style="width: 40px; height: 40px;"><svg viewBox="0 0 64 64" style="width: 40px; height: 40px;fill: #fff;"><g stroke-width="0"><circle cx="24" cy="0" transform="translate(32,32)" r="5.15556"><animate attributeName="r" dur="750ms" values="8;7;6;5;4;3;2;1;8" repeatCount="indefinite"></animate></circle><circle cx="16.970562748477143" cy="16.97056274847714" transform="translate(32,32)" r="6.15556"><animate attributeName="r" dur="750ms" values="1;8;7;6;5;4;3;2;1" repeatCount="indefinite"></animate></circle><circle cx="1.4695761589768238e-15" cy="24" transform="translate(32,32)" r="7.15556"><animate attributeName="r" dur="750ms" values="2;1;8;7;6;5;4;3;2" repeatCount="indefinite"></animate></circle><circle cx="-16.97056274847714" cy="16.970562748477143" transform="translate(32,32)" r="6.91111"><animate attributeName="r" dur="750ms" values="3;2;1;8;7;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="-24" cy="2.9391523179536475e-15" transform="translate(32,32)" r="1.15556"><animate attributeName="r" dur="750ms" values="4;3;2;1;8;7;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="-16.970562748477143" cy="-16.97056274847714" transform="translate(32,32)" r="2.15556"><animate attributeName="r" dur="750ms" values="5;4;3;2;1;8;7;6;5" repeatCount="indefinite"></animate></circle><circle cx="-4.408728476930472e-15" cy="-24" transform="translate(32,32)" r="3.15556"><animate attributeName="r" dur="750ms" values="6;5;4;3;2;1;8;7;6" repeatCount="indefinite"></animate></circle><circle cx="16.970562748477136" cy="-16.970562748477143" transform="translate(32,32)" r="4.15556"><animate attributeName="r" dur="750ms" values="7;6;5;4;3;2;1;8;7" repeatCount="indefinite"></animate></circle></g></svg></span></div>`
  var div = document.getElementsByClassName("weui-toast")
  div[0].innerHTML = $html;
}
Vue.prototype.objBlur = function(id, time) {
  if (typeof id != 'string'){
    Toast({
      content: '参数错误',
    })
  }
  var obj = document.getElementById(id),
    time = time || 100,
    docTouchend = function(event) {
        setTimeout(function() {
          obj.blur();
          document.removeEventListener('touchstart', docTouchend, false);
        }, time);
    };
  if (obj) {
      obj.addEventListener('touchstart', function() {
      document.addEventListener('touchstart', docTouchend, false);
    }, false);
  } else {
    Toast({
      content: 'objBlur()没有找到元素',
    })
    throw new Error('objBlur()没有找到元素');
  }

}

Vue.filter('substring', value => {
  if (typeof value == 'string' && value != '') { //参数为字符串类型
    let ruten = value.substring(3, 7); //提取字符串下标之间的字符。
    return value.replace(ruten, '****'); //字符串中用字符替换另外字符，或替换一个与正则表达式匹配的子串。
  } else {
    return '暂无'
  }
})
Vue.filter('substringIP', value => {
  var y = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  if (y.test(value)) {
    let ruten = value.substring(2, 7); //提取字符串下标之间的字符。
    return value.replace(ruten, '*****'); //字符串中用字符替换另外字符，或替换一个与正则表达式匹配的子串。
  } else {
    return value
  }
})

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import vueTap from 'v-tap' // 引入插件
Vue.use(vueTap)
// import FastClick from 'fastclick'
// FastClick.attach(document.body);

Vue.config.productionTip = false
// require('./mockjs/index')

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
