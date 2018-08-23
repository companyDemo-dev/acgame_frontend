const nav = {
  state: {
    headerTitle: '',
    isBack: ''
  },

  mutations: { //对传入的数据仅进行操作
    // 标题
    changTitle: (state, {
      title
    }) => {
      if (title === '/new') {
        state.headerTitle = '最新成交'
      } else if (title === '/dashboard') {
        state.headerTitle = '币众'
      } else if (title === '/my') {
        state.headerTitle = '我的'
      } else if (title === '/dashboard/bannerDetail') {
        state.headerTitle = '活动详情'
      } else if (title === '/dashboard/goodsDetail') {
        state.headerTitle = '商品详情'
      } else if (title === '/dashboard/recharge') {
        state.headerTitle = 'InsurBox 充值'
      }else if (title === '/dashboard/luckyNum') {
        state.headerTitle = '本期幸运号码'
      }else if (title === '/dashboard/virtualCoin1') {
        state.headerTitle = '充值成功'
      }else if (title === '/dashboard/virtualCoin2') {
        state.headerTitle = '充值成功'
      }else if (title === '/dashboard/virtualCoin3') {
        state.headerTitle = '参与成功'
      }else if (title === '/dashboard/virtualCoin4') {
        state.headerTitle = '提现成功'
      }else if (title === '/dashboard/virtualCoin/recharge') {
        state.headerTitle = 'InserBox 充值'
      }else if (title === '/my/asset/virtualCoin/putForward') {
        state.headerTitle = 'InserBox 提现'
      }else if (title === '/my/userInfo') {
        state.headerTitle = '账号设置'
      }  else if (title === '/my/asset') {
          state.headerTitle = '我的资产'
      }  else if (title === '/my/assetINSUR') {
          state.headerTitle = 'INSUR'
      }  else if (title === '/my/assetBTC') {
          state.headerTitle = 'BTC'
      }  else if (title === '/my/assetETH') {
          state.headerTitle = 'ETH'
      }else if (title === '/my/asset/virtualCoin') {
          state.headerTitle = 'INSUR'
      } else if (title === '/my/asset/tranRecord') {
          state.headerTitle = '交易记录'
      }else if (title === '/my/partRecord') {
          state.headerTitle = '参与记录'
      }else if (title === '/my/orderEdit/addressList') {
          state.headerTitle = '收货地址'
      }else if (title === '/dashboard/orderEdit') {
          state.headerTitle = '领取商品'
      }else if (title === '/dashboard/orderEdit/orderDetails') {
          state.headerTitle = '订单详情'
      }else if (title === '/my/orderEdit/addAddress') {
          state.headerTitle = '新增收货地址'
      }else if (title === '/my/commonProblem') {
          state.headerTitle = '常见问题'
      }else if (title === '/my/commonProblem/problemDetail') {
          state.headerTitle = '常见问题'
      }else if (title === '/my/commonProblem/rule') {
          state.headerTitle = '夺宝规则'
      }else if (title === '/my/commonProblem/waytoplay') {
          state.headerTitle = '夺宝玩法'
      }else if (title === '/my/contactUs') {
          state.headerTitle = '联系我们'
      }else if (title === '/my/userInfo/aboutUs') {
          state.headerTitle = '关于我们'
      }else if (title === '/404') {
          state.headerTitle = '404错误'
      }else{
          state.headerTitle = '未知'
      }
    },
     bisBack: (state, {
       flag
     }) => {
         state.isBack = flag
       },
  },

  actions: { //可以对数据进行异步操作

  }
}

export default nav
