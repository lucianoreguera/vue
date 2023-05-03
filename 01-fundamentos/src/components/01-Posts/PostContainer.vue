<template>
  <div class="post-container">
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
</template>

<script lang="ts" setup>
 import PostCard from './PostCard.vue';
</script>

<style scoped>
  .post-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
</style>