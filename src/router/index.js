import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '@/layout/index.vue'
import * as Guard from './guard.js' // 引入导航守卫
import { publicRoutes } from '@/router/publicRoutes.js'
import { privateRoutes } from '@/router/privateRoutes.js'

// 创建路由实例对象
const router = createRouter({
  base: '/vue3-test/',
  // 创建一个 Hash 路由实例
  history: createWebHistory,
  // 路由配置
  routes: [
    ...publicRoutes, // 公有路由直接展示
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
      redirect: '/dashboard',
      children: [
        ...privateRoutes, // 私有路由放在layout下展示
        {
          path: '/404',
          name: '404',
          component: () => import('@/views/error/404.vue'),
          meta: {
            title: '404页面'
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'error',
          redirect: '/404'
        }
      ]
    }
  ]
})

router.beforeEach(Guard.beforeEach) // 使用导航守卫
router.afterEach(Guard.afterEach)
router.onError(Guard.onError)
// 向外暴露路由实例对象
export default router
