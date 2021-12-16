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
<style lang="scss" scoped>
.container {
  padding-top: 2rem;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
