// 私有路由表
// 说明：路由顺序按页面需要展示的顺序书写 - 这些都要放在layout下面
export const privateRoutes = [
  // 控制台
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: '控制台',
      icon: 'Monitor',
      keepAlive: true
    }
  },
  // 系统管理
  {
    path: '/system',
    name: 'system',
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'UserFilled'
    },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'Monitor',
          keepAlive: false
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'Monitor',
          keepAlive: true
        }
      }
    ]
  },
  // 系统报表
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/reports/index.vue'),
    meta: {
      title: '报表数据',
      icon: 'Odometer',
      keepAlive: true
    }
  },
  // 系统设置
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/settings/index.vue'),
    meta: {
      title: '系统设置',
      icon: 'Setting',
      keepAlive: true
    }
  }
]
