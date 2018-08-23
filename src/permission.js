import router from './router'

function urlencode(str) {
  str = (str + '').toString();
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

const whiteList = ['/login', '/register', '/resetPaw']

// 不重定向白名单
router.beforeEach((route, redirect, next) => {
  const uid = window.localStorage.getItem('uid')
  if (uid || whiteList.indexOf(route.path) > -1) {
    next()
  } else {
    const redirectUri = urlencode(`https://${location.hostname}/#/register`)
    location.href = `https://open-box.qusukj.com/open/auth/authorize?app_id=${process.env.__APPID__}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=test`
  }
})
