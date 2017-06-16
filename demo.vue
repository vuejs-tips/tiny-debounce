<template lang="html">
<main>
  <p>
    The text will appear 500ms after the last keystroke.
  </p>
  <input v-model="input" placeholder="type here" />
  <p>
    {{debouncedInput}}
  </p>
</main>
</template>

<script>
import debounce from './'

export default {
  data () {
    return {
      input: '',
      debouncedInput: ''
    }
  },

  watch: {
    input: debounce(function (newVal) {
      this.debouncedInput = newVal
    }, 500)
  }
}
</script>

<style>
body {
  background: #606c88;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

main {
  width: 400px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: white;
  margin: 50px auto;
  padding: 20px;
}

input {
  box-sizing: border-box;
  border: 1px solid silver;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 25px;
  color: #444;
  font-weight: bold;
  text-align: center;
}
</style>
