<template>
  <div 
    class="bg-white shadow p-4"
    v-if="authStore.token"
  >
    <div class="flex justify-between max-w-7xl mx-auto items-center">
      <div>
        <svg 
          role="img" 
          class="w-6"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
          <title>Microsoft OneNote</title>
          <path d="M23 1.5Q23.41 1.5 23.7 1.8 24 2.09 24 2.5V21.5Q24 21.91 23.7 22.2 23.41 22.5 23 22.5H7Q6.59 22.5 6.3 22.2 6 21.91 6 21.5V18H1Q0.59 18 0.3 17.7 0 17.41 0 17V7Q0 6.59 0.3 6.3 0.58 6 1 6H6V2.5Q6 2.09 6.3 1.8 6.59 1.5 7 1.5ZM4.56 11 7.39 15.93H9.18V8.07H7.44V13.1L4.71 8.07H2.82V15.93H4.56ZM22.5 21V18H19.5V21ZM22.5 16.5V13.5H19.5V16.5ZM22.5 12V9H19.5V12ZM22.5 7.5V3H7.5V6H11Q11.41 6 11.7 6.3 12 6.59 12 7V17Q12 17.41 11.7 17.7 11.41 18 11 18H7.5V21H18V7.5Z"/>
        </svg>
      </div>
      <nav>
        <router-link to="/" class="text-slate-600 hover:text-slate-800 mr-4">Listado Notas</router-link>
        <router-link to="/" class="text-slate-600 hover:text-slate-800" @click="appStore.onToggle">Crear Nota</router-link>
      </nav>
      <div class="flex items-center">
        <button 
          class="text-slate-600 hover:text-slate-800"
          @click="authStore.logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store/appStore'
  import { useAuthStore } from '@/store/authStore'

  const appStore = useAppStore()
  const authStore = useAuthStore()
</script>