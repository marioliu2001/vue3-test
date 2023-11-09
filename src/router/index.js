import { createRouter, createWebHashHistory } from 'vue-router'
import { close, start } from '@/utils/nporgress.js'

// 创建路由实例对象
const router = createRouter({
  // 创建一个 Hash 路由实例
  history: createWebHashHistory(),
  // 路由配置
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          component: () => import('@/views/dashboard/index.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/user/index.vue')
        }
      ]
    }
  ]
})

router.beforeEach((pre, next) => {
  start() // 开始进度条
})
router.afterEach(() => {
  close() // 结束进度条
})
// 向外暴露路由实例对象
export default router
