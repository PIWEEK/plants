<!-- componente-->
<template>
  <!-- if plantData no existe no pintes nada del div -->
  <div class="plantcomponent" v-if="plantData">
    <div class="row">
      <!-- pasamos de manera dinámica la información del componente -->
      <div class="image-left col-2">
        <img
          class="card-img-top"
          v-bind:src="plantData.image"
          v-bind:alt="plantData.scientificName"
        />
      </div>
      <div class="col-2">
        <!-- <h2>Planta {{ $route.params.plant.slug }}</h2>-->
        <dl>
          <dt>Nombre</dt>
          <dd>{{ plantData.name }}</dd>
        </dl>
        <dl>
          <dt>Scientific name</dt>
          <dd>{{ plantData.scientificName }}</dd>
          <dd>{{ plantData.scientific_name }}</dd>
        </dl>
        <dl>
          <dt>Nombre</dt>
          <dd>{{ plantData.name }}</dd>
        </dl>
        <dl>
          <dt>Nombre</dt>
          <dd>{{ plantData.care.dedication.value }}</dd>
        </dl>
        <dl>
          <dt>Dedicacion</dt>
          <dd>{{ plantData.care.dedication.description }}</dd>
        </dl>

        <!--         {{ variantsName }}
        {{ description }}
        {{ size }}
        {{ toxicity.dog }} -->
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
