import instance from './request.js'
import axios from 'axios' // 请替换成实际的 Axios 实例

const request = async (method, url, dataOrParams, config = {}) => {
  try {
    const response = await instance({
      method,
      url,
      [method === 'get' ? 'params' : 'data']: dataOrParams,
      ...config
    })
    // 如果接口定义了返回中包含message
    if (response.data.message) {
      ElMessage.success(response.data.message)
    }
    // 返回数据
    return response.data
  } catch (error) {
    console.error(`请求失败: ${error.data.message}`)
    if (error.data && error.data.message) {
      ElMessage.error(error.data.message || '未知错误')
    }
    // throw error // 先不用抛，再这处理就行，然后再store中判断
  }
}

export const get = async (url, params, config = {}) => {
  return await request('get', url, params, config)
}

export const post = async (url, data, config = {}) => {
  return await request('post', url, data, config)
}

export const put = async (url, data, config = {}) => {
  return await request('put', url, data, config)
}

export const del = async (url, params, config = {}) => {
  return await request('delete', url, params, config)
}

// 如果需要取消请求的支持
export const cancelToken = () => {
  return axios.CancelToken.source()
}
