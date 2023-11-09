<script setup>
import { getImageUrl } from '@/utils/getImageUrl.js'
import { ArrowDown } from '@element-plus/icons-vue'
defineOptions({
  name: 'UserAvatar'
})
</script>

<template>

  <!-- 用户信息 -->
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <!-- 用户头像 -->
      <el-avatar :size="27" :src="getImageUrl('logo.png')" />
      <span class="username">admin</span>
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>仓库地址</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
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
