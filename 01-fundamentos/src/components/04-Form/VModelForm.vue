<template>
  <form>
    <div>
      <label for="name">Ingresa tu nombre:</label>
      <input type="text" v-model="name" id="name">
    </div>
    <div :style="{ marginTop: '15px' }">
      <label for="country">País</label>
      <select id="country" v-model="country">
        <option value="AR">Argentina</option>
        <option value="BR">Brasil</option>
        <option value="UY">Uruguay</option>
        <option value="CL">Chile</option>
      </select>
    </div>
    <div :style="{ marginTop: '15px' }">
      <label for="agree">Acepto términos y condiciones</label>
      <input type="checkbox" id="agree" v-model="agree">
    </div>
  </form>

  <p>Hola {{ name }}</p>
</template>

<script lang="ts" setup>
  import { ref, Ref } from 'vue'

  const name:Ref<string> = ref('')
  const country:Ref<string> = ref('AR')
  const agree:Ref<boolean> = ref(true)
</script>

<style scoped></style>