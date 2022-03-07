/**
 * 判断是否是外部的资源
 * @param {*} path
 * @return Boolean
 */
export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
