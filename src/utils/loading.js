let loadingInstance
let needLoadingRequestCount = 0

export function startLoading (targetDq, msg) {
  loadingInstance = ElLoading.service({
    lock: true,
    text: msg || '努力加载中...',
    background: 'rgba(255,255,255,.4)',
    target: document.querySelector(targetDq)
  })
}

export function endLoading () {
  if (loadingInstance) {
    loadingInstance.close()
  }
}

export function showFullScreenLoading (targetDq, msg) {
  if (needLoadingRequestCount === 0) {
    startLoading(targetDq, msg)
  }
  needLoadingRequestCount++
}

export function hideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

export function setAppInstance (app) {
  app.config.globalProperties.$myLoading = {
    startLoading,
    endLoading,
    showFullScreenLoading,
    hideFullScreenLoading,
    needLoadingRequestCount
  }
}

// 不再导出默认对象，而是通过函数设置 app 实例
