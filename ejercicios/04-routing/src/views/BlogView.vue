<template>
  <div class="blog">
    <h1>My Blog</h1>
    <ul class="blog-list">
      <li><router-link :to="{name: 'post', params: {id: 1}}">My first Post</router-link></li>
      <li><router-link :to="{name: 'post', params: {id: 2}}">My second Post</router-link></li>
      <li><router-link :to="{name: 'post', params: {id: 3}}">My third Post</router-link></li>
      <li><router-link :to="{name: 'post', params: {id: 4}}">My fourth Post</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
  .blog-list {
    list-style-type: none;
  }
</style>