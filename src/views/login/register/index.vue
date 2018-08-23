<template>
<div class="auth-login">
  <div class="spinner"></div>
</div>
</template>

<script>
import {
  aclogin,
} from '@/api/login'
import {
  setToken,
  setUid
} from '@/utils/auth'
import {
  Toast
} from 'mand-mobile'

export default {
  data() {
    return {}
  },
  async mounted() {

    let {
      code
    } = this.$route.query
    // let {code} = JSON.parse(redirect)
    if (code) {
      let obj = {}
      obj.code = code
      let {
        data
      } = await aclogin(obj)

      if (data) {
        this.$store.commit('SET_TOKEN', {
          token: data.token
        })
        setToken(data.token)
        setUid(data.uid)
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('uid', data.uid)
        window.localStorage.setItem('openid', data.openid)
        this.$router.push({
          path: '/dashboard',
        })
      } else {
        this.$router.push({
          path: '/dashboard',
        })
      }
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.auth-login {
    position: relative;
    width: 100%;
    height: 100%;
}
.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -20px;
    width: 40px;
    height: 40px;
    background-color: #7ea2ff;
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
    }
}

@keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
    }
}
</style>
