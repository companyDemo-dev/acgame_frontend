const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  message: state => state.user.message,
  loginindex: state => state.login.loginindex,
  registerindex: state => state.login.registerindex,
  headerTitle: state => state.nav.headerTitle,
  rechargeindex: state => state.recharge.rechargeindex,
  successindex: state => state.recharge.successindex,
  networkindex: state => state.recharge.networkindex,

  bisBack: state => state.nav.bisBack,//全局变量
  isSuccess: state => state.recharge.isSuccess,//全局变量
}
export default getters
