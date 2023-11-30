import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-template-admin/#/',
  // env文件目录
  envDir: 'env',
  // 环境变量前缀
  // envPrefix: 'LIU',
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variables.scss" as *;'
      }
    }
  },
  server: {
    // 只有在dev环境下才有用，生产环境可以用nginx
    proxy: {
      '/api': {
        target: 'http://localhost:3010', // 目标服务器
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 去掉请求路径中的 /api 前缀
      }
    }
  }
})
