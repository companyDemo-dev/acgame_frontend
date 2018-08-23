import request from '@/utils/request'
import { getUid } from '@/utils/auth'

let myUid = getUid()

export function getAssetsList() {
  return request({
    //url: '/user/login',
    url: '/v1/users/'+myUid+'/assets',
    method: 'get'
  });
}

export function getAssetsDetail(data) {
  return request({
    url: '/v1/users/'+myUid+'/assets/'+data.symbo+'',
    method: 'get'
  })
}

export function getUsersDetail() {
  return request({
    url: '/v1/users/'+myUid,
    method: 'get'
  })
}

export function setnickname(data) {
  return request({
    //url: '/user/login',
    url: '/v1/users/'+myUid+'/nickname',
    method: 'post',
    data
  });
}

export function getAsset_records(data) {
  return request({
    url: '/v1/users/'+myUid+'/asset_records?offset='+data.offset+'&limit='+data.limit,
    method: 'get'
  })
}

export function getAddresses() {
  return request({
    url: '/v1/users/'+myUid+'/addresses',
    method: 'get'
  })
}

export function addAddresses(data) {
  return request({
    url: '/v1/users/'+myUid+'/address',
    method: 'post',
    data
  });
}
export function editAddresses(data) {
  return request({
    url: '/v1/users/'+myUid+'/address/'+data.id,
    method: 'post',
    data
  });
}
