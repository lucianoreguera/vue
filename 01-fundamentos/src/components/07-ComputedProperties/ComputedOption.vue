<template>
  <h1>Propiedades Computadas</h1>
  <input type="text" v-model="msg">
  <h3>{{ msg }}</h3>
  <h3>{{ reverse }}</h3>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      let msg = ''

      return { msg }
    },
    computed: {
      reverse():string {
        return this.msg.split('').reverse().join('')
      }
    }
  })
</script>