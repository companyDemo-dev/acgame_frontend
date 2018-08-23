
const login = {
  state: {
    loginindex: '',
    registerindex: ''
  },

  mutations: {//对传入的数据仅进行操作
    // 登录页
   showLogindex: (state) => {
     state.loginindex = !state.loginindex
   },
    // 注册页
   showRegisterindex: (state) => {
     state.registerindex = !state.registerindex
   },
  },

  actions: {//可以对数据进行异步操作

  }
}

export default login
