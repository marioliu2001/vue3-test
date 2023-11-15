// 对外配置的常量路由 TODO 以后做动态路由

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]
