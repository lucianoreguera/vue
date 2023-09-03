<template>
  <h1>Counter</h1>
  <div class="container">
    <button @click="decrement">-</button>
    <p class="counter">{{ counter }}</p>
    <button @click="increment" id="increment">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const counter = ref(0)

const decrement = () => counter.value--
const increment = () => counter.value++
</script>

<style scoped>
.container {
  display: flex;
  gap: 4px;
}
.counter {
  padding: 5px 15px;
}
</style>
