import axios from 'axios'
// import router from '@/router'

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // 基础url前缀
      baseURL: 'http://www.yuiai.top:8080/',
      // baseURL: 'http://localhost:3000/',
      // 请求头信息
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // 设置超时时间
      timeout: 10000,
      // 携带凭证
      withCredentials: true,
      // 返回数据类型
      responseType: 'json'
    })
    // 添加request拦截器
    instance.interceptors.request.use(config => {
      // 设置时间戳
      // 正确时的操作，比如全局loading
      return config
    }, error => {
      return Promise.reject(error)
    })

    // res拦截器
    instance.interceptors.response.use(response => {
      return response
    }, error => {
      return Promise.reject(error)
    })
    // 处理请求
    instance(options).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
