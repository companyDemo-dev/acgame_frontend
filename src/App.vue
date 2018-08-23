<template>
<div id="app">
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
  <!--加载-->
  <my-Success class="my-index" v-if="successindex"></my-Success>
  <!--登录-->
  <my-Login class="my-index" v-if="loginindex"></my-Login>
  <!--注册-->
  <my-Register class="my-index" v-if="registerindex"></my-Register>

  <my-Charge class="my-index" v-if="rechargeindex"></my-Charge>
  <my-Success class="my-index" v-if="successindex"></my-Success>
  <my-Network class="my-index" v-if="networkindex == 1 || networkindex == 2"></my-Network>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import myLogin from '@/views/login'
import myRegister from '@/views/login/register'
import myCharge from '@/views/dashboard/recharge'
import mySuccess from '@/views/dashboard/joinSuccess'
import myNetwork from '@/views/404/pageNetwork'
import {
  setToken,
  setUid
} from '@/utils/auth'
import {
  Toast
} from 'mand-mobile'

export default {
  name: 'app',
  　data() {　　　　
    return {
      transitionName: 'slide-left'
    }　　
  },
  components: {
    myLogin,
    myRegister,
    myCharge,
    mySuccess,
    myNetwork
  },
  computed: mapState({
    isBack: state => state.nav.isBack,
    loginindex: state => state.login.loginindex,
    registerindex: state => state.login.registerindex,
    rechargeindex: state => state.recharge.rechargeindex,
    successindex: state => state.recharge.successindex,
    networkindex: state => state.recharge.networkindex
  }),
  mounted() {
    // if (window.location.href.indexOf("env=insurbox") > -1) {

    setTimeout(() => {

      if (window.location.href.indexOf("bizhongup.com") > -1) {

        var div = document.getElementsByClassName("patch3")
        // div[0].style.display = 'none';
        if (div) {
          div[0].parentNode.removeChild(div[0]);
        }
        var div2 = document.getElementsByClassName("container-top")
        if (div2) {
          div2[0].parentNode.removeChild(div2[0]);
        }

      }else{
        var div3 = document.getElementsByClassName("position-box")
        if (div3  && div3[0]!= undefined) {
          div3[0].style.top = '50px';
        }
      }
    }, 100);

    // this.$store.commit('SET_TOKEN', {
    //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDRhNGNhMC05OGUwLTExZTgtYTgyNy0yOTc2YTVjMGQ1ZDciLCJpYXQiOjE1MzM1Mjc5MjB9.ZYcsgooN-i6tRrCD5INUaFHzHIogFbnB7-MKbLSy9Is'
    // })
    // setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDRhNGNhMC05OGUwLTExZTgtYTgyNy0yOTc2YTVjMGQ1ZDciLCJpYXQiOjE1MzM1Mjc5MjB9.ZYcsgooN-i6tRrCD5INUaFHzHIogFbnB7-MKbLSy9Is')
    // setUid('c44a4ca0-98e0-11e8-a827-2976a5c0d5d7')
    // window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDRhNGNhMC05OGUwLTExZTgtYTgyNy0yOTc2YTVjMGQ1ZDciLCJpYXQiOjE1MzM1Mjc5MjB9.ZYcsgooN-i6tRrCD5INUaFHzHIogFbnB7-MKbLSy9Is')
    // window.localStorage.setItem('uid', 'c44a4ca0-98e0-11e8-a827-2976a5c0d5d7')
    this.$store.commit('changTitle', {
      title: this.$route.path
    })

    window.onload = function() {
      document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      })
      var lastTouchEnd = 0;
      document.addEventListener('touchend', function(event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false)
    }

    // this.JsBridge.registerHandler(
    //   'testJs', //注册的方法名，供原生调用
    //   (data, responseCallback) => {
    //     data = JSON.stringify(data) //收到原生发来的数据
    //     responseCallback("js say: got it!") //处理完成后返回给原生
    //   })
  },
  methods: {
    // showToast() {
    //   this.JsBridge.callHandler(
    //     'toast', //原生声明的函数名称
    //     {
    //       data: `处理成功`
    //     }, //发送给原生的数据
    //     (res) => {
    //       res = JSON.parse(res) //原生处理完成后返回的数据
    //     }
    //   )
    // }
  },
  watch: {　　　
    '$route' (to, from) {
      setTimeout(() => {

        if (window.location.href.indexOf("bizhongup.com") > -1) {

          var div = document.getElementsByClassName("patch3")
          // div[0].style.display = 'none';
          if (div) {
            div[0].parentNode.removeChild(div[0]);
          }
          var div2 = document.getElementsByClassName("container-top")
          if (div2) {
            div2[0].parentNode.removeChild(div2[0]);
          }

        }else{
          var div3 = document.getElementsByClassName("position-box")
          if (div3 && div3[0]!= undefined) {
            div3[0].style.top = '50px';
          }
        }
      }, 100);
      if (this.isBack) {　　　　　　　　
        this.transitionName = 'slide-right'　　　　　　
      } else {
        const toDepth = to.path.split('/').length　
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'　　　
      }　　
      this.$store.commit('bisBack', {
        flag: false
      })

      let JDpath
      // 特殊标题
      if (to.path == '/dashboard/virtualCoin/recharge/joinSuccess') {
        let isSuccess = this.$store.state.recharge.isSuccess
        if (isSuccess == 'virtual') {
          JDpath = '/dashboard/virtualCoin1'
        } else if (isSuccess == 'goods') {
          JDpath = '/dashboard/virtualCoin2'
        } else if (isSuccess == 'buy') {
          JDpath = '/dashboard/virtualCoin3'
        } else if (isSuccess == 'putForward') {
          JDpath = '/dashboard/virtualCoin4'
        }
      } else if (to.path == '/my/asset/virtualCoin') {
        let isSuccess = this.$store.state.recharge.isSuccess
        if (isSuccess == 'INSUR') {
          JDpath = '/my/assetINSUR'
        } else if (isSuccess == 'BTC') {
          JDpath = '/my/assetBTC'
        } else if (isSuccess == 'ETH') {
          JDpath = '/my/assetETH'
        }
      } else {
        JDpath = to.path
      }
      // 改变title
      this.$store.commit('changTitle', {
        title: JDpath
      })
    }　
  }

}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
@import './styles/index.scss'; // 全局自定义的css样式
</style>
<style>
#app {
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}




.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
