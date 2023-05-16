<template>
  <div class="blog">
    <h1>My Post #{{ postId }}</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

let postId = ref('')

onMounted(() => {
  const route = useRoute()
  postId.value = route.params.id
})

</script>