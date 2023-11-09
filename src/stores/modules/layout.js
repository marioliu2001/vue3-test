import { defineStore } from 'pinia'
export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isCollapse: false,
    htmlModeClass: window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : ''
  }),
  actions: {
    // 切换isCollapse的状态
    changeIsCollapse () {
      this.isCollapse = !this.isCollapse
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
export default useLayoutStore
