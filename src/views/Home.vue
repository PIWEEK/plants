<template>
  <div class="home" id="app">
    <Plants />
  </div>
</template>

<script>
// @ is an alias to /src
import Plants from "../components/Plants.vue";

export default {
  name: "Home",
  components: {
    Plants,
  },
};
</script>
