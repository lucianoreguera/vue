<template>
  <MainLayout>
    <template v-slot:header>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">Compartir</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              Esta semana
            </button>
          </div>
        </div>
    </template>
    <!-- llamando al slot con el atajo# -->
    <template #main>
      <h3>Customers</h3>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue'
</script>