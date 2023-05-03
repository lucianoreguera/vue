<template>
  <h1>Hola Mundo {{ name }}</h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      const name = 'Vue'

      return { name }
    },
    methods: {
      
    },
    // Los hooks del ciclo de vida
    created() {
      console.log('created')
    },
    mounted() {
      console.log('mounted')
    },
    updated() {
      console.log('updated')
    },
    // Es el destroyed
    unmounted() {
      console.log('unmonted')
    },
  })
</script>