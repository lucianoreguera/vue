import { createStore } from 'vuex'

export default createStore({
  state: {
    // Data
    counter: 1
  },
  getters: {
    // Computed
    times2(state) {
      return state.counter * 2
    }
  },
  mutations: {
    // setters sync
    setCounter(state, value) {
      state.counter = value
    }
  },
  actions: {
    // setters async
  },
  modules: {
    // Subdivide the store
  }
})
