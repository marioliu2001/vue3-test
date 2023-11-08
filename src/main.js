import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入css样式
import '@/styles/index.scss'
import router from "@/router/index.js"
/** element-plus暗黑主题 */
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入pinia
import {setupStore} from '@/stores/index.js'

// 创建vue实例
const app = createApp(App)

//使用图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//注册pinia
setupStore(app)

//在vue实例对象上注册vue-router实例对象
app.use(router)
// 挂载实例
app.mount('#app')
