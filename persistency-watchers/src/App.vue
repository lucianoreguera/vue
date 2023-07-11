<template>
  <h2>Contador con Persistencia</h2>
  <div class="container">
    <button class="btn" @click="store.decrement(1)">-</button>
    <h3>{{ store.count }}</h3>
    <button class="btn" @click="store.increment(1)">+</button>
  </div>
  <hr />
  <h2>Notes</h2>
  <input type="text" v-model="note">
  <button class="btn">Save</button>
</template>

<script lang="ts" setup>
  import { ref, watchEffect, watch } from 'vue'
  import { useCounter } from '@/store/useCounter'

  const store = useCounter()
  const note = ref('')
  // watchEffect(() => alert(`Se modificó el valor: ${note.value}`))
  watch(note, () => alert(`Se modificó el valor: ${note.value}`))

  store.init()
</script>

<!-- Composition API -->
<!-- <script lang="ts">
  import { ref, defineComponent, watchEffect } from 'vue'
  export default defineComponent({
    setup() {
      const note: ref("")
      
      watchEffect(() => note.value)

      return {
        note
      }
    },
  })
</script> -->

<!-- Option API -->
<!-- <script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    data() {
      return {
        note: ""
      }
    },
    watch: {
      note(value, oldValue) {
        localStorage.setItem('note', value)
      }
    }
  })
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.btn {
  background-color: #2563eb;
  color: white;
  font-size: large;
  border: 1px solid #1d4ed8;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: #1d4ed8;
}

.btn-link {
  text-decoration: none;
  margin-top: 10px;
}

hr {
  margin-bottom: 20px;
}
</style>
