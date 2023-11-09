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
</style>
