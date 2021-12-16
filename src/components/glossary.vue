<template>
  <div class="container cont">
    <h1>Glosario para dummies</h1>
    <p class="intro">
      ¿Has pensado que "cochinilla" era un insulto suave o que "envés" era un
      gazapo? Estás en el contenido adecuado. Aquí tienes una lista de todos los
      términos que hemos usado y algunos más.
    </p>
    <dl class="row left" v-for="(term, index) in glossary" :key="index">
      <dt>{{ term.title }}</dt>
      <dd>{{ term.description }}</dd>
    </dl>
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
<style scoped>
h1 {
  margin-bottom: 2rem;
}
.intro {
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
dt {
  text-transform: unset;
  color: #476643;
}
dd {
  border-bottom: 1px solid #d1e7cc;
  padding-bottom: 1rem;
}
dl {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
</style>
