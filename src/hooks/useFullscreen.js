// 创建一个响应式变量isFullscreen，并初始化为false
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

/** 是否处于全屏状态 */
export const useFullscreen = () => {
  return ref(false)
}

// 判断浏览器是否支持全屏
function fullscreenEnabled () {
  return !!document.fullscreenEnabled
}

/** 全屏 /退出全屏切换，接收参数为一个响应式对象和一个元素对象，如果不传默认为根元素html */
export function useToggleFullscreen (isFullscreen, element = document.documentElement) {
  // 监听全屏/退出全屏事件
  element.addEventListener('fullscreenchange', function () {
    // 如果全屏元素不为null，那么显示收起图标，如果全屏的元素为null显示展开图标
    isFullscreen.value = !!document.fullscreenElement
  })

  return function () {
    if (!fullscreenEnabled()) {
      // 如果浏览器不支持全屏，提示用户
      ElMessage.warning('浏览器不支持全屏API')
    } else {
      // 浏览器支持全屏的情况下：
      if (!isFullscreen.value) {
        element.requestFullscreen()
      } else {
        document.fullscreenElement && document.exitFullscreen()
      }
    }
  }
}
