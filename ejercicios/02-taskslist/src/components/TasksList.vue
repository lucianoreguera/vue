<template>
  <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/5">
    <div class="mb-4">
      <h1 class="text-gray-darkest text-3xl font-bold">Lista de Tareas</h1>
      <div class="flex mt-4">
        <input v-model="task" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 font-semibold text-grey-darker" placeholder="Agregar Tarea">
        <button @click="handleClickAddTask" class="shrink-0 p-2 border-2 rounded text-teal-500 font-semibold border-teal-500 hover:text-white hover:bg-teal-500">Agregar</button>
      </div>
    </div>
    <div>
      <TaskDetails v-for="task in tasks" :key="task.id" :task="task" @deleteTask="deleteTask" @toggleStatusTask="toggleStatusTask" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue';
  import TaskDetails from './TaskDetails.vue';
  import { generateUUID } from '../helpers/index';

  interface ITask {
    id: string,
    title: string,
    done: boolean
  }

  const tasks:Ref<Array<ITask>> = ref([])

  const task:Ref<string> = ref("")

  const handleClickAddTask = () => {
    const newTask:ITask = {
      id: generateUUID(),
      title: task.value,
      done: false
    }

    tasks.value.push(newTask)
    task.value = ''
  }

  const deleteTask = (id:string) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }

  const toggleStatusTask = (id:string) => {
    const taskSelected = tasks.value.filter(task => task.id === id)

    taskSelected[0].done = !taskSelected[0].done
  }
</script>