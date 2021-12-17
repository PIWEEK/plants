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
        <caption>
          Imagen de
          {{
            plantData.credits.author
          }}
          via
          <a target="_blank" :href="plantData.credits.url">
            {{ plantData.credits.source }}</a
          >
        </caption>
      </div>
      <div class="plant__data">
        <h1>{{ plantData.name }}</h1>
        <h2>{{ plantData.scientificName }}</h2>
        <p class="description">
          {{ plantData.description }}
        </p>
        <dl>
          <dt>Dedicacion:</dt>
          <dd class="dd-barrita">
            <div class="barrita" :class="plantData.care.dedication.value">
              <span class="dedicacion"> </span>
            </div>
            <div class="small">
              {{ plantData.care.dedication.value }}
            </div>
          </dd>
        </dl>
        <dl>
          <dt>Tamaño</dt>
          <dd>{{ plantData.size }}</dd>
        </dl>
        <dl>
          <dt>Ubicación</dt>
          <dd
            v-for="(ubicacion, index) in plantData.care.location"
            :key="index"
          >
            {{ ubicacion }}
            <template v-if="index !== plantData.care.location.length - 1"
              >,</template
            >
          </dd>
        </dl>
        <dl>
          <dt>Tipo</dt>
          <dd v-for="(tipo, index) in plantData.type" :key="index">
            {{ tipo
            }}<template v-if="index !== plantData.type.length - 1">,</template>
          </dd>
        </dl>
      </div>
    </div>
    <div class="detailed-info row">
      <div class="care">
        <div class="listacuidados">
          <div class="row left">
            <div class="iconcare">
              <img src="../assets/svg/iluminacion.svg" width="48" height="48" />
            </div>
            <div>
              <h5 class="cuidados">Luz</h5>
              <p>
                {{ plantData.care.light.value }}.
                {{ plantData.care.light.description }}
              </p>
            </div>
          </div>
          <div class="row left">
            <div class="iconcare">
              <img src="../assets/svg/riego.svg" width="48" height="48" />
            </div>
            <div>
              <h5 class="cuidados">Riego</h5>
              <p>
                {{ plantData.care.irrigation.value }}.
                {{ plantData.care.irrigation.description }}
              </p>
            </div>
          </div>
          <div class="row left">
            <div class="iconcare">
              <img src="../assets/svg/temperatura.svg" width="48" height="48" />
            </div>
            <div>
              <h5 class="cuidados">Temperatura óptima</h5>
              <p>
                {{ plantData.care.temperature }}
              </p>
            </div>
          </div>
          <div class="row left">
            <div class="iconcare">
              <img src="../assets/svg/humedad.svg" width="48" height="48" />
            </div>
            <div>
              <h5 class="cuidados">Humedad</h5>
              <p>
                {{ plantData.care.humidity.value }}.
                {{ plantData.care.humidity.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="otroscuidados">
          <h3>Otros cuidados</h3>
          <div class="row left">
            <p>
              <span class="cuidados">Fertilizante:</span>
              <span
                v-for="(tipofert, index) in plantData.care.fertilizer.type"
                :key="index"
              >
                {{ tipofert
                }}<template
                  v-if="index !== plantData.care.fertilizer.length - 1"
                  >,
                </template>
              </span>
              {{ plantData.care.fertilizer.time }}.
            </p>
          </div>
          <div class="row left">
            <p>
              <span class="cuidados">Sustrato:</span>
              <span
                v-for="(sustrato, index) in plantData.care.soil"
                :key="index"
              >
                {{ sustrato
                }}<template v-if="index !== plantData.care.soil.length - 1"
                  >,
                </template> </span
              >.
            </p>
          </div>
          <div class="row left">
            <p>
              <span class="cuidados">Transplante:</span>
              <span> {{ plantData.care.transplant }}. </span>
            </p>
          </div>
          <div class="row left">
            <p>
              <span class="cuidados">Poda:</span>
              <span>
                {{ plantData.care.pruning }}
              </span>
            </p>
          </div>
        </div>
        <div class="problemas">
          <h3>Enfermedades y plagas</h3>
          <div class="row left">
            <p>{{ plantData.problems.diseases }}</p>
          </div>
        </div>
        <div class="problemas">
          <h3>Errores más comunes</h3>
          <div class="row left">
            <ul>
              <li
                v-for="(mistake, index) in plantData.problems.commonMistakes"
                :key="index"
              >
                {{ mistake }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="toxicidad">
        <div class="bg">
          <h3>Toxicidad</h3>
          <div class="row column" v-if="plantData.toxicity !== null">
            <div class="row left" v-if="plantData.toxicity.dog !== null">
              <img
                class="toxicity"
                src="../assets/svg/animals_dog.svg"
                v-bind:class="{
                  nontoxic: plantData.toxicity.dog.value == 'No',
                }"
                v-bind:title="
                  plantData.toxicity.dog.value + ' tóxica para perretes'
                "
                v-bind:alt="plantData.toxicity.dog.value"
                :key="plantData.key"
              />
              <p>{{ plantData.toxicity.dog.symptoms }}</p>
            </div>
            <div class="row left" v-if="plantData.toxicity.cat !== null">
              <img
                v-if="plantData.toxicity.cat !== null"
                class="toxicity"
                src="../assets/svg/animals_cat.svg"
                v-bind:class="{
                  nontoxic: plantData.toxicity.cat.value == 'No',
                }"
                v-bind:title="
                  plantData.toxicity.cat.value + ' tóxica para gatetes'
                "
                v-bind:alt="plantData.toxicity.cat.value"
                :key="plantData.key"
              />
              <p>{{ plantData.toxicity.cat.symptoms }}</p>
            </div>
            <div class="row left" v-if="plantData.toxicity.horse !== null">
              <img
                class="toxicity"
                src="../assets/svg/horse-2.svg"
                v-bind:class="{
                  nontoxic: plantData.toxicity.horse.value == 'No',
                }"
                v-bind:title="
                  plantData.toxicity.horse.value + ' tóxica para caballos'
                "
                v-bind:alt="plantData.toxicity.horse.value"
                :key="plantData.key"
              />
              <p>{{ plantData.toxicity.horse.symptoms }}</p>
            </div>
            <div class="row left" v-if="plantData.toxicity.rabbit !== null">
              <img
                class="toxicity"
                src="../assets/svg/animals_rabbit_1.svg"
                v-bind:class="{
                  nontoxic: plantData.toxicity.rabbit.value == 'No',
                }"
                v-bind:title="
                  plantData.toxicity.rabbit.value + ' tóxica para conejos'
                "
                v-bind:alt="plantData.toxicity.rabbit.value"
                :key="plantData.key"
              />
              <p>{{ plantData.toxicity.rabbit.symptoms }}</p>
            </div>
            <div class="row left" v-if="plantData.toxicity.baby !== null">
              <img
                class="toxicity"
                src="../assets/svg/face_baby-2.svg"
                v-bind:class="{
                  plantData: plantData.toxicity.baby.value == 'Yes',
                }"
                v-bind:title="
                  plantData.toxicity.baby.value + ' tóxica para bebés'
                "
                v-bind:alt="plantData.toxicity.baby.value"
                :key="plantData.key"
              />
              <p>{{ plantData.toxicity.baby.symptoms }}</p>
            </div>
            <div class="disclaimer">
              <h4>Disclaimer</h4>

              <p>
                Varios factores (cantidad de sustancia ingerida, tamaño del
                animal, alergias, etc.) determinan qué es tóxico para una
                mascota en particular. Si cree que su mascota ha ingerido algo
                potencialmente tóxico busque asesoramiento veterinario de
                inmediato.
              </p>
            </div>
          </div>
          <div class="row" v-else>
            <p class="notoxica">
              <em>Esta planta no es tóxica para tu mascota ✨</em>
            </p>
          </div>
        </div>
        <randomBenefit />
      </div>
    </div>
  </div>
</template>

<script>
//import datos from "../assets/json/data.json";
import randomBenefit from "../components/randomBenefit.vue";

export default {
  name: "Plants",
  props: {
    plant: String,
    // name: String,
  },
  components: {
    randomBenefit,
  },
  beforeMount() {
    // console.log("Detail", this.plant);
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
.container {
  padding-top: 2rem;
}
.plant__data {
  p {
    margin-bottom: 1rem;
  }
}
h1 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  font-family: Roboto, sans serif;
  text-transform: unset;
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
h5 {
  color: #476643;
  font-size: 1rem;
  margin-bottom: 0.2rem;
}
span.cuidados {
  color: #476643;
  margin-right: 0.25rem;
}
.iconcare {
  width: 48px;
  height: 48px;
}
.row {
  gap: 1rem;
  margin-bottom: 2rem;
}
.care {
  flex-basis: 66%;
  .row {
    margin-bottom: 1.5rem;
    flex-wrap: nowrap;
  }
}
.toxicidad {
  flex-basis: 25%;

  .bg {
    padding: 2rem;
    background-color: #eef4ed;
    margin-bottom: 2rem;
  }
  .row {
    margin-bottom: 0;
    .left {
      flex-wrap: nowrap;
      align-items: flex-start;
      .nontoxic {
        display: none;
      }
    }
  }
}
.listacuidados {
  margin-bottom: 3rem;
  padding-top: 1rem;
}
.otroscuidados {
  margin-bottom: 2rem;
  .row {
    margin-bottom: 0;
  }
}
.barrita {
  margin-right: 2%;
}
.disclaimer {
  margin-top: 2rem;
  h4 {
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
  }
  p {
    color: #555555;
    font-size: 0.875rem;
    margin-top: 1px;
    line-height: 1.2;
  }
}
caption {
  font-size: 0.875rem;
  color: #888;
  width: 100%;
  text-align: left;
  display: block;
  a {
    color: #888;
    &:hover {
      color: #80c56e;
    }
  }
}
</style>
