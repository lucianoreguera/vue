<template>
  <div class="post">
    <h1>{{ props.post.title }}</h1>
    <p>{{ props.post.content }}</p>
    <input type="text" v-model="message">
    <button @click="handleClickSayHi">Say Hi</button>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits, Ref, ref } from "vue";

  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(['showAlert'])
  
  const message:Ref<string> = ref("")

  const handleClickSayHi = () => {
    emit("showAlert", message.value)
  }
</script>

<style scoped>
  .post {
    background-color: antiquewhite;
    padding: 10px;
  }
</style>