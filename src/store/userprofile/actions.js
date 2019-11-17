
export function logout ({ commit }) {
  commit('setIsLoggined', false)
}

export function unshowLoginDialog ({ commit }) {
  commit('showLoginDialog', false)
}
