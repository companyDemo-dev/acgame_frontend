import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UidKey = 'Admin-uid'
const userKey = 'Admin-user'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUid() {
  return Cookies.get(UidKey)
}

export function setUid(uid) {
  return Cookies.set(UidKey, uid)
}
export function removeUidKey() {
  return Cookies.remove(UidKey)
}

export function setUser(user) {
  return Cookies.set(userKey, user)
}

export function getUser() {
  return Cookies.get(userKey)
}
export function removeuserKey() {
  return Cookies.remove(userKey)
}
