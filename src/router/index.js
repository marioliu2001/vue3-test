import { createRouter, createWebHashHistory } from 'vue-router'
import { close, start } from '@/utils/nporgress.js'
import Layout from '@/layout/index.vue'

// 创建路由实例对象
const router = createRouter({
  // 创建一个 Hash 路由实例
  history: createWebHashHistory(),
  // 路由配置
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            // TODO: 路由元信息 title和icon未使用
            title: '控制台',
            icon: 'dashboard',
            keepAlive: true
          }
        },
        {
          path: '/user',
          component: () => import('@/views/user/index.vue'),
          meta: {
            title: '用户管理',
            icon: 'dashboard',
            keepAlive: false
          }
        },
        {
          path: '/role',
          component: () => import('@/views/role/index.vue'),
          meta: {
            title: '角色管理',
            icon: 'dashboard',
            keepAlive: true
          }
        },
        {
          path: '/reports',
          component: () => import('@/views/reports/index.vue'),
          meta: {
            title: '报表数据',
            icon: 'dashboard',
            keepAlive: true
          }
        },
        {
          path: '/settings',
          component: () => import('@/views/settings/index.vue'),
          meta: {
            title: '系统设置',
            icon: 'dashboard',
            keepAlive: true
          }
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
