<template>
  <div class="dashboard">
    <span class="text-3xl font-bold dark:text-7xl"> {{ $t('common.main') }} 国际化方法</span>

    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
    <el-button type="primary" @click="myPikPak1" disabled>用户登录接口1</el-button>
    <el-button type="success" @click="myPikPak2" disabled>用户登录接口2</el-button>
    <el-button type="info" @click="myPikPak3" disabled>用户登录接口3</el-button>
    <el-button type="info" @click="myPikPak4('123')">局部加载loading(含参数)</el-button>
    <el-button type="info" @click="myPikPak5">取消loading</el-button>
    <div class="needLoading" style="width: 100px;height: 100px;background-color: black;"></div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useLoginStore } from '@/stores/modules/login.js'
import useInstance from '@/hooks/useInstance.js'

const loginStore = useLoginStore()

const myPikPak1 = () => {
  console.log('没解构')
}
const myPikPak2 = () => {
  console.log('解构')
}
const userForm = reactive({
  username: 'admin',
  password: 'admin'
})

// 获取全局实例
// const { appContext } = getCurrentInstance()
// const global = appContext.config.globalProperties
const { global, proxy } = useInstance() // 封装了个方法，两行代码变一行

const myPikPak3 = () => {
  loginStore.doLogin(userForm)
}
const myPikPak4 = (msg) => {
  global.$myLoading.showFullScreenLoading('.needLoading', '挂载全局的loading') // 通过全局挂载
  console.log(proxy)
  // showFullScreenLoading('.needLoading', msg) 通过方法引入
}
const myPikPak5 = () => {
  global.$myLoading.hideFullScreenLoading('.needLoading') // 通过全局挂载
  // showFullScreenLoading('.needLoading', msg) 通过方法引入
}
</script>
<style scoped lang="scss">

</style>
