import { createApp } from 'vue'
import App from './App.vue'
//引入css样式
import '@/styles/index.scss'
import router from "@/router/index.js"

// 创建vue实例
const app = createApp(App)

//在vue实例对象上注册vue-router实例对象
app.use(router)
// 挂载实例
app.mount('#app')
