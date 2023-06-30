<template>
  <h1>Auth with AWS</h1>
  <authenticator>
    <template v-slot="{user, signOut}">
      <h3>Hello {{ user.username }}</h3>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script lang="ts" setup>
  import { Authenticator } from '@aws-amplify/ui-vue'
  import '@aws-amplify/ui-vue/styles.css'
</script>
