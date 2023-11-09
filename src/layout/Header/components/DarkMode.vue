<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
/** 引入暗黑模式hook函数 */
import { useDark, useToggle } from '@vueuse/core'
defineOptions({
  name: 'DarkMode'
})

const isDark = useDark({
  storageKey: 'ThemeSwitch',
  // 暗黑class名字
  valueDark: 'dark',
  // 高亮class名字
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)

// const darkMode = ref(isDarkMode)
/** switch开关值发生变化触发的回调，用来控制html元素类的切换 */
// const toggleDark = () => {
//   document.documentElement.classList.toggle('dark')
// };
</script>

<template>
  <el-switch
      v-model="isDark"
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
