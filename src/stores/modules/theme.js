import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
  state: () => ({
    htmlModeClass: window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : ''
  }),
  actions: {
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
export default useThemeStore
