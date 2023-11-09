import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss' // 引入css样式
import 'element-plus/theme-chalk/dark/css-vars.css' // element-plus暗黑主题

import router from '@/router/index.js' // 引入路由
import i18n from './locales' // 导入安装i18n函数
import { setupStore } from '@/stores/index.js' // 引入pinia
import registerIcons from '@/utils/registerIcons.js'

// 创建vue实例
const app = createApp(App)

setupStore(app)
app.use(i18n)
app.use(router)
app.use(registerIcons)

// 挂载实例
app.mount('#app')
