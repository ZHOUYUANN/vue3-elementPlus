import { setItem, getItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from './constants'

// 获取时间戳
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}

// 设置当前的时间戳
export const setTimeStamp = () => {
  setItem(TIME_STAMP, new Date().getTime())
}

// 判断是否超时
export const isCheckTimeout = () => {
  const currentTime = new Date().getTime()
  const lastTime = getTimeStamp()

  return currentTime - lastTime > TOKEN_TIMEOUT_VALUE
}
