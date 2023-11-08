import { defineStore, Store } from 'pinia'
import {pinia} from '../index.js'
export const useUserStore = defineStore('user', {
    // 定义全局共享状态的一个初始化状态
    state: () => ({
        username: '张三',
        age: 0,
        gender: '男'
    }),
    // getters类似于computed计算属性，也具有缓存作用，用来修饰一些需要通过逻辑计算的值
    getters: {},
    // actions类似于methods，可以有同步和异步方法，修改state中的状态
    actions: {},
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
/**
 * 用于setup语法糖以外的地方使用
 * @returns {Store}
 */
export const useUserStoreHook = () => {
    return useUserStore(pinia)
}
