<template>
  <div id="app">
      <autocomplete :options="options"></autocomplete>
  </div>
</template>

<script>
import autocomplete from './components/autocomplete.component.vue';

export default {
  name: 'app',
  data () {
    return {
      options: [
        {name: 'feijiej'},
        {name: 'peofe'},
        {name: 'feijiej'},
        {name: 'pzzzeofe'},
        {name: 'faaaeijiej'},
        {name: 'aaapeofe'}
      ]
    }
  },
  components: {
    autocomplete
  },
  method: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
