<template>
  <h1>Facturación</h1>
  <label for="subtotal">Ingrese el monto: </label>
  <input type="number" id="subtotal" v-model="subtotal">
  <h3>Impuestos: {{ tax }} (IVA {{ IVA }}%)</h3>
  <h3>Subtotal: ${{ subtotal }}</h3>
  <h2>Total: ${{ total }}</h2>
</template>

<script lang="ts" setup>
  import { Ref, ref, computed } from "vue";

  const IVA = 21
  const subtotal:Ref<number> = ref(0)
  const tax = computed(() => subtotal.value * 0.21)
  let total = computed(() => subtotal.value + (subtotal.value * 0.21))
</script>