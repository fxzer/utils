/** 简单动画函数封装 */
export function animation(duration: number, from: number, to: number, onProgress: (v: number) => void) {
  const speed = (to - from) / duration
  const startTime = Date.now()
  let value = from

  function _run() {
    const now = Date.now()

    const time = now - startTime
    if (time >= duration) {
      value = to
      onProgress && onProgress(value)
      return
    }
    value = from + speed * time
    onProgress && onProgress(value)
    requestAnimationFrame(_run)
  }

  _run()
}
