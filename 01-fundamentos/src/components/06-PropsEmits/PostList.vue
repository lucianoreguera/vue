<template>
  <div class="container">
    <PostDetail v-for="post in info" :key="post.id" :post="post" @showAlert="showAlert" />
  </div>
</template>

<script lang="ts" setup>
  import PostDetail from "./PostDetail.vue";

  interface IPost {
    id: number,
    title: string,
    content: string
  }

  const info:Array<IPost> = [
    {
      id: 1,
      title: 'Título 1',
      content: 'Contenido 1'
    },
    {
      id: 2,
      title: 'Título 2',
      content: 'Contenido 2'
    },
    {
      id: 3,
      title: 'Título 3',
      content: 'Contenido 3'
    },
    {
      id: 4,
      title: 'Título 4',
      content: 'Contenido 4'
    },
    {
      id: 5,
      title: 'Título 5',
      content: 'Contenido 5'
    }
  ]

  const showAlert = (msg: string) => {
    alert(msg)
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
</style>