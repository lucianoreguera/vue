<template>
  <div class="container">
    <h1>Listado de Posts</h1>
    <ul class="post-list">
      <li class="post-detail" v-for="post in posts" :key="post.id">
        {{ post.title }}
        <p class="view-more">view more...</p>
      </li>
    </ul>
  </div>
</template>

<!-- Composition API Setup -->
<script lang="ts" setup>
  import { onMounted } from 'vue'
  import PostService from '@/services/PostService'

  const servicePost = new PostService
  const posts = servicePost.getPosts()

  onMounted(async () => {
    await servicePost.fetchAllPosts()
  })
</script>

<!-- Component API -->
<!-- <script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import PostService from '@/services/PostService'

  export default defineComponent({
    name: 'PostList',
    setup() {
      const servicePost = new PostService
      const posts = servicePost.getPosts()

      onMounted(async () => {
        await servicePost.fetchAllPosts()
      })

      return {
        posts
      }
    }
  })
</script> -->

<!-- Option API -->
<!-- <script lang="ts">
  import { defineComponent } from 'vue'
  import PostService from '@/services/PostService'

  export default defineComponent({
    name: 'PostList',
    data() {
      const servicePost = new PostService
      const posts = servicePost.getPosts()

      return {
        servicePost,
        posts
      }
    },
    async mounted() {
      await this.servicePost.fetchAllPosts()
    },
  })
</script> -->

<style scoped lang="scss">
  $aliceblue: aliceblue;
  .container {
    max-width: 95%;
    margin: 0 auto;
  }
  .post-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5px;
  }
  .post-detail {
    list-style-type: none;
    height: 100px;
    width: 200px;
    background-color: $aliceBlue;
    padding: 10px;
  }
  .view-more {
    color: $crimson;
  }
</style>