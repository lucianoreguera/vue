<template>
  <ParentComponent />
  <hr />
  <h2>Lazy Loading...</h2>
  <!-- <img v-lazy="{
    src: 'https://picsum.photos/1280/800',
    loading: 'loading__.gif',
    error: 'error.jpg',
    delay: 500
  }" alt="Imagen Picsum"> -->
  <img v-lazy="{
    src: lazyOptions.src,
    lifecycle: lazyOptions.lifecycle,
    delay: lazyOptions.delay
  }" alt="Imagen Picsum">
</template>

<script lang="ts" setup>
  import { ref, VNode } from 'vue'
  import ParentComponent from '@/components/ParentComponent.vue'

  const lazyOptions = ref({
    src: 'https://picsum.photos/1280/800',
    delay: 500,
    lifecycle: {
      loading: (el:VNode) => { console.log('Cargando Imagen', el) },
      error: (el:VNode) => { console.log('Error al cargar imagen', el) },
      loaded: (el:VNode) => { console.log('Imagen Cargada', el) }
    }
  })
</script>
