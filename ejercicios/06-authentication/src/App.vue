<template>
  <!-- Condicionar si esta logueado de muestra el nav -->
  <NavComponent />
  <div class="containter max-w-7xl mx-auto my-10">
    <ModalComponent v-if="appStore.isModalVisible" />
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
  import NavComponent from './components/NavComponent.vue'
  import ModalComponent from '@/components/ModalComponent.vue'
  import { useAppStore } from '@/store/appStore'
  
  const appStore = useAppStore()
</script>
