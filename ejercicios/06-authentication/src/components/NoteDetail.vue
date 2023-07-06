<template>
  <div class="bg-white shadow rounded p-5 text-slate-600">
    <p>{{ props.note?.content }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    note: {
      type: Object,
      require: true
    }
  })
</script>