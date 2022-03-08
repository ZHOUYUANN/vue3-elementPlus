const getters = {
  token: (state) => state.user.token,
  hasLogin: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo
}

export default getters
