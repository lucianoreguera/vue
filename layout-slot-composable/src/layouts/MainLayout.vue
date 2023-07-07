<template>
  <TopBar />
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <slot name="header"></slot>
        <slot name="main"></slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TopBar from '@/components/TopBar'
  import SideBar from '@/components/SideBar'
</script>

<style scoped>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
</style>
