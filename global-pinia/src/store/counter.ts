import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      counter: 1
    }
  },
  getters: {
    times2: (state) => state.counter * 2
  },
  actions: {
    increment(value = 1) {
      this.counter += value
    },
    decrement(value = 1) {
      this.counter -= value
    }
  }
})
