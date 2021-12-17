<template>
  <div class="container cont">
    <div class="row search">
      <div class="col2">
        <h1>Glosario para dummies</h1>
      </div>
      <div class="search input">
        <label for="buscar" class="hide">Buscar</label>
        <input
          type="text"
          id="buscar"
          v-model="buscar"
          class="form-control"
          placeholder="Ejemplo: esqueje"
        />
      </div>
    </div>
    <p class="intro">
      ¿Has pensado que "cochinilla" era un insulto suave o que "envés" era un
      gazapo? Estás en el contenido adecuado. Aquí tienes una lista de todos los
      términos que hemos usado y algunos más.
    </p>
    <dl class="row left" v-for="item in items" :key="item.title">
      <dt>{{ item.title }}</dt>
      <dd>{{ item.description }}</dd>
    </dl>
    <div class="noresults" v-if="items.length === 0">
      <h2>No tenemos nada con ese nombre</h2>
      <p class="big">Por favor, deja de inventarte palabros</p>

      <img src="https://c.tenor.com/IzXxm7sO-HwAAAAd/nothing-to.gif" />
    </div>
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
      buscar: "",
    };
  },
  computed: {
    items() {
      let tempGlossary = this.glossary;

      tempGlossary = glossary.filter((item) => {
        return item.title.toLowerCase().includes(this.buscar.toLowerCase());
      });

      return tempGlossary;
    },
  },
};
</script>
<style scoped>
.row.search {
  margin-bottom: 2rem;
}
.col2 {
  display: flex;
  align-items: center;
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
