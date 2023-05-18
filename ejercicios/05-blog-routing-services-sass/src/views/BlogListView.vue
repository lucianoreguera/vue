<template>
  <div class="container">
    <div class="blog">
      <div v-for="post in posts" :key="post.id" class="primary-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <router-link :to="{ name: 'blogDetail', params: { id: post.id}}">View more</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import BlogService from '@/services/BlogService'

  const serviceBlog = new BlogService
  const posts = serviceBlog.getPosts()

  onMounted(async () => {
    await serviceBlog.fetchAllPosts()
  })
</script>

<style lang="scss" scoped>
  .container {
    max-width: 100vw;
    max-height: 100vh;
    margin: auto;
    
  }
  .blog {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
  }

  .primary-card {
    @include card;
    background-color: $primary-card-bg-color;
    color: $primary-card-text-color;

    a {
      text-decoration: none;
      color: lighten($primary-card-link-color, 10)
    }

    a:hover {
      text-decoration: underline;
      color: $primary-card-link-color;
    }
  }
</style>
