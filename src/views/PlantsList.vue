<template>
  <div class="plantsList" id="app">
    <h1>This is the plants list page</h1>
    <Plants />
  </div>
</template>

<script>
// @ is an alias to /src
import Plants from "../components/Plants.vue";

export default {
  name: "Home", // por qué no funciona con Plants?
  components: {
    Plants,
  },
};
</script>
