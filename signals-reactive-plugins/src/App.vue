<template>
  <h2>Contador - Signal Solid</h2>
  <div class="container">
    <button class="btn" @click="$event => setCount((value:number) => value-1)">-</button>
    <p>{{ count() }}</p>
    <button class="btn" @click="$event => setCount((value:number) => value+1)">+</button>
    <button class="btn" @click="$event => setCount(0)">Reset</button>
  </div>
  <hr />
  <h2>Contador - Signal Angular</h2>
  <div class="container">
    <button class="btn" @click="$event => ngCount.update((value:number) => value-1)">-</button>
    <p>{{ ngCount() }}</p>
    <button class="btn" @click="$event => ngCount.update((value:number) => value+1)">+</button>
    <button class="btn" @click="$event => ngCount.set(0)">Reset</button>
  </div>
  <hr />
  <h2>Contador - Reactive(Native of Vue)</h2>
  <div class="container">
    <button class="btn" @click="$event => obj.count--">-</button>
    <p>{{ obj.count }}</p>
    <button class="btn" @click="$event => obj.count++">+</button>
    <button class="btn" @click="$event => obj.count = 0">Reset</button>
  </div>
</template>

<script lang="ts" setup>
  import { createSignal } from 'vue-signals/solid'
  import { signal } from 'vue-signals/angular'
  import { reactive } from 'vue'

  // Solid
  const [count, setCount] = createSignal(0)
  // Angular
  const ngCount = signal(0)
  // Reactive
  const obj = reactive({
    count: 0
  })
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.btn {
  background-color: blueviolet;
  border: 1px solid blueviolet;
  border-radius: 25%;
  padding: 8px;
  color: aliceblue;
}
</style>
