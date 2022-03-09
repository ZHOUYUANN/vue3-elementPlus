import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from '@/assets/js/auth'

const http = axios.create({
  baseUrl: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 设置请求拦截器
http.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      // token 失效 退出操作
      if (isCheckTimeout()) {
        store.dispatch('user/userlogout')
        return Promise.reject(new Error('token 已失效'))
      }
      config.headers['X-Access-Token'] = store.getters.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 设置相应拦截器
http.interceptors.response.use(
  (res) => {
    const { success, message, data } = res.data
    // 可以用 success 或者 code 来判断用户是否是失败的状态，根据项目来
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    // 返回的状态码 401 对应的是 token 失效
    if (err.response && err.response.data && err.response.code === 401) {
      store.dispatch('user/userlogout')
    }

    ElMessage.error(err)
    return Promise.reject(err)
  }
)

export default http
