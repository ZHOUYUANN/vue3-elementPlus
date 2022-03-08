import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  console.log(store.getters.token)
  // 判断用户是否登录
  if (store.getters.token) {
    // 用户已登录，则不允许进入 login
    // 如果进入的是 login 则跳转到首页，其他页面可以通过
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果用户信息不存在，就通过 token 重新获取
      // if (!store.getters.hasLogin) {
      //   await store.dispatch('user/getUserInfo')
      // }
      next()
    }
  } else {
    // 用户未登录的情况下分几种情况，可能是进的 login ，也有可能是去的 404 等
    // 所以建立白名单进行过滤，如果在白名单内就直接通过，反之则重定向至 login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
