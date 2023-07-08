<template>
  <tr>
    <th scope="row">{{ props.user.id }}</th>
    <td>{{ props.user.name }}</td>
    <td>{{ props.user.username }}</td>
    <td>{{ props.user.email }}</td>
    <td>{{ props.user.address.street }}, {{ props.user.address.city }}</td>
    <td>{{ props.user.phone }}</td>
    <td>{{ props.user.website }}</td>
    <td>{{ props.user.company.name }}</td>
  </tr>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps(['user'])
</script>
