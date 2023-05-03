<template>
  <div class="post">
    <h1>{{ props.post.title }}</h1>
    <p>{{ props.post.content }}</p>
    <input type="text" v-model="message">
    <button @click="handleClickSayHi">Say Hi</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref } from "vue";

  export default defineComponent({
    name: 'PostDetail',
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    emits: ['showAlert'],
    setup(props, {emit}) {
      const message:Ref<string> = ref("")

      const handleClickSayHi = () => {
        emit("showAlert", message.value)
      }

      return { props, message, handleClickSayHi }
    }
  })
</script>

<style scoped>
  .post {
    background-color: antiquewhite;
    padding: 10px;
  }
</style>