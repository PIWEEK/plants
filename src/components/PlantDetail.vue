<!-- componente-->
<template>
  <!-- if plantData no existe no pintes nada del div -->
  <div class="plantcomponent" v-if="plantData">
    <div class="row">
      <!-- pasamos de manera dinámica la información del componente -->
      <div class="image-left col-2">
        <img
          class="card-img-top"
          v-bind:src="plantData.image_url"
          v-bind:alt="plantData.scientific_name"
        />
      </div>
      <div class="col-2">
        <!--         <h2>Planta {{ $route.params.plant.slug }}</h2>
 -->
        <p>name: {{ plantData.name }}</p>
        <p>{{ plantData.family }}</p>
        <p>{{ plantData.family }}</p>
        <p>{{ plantData.family }}</p>
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

<style></style>
