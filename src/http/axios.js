import axios from 'axios'
// import router from '@/router'

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // 基础url前缀
      baseURL: 'http://localhost:8080/',
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
      if (config.method === 'post') {
        config.data = {
          ...config.data,
          _t: Date.parse(new Date()) / 1000
        }
      } else if (config.method === 'get') {
        config.params = {
          _t: Date.parse(new Date()) / 1000,
          ...config.params
        }
      }
      // 正确时的操作，比如全局loading
      return config
    }, error => {
      // 请求错误时
      // 1、请求超时
      // if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      //   console.log('请求超时')
      // }
      // // 2、需要重定向到错误页面
      // let errorInfo = error.response
      // if (errorInfo) {
      //   error = errorInfo.data // 拿到错误信息，在下方reject导出，那样页面catch就能拿到详细的错误信息
      //   let errorStatus = errorInfo.status
      //   router.push({
      //     path: '/error/' + errorStatus
      //   })
      // }
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
