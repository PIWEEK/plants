<template>
  <div>
    <button @click="generate">generate</button>
    <p>{{ quote.quote }}</p>
    <p>{{ quote.cite }}</p>
  </div>
</template>

<script>
const quotes = [
  {
    quote:
      "One of my most productive days was throwing away 1,000 lines of code.",
    cite: "Ken Thompson",
  },
  {
    quote:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    cite: "Bjarne Stroustrup",
  },
  {
    quote: "When in doubt, use brute force.",
    cite: "Ken Thompson",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    cite: "Linus Torvalds",
  },
];

export default {
  name: "App",
  data() {
    return { quote: {} };
  },
  methods: {
    generate() {
      const index = Math.floor(Math.random() * quotes.length);
      this.quote = quotes[index];
    },
  },
};
</script>
