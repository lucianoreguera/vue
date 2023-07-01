<template>
  <h3>Counter Component</h3>
  <p>Counter: {{ store.counter }}</p>
  <p>{{ store.counter }} x 2 = {{ store.times2 }}</p>
  <button @click="store.decrement(1)">Decrement</button>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/store/counter'
  const store = useCounterStore()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
