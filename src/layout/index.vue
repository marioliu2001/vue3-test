<script setup>
import SideBar from './SideBar/index.vue'
import Header from './Header/index.vue'

import useLayoutStore from "@/stores/modules/layout.js"
import {storeToRefs} from "pinia";

const layoutStore = useLayoutStore()
const {isCollapse} = storeToRefs(layoutStore)
</script>

<template>
  <div class="layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '65px' : '200px'">
        <SideBar/>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <Header />
        </el-header>
        <!-- 主要内容区域 -->
        <el-main>
          <h1 class="text-3xl font-bold">
            Hello world!
          </h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  .el-aside {
    height: 100vh;
    //border-right: solid 1px $border-color;
    background-color: $sidebar-bg-color;

    //解决侧边栏收缩时，内容区域宽度卡顿的问题
    transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -moz-transition: width 0.25s;
    -o-transition: width 0.25s;
  }
}
</style>