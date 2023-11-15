<script setup>
import { Monitor } from '@element-plus/icons-vue'
/** 引入 useFullScreen 全屏hook函数 */
import { useFullscreen, useToggleFullscreen } from '@/hooks/useFullscreen.js'

defineOptions({
  name: 'MyFullScreen'
})

/** 是否全屏状态 */
const isFullScreen = useFullscreen()
/** 全屏组件的点击事件 */
const toggleScreen = useToggleFullscreen(isFullScreen)
</script>

<template>
  <div class="toggle-screen flex" @click="toggleScreen">
    <el-icon v-if="!isFullScreen" :size="22"><FullScreen /></el-icon>
    <el-icon v-else :size="22"><Monitor /></el-icon>
  </div>
</template>

<style scoped lang="scss">

</style>
