import axios from 'axios'
import router from '../router'
import {
  Dialog,
  Toast
} from 'mand-mobile'
import store from '../store'
import {
  getToken,
  removeToken
} from '@/utils/auth'
// let token= window.localStorage.getItem('token')

// 引入项目的配置信息
var config = require('../config/index')

function urlencode(str) {
  str = (str + '').toString();
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
  replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}
// 创建axios实例

const service = axios.create({
  baseURL: process.env.__SERVICE__, // api的base_url
  timeout: 15000 // 请求超时时间
})
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // alert('url名字:'+ response.config.url)
    const res = response.data
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    if (error.message == "Network Error") {
      store.commit('shownetwork',1)
      Toast({
        content: error.message
      })
      // error.message
    } else if (error.response.status == 400 || error.response.status == 422 || error.response.status == 500) {
      Toast({
        content: error.response.data.error || error.response.data.msg,
      })
    } else if (error.response.status == 401) {
      // Toast({
      //    content: error.response.data.msg,
      //  })
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('uid')
      window.localStorage.removeItem('openid')
      removeToken()
      const redirectUri = urlencode(`https://${location.hostname}/#/register`)
      location.href = `https://open-box.qusukj.com/open/auth/authorize?app_id=${process.env.__APPID__}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=test`

    }


    return Promise.reject(error)
  }
)

export default service
