import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPluginPersist)
export const setupStore = (app) => {
    app.use(pinia)
}

export { pinia } // 在各个仓库中引入，传给usexxxStore函数，方便在setup()外使用store
