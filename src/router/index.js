// import Vue from 'vue'
// import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

/* Layout */
import Layout from '@/views/layout/index.vue'

const dashboard = r => require.ensure([], () => r(require('@/views/dashboard/index')), 'dashboard')
const newc = r => require.ensure([], () => r(require('@/views/new/index')), 'newc')
const my = r => require.ensure([], () => r(require('@/views/my/index')), 'my')
const bannerDetail = r => require.ensure([], () => r(require('@/views/dashboard/bannerDetail/index')), 'bannerDetail')
const goodsDetail = r => require.ensure([], () => r(require('@/views/dashboard/goodsDetail/index')), 'goodsDetail')
const recharge = r => require.ensure([], () => r(require('@/views/dashboard/recharge/index')), 'recharge')
const joinSuccess = r => require.ensure([], () => r(require('@/views/dashboard/joinSuccess/index')), 'joinSuccess')
const luckyNum = r => require.ensure([], () => r(require('@/views/dashboard/luckyNum/index')), 'luckyNum')
const orderEdit = r => require.ensure([], () => r(require('@/views/dashboard/orderEdit/index')), 'orderEdit')
const orderDetails = r => require.ensure([], () => r(require('@/views/dashboard/orderDetails/index')), 'orderDetails')

const addAddress = r => require.ensure([], () => r(require('@/views/my/addAddress/index')), 'addAddress')
const addressList = r => require.ensure([], () => r(require('@/views/my/addressList/index')), 'addressList')
const userInfo = r => require.ensure([], () => r(require('@/views/my/userInfo/index')), 'userInfo')
const aboutUs = r => require.ensure([], () => r(require('@/views/my/aboutUs/index')), 'aboutUs')
const partRecord = r => require.ensure([], () => r(require('@/views/my/partRecord/index')), 'partRecord')
const commonProblem = r => require.ensure([], () => r(require('@/views/my/commonProblem/index')), 'commonProblem')
const problemDetail = r => require.ensure([], () => r(require('@/views/my/problemDetail/index')), 'problemDetail')
const rule = r => require.ensure([], () => r(require('@/views/my/rule/index')), 'rule')
const waytoplay = r => require.ensure([], () => r(require('@/views/my/waytoplay/index')), 'waytoplay')
const contactUs = r => require.ensure([], () => r(require('@/views/my/contactUs/index')), 'contactUs')
const asset = r => require.ensure([], () => r(require('@/views/my/asset/index')), 'asset')
const virtualCoin = r => require.ensure([], () => r(require('@/views/my/virtualCoin/index')), 'virtualCoin')
const RechargeSuccess = r => require.ensure([], () => r(require('@/views/my/RechargeSuccess/index')), 'RechargeSuccess')
const tranRecord = r => require.ensure([], () => r(require('@/views/my/tranRecord/index')), 'tranRecord')
const putForward = r => require.ensure([], () => r(require('@/views/my/putForward/index')), 'putForward')

const pageNetwork = r => require.ensure([], () => r(require('@/views/404/pageNetwork/index')), 'pageNetwork');
const page404 = r => require.ensure([], () => r(require('@/views/404/index')), 'page404');
const register = r => require.ensure([], () => r(require('@/views/login/register/index')), 'register');

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [ // 二级路由。对应App.vue
      // 地址为空时跳转dashboard页面
      {
        path: '/dashboard',
        component: dashboard
      },
      {
        path: '/new',
        component: newc
      },
      {
        path: '/my',
        component: my
      }
    ]
  },
  {
    path: '/my/partRecord',
    component: partRecord
  },
  {
    path: '/dashboard/bannerDetail',
    component: bannerDetail
  },
  {
    path: '/dashboard/goodsDetail',
    component: goodsDetail
  },
  {
    path: '/dashboard/virtualCoin/recharge',
    component: recharge
  },
  {
    path: '/dashboard/virtualCoin/recharge/joinSuccess',
    component: joinSuccess
  },
  {
    path: '/dashboard/luckyNum',
    component: luckyNum
  },
  {
    path: '/dashboard/orderEdit',
    component: orderEdit
  },
  {
    path: '/dashboard/orderEdit/orderDetails',
    component: orderDetails
  },
  {
    path: '/my/orderEdit/addAddress',
    component: addAddress
  },
  {
    path: '/my/orderEdit/addressList',
    component: addressList
  },
  {
    path: '/my/userInfo',
    component: userInfo
  },
  {
    path: '/my/userInfo/aboutUs',
    component: aboutUs
  },
  {
    path: '/my/commonProblem',
    component: commonProblem
  },
  {
    path: '/my/commonProblem/problemDetail',
    component: problemDetail
  },

  {
    path: '/my/commonProblem/rule',
    component: rule
  },

  {
    path: '/my/commonProblem/waytoplay',
    component: waytoplay
  },
  {
    path: '/my/contactUs',
    component: contactUs
  },
  {
    path: '/my/asset',
    component: asset
  },
  {
    path: '/my/asset/virtualCoin',
    component: virtualCoin
  },
  {
    path: '/my/asset/virtualCoin/putForward',
    component: putForward
  },
  {
    path: '/my/asset/RechargeSuccess',
    component: RechargeSuccess
  },
  {
    path: '/my/asset/tranRecord',
    component: tranRecord
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/404',
    component: page404
  },
  {
    path: '/Networklost',
    component: pageNetwork
  },
  {
    path: '/*',
    redirect: '/404'
  }
]

export default new VueRouter({
  routes: constantRouterMap
})
