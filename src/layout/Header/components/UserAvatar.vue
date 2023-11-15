<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { LOGIN_URL } from '@/config/index.js'
import router from '@/router/index.js'
import { useLoginStore } from '@/stores/modules/login.js'
const loginStore = useLoginStore()

defineOptions({
  name: 'UserAvatar'
})

// 退出登录
const logout = () => {
  ElMessageBox.confirm('您是否确认退出登录?', '温馨  提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    // 1.执行退出登录接口
    await loginStore.doLogout()
    // 2.清除 Token
    loginStore.$reset()
    // 3.刷新页面/跳转登录
    // await location.reload()
    await router.push(LOGIN_URL)
  })
}
// 定义登录用户信息
const nickName = ref()
const avatarUrl = ref()
onMounted(() => {
  nickName.value = loginStore.userInfo.nickName
  avatarUrl.value = loginStore.userInfo.avatarUrl
})

</script>

<template>

  <!-- 用户信息 -->
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <!-- 用户头像 -->
<!--      <el-avatar :size="27" :src="getImageUrl('logo.png')" />-->
      <el-avatar :size="27" :src="avatarUrl" />
<!--      <el-avatar :size="27" src="https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png" />-->
      <span class="username">{{ nickName }}</span>
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>仓库地址</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
.el-dropdown {

  .el-dropdown-link {
    display: flex;
    align-items: center;
    justify-content: center;

    .username{
      margin: 0 5px;
    }
  }
}
</style>
