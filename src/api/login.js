import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/api/userinfo'
  })
}
