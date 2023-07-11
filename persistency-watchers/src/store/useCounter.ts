import { defineStore } from 'pinia'

export const useCounter = defineStore('useCounter', {
  state: () => {
    return {
      count: 1
    }
  },
  actions: {
    init() {
      const initCount = localStorage.getItem('counter')
      if (initCount) {
        this.count = parseInt(initCount)
      }
    },
    increment(value = 3) {
      this.count += value
      localStorage.setItem('counter', this.count.toString())
    },
    decrement(value = 3) {
      this.count -= value
      localStorage.setItem('counter', this.count.toString())
    }
  },
  persist: true
})
