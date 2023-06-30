<template>
  <h1 class="mb-4">Social Login</h1>
  <AlertComponent v-show="error" :messageError="messageError" />
  <button class="btn btn-danger mx-2" @click="handleLoginWithGoogle">Login with Google</button>
  <button class="btn btn-primary mx-2" @click="handleLoginWithFacebook">Login with Facebook</button>
  <button class="btn btn-info mx-2">Login with Twitter</button>
  <button class="btn btn-secondary mx-2">Login with Github</button>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue'
  import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
  import AlertComponent from '@/components/AlertComponent.vue'

  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const auth = getAuth()
  const error:Ref<boolean> = ref(false)
  const messageError:Ref<string> = ref('')

  const handleLoginWithGoogle = () => {
    error.value = false
    messageError.value = ''
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      alert(`Success! Token:${token}`)
    })
    .catch(err => {
      error.value = true
      messageError.value = `Error: ${err}`
    })
  }

  const handleLoginWithFacebook = () => {
    error.value = false
    messageError.value = ''
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      alert(`Success! Token:${token}`)
    })
    .catch(err => {
      error.value = true
      messageError.value = `Error: ${err}`
    })
  }
</script>
