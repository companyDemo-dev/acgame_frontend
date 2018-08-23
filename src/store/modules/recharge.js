const reCharge = {
  state: {
    networkindex: '',
    rechargeindex: '',
    successindex: '',
    isSuccess: '',
  },

  mutations: { //对传入的数据仅进行操作
    //
    shownetwork: (state,data) => {
      state.networkindex = data
    },
    showRecharge: (state) => {
      state.rechargeindex = !state.rechargeindex
    },
    showSuccess: (state) => {
      state.successindex = !state.successindex
    },
     successCon: (state, {
       flag
     }) => {
         state.isSuccess = flag
       },
  },

  actions: { //可以对数据进行异步操作

  }
}

export default reCharge
