<template>
  <h1>Counter</h1>
  <div class="counter-container">
    <button class="btn" @click="decrease">-</button>
    <p class="counter">{{ counter }}</p>
    <button class="btn" @click="increase">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

const counter:Ref<number> = ref(0)

const increase = () => counter.value++
const decrease = () => counter.value--
</script>

<style scoped>
.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.counter {
  font-weight: bold;
}
.btn {
  background-color:#0a0a23;
  color: #fff;
  border:none;
  border-radius:4px;
  box-shadow: 0px 0px 2px 2px rgb(0,0,0);
}
</style>
