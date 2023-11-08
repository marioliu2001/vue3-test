import { createApp } from 'vue'
import App from './App.vue'

//引入css样式
import '@/styles/index.scss'

// 创建vue实例
const app = createApp(App)

// 挂载实例
app.mount('#app')
