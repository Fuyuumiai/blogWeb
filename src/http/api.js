import axios from './axios'

function $axios (method, url, data, params) {
  return axios({
    method,
    url,
    data,
    params
  })
}

// 将请求封装
export default {
  // 根据条件查找全部用户
  getAllUser (data) {
    return $axios('get', '/UserController/getAllUser', '', data)
  }
}
