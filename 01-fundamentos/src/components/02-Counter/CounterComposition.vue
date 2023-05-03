<template>
    <div class="container">
      <button @click="decrementCounter">-</button>
      <input type="number" :value="counter">
      <button @click="incrementCounter">+</button>
    </div>
  </template>
  
  <!-- Sin el atributo setup -->
  <!-- <script lang="ts">
    import { defineComponent, ref, Ref } from 'vue' // Ref es para tipar con ts
  
    export default defineComponent({
      name: 'CounterComposition',
      setup() {
        let counter:Ref = ref(0) // composition nos permite flexibidad a la hora de querer hacer elementos reactivos, por eso usamos referencias
        const incrementCounter = ():void => { counter.value++ }
        const decrementCounter = ():void => { counter.value-- }

        return { counter, incrementCounter, decrementCounter }
      }
    })
  </script> -->

  <!-- Con el atributo setup omitimos toda la parte de definicion de componentes y retorno de valores, logrando un código mas corto -->
  <script lang="ts" setup>
    import { ref, Ref } from 'vue' // Ref es para tipar con ts
  
    let counter:Ref = ref(0) // composition nos permite flexibidad a la hora de querer hacer elementos reactivos, por eso usamos referencias
    const incrementCounter = ():void => { counter.value++ }
    const decrementCounter = ():void => { counter.value-- }
  </script>
  
  <style scoped>
    .container {
      display: flex;
      flex-direction: row;
    }
  </style>