<script setup>
import Breadcrumb from '@/layout/Header/components/Breadcrumb.vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useLayoutStore } from '@/stores/modules/layout.js'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import Search from '@/layout/Header/components/Search.vue'
import DarkMode from '@/layout/Header/components/DarkMode.vue'
import Language from '@/layout/Header/components/Language.vue'
import Message from '@/layout/Header/components/Message.vue'
import FullScreen from '@/layout/Header/components/FullScreen.vue'
import UserAvatar from '@/layout/Header/components/UserAvatar.vue'

defineOptions({
  name: 'NavBar'
})

const layoutStore = useLayoutStore()
const { changeIsCollapse } = layoutStore

const { isCollapse } = storeToRefs(layoutStore)

// 小于1200px时，折叠侧边栏
onMounted(() => {
  if (document.body.clientWidth < 1200 && !isCollapse.value) {
    layoutStore.changeIsCollapse()
  }
})
</script>

<template>
  <div class="nav dark:bg-black/75 dark:text-white" >
    <!-- 左侧区域 -->
    <div class="nav-left">
      <!-- 折叠图标 -->
      <el-icon :size="25" @click="changeIsCollapse">
        <Fold v-if="!isCollapse" />
        <Expand v-else />
      </el-icon>
      <!-- 面包屑 -->
      <Breadcrumb />
    </div>
    <!-- 右侧区域 -->
    <ul class="nav-right">
      <!-- 搜索图标 -->
      <li class="nav-right__item">
        <Search />
      </li>
      <!-- 暗黑模式切换开关 -->
      <li class="nav-right__item">
        <DarkMode />
      </li>
      <!-- 中英文切换 -->
      <li class="nav-right__item">
        <Language />
      </li>
      <!-- 消息通知 -->
      <li class="nav-right__item">
        <Message />
      </li>
      <!-- 全屏 -->
      <li class="nav-right__item">
        <FullScreen />
      </li>
      <!-- 用户头像和信息 -->
      <li class="nav-right__item nav-right__user">
        <UserAvatar />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid $border-color;

  .nav-left {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-icon {
      margin-right: 12px;
    }
  }

  .nav-right {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-right__item {
      margin: 0 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      //不知道为啥这个得单独设置
      .search{
        display: flex;
        text-align: center;
      }
    }

    .nav-right__user {
      display: flex;
      align-items: center;

      i {
        font-size: 14px;
      }
    }
  }
}

</style>
