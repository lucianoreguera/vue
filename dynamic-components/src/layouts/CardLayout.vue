<template>
  <div class="container mt-5">
    <div class="row">
      <UserCard 
        v-for="user in props.content"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import UserCard from '@/components/UserCard.vue'

  const props = defineProps(['content'])
</script>