<template>
  <button @click="handleShow">Show / Hide</button>
  <Transition>
    <h1 v-if="show">Hello World!!</h1>
  </Transition>

  <h2>Listado de notas</h2>
  <TransitionGroup name="list-note" tag="ul">
    <li v-for="(note, key) in notes" :key="note">
      <v-icon name="la-sticky-note" scale="0.9" animation="pulse" />{{ note }}
      <button @click="handleDeleteNote(key)">
        <v-icon name="hi-trash" color="red" hover="true" animation="wrench" />
      </button>
    </li>
  </TransitionGroup>
  <input type="text" v-model="note">
  <button @click="handleSaveNote">Save</button>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue'

  const show:Ref<boolean> = ref(false)
  const notes:Ref<Array<string>> = ref([])
  const note:Ref<string> = ref('')

  const handleShow = () => show.value = !show.value
  const handleSaveNote = () => {
    notes.value.push(note.value)
    note.value = ''
  }
  const handleDeleteNote = (key:number) => {
    console.log(key)
    notes.value.splice(key, key)
    console.log(notes.value)
  }
</script>

<style>
  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
  .v-enter-active, .v-leave-active {
    transition: .5s ease;
  }

  .list-note-enter-from, .list-note-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-note-enter-active, .list-note-leave-active {
    transition: all .5s ease;
  }
</style>
