<template>
  <h1>Hola Mundo {{ name }}</h1>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated } from "vue";

const name = 'Vue'

onMounted(() => {
  console.log('Mounted')
})

onUpdated(() => {
  console.log('Updated')
})

</script>