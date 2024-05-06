export const timestamp = () => +Date.now()

export function dateFormat(input: Date, format = 'yyyy-MM-dd hh:mm:ss') {
  const year = input.getFullYear()
  const month = input.getMonth() + 1
  const date = input.getDate()
  const hours = input.getHours()
  const minutes = input.getMinutes()
  const seconds = input.getSeconds()

  return format.replace('yyyy', year.toString())
    .replace('MM', month < 10 ? `0${month}` : month.toString())
    .replace('dd', date < 10 ? `0${date}` : date.toString())
    .replace('hh', hours < 10 ? `0${hours}` : hours.toString())
    .replace('mm', minutes < 10 ? `0${minutes}` : minutes.toString())
    .replace('ss', seconds < 10 ? `0${seconds}` : seconds.toString())
}

/** 时长 */
export function durationFormat(value: number) {
  const hours = Math.floor(value / 3600)
  const minutes = Math.floor((value % 3600) / 60)
  const seconds = value % 60

  const formatTime = (time: number) => time < 10 ? `0${time}` : `${time}`

  const hstr = hours > 0 ? `${formatTime(hours)}小时` : ''
  const mstr = minutes > 0 ? `${formatTime(minutes)}分钟` : ''
  const sstr = seconds > 0 ? `${formatTime(seconds)}秒` : ''

  return `${hstr}${mstr}${sstr}`
}
