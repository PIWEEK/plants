<template>
  <div class="container cont">
    <div class="row search">
      <div class="col2">
        <h1>Plantas</h1>
      </div>
      <div class="col-2">
        <label for="buscar" class="hide">Buscar</label>
        <input
          type="text"
          id="buscar"
          v-model="buscar"
          class="form-control"
          placeholder="Ejemplo: Cactus"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-3" v-for="item in items" v-bind:key="item.slug">
        <div class="card">
          <router-link
            :to="{
              name: 'Plants',
              params: { plantslug: item.slug, plant: JSON.stringify(item) },
            }"
          >
            <img
              class="card-img"
              v-bind:src="item.image_url"
              v-bind:alt="item.scientific_name"
            />
          </router-link>

          <div class="card__body">
            <router-link
              :to="{
                name: 'Plants',
                params: { plantslug: item.slug, plant: JSON.stringify(item) },
              }"
            >
              <h3 class="card__title">{{ item.name }}</h3>
            </router-link>
            <h4 class="card__scientific-name">
              {{ item.scientific_name }}
            </h4>

            <div class="row ded">
              <span class="dedicacion">Dedicación</span>
              <div class="barrita"><span class="dedicacion"></span></div>
            </div>
            <!-- 
            <p v-bind:class="{ nontoxic: item.toxicity_dogs }" :key="item.key">
              perro
            </p> -->
            <div class="row">
              <span>Toxico para</span>
              <img
                class="toxicity"
                src="../assets/svg/animals_dog.svg"
                v-bind:class="{ nontoxic: item.toxicity_dogs }"
                :key="item.key"
              />
              <img
                class="toxicity"
                src="../assets/svg/animals_cat.svg"
                v-bind:class="{ nontoxic: item.toxicity_cats }"
                :key="item.key"
              />
              <img
                class="toxicity"
                src="../assets/svg/horse-2.svg"
                v-bind:class="{ nontoxic: item.toxicity_horses }"
                :key="item.key"
              />
              <img
                class="toxicity"
                src="../assets/svg/animals_rabbit_1.svg"
                v-bind:class="{ nontoxic: item.toxicity_dogs }"
                :key="item.key"
              />
              <img
                class="toxicity"
                src="../assets/svg/face_baby-2.svg"
                v-bind:class="{ nontoxic: item.toxicity_dogs }"
                :key="item.key"
              />
            </div>

            <!--             <router-link
              class="button"
              :to="{
                name: 'Plants',
                params: { plantslug: item.slug, plant: JSON.stringify(item) },
              }"
            >

              Ver ficha de {{ item.name }}
            </router-link> -->
            <!-- <router-link
              class="button"
              :to="{ name: 'Plants', params: { plant: item } }"
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from "../assets/json/data.json";

export default {
  // Exporto mi componente 'Plants'
  name: "PlantsList",
  props: {
    msg: String,
  },

  // declaro el elemento buscar
  data() {
    return {
      buscar: "",
    };
  },

  // Creo un método llamado 'items' y obtengo los datos de las Plants
  // Asimismo filtro la búsqueda de las Plants con el método filter()
  // buscador inicial funcionando:
  /*   computed: {
    items() {
      return datos.filter((item) => {
        return (
          item.scientific_name
            .toLowerCase()
            .includes(this.buscar.toLowerCase()) ||
          item.name.toLowerCase().includes(this.buscar.toLowerCase())
        );
      });
    },
  }, */
  /* probar la opcioń de meter más filtros via una variable como este ejempo  https://medium.com/swlh/filtering-sorting-and-searching-in-arrays-with-vue-js-f60951c040fc*/

  computed: {
    items() {
      let tempPlantas = this.datos;

      tempPlantas = datos.filter((item) => {
        return (
          item.scientific_name
            .toLowerCase()
            .includes(this.buscar.toLowerCase()) ||
          item.name.toLowerCase().includes(this.buscar.toLowerCase())
        );
      });

      return tempPlantas;
    },
  },
};
</script>

<style lang="scss" scoped></style>
