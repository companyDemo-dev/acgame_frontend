
module.exports = {
  InsurBox :{
    debug: true, // 调试预留字段 true|false, 生产环境请设置为false，目前无相关逻辑关联
    appId: '', // InsurBox 应用 appID
    jsTimeStamp: 111111, // 时间戳，10位
    nonce: '', // 签名随机串 /^[a-zA-Z0-9]{6,32}$/
    signature: '', // 签名信息 /^[A-Z0-9]{32}$/
    jsApiList: [] // JS API 接口, 如 config,checkJsApi
  }
}
