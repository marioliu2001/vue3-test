<script setup>
defineOptions({
  name: 'Breadcrumb'
})
import {ArrowRight} from "@element-plus/icons-vue";
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">

</style>