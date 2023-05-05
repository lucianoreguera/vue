<template>
  <h1>Propiedades Computadas</h1>
  <input type="text" v-model="msg">
  <h3>{{ msg }}</h3>
  <h3>{{ reverse }}</h3>
</template>

<script lang="ts" setup>
  import { Ref, ref, computed } from 'vue';

  let msg:Ref<string> = ref('')
  const reverse = computed(() => msg.value.split('').reverse().join(''))
</script>