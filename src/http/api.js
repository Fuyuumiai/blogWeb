import axios from './axios'

function $axios (method, url, data, params, config) {
  return axios({
    method,
    url,
    data,
    params,
    ...config
  })
}

// 将请求封装
export default {
  // 获取前15个标签
  getTags (data) {
    return $axios('post', '/tag/getTags', data)
  },
  // 获取指定数量文章类型
  getTypes (data) {
    return $axios('post', '/type/getTypes', data)
  },
  // 获取博文统计数据
  getArticleInfo (params) {
    return $axios('get', '/blog/getArticleInfo', '', params)
  },
  // 根据指定ID获取博文数据
  getArticle (params) {
    return $axios('get', '/blog/getArticle', '', params)
  },
  // 获取指定年份文章标题
  getTimeArticle (params) {
    return $axios('get', '/blog/getTimeArticle', '', params)
  },
  // 分页查询所有博文
  getAssignedArticle (data) {
    return $axios('post', '/blog/getAssignedArticle', data)
  },
  // 获取所有的打卡记录
  findClock (params) {
    return $axios('get', '/clock/findAll', '', params)
  },
  // 获取打卡记录的一些信息
  clockInfo (params) {
    return $axios('get', '/clock/clockInfo', '', params)
  },
  // 获取
  getAssignedLink (data) {
    return $axios('post', '/link/getAssignedLink', data)
  },
  // 批量获取指定ID文章
  getArticleList (data) {
    return $axios('post', '/blog/getArticleList', data)
  }
}
