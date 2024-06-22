// encodeURIComponent
// decodeURIComponent
/**
 * @description: 获取url参数
 * @param {string} url url地址
 * @param {boolean} decode 是否解码
 */
export function getUrlParams(url?: string, decode = false) {
  const search = url?.trim() ? new URL(url).search : window.location.search
  const searchParams = new URLSearchParams(search)

  const params: Record<string, string> = {}

  for (const [key, value] of searchParams)
    params[key] = decode ? decodeURIComponent(value) : value

  return params
}

export function getQueryParam(key: string | string[]): string | string[] {
  const searchParams = getUrlParams()
  return Array.isArray(key) ? key.map(k => searchParams[k]) : searchParams[key]
}

export function setQueryParams(params: Record<string, string>, replace = true, encode = false) {
  const searchParams = getUrlParams()
  const encodeParams = Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = encode ? encodeURIComponent(value) : value
    return acc
  }, {} as Record<string, string>)
  
  const newParams = replace ? encodeParams : { ...searchParams, ...encodeParams }
  const newUrl = `${window.location.pathname}?${new URLSearchParams(newParams).toString()}`
  window.history.replaceState({}, '', newUrl)
}
