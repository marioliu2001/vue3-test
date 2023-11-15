<script setup>
import { privateRoutes } from '@/router/privateRoutes.js'
defineOptions({
  name: 'SideBarItem'
})
</script>

<template>
  <template v-for="item in privateRoutes">
    <!--无子项-->
    <el-menu-item
        v-if="!item.children?.length"
        :key="item.path"
        :index="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
    <!--有子项-->
    <el-sub-menu
        v-else
        :key="item.path"
        :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item
          v-for="child in item.children"
          :key="child.path"
          :index="item.path + '/' + child.path">
        <span>{{ child.meta.title }}</span>
      </el-menu-item>
    </el-sub-menu>
  </template>

  <!-- 首页 -->
<!--  <el-menu-item index="/dashboard">-->
<!--    <el-icon><Monitor /></el-icon>-->
<!--    <span>控制台</span>-->
<!--  </el-menu-item>-->
<!--  &lt;!&ndash; 菜单一 &ndash;&gt;-->
<!--&lt;!&ndash;  <el-sub-menu index="2"> index的值必须设置 不然选中子菜单时刷新页面会丢失选中状态(不会展开)&ndash;&gt;-->
<!--  <el-sub-menu index="2">-->
<!--    <template #title>-->
<!--      <el-icon><location /></el-icon>-->
<!--      <span>系统管理</span>-->
<!--    </template>-->
<!--    <el-menu-item index="/system/user"><span>用户管理</span></el-menu-item>-->
<!--    <el-menu-item index="/system/role"><span>角色管理</span></el-menu-item>-->
<!--  </el-sub-menu>-->
<!--  &lt;!&ndash; 菜单项 &ndash;&gt;-->
<!--  <el-menu-item index="/reports">-->
<!--    <el-icon><Location /></el-icon>-->
<!--    <span>数据报表</span>-->
<!--  </el-menu-item>-->
<!--  <el-menu-item index="/settings">-->
<!--    <el-icon><Setting /></el-icon>-->
<!--    <span>系统设置</span>-->
<!--  </el-menu-item>-->

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
