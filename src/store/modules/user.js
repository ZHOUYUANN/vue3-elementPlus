// import { login } from '@/api/login'
import { setItem, getItem } from '@/assets/js/storage'
import { TOKEN } from '@/assets/js/constants'

const user = {
  namespaced: true,
  state: () => ({
    token: getItem || '' // 先获取缓存的数据
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      // 保存登录数据
      setItem(TOKEN, token)
    }
  },
  actions: {
    userlogin({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        // login().then((res) => {})
        commit('setToken', 'xxx')
        resolve()
      })
    }
  }
}

export default user
