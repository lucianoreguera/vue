<template>
  <h1>Posts List</h1>

  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="{name: 'detail', params: {id: post.id}}">{{ post.title }}</RouterLink>
    </li>
  </ul>
  
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import PostService from '@/services/PostService'
  
  const postService = new PostService()
  const posts = postService.getPosts()
  
  onMounted(async () => {
    await postService.fetchAllPosts()
  })
</script>
