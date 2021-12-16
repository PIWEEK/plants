<template>
  <div class="container cont">
    <h1>Glosario</h1>
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
