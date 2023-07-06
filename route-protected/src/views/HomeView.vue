<template>
  <h1>Send Note</h1>
  <input type="text" placeholder="Note..." v-model="note">
  <button @click="sendToServer">Send</button>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue'

  const note:Ref<string> = ref('')

  const sendToServer = async () => {
    const response = await fetch('http://xxxxxxxxxx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer tokenyyyyyyy'
      },
      body: JSON.stringify({
        note: note.value
      })
    })

    const result = await response.json()
  }
</script>