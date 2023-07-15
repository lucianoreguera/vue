<template>
  <h1>Internacionalización</h1>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
  <hr />
  <input type="text" v-model="name"> 
  <h3>{{ $t("message.hello", {name}) }}</h3>
  <p>{{ $t("message.content") }}</p>
  <input type="number" v-model="count">
  <p>{{ $t("message.products", {count}) }}</p>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const name = ref('')
  const count = ref(0)
</script>
