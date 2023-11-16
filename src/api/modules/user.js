import { post, get, put, del } from '@/service/http.js'
export const Api = {
  GET_ALL_USERS: '/api/user/get-users',
  GET_ALL_USERS_BY_PAGE: '/api/user/get-users-by-sexOrNickName-page',
  ADD_USER: '/api/user',
  UPDATE_USER: (userId) => `/api/user/${userId}`,
  DELETE_USER: (userId) => `/api/user/${userId}`
}
// 获取用户信息
export const getAllUserInfoApi = () => get(Api.GET_ALL_USERS)

// 获取用户信息(分页)
export const getAllUserInfoByPageApi = (pageNo, pageSize) => get(Api.GET_ALL_USERS_BY_PAGE, { pageNo, pageSize })

// 创建用户
export const createUserApi = (userData) => post(Api.ADD_USER, userData)

// 更新用户信息
export const updateUserApi = (userId, updatedData) => put(Api.UPDATE_USER(userId), updatedData)

// 删除用户
export const deleteUserApi = (userId) => del(Api.DELETE_USER(userId), userId)
