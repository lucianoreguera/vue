<template>
  <div class="container mt-5">
    <div class="d-flex flex-column bd-highlight mb-3">
      <UserItem 
        v-for="user in props.content"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import UserItem from '@/components/UserItem.vue'

  const props = defineProps(['content'])
</script>
