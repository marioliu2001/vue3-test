// guard.js
import { useLoginStore } from '@/stores/modules/login.js'
import { start, close } from '@/utils/nporgress.js'
import { ElMessage } from 'element-plus'
import { ROUTER_WHITE_LIST, LOGIN_URL } from '@/config/index.js'

/**
 * @description 路由拦截 beforeEach
 * */
export const beforeEach = (to, from, next) => {
  start() // 开始进度条
  const loginStore = useLoginStore()
  // 1.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
  if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    if (loginStore.token) {
      return next(from.fullPath)
    } else {
      // 清除缓存
      // localStorage.removeItem('login')
      loginStore.$reset()
      return next()
    }
  }
  // 2.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
  if (ROUTER_WHITE_LIST.includes(to.path)) return next()

  // 3.判断是否有 Token，没有重定向到 login 页面
  if (!loginStore.token) {
    ElMessage.error('登录已过期，请重新登录')
    return next({ path: LOGIN_URL, replace: true })
  }
  // if (!loginStore.token) return next(`/login?redirect=${to.path}`)
  // 4.如果没有菜单列表，就重新请求菜单列表并添加动态路由
  // 5.存储 routerName 做按钮权限筛选
  // 6.正常访问页面
  next()
}
/**
 * @description 路由跳转错误
 * */
export const onError = (error) => {
  close()
  console.warn('路由错误', error.message)
}
/**
 * @description 路由跳转结束
 * */
export const afterEach = () => {
  close() // 结束进度条
}
