<template>
  <div id="autocomplete">
    <input v-model="question"
      @input = "handleInput"
      @blur= "open = false"
      @keydown = "handleKeyDown">
    <div style="position:relative">   
      <ul style="width:100%" v-show="open">
        <li v-for="(suggestion, index) in openSuggestions"
            :class="{ 'highligth': index === position }"
            @mousedown="handleClick"
            @mouseenter="position = index">
          <span>{{ suggestion.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autocomplete',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      question: '',
      open: false,
      position: 0
    }
  },
  computed: {
    openSuggestions () {
      let matcher = new RegExp('^' + this.question, 'i');
      return this.options.filter(item => item.name.match(matcher));
    }
  },
  methods: {
    handleInput (e) {
      const { value } = e.target;
      this.position   = 0;
      this.open       = !!value;
    },
    handleClick (e) {
      let selected  = this.openSuggestions[this.position];
      this.open     = false;
      this.question = selected.name;
    },
    handleKeyDown (e) {
      if (!this.open) {
        return;
      }

      const DOWN  = 40;
      const UP    = 38;
      const ENTER = 13;
      const ESC   = 27;

      switch (e.keyCode) {
        case DOWN:
          e.preventDefault();
          this.position = (this.position + 1) % this.openSuggestions.length;
          break;
        case UP:
          e.preventDefault();
          this.position = (this.position - 1) < 0
                          ? this.openSuggestions.length - 1
                          : this.position - 1;
          break;
        case ENTER:
          e.preventDefault();
          let select    = this.openSuggestions[this.position];
          this.open     = false;
          this.question = select.name;
          break;
        case ESC:
          this.open = false;
          break;
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 100%;
  overflow: hidden;
}

ul li {
  display: inline-block;
  width: 100%;
  flex-wrap: wrap;
  background: white;
  margin: 0;
  border-bottom: 1px solid #eee;
  color: #363636;
  padding: 7px;
  cursor: pointer;
}
ul li.highligth {
  background: #f8f8f8
}
</style>
