<template>
  <div class="container">
    <h1 class="text-center my-5">Listado Usuarios</h1>
    <div class="row justify-content-end mb-2 mr-5">
      <div class="col-4">
        <input 
          class="form-control"
          type="text" 
          placeholder="Buscar usuario..."
          v-model="search" 
          @keyup="handleSearch"
        />
      </div>
    </div>
  
    <div class="d-flex justify-content-center gap-2">
      <button class="btn btn-outline-primary" @click="handleLayout(ListLayout)">List</button>
      <button class="btn btn-outline-primary" @click="handleLayout(CardLayout)">Cards</button>
      <button class="btn btn-outline-primary" @click="handleLayout(TableLayout)">Table</button>
    </div>
  
    <component v-if="filteredUsers.length > 0" :is="layout" :content="filteredUsers" />
    <div v-else class="alert alert-info mt-5" role="alert">
      No se encontraron registros
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineAsyncComponent, onMounted } from 'vue'

  const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
  const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
  const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))

  const layout = ref(TableLayout)
  const users = ref([])
  const search = ref('')
  const filteredUsers = ref([])

  onMounted(async () => {
    const rawResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await rawResponse.json()

    users.value = response
    filteredUsers.value = response
  })

  const handleLayout = (component) => layout.value = component

  const handleSearch = () => {
    filteredUsers.value = users.value.filter(user => user.name.toLowerCase().includes(search.value.toLowerCase()))
  }
</script>
