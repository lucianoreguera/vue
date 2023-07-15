<template>
  <h2>Porcentaje de completado: {{ percentage }}%</h2>
</template>

<!-- Composition API setup -->
<script lang="ts" setup>
  import { ref, onMounted, defineExpose } from 'vue'

  const percentage = ref(0)

  onMounted(() => {
    // Simula la consulta a un servicio que trae el porcentaje de llenado y obtenemos
    percentage.value = 24
  })

  const recalculate = () => {
    // y la posterior actualización del porcentaje
    percentage.value = 42
  }

  defineExpose({recalculate})
</script>

<!-- Composition API -->
<!-- <script lang="ts">
  import { defineComponent, ref, onMounted, defineExpose } from 'vue'

  export default defineComponent({
    setup() {
      const percentage = ref(0)
      onMounted(() => percentage.value = 24)
      const recalculate = () => percentage.value = 42
      defineExpose({recalculate})

      return {
        percentage,
        recalculate
      }
    }    
  })
</script> -->

<!-- Option API -->
<!-- <script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        percentage: 0
      }
    },
    methods: {
      recalculate() {
        this.percentage = 42
      }
    },
    mounted() {
      this.percentage = 24
    }
  })
</script> -->
