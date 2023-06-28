<template>
  <div class="container">
    <AlertComponent v-show="error" :messageError="messageError" />
    <form @submit.prevent="handleSubmit">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" v-model="email">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" v-model="password">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue'
  import AlertComponent from '@/components/AlertComponent.vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

  const email:Ref<string> = ref('')
  const password:Ref<string> = ref('')
  const error:Ref<boolean> = ref(false)
  const messageError:Ref<string> = ref('')

  const handleSubmit = () => {
    if ([email.value, password.value].includes('')) {
      error.value = true
      messageError.value = 'Los campos son obligatorios'
      return 
    }

    error.value = false
    messageError.value = ''

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert('Usuario validado en Firebase!')
      })
      .catch((err) => {
        // alert(`Error: ${err}`)
        error.value = true
        messageError.value = `Error: ${err.message}`
      })
  }
</script>