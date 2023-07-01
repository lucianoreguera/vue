<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>App Component</h3>
  <p>Counter: {{ counterStore.counter }}</p>
  <p>{{ counterStore.counter }} X 2 = {{ counterStore.times2 }}</p>
  <button @click="counterStore.increment(1)">Increment</button>
  <CounterComponent />
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/store/counter'
  import CounterComponent from '@/components/CounterComponent.vue'

  const counterStore = useCounterStore()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
