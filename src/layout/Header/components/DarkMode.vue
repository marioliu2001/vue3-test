<script setup>
defineOptions({
  name: 'DarkMode'
})
import { ref } from 'vue'
import {Moon, Sunny} from "@element-plus/icons-vue";
import { useDark, useToggle } from '@vueuse/core'

/** 切换模式 */
const isDark = useDark()
const toggleDark = useToggle(isDark)
/** 是否切换为暗黑模式 */
/** 是否切换暗黑模式 */
const darkMode = ref(false)
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