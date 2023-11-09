import { defineStore } from 'pinia'
import { pinia } from '../index.js'
import i18n from '@/locales/index.js'
export const useLocalesStore = defineStore('locales', {
  state: () => ({
    locale: i18n.global.locale
  }),
  actions: {
    // 设置当前的语言环境
    setLocale (lang) {
      this.locale = lang
      i18n.global.locale = lang
    }

  },
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
export const useLocalesStoreHook = () => {
  return useLocalesStore(pinia)
}
