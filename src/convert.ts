/**
 * Convert bytes to human readable format
 */
export function convertBytes(bit: number, unit: '' | 'bps' = '') {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (!bit)
    return `${0} ${sizes[0]}${unit}`
  const i = Number.parseInt(`${Math.floor(Math.log(bit) / Math.log(1024))}`)
  const converted = bit / (1 << (i * 10))
  return `${converted.toFixed(2)} ${sizes[i]}${unit}`
}

/**  格式化文件大小 */
export function fileSizeFormat(size: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let index = 0
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024
    index++
  }
  return `${size.toFixed(2)}${units[index]}`
}
