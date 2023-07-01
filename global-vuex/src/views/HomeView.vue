<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Home View</h3>
    <p>Counter: {{ counter }}</p>
    <p>{{ counter }} x 2 = {{ times2 }}</p>
    <button @click="increment">Increment</button>

    <CounterComponent />
  </div>
</template>

<!-- Forma más sencilla OPTION API -->
<!-- <script lang="ts">
import { defineComponent } from 'vue';
import CounterComponent from '@/components/CounterComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    CounterComponent,
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    times2() {
      return this.$store.getters.times2
    }
  },
  methods: {
    increment() {
      this.$store.commit('setCounter', this.counter + 1)
    }
  }
});
</script> -->

<!-- Forma menos código, a través del mapeo del store OPTION API -->
<!-- <script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex'
import CounterComponent from '@/components/CounterComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    CounterComponent,
  },
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['times2'])
  },
  methods: {
    ...mapMutations(['setCounter']),
    increment() {
      this.setCounter(this.counter + 1)
    }
  }
});
</script> -->

<!-- COMPOSITION API -->
<!-- <script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'
import CounterComponent from '@/components/CounterComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    CounterComponent,
  },
  setup() {
    const store = useStore() // this.$store
    const counter = computed(() => store.state.counter)
    const times2 = computed(() => store.getters.times2)
    const increment = () => store.commit('setCounter', counter.value + 1)
    return {
      counter,
      times2,
      increment
    }
  }
});
</script> -->

<!-- COMPOSITION API SETUP -->
<script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex'
  import CounterComponent from '@/components/CounterComponent.vue'; // @ is an alias to /src

  const store = useStore() // this.$store
  const counter = computed(() => store.state.counter)
  const times2 = computed(() => store.getters.times2)
  const increment = () => store.commit('setCounter', counter.value + 1)
</script>