<template>
  <div class="alert alert-danger" role="alert">
    {{ messageError }}
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  defineProps({
    messageError: {
      type: String,
      required: true
    }
  })
</script>
