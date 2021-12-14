<template>
  <div class="container cont">
    <div class="row search">
      <div class="col-md-12">
        <label for="buscar">Buscar</label>
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
      <div class="col-md-4" v-for="item in items" v-bind:key="item.slug">
        <div class="card">
          <img
            class="card-img-top"
            v-bind:src="item.image_url"
            v-bind:alt="item.scientific_name"
          />
          <div class="card-body">
            <h3 class="card-title">{{ item.scientific_name }}</h3>
            <p class="card-text"><strong>Nombre:</strong> {{ item.name }}</p>
            <p class="card-text"><strong>Familia:</strong> {{ item.family }}</p>
            <p class="card-text">
              <strong>AKA:</strong>
              {{ item.additional_common_names }}
            </p>
            <router-link
              class="button"
              :to="{
                name: 'Plants',
                params: { plantslug: item.slug, plant: JSON.stringify(item) },
              }"
            >
              <!-- <router-link
              class="button"
              :to="{ name: 'Plants', params: { plant: item } }"
            > -->
              Ver ficha de {{ item.name }}
            </router-link>
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
  /*   methods: {
    showMore(id) {
      //emit comunica un dato de un componente hijo a un compoennte padre
      this.$emit("showModal", id);
    },
  }, */

  // declaro el elemento buscar
  data() {
    return {
      buscar: "",
    };
  },

  // Creo un método llamado 'items' y obtengo los datos de las Plants
  // Asimismo filtro la búsqueda de las Plants con el método filter()
  computed: {
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
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .col-md-4 {
    flex-basis: 24%;
  }
}
</style>
