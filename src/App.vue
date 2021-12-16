<template>
  <div id="nav">
    <div class="nav-left">
      <router-link to="/">Plantas</router-link> |
      <router-link to="/benefits">Beneficios</router-link>
    </div>
    <div class="logo">
      <router-link to="/">
        <img src="../src/assets/logo-plants-dummies.svg"
      /></router-link>
    </div>
    <div class="nav-right">
      <router-link to="/glossary">Glosario</router-link> |
      <router-link to="/about">Nosotras</router-link>
    </div>
  </div>
  <router-view />
</template>
<style lang="scss"></style>
