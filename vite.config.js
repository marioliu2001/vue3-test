import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    // env文件目录
    envDir: "env",
    // 环境变量前缀
    // envPrefix: 'LIU',
    plugins: [vue()],
    resolve: {
        // 配置别名
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
