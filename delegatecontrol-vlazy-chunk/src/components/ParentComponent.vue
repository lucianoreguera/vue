<template>
  <ChildComponent ref="percentageComponent" />
  <button @click="handlePercentage">Calculate</button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import ChildComponent from './ChildComponent.vue'

  const percentageComponent = ref(null)

  const handlePercentage = () => {
    // Simula conexion a un servicio y la suba de archivos
    percentageComponent.value.recalculate()
  }
</script>

<!-- Option API -->
<!-- <script lang="ts">
  import { defineComponent } from 'vue'
  import ChildComponent from './ChildComponent.vue'

  export default defineComponent({
    components: {
      ChildComponent
    },
    methods: {
      handlePercentage() {
        this.$refs.percentageComponent.recalculate()
      }
    }
  })
</script> -->
