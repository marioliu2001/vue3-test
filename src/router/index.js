import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由实例对象
const router = createRouter({
    // 创建一个 Hash 路由实例
    history: createWebHashHistory(),
    // 路由配置
    routes: [
        {
            // 路由路径
            path: "/",
            // 重定向
            redirect: "/home"
        },
        {
            // 路由路径
            path: "/home",
            // 组件
            // component: () => import("@/views/home/home.vue")
        },
    ]
})
/** 向外暴露路由实例对象 */
export default router