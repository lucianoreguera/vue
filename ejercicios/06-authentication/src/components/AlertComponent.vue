<template>
  <div :class="alertStyle" role="alert">
    <h3 class="text-md font-medium uppercase">{{ props.alert }}!</h3>
    <p>{{ props.message }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, computed } from 'vue'

  const props = defineProps({
    alert: {
      type: String,
      require: true
    },
    message: {
      type: String,
      require: true
    }
  })

  const alertStyle = computed(() => {
    const alert = props.alert
    let style = ''

    switch (alert) {
      case 'success':
        style = 'p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
        break;
      case 'error': 
        style = 'p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        break;
      case 'info':
        style = 'p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
        break;
      default:
        break;
    }

    return style
  })

</script>
