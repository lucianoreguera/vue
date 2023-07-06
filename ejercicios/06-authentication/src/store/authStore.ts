import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      token: null,
      errors: '',
      baseURL: 'http://127.0.0.1:8000/api/'
    }
  },
  getters: {},
  actions: {
    async register(name:string, email:string, password:string) {
      const url = `${this.baseURL}auth/register`
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
        },
        body: JSON.stringify({
          'name': name,
          'email': email,
          'password': password
        })
      })
      const response = await rawResponse.json()

      if (!response.status) {
        this.errors = response.errors
        return false
      }

      this.token = response.token
      return true
    },
    async login(email:string, password:string) {
      const url = `${this.baseURL}auth/login`
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })
      const response = await rawResponse.json()

      if (!response.status) {
        this.errors = response.errors
        return false
      }

      this.token = response.token
      return true
    },
    async logout() {
      this.token = null
      router.push('login')
    }
  }
})