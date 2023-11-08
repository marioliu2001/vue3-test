<script setup>
defineOptions({
  name: 'MyLanguage'
})
</script>

<template>
  <!-- 中英文切换 -->
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">中文</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>中文</el-dropdown-item>
        <el-dropdown-item>English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
.el-dropdown{
  //line-height: 0;
  //color: red;
  //line-height: 40px;
}
</style>