import { login, getUserInfo } from '@/api/login'
import { setItem, getItem } from '@/assets/js/storage'
import { TOKEN } from '@/assets/js/constants'

const user = {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '', // 先获取缓存的数据
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      // 保存登录数据
      setItem(TOKEN, token)
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
            resolve()
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
      return res
    }
  }
}

export default user
