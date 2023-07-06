import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => {
      return {
        isOpen: false
      }
  },
  getters: {
    isModalVisible: (state) => state.isOpen
  },
  actions: {
    onToggle() {
      this.isOpen = !this.isOpen
    }
  }
})