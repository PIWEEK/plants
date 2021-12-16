<template>
  <div class="benefits">
    <div class="row">
      <h2>¿Sabias que...</h2>
      <button class="reload" @click="generate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="repeat"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
      </button>
    </div>
    <p>{{ quote.quote }}</p>
    <!-- router link with parameters https://forum.vuejs.org/t/passing-props-through-router-link-solved/16868 -->
    <router-link class="vermas" :to="'/benefits/#' + quote.id"
      ><span>Saber más</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="chevron-right"
      >
        <polyline points="9 18 15 12 9 6"></polyline></svg
    ></router-link>
  </div>
</template>

<script>
import quotes from "../assets/json/benefits.json";
/* const quotes = [
  {
    quote:
      "One of my most productive days was throwing away 1,000 lines of code.",
  },
  {
    quote:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
  },
  {
    quote: "When in doubt, use brute force.",
  },
  {
    quote: "Talk is cheap. Show me the code.",
  },
]; */
/* https://morioh.com/p/039cdbec58ab */
export default {
  name: "randomBenefit",
  data() {
    return { quote: {} };
  },
  beforeMount() {
    this.generate();
  },
  methods: {
    generate() {
      const index = Math.floor(Math.random() * quotes.length);
      this.quote = quotes[index];
    },
  },
};
</script>
<style scoped>
.benefits {
  padding: 2rem;
  background: #ffffff;
}
.reload {
  border-radius: 100%;
  padding: 5px 6px;
  height: 32px;
}
h2 {
  margin-bottom: 0;
  text-transform: uppercase;
}
button {
  margin-bottom: 0;
}
</style>
