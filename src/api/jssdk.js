import request from '@/utils/request'

export function jssdkSign() {
  return request({
    url: '/v1/insur/jssdk/sign',
    method: 'get'
  });
}

export function recharge(data) {//充值
  return request({
    url: '/v1/insur/pay/order/recharge',
    method: 'post',
    data
  });
}
export function withdraw(data) {//提现
  return request({
    url: '/v1/insur/pay/order/withdraw',
    method: 'post',
    data
  });
}
export function out_trade_no(out_trade_no) {//提现
  return request({
    url: '/v1/insur/pay/order/recharge/'+out_trade_no,
    method: 'post',
  });
}
