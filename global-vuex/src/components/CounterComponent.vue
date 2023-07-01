<template>
  <h3>Counter Component</h3>
  <p>Counter: {{ counter }}</p>
  <p>{{ counter }} x 2 = {{ times2 }}</p>
  <button @click="increment">Increment</button>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex'

  const store = useStore() // this.$store
  const counter = computed(() => store.state.counter)
  const times2 = computed(() => store.getters.times2)
  const increment = () => store.commit('setCounter', counter.value + 1)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
