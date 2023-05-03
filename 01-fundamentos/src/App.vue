<template>
  <!-- <h1 class="title">Listado de Posts</h1>
  <PostContainer /> -->

  <!-- <CounterOption /> -->
  
  <!-- <CounterComposition /> -->
  <!-- Si instanciamos varios componentes, cada uno mantiene su estado independiente -->
  <!-- <CounterComposition /> -->

  <!-- <DirectiveSelective /> -->
  <!-- <DirectiveFor /> -->
  <!-- <DirectiveBindClass /> -->

  <!-- <VModelForm /> -->

  <!-- <CycleOptionApi /> -->
  <!-- <CycleCompositionApi /> -->

  <PostList />
</template>

<script lang="ts" setup>
import PostList from './components/06-PropsEmits/PostList.vue';

  // import PostContainer from './components/01-Posts/PostContainer.vue';
  // import CounterOption from './components/02-Counter/CounterOption.vue';
  // import CounterComposition from './components/02-Counter/CounterComposition.vue';
  // import DirectiveSelective from './components/03-Directives/DirectiveSelective.vue';
  // import DirectiveFor from './components/03-Directives/DirectiveFor.vue';
  // import DirectiveBindClass from './components/03-Directives/DirectiveBindClass.vue';
  // import VModelForm from './components/04-Form/VModelForm.vue';
  // import CycleOptionApi from './components/05-LifeCycle/CycleOptionApi.vue';
  // import CycleCompositionApi from './components/05-LifeCycle/CycleCompositionApi.vue';
</script>

<style>
  h1 {
    color: blueviolet;
  }
</style>
