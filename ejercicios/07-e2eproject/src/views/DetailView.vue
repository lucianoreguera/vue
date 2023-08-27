<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>

  <RouterLink to="/" class="link">Volver</RouterLink>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import PostService from '@/services/PostService'

  const postService = new PostService()
  const post = postService.getPost()

  onMounted(async () => {
    const route = useRoute()
    const postId = route.params.id

    await postService.fetchPostById(postId)
  })
</script>