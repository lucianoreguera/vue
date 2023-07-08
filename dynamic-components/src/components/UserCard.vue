<template>
  <div class="col-sm-4 mb-4">
    <div class="card text-dark bg-light">
      <div class="card-header">
        <h5 class="card-title">{{ props.user.name }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>Username:</strong> {{ props.user.username }}</p>
        <p class="card-text"><strong>Email:</strong> {{ props.user.email }}</p>
        <p class="card-text"><strong>Address:</strong> {{ props.user.address.street }}, {{ props.user.address.city }}</p>
        <p class="card-text"><strong>Phone:</strong> {{ props.user.phone }}</p>
        <p class="card-text"><strong>Website:</strong> {{ props.user.website }}</p>
        <p class="card-text"><strong>Company:</strong> {{ props.user.company.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps(['user'])
</script>