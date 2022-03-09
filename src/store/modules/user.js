import { login, getUserInfo } from '@/api/login'
import { setItem, getItem, removeAllItem } from '@/assets/js/storage'
import { setTimeStamp } from '@/assets/js/auth'
import { TOKEN } from '@/assets/js/constants'
import router from '@/router'

const user = {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '', // 先获取缓存的数据
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    userlogin({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then((res) => {
            commit('setToken', res.token)

            // 保存登录数据
            setItem(TOKEN, res.token)
            // 保存登录时间
            setTimeStamp()

            resolve()
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    userlogout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      removeAllItem()
      // 清理权限的相关配置
      router.push('/login')
    },
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
      return res
    }
  }
}

export default user
