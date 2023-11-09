// 引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function registerIcons (app) {
  // 注册图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
export default registerIcons
