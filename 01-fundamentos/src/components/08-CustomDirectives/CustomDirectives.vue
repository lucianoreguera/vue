<template>
  <h1 v-font-size>Directivas Personalizadas</h1>

  <h3 v-custom-size="30">Directiva Personalizada con valores</h3>

  <h3 v-custom-size-arg:sm>Directiva Personalizada con argumentos</h3>
  <h3 v-custom-size-arg:md>Directiva Personalizada con argumentos</h3>
  <h3 v-custom-size-arg:lg>Directiva Personalizada con argumentos</h3>
  <h3 v-custom-size-arg:xl>Directiva Personalizada con argumentos</h3>
  <h3 v-custom-size-arg:xxl>Directiva Personalizada con argumentos</h3>

  <h3 v-custom-font.xxl.red >Directiva Personalizada con modificadores</h3>
  <h3 v-custom-font.lg.green >Directiva Personalizada con modificadores</h3>
  <h3 v-custom-font.sm.blue >Directiva Personalizada con modificadores</h3>
</template>