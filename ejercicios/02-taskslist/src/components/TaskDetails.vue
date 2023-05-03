<template>
  <div class="flex mb-4 items-center">
    <p v-show="!props.task.done" class="w-full text-grey-darkest">{{ props.task.title }}</p>
    <p v-show="props.task.done" class="w-full line-through text-green-500">{{ props.task.title }}</p>
    <button v-show="!props.task.done" @click="handleClickToggleStatus" class="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white font-semibold text-green-500 border-green-500 hover:bg-green-500">Finalizar</button>
    <button v-show="props.task.done" @click="handleClickToggleStatus" class="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 font-semibold border-gray-500 hover:bg-gray-500">Reiniciar</button>
    <button @click="handleClickDelete" class="shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 font-semibold hover:text-white hover:bg-red-500">Eliminar</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    emits: ['deleteTask', 'toggleStatusTask'],
    setup(props, { emit }) {
      const handleClickToggleStatus = () => {
        emit('toggleStatusTask', props.task.id)
      }

      const handleClickDelete = () => {
        emit('deleteTask', props.task.id)
      }

      return {
        props,
        handleClickToggleStatus,
        handleClickDelete
      }
    }
  })
</script>