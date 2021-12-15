<!-- componente-->
<template>
  <!-- if plantData no existe no pintes nada del div -->
  <div class="plantcomponent plant" v-if="plantData">
    <div class="row">
      <!-- pasamos de manera dinámica la información del componente -->
      <div class="plant__image">
        <img
          class="card-img-top"
          v-bind:src="plantData.image"
          v-bind:alt="plantData.scientificName"
        />
      </div>
      <div class="plant__data">
        <h1>{{ plantData.name }}</h1>
        <h2>{{ plantData.scientificName }}</h2>
        <p class="description">
          {{ plantData.description }}
        </p>
        <dl>
          <dt>Tipo</dt>
          <dd v-for="(tipo, index) in plantData.type" :key="index">
            {{ tipo }},
          </dd>
        </dl>
        <dl>
          <dt>Tamaño</dt>
          <dd>{{ plantData.size }}</dd>
        </dl>
        <div class="row">
          <div class="col-2">
            <h3>Nivel de dedicacion:</h3>
            <div class="row ded">
              <div class="barrita" :class="plantData.care.dedication.value">
                <span class="dedicacion"> </span>
              </div>
              <div class="small">
                {{ plantData.care.dedication.value }}
              </div>
            </div>
          </div>
          <div class="col-2">
            <h3>Ubicación</h3>
            <div class="row left">
              <span
                v-for="(ubicacion, index) in plantData.care.location"
                :key="index"
              >
                {{ ubicacion }},
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from "../assets/json/data.json";

export default {
  name: "Plants",
  props: {
    plant: String,
    // name: String,
  },
  beforeMount() {
    console.log("Detail", this.plant);
    this.plantData = this.plant && JSON.parse(this.plant);
  },
  data() {
    return {
      plantData: undefined,
      //plant: Object.values(datos),
      /*       plant: Object.values(datos).find(
        (item) => item.title === this.name
      ), */
    };
  },
};
</script>

<style lang="scss" scoped>
.plant__data {
  p {
    margin-bottom: 1rem;
  }
}
h1 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.25rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  margin-bottom: 0.5rem;
}
h3 {
  font-size: 1.3rem;
  text-transform: uppercase;
}
</style>
