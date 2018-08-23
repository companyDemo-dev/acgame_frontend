import request from '@/utils/request'
import { getUid } from '@/utils/auth'

let myUid = getUid()



export function getCategories() {
  return request({
    url: '/v1/products/categories',
    method: 'get'
  });
}
export function getProductsList(data) {
  return request({
    // url: '/v1/products?cid='+data.cid+'&offset='+data.offset+'&limit='+data.limit,
      url: '/v1/products?cid='+data.cid+'&offset='+data.offset+'&limit='+data.limit,
    method: 'get'
  });
}

export function getProducts_records(data) {//商品详情 参与记录
  return request({
    url: '/v1/products/records?offset='+data.offset+'&limit='+data.limit+'',
    method: 'get'
  })
}

export function getMyProducts_records(data) {
  return request({
    url: '/v1/products/my_records/'+myUid+'?offset='+data.offset+'&limit='+data.limit+'',
    method: 'get'
  })
}

export function getProducts(data,pid) {//领取奖品
  return request({
    url: '/v1/users/'+myUid+'/products/'+pid+'/confirm',
    method: 'post',
    data
  });
}



export function getProductDetail(pid) {
  return request({
    url: '/v1/products/'+pid,
    method: 'get',
  });
}

export function getProductDetailaward(pid) {//中奖信息
  return request({
    url: '/v1/products/'+pid+'/award',
    method: 'get',
  });
}

export function getProductDetaillottery(pid) {//开奖信息
  return request({
    url: '/v1/products/'+pid+'/lottery',
    method: 'get',
  });
}

export function getProductDetailJionTime(pid) {
  return request({
    url: '/v1/products/'+pid+'/portion/'+myUid,
    method: 'get',
  });
}
export function getAllProducts_records(data) {//参与列表
  return request({
    url: '/v1/products/'+data.pid+'/records?offset='+data.offset+'&limit='+data.limit+'',
    method: 'get'
  })
}


export function getAwardOrder(award_id) {
  return request({
    url: '/v1/users/'+myUid+'/awards/'+award_id,
    method: 'get',
  });
}
export function payOrder(data,pid) {
  return request({
    url: '/v1/users/'+myUid+'/products/'+pid+'/pay',
    method: 'post',
    data
  });
}
