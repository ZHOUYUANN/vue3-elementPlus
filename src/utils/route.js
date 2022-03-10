import path from 'path'

// 查询是否有子集的路由
function getChildrenRoutes(routes) {
  const result = []

  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })

  return result
}

function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

// 处理脱离层级的路由
export const filterRouters = (routes) => {
  // 获取所有的子集路由
  const childrenRoutes = getChildrenRoutes(routes)
  // 根据子集理由进行查重操作
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

// 根据 routes 数据，返回对应的 menu 规则数据
export const generateMenus = (routers, basePath = '') => {
  const result = []
  routers.forEach((route) => {
    // 过滤没有 children 或者没有 meta 的路由项
    if (isNull(route.children) && isNull(route.meta)) return
    // 如果有 children 但是没有 meta
    if (!isNull(route.children) && isNull(route.meta)) {
      result.push(...generateMenus(route.children))
      return
    }
    // 如果没有 children 但是有 meta
    // 1. 先合并 path
    const routePath = path.resolve(basePath, route.path)
    // 2. 判断同名路径
    let r = result.find((item) => item.path === routePath)
    // 3. 把没有加入的路由
    if (!r) {
      r = {
        ...route,
        path: routePath,
        children: []
      }
      // 如果有 icon 和 title 的情况下就是 需要显示路由
      if (r.meta.icon && r.meta.title) {
        result.push(r)
      }
    }
    // 如果 children 和 meta 都存在
    if (route.children) {
      r.children.push(...generateMenus(route.children, route.path))
    }
  })
  return result
}
