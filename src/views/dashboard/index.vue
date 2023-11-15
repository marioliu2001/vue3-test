<template>
  <div class="dashboard">
    <span class="text-3xl font-bold dark:text-7xl"> {{ $t('common.main') }} </span>

    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
    <el-button type="primary" @click="myPikPak1">用户登录接口1</el-button>
    <el-button type="success" @click="myPikPak2">用户登录接口2</el-button>
    <el-button type="info" @click="myPikPak3">用户登录接口3</el-button>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useLoginStore } from '@/stores/modules/login.js'
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
const myPikPak3 = () => {
  loginStore.doLogin(userForm)

  // .then(res => {
  //   console.log('vue中获取信息')
  //   console.log(res)
  // })
}
</script>
<style scoped lang="scss">

</style>
