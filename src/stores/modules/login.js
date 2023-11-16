import { defineStore } from 'pinia'
import { getLoginUserInfoApi, loginApi, logoutApi } from '@/api'
import router from '@/router/index.js'

export const useLoginStore = defineStore('login', {
  // 定义全局共享状态的一个初始化状态
  state: () => ({
    token: '',
    userInfo: {
      nickName: '',
      email: '',
      phone: '',
      gender: '',
      age: '',
      avatarUrl: '',
      introduction: '',
      createdTime: '',
      updatedTime: '',
      isActive: '',
      isAdmin: ''
    }
  }),
  // actions类似于methods，可以有同步和异步方法，修改state中的状态
  actions: {
    // 登录
    async doLogin (userForm) {
      const username = userForm.username
      const password = userForm.password
      // 所有的异常都在http.js中处理了 只需要判断res和res.code的值就行
      const res = await loginApi(username, password)
      if (res && res.code === 200) {
        // 添加token
        this.token = res.data.tokenValue
        // 获取用户信息
        await this.doInfo()
        // 跳转主页
        await router.push('/')
      }
    },
    // 获取登录用户信息
    async doInfo () {
      const res = await getLoginUserInfoApi()
      console.log(res)
      if (res && res.code === 200) {
        // 将 res.data 中的字段直接赋值给 userInfo 对象
        // Object.assign(this.userInfo, res.data) 这个是错误的
        // 使用解构赋值和对象属性简写
        const { nickName, email, phone, gender, age, avatarUrl, introduction, createdTime, updatedTime, isActive, isAdmin } = res.data
        this.userInfo = { nickName, email, phone, gender, age, avatarUrl, introduction, createdTime, updatedTime, isActive, isAdmin }

        // 通知用户登录成功
        ElNotification({
          title: '欢迎回来~',
          message: `亲爱的${this.userInfo.nickName}`,
          position: 'top-left',
          type: 'success'
        })
      }
    },
    // 退出登录
    async doLogout () {
      await logoutApi()
    }
  },
  // 开启持久化
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage // 默认是sessionStorage
      }
    ]

  }
})
