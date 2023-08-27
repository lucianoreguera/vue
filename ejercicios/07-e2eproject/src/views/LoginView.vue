<template>
  <h1>Login</h1>
  <input type="text" placeholder="email" v-model="email" id="email"> <br />
  <input type="password" placeholder="password" v-model="password" id="password"> <br />
  <button @click="login">Login</button>
  <div v-show="error">
    <p>Wrong email or password</p>
  </div>

</template>

<script lang="ts" setup>
  import { useAuth } from '@/store/useAuth'
  import router from '@/router'
  import { Ref, ref } from 'vue'
  
  const auth = useAuth()
  const email:Ref<string> = ref('')
  const password:Ref<string> = ref('')
  const error:Ref<boolean> = ref(false)

  const login = () => {
    const login = auth.login(email.value, password.value)

    if (!login) {
      error.value = true
      return
    }

    router.push('/')
  }
</script>