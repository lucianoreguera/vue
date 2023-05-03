<template>
  <p :class="{ 'danger': hasError }">Mensaje bindeado a una clase css</p>
  <!-- tambien podemos bindear por estilos -->
  <p :style="{ backgroundColor, color }">Msj prueba</p>
  <button @click="handleClickChangeColor">Cambiar colores</button>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const hasError = true

  const backgroundColor = ref('blueviolet')
  const color = ref('white')

  const handleClickChangeColor = () => { 
    color.value = 'blueviolet'
    backgroundColor.value = 'white'
  }
</script>

<style scoped>
  .danger {
    color: red;
  }
</style>