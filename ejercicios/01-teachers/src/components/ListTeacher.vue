<template>
  <section>
    <div v-show="hasError" class="error">Los campos son obligatorios</div>
    <div>
      <label for="firstname">Nombre/s: </label>
      <input type="text" id="firstname" v-model="teacher.firstname">
    </div>
    <div>
      <label for="lastname">Apellido/s: </label>
      <input type="text" id="lastname" v-model="teacher.lastname">
    </div>
    <div>
      <label for="dni">DNI: </label>
      <input type="text" id="dni" v-model="teacher.dni">
    </div>
    <div>
      <label for="courses">Cursos: </label>
      <input type="text" id="courses" v-model="course">
      <button @click="handleClickAddCourse()">Agregar Curso</button>
    </div>
    <div>
      <ul>
        <li v-for="course, index in teacher.courses" :key="index">{{ course }}</li>
      </ul>
    </div>
    <div>
      <label for="docs">Documentacón Completa: </label>
      <input type="checkbox" id="docs" v-model="teacher.docs">
    </div>
    <button v-if="!btnSubmit" @click="handleClickAddTeacher()">Agregar Profesor</button>
    <button v-else @click="handleClickEditTeacher()">Editar Profesor</button>
  </section>

  <section>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>DNI</th>
        <th>Cursos</th>
        <th>Documentación</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="teacher in teachers" :key="teacher.dni">
        <td>{{ teacher.firstname }}</td>
        <td>{{ teacher.lastname }}</td>
        <td>{{ teacher.dni }}</td>
        <td>
          <span v-for="course, index in teacher.courses" :key="index">{{ course }}, </span>
        </td>
        <td v-if="teacher.docs">Entregada</td>
        <td v-else>No Entregada</td>
        <td>
          <button class="btn-edit" @click="handleClickSelectTeacher(teacher.dni)">Editar</button>
        </td>
        <td>
          <button class="btn-delete" @click="handleClickDeleteTeacher(teacher.dni)">Eliminar</button>
        </td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" setup>
  import { Ref, ref } from 'vue';

  interface ITeacher {
    firstname: string,
    lastname: string,
    dni: string,
    courses: Array<string>,
    docs: boolean
  }

  const teacher:Ref<ITeacher> = ref({
    firstname: '',
    lastname: '',
    dni: '',
    courses: [],
    docs: false
  })

  // Ver de crear una ref para edit teacher y que se maneje el estado desde ahi, para luego actualizar
  const teachers:Ref<Array<ITeacher>> = ref([])
  // const teacherSelect:Ref<ITeacher> = ref({})

  const course:Ref<string> = ref('')

  const hasError:Ref<boolean> = ref(false)
  const btnSubmit:Ref<boolean> = ref(false)

  const handleClickAddCourse = ():void => {
    if (course.value) {
      teacher.value.courses.push(course.value)
    }

    course.value = ""
  }

  const handleClickAddTeacher = ():void|boolean => {
    const { firstname, lastname, dni, courses } = teacher.value

    if(!firstname || !lastname || !dni || !courses) {
      return hasError.value = true
    }

    hasError.value = false

    teachers.value.push({...teacher.value}) // Para evitar que guarde el objeto referenciado (ref) que esta sujeto a reactividad, se hace una copia y s guarda

    teacher.value.firstname = ''
    teacher.value.lastname = ''
    teacher.value.dni = ''
    teacher.value.courses = []
    teacher.value.docs = false
  }

  const handleClickEditTeacher = ():void => {
    const teacherEdit = teachers.value.filter(teach => teach.dni !== teacher.value.dni)
    const teach = {
      firstname: teacher.value.firstname,
      lastname: teacher.value.lastname,
      dni: teacher.value.dni,
      courses: teacher.value.courses,
      docs: teacher.value.docs
    }

    teachers.value = [...teacherEdit, teach]
    btnSubmit.value = false

    teacher.value.firstname = ''
    teacher.value.lastname = ''
    teacher.value.dni = ''
    teacher.value.courses = []
    teacher.value.docs = false
  }

  const handleClickSelectTeacher = (dni:string):void => {
    const teacherEdit = teachers.value.filter(teacher => teacher.dni === dni)

    teacher.value = teacherEdit[0]
    btnSubmit.value = true
  }

  const handleClickDeleteTeacher = (dni:string):void => {
    const teacherList = teachers.value.filter(teacher => teacher.dni !== dni)

    teachers.value = teacherList
  }
</script>

<style scoped>
  .error {
    margin-bottom: 5px;
    color: red;
  }

  .btn-edit {
    background-color: green;
    color: whitesmoke;
    border-radius: 25%;
    padding: 5px;
    border: none;
  }

  .btn-delete {
    background-color: red;
    color: whitesmoke;
    border-radius: 25%;
    padding: 5px;
    border: none;
  }
</style>