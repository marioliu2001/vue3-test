<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
defineOptions({
  name: 'Breadcrumb'
})
const route = useRoute()
const router = useRouter()

// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  console.log(route.matched)
  breadcrumbData.value = route.matched.filter((item) => {
    return item.meta && item.meta.title
  })
}
// 监听路由发生改变时触发
watch(
  route,
  () => {
    getBreadcrumbData()
    console.log(breadcrumbData.value)
  },
  {
    immediate: true
  }
)

// 处理点击事件
const onLinkClick = (item) => {
  router.push(item.path)
}
</script>

<template>
  <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
<!--        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>-->
        <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbData"
                            :key="item.path">
            <!-- 不可以点击项 -->
            <span v-if="index === breadcrumbData.length - 1"
                  class="no-redirect">
              {{ item.meta.title }}
            </span>
          <!-- 可以点击项 -->
          <a v-else class="redirect" @click.prevent="onLinkClick(item)">
              {{ item.meta.title }}
            </a>
        </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter-from,
.breadcrumb-leave-active {
   opacity: 0;
   transform: translateX(20px);
}
.breadcrumb-leave-active {
   position: absolute;
}

.breadcrumb{
   //margin-left: 8px;
   .no-redirect {
     color: #97a8be;
     cursor: text;
    }
   .redirect {
     color: #666;
     font-weight: 600;
    }
   .redirect:hover {
     // 将来需要进行主题替换，所以这里不去写死样式，这个是vue3的新增特性
     //color: v-bind(linkHoverColor); 这样写可以从js的ref中拿，ref值可以从store获取 js->ref->pinia
     color: $link-hover-color;
  }
}
</style>
