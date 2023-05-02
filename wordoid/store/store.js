import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      data: {}
    }
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    setData({ commit }, payload) {
      commit('setData', payload)
    }
  },
  getters: {
    getData: state => state.data
  }
})

export default store
