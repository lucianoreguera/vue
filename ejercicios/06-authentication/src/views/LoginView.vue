<template>
  <h1 class="text-3xl text-slate-700 font-semibold text-center">Ingresa para poder registrar tus notas</h1>
  <div class="bg-white shadow rounded p-5 my-5 mx-auto max-w-3xl">
    <AlertComponent 
      v-show="alert"
      :alert="alert"
      :message="message"
    />
    <form 
      class="flex flex-col gap-3"
      @submit.prevent="handleSubmit"
    >
      <input 
        type="email" 
        placeholder="Email..."
        class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
        v-model="email"
      >
      <input 
        type="password" 
        placeholder="Password..."
        class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
        v-model="password"
      >
      <button 
        type="submit" 
        class="w-1/4 mx-auto font-bold border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:border-purple-500 focus:outline-none focus:shadow-outline"
      >
        Ingresar
      </button>
      <p class="text-slate-500 flex justify-end">
        No tienes cuenta? <router-link class="ml-2 text-indigo-700 hover:underline" to="/register">Registrate</router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue'
  import router from '@/router'
  import { useAuthStore } from '@/store/authStore'
  import AlertComponent from '@/components/AlertComponent.vue'

  const authStore = useAuthStore()
  const email:Ref<string> = ref('')
  const password:Ref<string> = ref('')
  const alert:Ref<string> = ref('')
  const message:Ref<string> = ref('')

  const handleSubmit = async () => {
    if ([email.value, password.value].includes('')) {
      alert.value = 'error',
      message.value = 'Todos los campos son obligatorios'
      return
    }

    alert.value = ''
    message.value = ''

    const response = await authStore.login(email.value, password.value)

    if (!response) {
      alert.value = 'error'
      Object.values(authStore.errors).forEach(error => {
        message.value = error[0]
      })
      return
    }

    router.push({ name:'home' })
  }
</script>
