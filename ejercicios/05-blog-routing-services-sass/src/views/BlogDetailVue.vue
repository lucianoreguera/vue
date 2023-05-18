<template>
  <h2>{{ post.title }}</h2>
  <p>{{ post.userId }}</p>
  <p>{{ post.body }}</p>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useRoute} from 'vue-router';
  import BlogService from '@/services/BlogService';

  const serviceBlog = new BlogService
  const post = serviceBlog.getPost()

  onMounted(async () => {
    const route = useRoute()
    const postId = route.params.id

    await serviceBlog.fetchPostById(postId)
  })
</script>