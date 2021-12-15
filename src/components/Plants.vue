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
          placeholder="Ejemplo: Aloe"
        />
      </div>
    </div>
    <div class="container-plants row">
      <!-- Bar containing all sort inputs -->
      <div class="sidebar">
        <!--  <select name="sortBy" id="select" v-model="sortBy">
          <option value="alphabetically">Alphabetically</option>
          <option value="cookingTime">Cooking Time</option>
        </select> -->
        <h4>Dedicación</h4>
        <div class="row">
          <label class="form-control">
            <input
              v-model="dedication"
              type="checkbox"
              id="huey"
              name="drone"
              value="huey"
            />
            Baja</label
          >

          <label class="form-control">
            <input
              v-model="dedication"
              type="checkbox"
              id="dewey"
              name="drone"
              value="dewey"
            />
            Media</label
          >

          <label class="form-control">
            <input
              v-model="dedication"
              type="checkbox"
              id="louie"
              name="drone"
              value="louie"
            />
            Alta</label
          >
        </div>
        <h4>Soy:</h4>
        <div class="row">
          <label class="form-control">
            <input type="checkbox" id="huey" name="drone" value="huey" />
            Increíble</label
          >

          <label class="form-control">
            <input type="checkbox" id="dewey" name="drone" value="dewey" />
            La mejor</label
          >

          <label class="form-control">
            <input type="checkbox" id="louie" name="drone" value="louie" />
            un mostro</label
          >
        </div>

        <!--         <button v-on:click="ascending = !ascending" class="sort-button">
          <i v-if="ascending" class="fa fa-sort-up"></i>
          <i v-else class="fa fa-sort-down"></i>
        </button>
        <input type="number" v-model="maxCookingTime" id="cooking-time-input" />
        <input
          type="text"
          v-model="buscar"
          placeholder="Search Recipe"
          id="search-input"
        />
        <i class="fa fa-search"></i> -->
      </div>
      <div class="row list">
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
                v-bind:src="item.image"
                v-bind:alt="item.scientificName"
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
                {{ item.scientificName }}
              </h4>

              <div class="row ded">
                <span class="title">Dedicación</span>
                <div class="barrita" :class="item.care.dedication.value">
                  <span class="dedicacion">
                    <div class="small">
                      {{ item.care.dedication.value }}
                    </div></span
                  >
                </div>
              </div>
              <!-- 
            <p v-bind:class="{ nontoxic: item.toxicity_dogs }" :key="item.key">
              perro
            </p> -->
              <div class="row">
                <span>Toxico para</span>
                <!--                 <img
                  class="toxicity"
                  src="../assets/svg/animals_dog.svg"
                  v-bind:class="{ nontoxic: item.toxicity_dogs }"
                  :key="item.key"
                />  -->
                <img
                  v-if="item.toxicity !== null"
                  class="toxicity"
                  src="../assets/svg/animals_dog.svg"
                  v-bind:class="{ nontoxic: item.toxicity.dog.value }"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity !== null"
                  class="toxicity"
                  src="../assets/svg/animals_cat.svg"
                  v-bind:class="{ nontoxic: item.toxicity.cat.value }"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity !== null"
                  class="toxicity"
                  src="../assets/svg/horse-2.svg"
                  v-bind:class="{ nontoxic: item.toxicity.horse.value }"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity !== null"
                  class="toxicity"
                  src="../assets/svg/animals_rabbit_1.svg"
                  v-bind:class="{ nontoxic: item.toxicity.rabbit.value }"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity !== null"
                  class="toxicity"
                  src="../assets/svg/face_baby-2.svg"
                  v-bind:class="{ nontoxic: item.toxicity.baby }"
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
  </div>
</template>

<script>
//import datos from "../assets/json/data.json";
import datos from "../assets/json/plants_copy.json";

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
          item.scientificName
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

<style lang="scss" scoped>
.sidebar {
  flex-basis: 20%;
  .row {
    margin-bottom: 2rem;
  }
}
.row.list {
  flex-basis: 78%;
}
</style>
