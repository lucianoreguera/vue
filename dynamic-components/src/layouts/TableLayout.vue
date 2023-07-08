<template>
  <div class="container mt-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody>
        <UserRow 
          v-for="user in props.content"
          :key="user.id"
          :user="user"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import UserRow from '@/components/UserRow.vue'

  const props = defineProps(['content'])
</script>
