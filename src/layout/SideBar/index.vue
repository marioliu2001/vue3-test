<script setup>
import Logo from '@/layout/SideBar/Logo.vue'
/** 引入SideBarItem.vue */
import SideBarItem from './SideBarItem.vue'
import useLayoutStore from '@/stores/modules/layout.js'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'SideBar'
})

const layoutStore = useLayoutStore()
const { isCollapse } = storeToRefs(layoutStore)
</script>

<template>
  <div class="sidebar">
    <Logo />
    <el-menu background-color="#001428"
             text-color="#BBB"
             active-text-color="#fff"
            :collapse="isCollapse"
            :collapse-transition="false"
            >
      <SideBarItem />
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  .el-menu {
    border-right: none;
    //overflow: hidden;
  }
}
</style>
