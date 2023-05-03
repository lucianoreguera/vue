<template>
  <!-- Directivas de selección(Renderizado condicional) -> v-if/vi-else/v-else-if/v-show
  Si bien el objetivo de v-if y v-show es el mismo, es decir, renderizado condicional, internamente funcionan de manera distinta, el v-if solo pinta en el DOM la etiqueta que corresponda, dejando un DOM más limpio y pequeño, mientras que el v-show pinta todas las etiquetas en el DOM y las oculta por css(display:none) a las que no deben ser mostradas.
  Buena Práctica: para apps en producción si la etiqueta va a tener pocos cambios o ninguno es preferible usar v-if, mientras que si es muy dinamico su uso, por cuestiones de rendimiento, es mejor usar v-show ya que es menos costoso aplicar una clase css y no estar renderizando de manera constante  -->
  <h2 v-if="age < 18">Eres menor de edad</h2>
  <h2 v-else>Eres mayor de edad</h2>
  <h2 v-show="age < 18">Eres menor de edad</h2>
  <h2 v-show="age >= 18">Eres mayor de edad</h2>
</template>

<script lang="ts" setup>
  const age = 42
</script>

<style scoped>
</style>