import Vue from 'vue';
import App from './App.vue';
import Autocomplete from './components/autocomplete.component.vue';

Vue.config.productionTip = false;

/* eslint no-new: "off" */

new Vue({
  el: 'app',
  components: {
    App,
    Autocomplete
  }
});
