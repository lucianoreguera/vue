<template>
  <transition name="fade">
    <div v-if="appStore.isModalVisible">
      <div
        @click="appStore.onToggle"
        class="absolute backdrop-blur-xl bg-black/75 inset-0 z-0"
      ></div>
      <div
        class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
      >
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-slate-700 text-center">Registra tu nota</h3>
          <textarea
            rows="40"
            placeholder="ingresa tu nota..."
            class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            v-model="content"
          ></textarea>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <button
              class="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg bg-indigo-800 border-indigo-800 hover:bg-indigo-900"
              @click="noteStore.createNote(content)"
            >
              Guardar
            </button>
            <button
              @click="appStore.onToggle"
              class="mb-2 md:mb-0 bg-rose-800 border border-rose-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-rose-900"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script lang="ts" setup>
import { Ref, ref } from 'vue'
  import { useAppStore } from '@/store/appStore'
  import { useNoteStore } from '@/store/noteStore'

  const appStore = useAppStore()
  const noteStore = useNoteStore()

  const content:Ref<string> = ref('')
</script>
<style scoped>
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease-out;
  }
</style>