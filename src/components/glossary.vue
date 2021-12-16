<template>
  <div v-for="(term, index) in glossary" :key="index">
    {{ term }}
  </div>
</template>

<script>
import glossary from "../assets/json/glossary.json";
export default {
  name: "Glossary",
  props: {
    msg: String,
  },

  data() {
    return {
      glossary,
    };
  },
};
</script>
<style scoped></style>
