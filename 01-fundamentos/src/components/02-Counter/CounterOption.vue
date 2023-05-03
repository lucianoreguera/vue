<template>
  <div class="container">
    <button @click="decrementCounter">-</button>
    <input type="number" :value="counter">
    <button @click="incrementCounter">+</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CounterOption',
    data() {
      let counter = 0
      return { counter }
    },
    methods: {
      incrementCounter() {
        this.counter++
      },
      decrementCounter() {
        this.counter--
      }
    }
  })
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
  }
</style>