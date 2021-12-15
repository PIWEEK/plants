<!--- vista -->
<template>
  <div id="#app">
    <div class="DetailView container">
      <PlantDetail :plant="plant" />
      <button @click="home">home</button>
    </div>
  </div>
</template>

<script>
// importo el componente de detalle en esta vista
import PlantDetail from "../components/PlantDetail.vue";

export default {
  props: {
    plant: String,
    plantslug: String,
    // name: String,
  },
  components: {
    PlantDetail,
  },
  beforeMount() {
    console.log(this.plant);
  },

  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
