// import Vue from 'vue'
// import Vuex from 'vuex'
import user from './modules/user'
import nav from './modules/nav'
import login from './modules/login'//引入全局变量模块
import recharge from './modules/recharge'//引入全局变量模块
import getters from './getters'

// Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    // 登录页
    login,
    recharge,
    nav,
  },
  getters
})

export default store
