<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import useThemeStore from '@/stores/modules/theme.js'
defineOptions({
  name: 'DarkMode'
})
// 有bug
// const isDark = useDark({
//   storageKey: 'ThemeSwitch',
//   // 暗黑class名字
//   valueDark: 'dark',
//   // 高亮class名字
//   valueLight: 'light'
// })
// const darkMode = ref(false)
// const toggleDark = useToggle(isDark)

const themeStore = useThemeStore()
/** 开关绑定的值 */
const darkMode = ref(!!themeStore.htmlModeClass)

/** 组件在页面挂载（渲染）完毕时触发 */
onMounted(() => {
  /** 组件渲染完毕就设置html类名 */
  document.documentElement.className = themeStore.htmlModeClass
})

/** switch开关值发生变化触发的回调，用来控制html元素类的切换 */
const toggleDark = () => {
  /** 向本地缓存中添加htmlModeClass，来记录当前所处模式 */
  /** 如果isDark为true，那么表示为暗黑模式，反之雪白模式 */
  darkMode.value ? themeStore.htmlModeClass = 'dark' : themeStore.htmlModeClass = ''
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <el-switch
      v-model="darkMode"
      style="--el-switch-on-color: #0960bd; --el-switch-off-color: #f60"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="toggleDark"
      :size="'large'"
  />
</template>

<style scoped lang="scss">

</style>
