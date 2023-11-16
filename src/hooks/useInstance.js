import { getCurrentInstance } from 'vue'

// 使用实例方法，导入这个即可
export default function useInstance () {
  const { appContext, proxy } = getCurrentInstance()
  const global = appContext.config.globalProperties
  return {
    proxy,
    global
  }
}
