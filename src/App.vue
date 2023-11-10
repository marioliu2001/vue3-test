<script setup>
import { useLocalesStore } from '@/stores/modules/locales.js'
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const useLocale = useLocalesStore()
const locales = {
  zh,
  en
}
console.log(locales[useLocale.locale])
defineOptions({
  name: 'App'
})
</script>

<template>
  <div class="app">
    <el-config-provider :locale="locales[useLocale.locale]">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  //background-color: $main-bg-color;
}
/* 自定义切换动画 */
/* 元素刚进入的状态 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
/* 被激活时 */
.v-enter-active {
  transition: all 0.3s;
}
/* 元素完全进入后的状态 */
.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateX(0px);
}
/* 元素离开前的状态 */
/* .v-leave {
    transform: translateX(0px);
    opacity: 1;
} */
.v-leave-active {
  transition: all 0.3s;
}
/* 元素离开后的状态 */
/* .v-leave-to {
    opacity: 0;
    transform: translateX(-30px);
} */

</style>
