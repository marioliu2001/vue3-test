import { defineStore } from 'pinia'
import { pinia } from '../index.js'
export const useUserStore = defineStore('user', {
  state: () => ({
    username: '张三',
    age: 0,
    gender: '男'
  }),
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage
      }
    ]

  }
})
/**
 * 用于setup语法糖以外的地方使用
 * @returns Store
 */
export const useUserStoreHook = () => {
  return useUserStore(pinia)
}
