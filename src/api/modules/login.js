import { post, get } from '@/service/http.js'

// 登录接口
export const loginApi = (username, password) => post('/api/user/login', { username, password })

// 获取登录用户信息
export const getLoginUserInfoApi = () => get('/api/user/getLoginUserInfo', {})

// 退出登录
export const logoutApi = () => post('/api/user/logout', {})
