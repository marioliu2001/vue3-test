// 好像没用上
import { onMounted, ref } from 'vue'
import useLayoutStore from '@/stores/modules/layout.js'

const layoutStore = useLayoutStore()

/** 当前系统所处模式 */
const systemDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : ''

/** 当前模式，初始值：如果缓存中有htmlModeClass的值否则取系统当前所处的模式 */
const htmlModeClass = layoutStore.isDarkMode ?? systemDarkMode

/** 初始化开关绑定的值 */
export const useDark = () => {
  /** 是否切换为暗黑模式，初始值为当前模式，当前模式为dark则为true，否则为false */
  return ref(!!htmlModeClass)
}

/** 返回 */
export const useToggle = (isDark) => {
  /** 组件在页面挂载（渲染）完毕时触发 */
  onMounted(() => {
    /** 组件渲染完毕就设置html类名 */
    document.documentElement.className = htmlModeClass
  })

  return function () {
    /** 向本地缓存中添加htmlModeClass，来记录当前所处模式 */
    /** 如果isDark为true，那么表示为暗黑模式，反之雪白模式 */
    isDark.value ? layoutStore.isDarkMode = 'dark' : layoutStore.isDarkMode = ''

    /** 设置html元素的类名 */
    document.documentElement.classList.toggle('dark')
  }
}
