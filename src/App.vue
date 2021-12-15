<template>
  <div id="nav">
    <div class="nav-left">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/plants">Plantas</router-link>
    </div>
    <div class="logo">
      <router-link to="/">
        <img src="../src/assets/logo-plants-dummies.svg"
      /></router-link>
    </div>
    <div class="nav-right">
      <router-link to="/about">Glosario</router-link> |
      <router-link to="/benefits">Beneficios</router-link>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss"></style>
