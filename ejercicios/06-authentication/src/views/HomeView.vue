<template>
  <h1 class="text-3xl text-slate-800 my-8">Notas</h1>
  <div class="grid grid-cols-3 gap-5" v-if="noteStore.notes.length > 0">
    <NoteDetail 
      v-for="note in noteStore.notes" 
      :key="note.id" 
      :note="note"
    />
  </div>
  <AlertComponent 
    v-else
    alert="info"
    message="No hay notas registradas. Empieza a registrar tus notas presionando Cear Nota en el menú"
  />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useNoteStore } from '@/store/noteStore'
  import NoteDetail from '@/components/NoteDetail.vue'
  import AlertComponent from '@/components/AlertComponent.vue'

  const noteStore = useNoteStore()

  onMounted(async () => {
    await noteStore.getAllNotes()
  })
</script>
