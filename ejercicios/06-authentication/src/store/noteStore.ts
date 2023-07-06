import { defineStore } from 'pinia'
import { useAuthStore } from './authStore'
import { useAppStore } from './appStore'

export const useNoteStore = defineStore('noteStore', {
  state: () => {
    return {
      notes: [],
      baseURL: 'http://127.0.0.1:8000/api/'
    }
  },
  getters: {
    token() {
      const authStore = useAuthStore()

      return authStore.token
    },
    toggleModal() {
      const appStore = useAppStore()

      return appStore.onToggle()
    }
  },
  actions: {
    async createNote(content:string) {
      const url = `${this.baseURL}note`
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify({
          'content': content
        })
      })
      const response = await rawResponse.json()
      this.toggleModal
      await this.getAllNotes()

      return response
    },
    async getAllNotes() {
      const url = `${this.baseURL}note`
      const rawResponse = await fetch(url, {
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json',
          'Authorization': `Bearer ${this.token}`
        }
      })
      const response = await rawResponse.json()

      this.notes = response
    }
  }
})