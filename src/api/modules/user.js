import { post, get, put, del } from '@/service/http.js'

// 获取用户信息
export const getUserInfo = (userId) => get('/api/user/', userId)

// 创建用户
export const createUser = (userData) => post('/api/user', userData)

// 更新用户信息
export const updateUser = (userId, updatedData) => put(`/api/user/${userId}`, updatedData)

// 删除用户
export const deleteUser = (userId) => del('/api/user/', userId)
