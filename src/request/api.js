import axios from '../utils/http'
// 登录
export function userLogin (payload) {
  return axios({
    url: '/login',
    method: 'post',
    data: payload
  })
}
