<template>
  <div class="p-2 bd-highlight">
    <h5 class="card-title">{{ props.user.name }}</h5>
    <span class="card-text"><strong>Username:</strong> {{ props.user.username }}</span> | 
    <span class="card-text"><strong>Email:</strong> {{ props.user.email }}</span> | 
    <span class="card-text"><strong>Address:</strong> {{ props.user.address.street }}, {{ props.user.address.city }}</span> | 
    <span class="card-text"><strong>Phone:</strong> {{ props.user.phone }}</span> | 
    <span class="card-text"><strong>Website:</strong> {{ props.user.website }}</span> | 
    <span class="card-text"><strong>Company:</strong> {{ props.user.company.name }}</span>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps(['user'])
</script>
