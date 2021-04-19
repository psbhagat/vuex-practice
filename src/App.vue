<template>
  <base-container title="Vuex">
    <h3>{{ counterValue }}</h3>
    <button @click="addOne">Add 1</button>
    <button @click="addTwo">Add after some time</button>
    <button @click="increase({ value: 10 })">
      Add after some time using mapActions
    </button>
    <h3>{{ finalCounter }}</h3>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
    addTwo() {
      //this.$store.commit('increase', { value: 2 });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
    ...mapActions(['increase', 'increment']),
  },
  computed: {
    counterValue() {
      return this.$store.getters.finalCounter;
    },
    ...mapGetters(['finalCounter']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>