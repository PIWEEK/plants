<template>
  <div class="container cont">
    <div class="row search">
      <div class="col2">
        <h1>Plantas para dummies</h1>
      </div>
      <div class="row search">
        <!-- <button v-on:click="ascending = !ascending" class="sort-button">
          <template v-if="ascending">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline></svg
          ></template>
          <template v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-up"
            >
              <polyline points="18 15 12 9 6 15" /></svg
          ></template>
        </button> -->
        <label for="buscar" class="hide">Buscar</label>
        <input type="text" id="buscar" v-model="buscar" class="form-control" placeholder="Ejemplo: Monstera" @keyup="searchPlants($event)" />
      </div>
    </div>
    <!-- SIDEBAR FILTERS -->
    <div class="container-plants row">
      <!-- Bar containing all sort inputs -->
      <div class="sidebar">
        <!--  <select name="sortBy" id="select" v-model="sortBy">
          <option value="alphabetically">Alphabetically</option>
          <option value="cookingTime">Cooking Time</option>
        </select> -->
        <h4>Dedicación</h4>
        <div class="row normal">
          <label class="form-control">
            Baja
            <input v-model="form.dedication" type="checkbox" id="baja" name="Baja" value="Baja" @change="updateList($event)" />
            <span class="checkmark"></span>
          </label>

          <label class="form-control">
            Media
            <input v-model="form.dedication" type="checkbox" id="media" name="Media" value="Media" @change="updateList($event)" />
            <span class="checkmark"></span
          ></label>

          <label class="form-control">
            Alta
            <input v-model="form.dedication" type="checkbox" id="alta" name="Alta" value="Alta" @change="updateList($event)" />
            <span class="checkmark"></span>
          </label>
        </div>
        <!-- Ubicacion -->
        <h4>Ubicación</h4>
        <div class="row normal">
          <label class="form-control">
            Exterior
            <input v-model="form.location" type="checkbox" id="exterior" name="exterior" value="exterior" @change="updateList($event)" />
            <span class="checkmark"></span>
          </label>

          <label class="form-control">
            Interior
            <input v-model="form.location" type="checkbox" id="interior" name="interior" value="interior" @change="updateList($event)" />
            <span class="checkmark"></span
          ></label>
        </div>
        <!-- toxico para -->

        <h4>Luz</h4>
        <div class="row normal">
          <label class="form-control">
            Directa
            <input v-model="form.light" type="checkbox" id="directa" name="directa" value="directa" @change="updateList($event)" />
            <span class="checkmark"></span>
          </label>

          <label class="form-control">
            Indirecta
            <input v-model="form.light" type="checkbox" id="indirecta" name="indirecta" value="indirecta" @change="updateList($event)" />
            <span class="checkmark"></span
          ></label>
        </div>
        <!-- segura para -->
        <h4>Segura para:</h4>
        <div class="row animals">
          <label class="form-control">
            <input v-model="form.toxicity" type="checkbox" id="huey" name="dog" value="dog" @change="updateList($event)" />
            <span class="buttontype">
              <img width="18" height="18" src="../assets/svg/animals_dog.svg" />
              Perretes</span
            >

            <span class="checkmark"></span>
          </label>

          <label class="form-control">
            <input v-model="form.toxicity" type="checkbox" id="cat" name="cat" value="cat" @change="updateList($event)" />
            <span class="buttontype"><img width="18" height="18" src="../assets/svg/animals_cat.svg" />Gaticos</span>

            <span class="checkmark"></span
          ></label>

          <label class="form-control">
            <input v-model="form.toxicity" type="checkbox" id="horse" name="horse" value="horse" @change="updateList($event)" />
            <span class="buttontype"><img width="18" height="18" src="../assets/svg/horse-2.svg" />Caballos</span>

            <span class="checkmark"></span>
          </label>
          <label class="form-control">
            <input v-model="form.toxicity" type="checkbox" id="rabbit" name="rabbit" value="rabbit" @change="updateList($event)" />
            <span class="buttontype"><img width="18" height="18" src="../assets/svg/animals_rabbit_1.svg" />Conejos </span>
            <span class="checkmark"></span>
          </label>
        </div>
        <!-- otros -->

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
      <div class="row list left">
        <div class="noresults" style="text-align: center" v-if="items.length === 0">
          <h2>No encontramos nada con ese nombre</h2>
          <p class="big">Por favor, deja de inventarte nombres de plantas</p>
          <img src="https://c.tenor.com/IzXxm7sO-HwAAAAd/nothing-to.gif" />
        </div>
        <div class="col-3" v-for="item in items" v-bind:key="item.slug">
          <div class="card">
            <router-link
              :to="{
                name: 'Plants',
                params: { plantslug: item.slug, plant: JSON.stringify(item) }
              }"
            >
              <template v-if="!item.image.length">
                <img class="card-img" src="../assets/no-photo.jpg" title="no image" alt="no image" />
              </template>
              <template v-else>
                <img class="card-img" v-bind:src="item.image" v-bind:alt="item.scientificName" />
              </template>
            </router-link>

            <div class="card__body">
              <router-link
                :to="{
                  name: 'Plants',
                  params: { plantslug: item.slug, plant: JSON.stringify(item) }
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
                  <span class="dedicacion"> <div class="small"></div></span>
                </div>
              </div>

              <div class="row left" v-if="item.toxicity !== null">
                <span class="title">Tóxica para</span>
                <img
                  v-if="item.toxicity.dog !== null"
                  class="toxicity"
                  src="../assets/svg/animals_dog.svg"
                  v-bind:class="{ nontoxic: item.toxicity.dog.value == 'No' }"
                  v-bind:title="item.toxicity.dog.value + ' tóxica para perretes'"
                  v-bind:alt="item.toxicity.dog.value"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity.cat !== null"
                  class="toxicity"
                  src="../assets/svg/animals_cat.svg"
                  v-bind:class="{ nontoxic: item.toxicity.cat.value == 'No' }"
                  v-bind:title="item.toxicity.cat.value + ' tóxica para gatetes'"
                  v-bind:alt="item.toxicity.cat.value"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity.horse !== null"
                  class="toxicity"
                  src="../assets/svg/horse-2.svg"
                  v-bind:class="{ nontoxic: item.toxicity.horse.value == 'No' }"
                  v-bind:title="item.toxicity.horse.value + ' tóxica para caballos'"
                  v-bind:alt="item.toxicity.horse.value"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity.rabbit !== null"
                  class="toxicity"
                  src="../assets/svg/animals_rabbit_1.svg"
                  v-bind:class="{
                    nontoxic: item.toxicity.rabbit.value == 'No'
                  }"
                  v-bind:title="item.toxicity.rabbit.value + ' tóxica para conejos'"
                  v-bind:alt="item.toxicity.rabbit.value"
                  :key="item.key"
                />
                <img
                  v-if="item.toxicity.baby !== null"
                  class="toxicity"
                  src="../assets/svg/face_baby-2.svg"
                  v-bind:class="{ nontoxic: item.toxicity.baby.value == 'Yes' }"
                  v-bind:title="item.toxicity.baby.value + ' tóxica para bebés'"
                  v-bind:alt="item.toxicity.baby.value"
                  :key="item.key"
                />
              </div>
              <div class="row" v-else>
                <p class="notoxica">
                  <em>No tóxica para tu mascota</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import datos from "../assets/json/data.json";
  import datos from "../assets/json/plants.json";

  export default {
    // Exporto mi componente 'Plants'
    name: "PlantsList",
    props: {
      msg: String
    },

    // declaro el elemento buscar
    data() {
      return {
        ascending: true,
        buscar: "",
        form: {
          dedication: [],
          location: [],
          light: [],
          toxicity: []
        },
        items: datos
        /*       checkedLocation: true, */
      };
    },

    // Creo un método llamado 'items' y obtengo los datos de las Plants
    // Asimismo filtro la búsqueda de las Plants con el método filter()
    // buscador inicial funcionando:
    /* */
    /* probar la opcioń de meter más filtros via una variable como este ejempo  https://medium.com/swlh/filtering-sorting-and-searching-in-arrays-with-vue-js-f60951c040fc*/
    methods: {
      searchPlants() {
        let tempPlantas;

        tempPlantas = datos.filter((item) => {
          return item.scientificName.toLowerCase().includes(this.buscar.toLowerCase()) || item.name.toLowerCase().includes(this.buscar.toLowerCase());
        });
        // Show sorted array in descending or ascending order
        if (!this.ascending) {
          tempPlantas.reverse();
        }

        /*       if (!this.checked.location) {
        tempPlantas.filter((item) =>
          this.checked.location.includes(item.care.location)
        );
      } */

        this.items = tempPlantas;
      },
      updateList() {
        if (!this.form.dedication.length && !this.form.location.length && !this.form.light.length && !this.form.toxicity.length) {
          this.items = datos;
        } else {
          this.items = datos.filter((it) => {
            if (this.plantIsValid(it)) {
              return it;
            }
          });
        }
      },
      plantIsValid(plant) {
        const validation = [];
        validation.push(this.form.dedication.length ? this.form.dedication.includes(plant.care.dedication.value) : true);
        validation.push(
          this.form.location.length
            ? this.form.location.some((loc) => {
                return plant.care.location.some((j) => j.toLowerCase() === loc);
              })
            : true
        );
        validation.push(this.form.light.length ? this.form.light.includes(plant.care.light.value.toLowerCase()) : true);
        validation.push(this.form.toxicity.length ? this.plantIsSafe(plant) : true);
        return validation.every((it) => it === true);
      },
      plantIsSafe(plant) {
        if (!plant.toxicity) {
          return true;
        } else {
          const elements = Object.keys(plant.toxicity);
          const nonToxicFor = [];
          elements.forEach((it) => {
            if (plant.toxicity[it] && plant.toxicity[it].value) {
              plant.toxicity[it].value.toLowerCase() === "no" && nonToxicFor.push(it);
            } else {
              nonToxicFor.push(it);
            }
          });
          return this.form.toxicity.every((it) => nonToxicFor.includes(it));
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    flex-basis: 20%;
    padding-right: 1rem;
    .row {
      margin-bottom: 2rem;
    }
    h4 {
      font-weight: 600;
    }
  }
  .row.list {
    flex-basis: 78%;
    gap: 3%;
  }
  .sort-button {
    margin-bottom: 0;
  }
  p.notoxica {
    line-height: 1.8;
    color: #797979;
  }
  .row-search {
    margin-bottom: 0;
  }
  .row.list {
    flex-basis: 78%;
    gap: 2rem 3%;
  }
  .sort-button {
    margin-bottom: 0;
  }
  p.notoxica {
    line-height: 1.8;
    color: #797979;
  }
  .row-search {
    margin-bottom: 0;
  }
</style>
