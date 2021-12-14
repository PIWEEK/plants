<template>
  <div class="plantsList">
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
