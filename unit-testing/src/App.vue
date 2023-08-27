<template>
  <h2>Counter</h2>
  <p id="counter">{{ counter }}</p>
  <button @click="increment">+</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const counter = ref(0)

const increment = () => counter.value++
</script>
