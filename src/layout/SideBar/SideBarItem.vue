<script setup>
import { Location, Monitor, Setting } from '@element-plus/icons-vue'

defineOptions({
  name: 'SideBarItem'
})
</script>

<template>
  <!-- 首页 -->
  <el-menu-item index="dashboard">
    <el-icon><Monitor /></el-icon>
    <span>控制台</span>
  </el-menu-item>
  <!-- 菜单一 -->
  <el-sub-menu index="2">
    <template #title>
      <el-icon><location /></el-icon>
      <span>菜单一</span>
    </template>
    <el-menu-item index="2-1"><span>item one</span></el-menu-item>
    <el-menu-item index="2-2"><span>item two</span></el-menu-item>
  </el-sub-menu>
  <!-- 菜单项 -->
  <el-menu-item index="3">
    <el-icon><Location /></el-icon>
    <span>菜单二</span>
  </el-menu-item>
  <el-menu-item index="4">
    <el-icon><Setting /></el-icon>
    <span>菜单4</span>
  </el-menu-item>

</template>

<style scoped lang="scss">
// SideBarItem.vue style
.el-menu-item {
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%) scale(0);
    transform-origin: 0 bottom;
    content: '';
    width: 95%;
    height: 80%;
    background-color: $brand-color;
    border-radius: 5px;
    transition: transform 0.3s;
  }

  &.is-active {
    &:hover {
      span {
        color: #fff;
      }
    }
  }
}
.el-menu-item.is-active {
  //position: relative;
  //提高层级，防止被el-sub-menu的::after遮住
  .el-icon{
    position: relative;
    z-index: 1;
    //color: #fff;
  }
  //提高层级，防止被el-sub-menu的::after遮住
  span {
    position: relative;
    z-index: 1;
  }

  &::after {
    transform: translate(-50%, -50%) scale(1);
  }
}

.el-sub-menu {
  &.is-active {
      :deep(.el-sub-menu__title) {
      color: #fff !important;

      :deep(.el-icon) {
        color: #fff;
      }
    }
  }

  :deep(.el-sub-menu__title) {
    &:hover {
      color: #fff !important;
    }
  }
}

</style>
