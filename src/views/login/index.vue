

<template>
<div id="main">
  <div class="container-top">
  <mt-header title="登录界面">
    <router-link to="/my" slot="left">
      <mt-button icon="back" @click="toLogin"></mt-button>
    </router-link>
  </mt-header>
  </div>

  <div class="patch3"></div>
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">快捷登录</mt-tab-item>
    <mt-tab-item id="2">密码登录</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <md-field>
    <md-input-item
      ref="name"
      title="手机号"
      placeholder="请输入手机号"
      is-title-latent
      clearable
    ></md-input-item>

  <md-button @click="next">获取短信验证码</md-button>
  </md-field>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <md-field>
      <md-input-item
        ref="name"
        title="手机号"
        placeholder="请输入手机号"
        is-title-latent
        clearable
      ></md-input-item>
      <md-input-item
        ref="name"
        title="密码"
        placeholder="请输入密码"
        is-title-latent
        clearable
      ></md-input-item>

        <md-button @click="next">确认</md-button>
    </md-field>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>
<script>
import {
  isvalidUsername
} from '@/utils/validate'


var routers = []
export default {
  name: 'login',
  components: {
 },
  data() {
    const validateUsername = (rule, value, callback) => {
      // if (!isvalidUsername(value)) {
      //   callback(new Error('请输入正确的用户名'))
      // } else {
      callback()
      // }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      titles: ['1', '2'],
      selectTab : '2',
      selected :'1',
      labelPosition: 'top',
      login_method: 'first', // 登录方式
      loginVerify: { // 普通登录
        phone: '',
        number: ''
      },
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePass
        }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    indexChanged(index, preIndex){
      debugger
    },
    toLogin() {
      this.$store.commit('showLogindex')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    toresetPaw() {
      this.$router.push({
        path: '/resetPaw'
      })
    },
    toRegister() {
      this.$router.push({
        path: '/register'
      })
    },
    change(value) {
      // 目的是去掉输入框中的小数点
      // if (this.value) {
      //   this.value = parseInt(value);
      // }
      this.loading = false
    },
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    // login(data) {
    //   // MenuUtils(routers, data)
    //
    // },
    forload(treeData) {
      for (let i = 0; i < treeData.length; i++) {
        if (treeData[i].children) {
          if (treeData[i].children.length > 0) { //有下级
            treeData[i].meta = {
              title: treeData[i].label,
              icon: 'tree'
            }
            treeData[i].path = '/' + treeData[i].menuUrl
            treeData[i].leaf = false
            treeData[i].component = treeData[i].menuUrl
            if (treeData[i].level == 1) { //有下级 第一个菜单
              treeData[i].component = 'layout'
              treeData[i].redirect = '/' + treeData[i].menuUrl + '/' + treeData[i].children[0].menuUrl + ''
            }
          } else if (treeData[i].children.length == 0 && treeData[i].level == 1) { //第一层菜单无下级生成一个
            let chil = {}
            chil.meta = {
              title: treeData[i].label,
              icon: 'table'
            }
            chil.path = treeData[i].menuUrl
            chil.leaf = true
            chil.component = treeData[i].menuUrl
            treeData[i].children.push(chil)

            treeData[i].path = '/index'
            treeData[i].leaf = false
            treeData[i].component = 'layout'
          } else if (treeData[i].children.length == 0 && treeData[i].level != 1) {
            treeData[i].meta = {
              title: treeData[i].label,
              icon: 'table'
            }
            treeData[i].path = treeData[i].menuUrl
            treeData[i].leaf = true
            treeData[i].component = treeData[i].menuUrl

          }
          treeData[i].children = this.forload(treeData[i].children)
        }
      }
      return treeData
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true

          this.$store.dispatch('Login', this.loginForm).then(async () => {

            if (this.$store.getters.token && this.$store.getters.token != undefined && this.$store.getters.token != '') {

              this.loading = false
              window.localStorage.setItem('user', JSON.stringify('true'))
              this.$router.push({
                path: '/'
              })
            } else {
              this.$message({
                message: this.$store.getters.message,
                type: 'warning'
              });
            }

          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/index.scss";
#main {
    position: absolute;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #f4f4f6;
}

</style>
