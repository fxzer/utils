type CssVar = `--${string}`

/** 定义 HTML style 变量 */
export function setHtmlStyleVar(key: CssVar, value: string) {
  document.documentElement.style.setProperty(key, value)
}

/** 删除 HTML style 变量 */
export function delHtmlStyleVar(key: CssVar) {
  document.documentElement.style.removeProperty(key)
}
