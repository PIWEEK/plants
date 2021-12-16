<template>
  <div class="glossary">
    <Glossary />
  </div>
</template>

<script>
// @ is an alias to /src
import Glossary from "../components/glossary.vue";

export default {
  name: "Glosario", // por qué no funciona con Plants?
  components: {
    Glossary,
  },
};
</script>
