<template>
  <div class="about">
    <div class="container">
      <h1>Sobre nosotras</h1>
      <p class="intro">
        <strong>Plantas para dummies</strong> es un proyecto realizado durante
        la - mundialmente famosa - 'PIWEEK' de invierno de 2021 en Kaleidos.
      </p>
      <p class="intro">
        Los protagonistas de <em>esta película que nos hemos montado</em> son:
      </p>

      <div class="group">
        <a
          href="https://kaleidos.net/kaleiders/FF8A80"
          target="_blank"
          class="person"
        >
          <div><img src="../assets/img/marina.png" /></div>
          <p class="name">Marina López</p>
          <p class="position">
            En su papel de Ideadora, UI designer y experta en plantas de peluche
          </p></a
        ><a
          href="https://kaleidos.net/kaleiders/0F0F0F"
          target="_blank"
          class="person"
        >
          <div><img src="../assets/img/tere.png" /></div>
          <p class="name">Tere de la Torre</p>
          <p class="position">
            Como researcher y cuidadora de plantas en sus ratos libres
          </p></a
        ><a
          href="https://kaleidos.net/kaleiders/32BDA0"
          target="_blank"
          class="person"
        >
          <div><img src="../assets/img/miryam.png" /></div>
          <p class="name">Miryam Gonzalez Duque</p>
          <p class="position">
            Como Researcher, Designer y matadora de plantas profesional
          </p></a
        >
        <a
          href="https://kaleidos.net/kaleiders/71A6D2"
          target="_blank"
          class="person"
        >
          <div><img src="../assets/img/dani.png" /></div>
          <p class="name">Dani Herrero</p>
          <p class="position">
            En el papel de Researcher y Copy Creativo fuera de su zona de
            confort
          </p>
        </a>

        <a
          href="https://kaleidos.net/kaleiders/492858/"
          target="_blank"
          class="person"
        >
          <div><img src="../assets/img/natacha.png" /></div>
          <p class="name">Natacha Menjibar</p>
          <p class="position">
            En su papel de Frontend Engin<em>ppffff jajaja</em>
          </p></a
        >
        <a
          href="https://kaleidos.net/kaleiders/720B34/"
          target="_blank"
          class="person"
        >
          <div><img src="../assets/img/esther.png" /></div>
          <p class="name"><em style="color: #999">Guest Starring</em></p>
          <p class="position">
            <strong>Esther Moreno</strong> con sus maravillosas ilustraciones de
            CocoMaterial 💕
          </p></a
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding-top: 2rem;
  max-width: 1024px;
  margin: 0 auto;
}
p {
  font-size: 1rem;
  font-weight: 500;
}
h1 {
  margin-bottom: 2rem;
}
.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
a {
  text-decoration: none;
}
.group {
  display: flex;
  flex-wrap: wrap;

  .person {
    flex-basis: 33%;
    padding: 0 1rem 1rem 1rem;
    div {
      display: flex;
      height: 200px;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
    img {
      max-height: 180px;
    }
    &:hover {
      background: #fff;
    }
  }
}
.person .name {
  color: #80c56e;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-family: "Roboto Condensed";
  font-weight: 600;
}
.person .position {
  color: #2c3e50;
  text-align: center;
}
</style>
