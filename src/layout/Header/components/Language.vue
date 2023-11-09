<script setup>
/** 导入已有的语言列表 */
import { langs } from '@/locales'
/** 导入locales仓库 */
import { useLocalesStore } from '@/stores/modules/locales.js'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
defineOptions({
  name: 'MyLanguage'
})

/** 初始化locales仓库 */
const localesStore = useLocalesStore()

/** 从localesStore仓库中解构属性，并保持响应式 */
const { locale } = storeToRefs(localesStore)

/** 头部导航栏语言下拉菜单显示的当前语言环境 */
const currentLocale = ref(langs.find((cur) => cur.key === locale.value)?.title ?? '')

/** 切换当前语言环境 */
const changeLanguage = (locale) => {
  localesStore.setLocale(locale.key)
  currentLocale.value = locale.title
}
</script>

<template>
  <!-- 中英文切换 -->
  <el-dropdown trigger="click" @command="changeLanguage">
    <span class="el-dropdown-link">{{currentLocale}}</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="lang in langs" :key="lang.key" :command="lang">
          {{ lang.title }}
        </el-dropdown-item>
<!--        <el-dropdown-item>中文</el-dropdown-item>-->
<!--        <el-dropdown-item>English</el-dropdown-item>-->
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">

</style>
