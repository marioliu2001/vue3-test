<script setup>
import SideBar from './SideBar/index.vue'
import Header from './Header/index.vue'

import useLayoutStore from '@/stores/modules/layout.js'
import { storeToRefs } from 'pinia'

const layoutStore = useLayoutStore()
const { isCollapse } = storeToRefs(layoutStore)
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

          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <!--
                 <keep-alive include="role"> TODO 我目前先设置全部都缓存
                 这里的include="role"是为了解决keep-alive缓存问题，
                 role首先匹配的是组件name(这里我自己在role/index.vue文件中手动设置了name)
                 详情请看参考：https://blog.csdn.net/seimeii/article/details/130740391
               -->
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
              <!-- TODO keep-alive 后面会有BUG 好像缓存影响？？？-->
              <!-- 这种判断的方式目前有BUG -->
<!--          <router-view v-if="!$route.meta.keepAlive" v-slot="{ Component }">-->
<!--            <transition name="fade" mode="out-in">-->
<!--                <component :is="Component" />-->
<!--            </transition>-->
<!--          </router-view>-->
<!--            <router-view/>-->

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

  .el-header{
    padding: $header-padding;
  }
}

/* 自定义切换动画 */
/* 元素刚进入的状态 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
/* 被激活时 */
.fade-enter-active {
  transition: all 0.4s;
}
/* 元素完全进入后的状态 */
.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateX(0px);
}
/* 元素离开前的状态 */
/* .v-leave {
    transform: translateX(0px);
    opacity: 1;
} */
.fade-leave-active {
  transition: all 0.4s;
}
/* 元素离开后的状态 */
/* .v-leave-to {
    opacity: 0;
    transform: translateX(-30px);
} */

</style>
