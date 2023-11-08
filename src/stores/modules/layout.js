import { defineStore } from 'pinia'
export const useLayoutStore = defineStore('layout', {
    // 定义全局共享状态的一个初始化状态
    state: () => ({
        isCollapse: false,
    }),
    // actions类似于methods，可以有同步和异步方法，修改state中的状态
    actions: {
        /** 切换isCollapse的状态 */
        changeIsCollapse() {
            this.isCollapse = !this.isCollapse
        }
    },
    //开启持久化
    persist: {
        enabled: true,
        strategies: [
            {
                // key: 'xxx', // 指定key
                storage: sessionStorage // 默认是sessionStorage
                // paths: ['userInfo.name'], // 只存储userInfo的name
            }
        ]

    },
})
export default useLayoutStore