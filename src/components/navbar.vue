<template lang="html">
  <div class="nav" :class="{invert:change}">
    <router-link tag="li" :to="{ name: 'propos'}">À propos de moi</router-link>
    <router-link tag="li" :to="{ name: 'frontend'}">Mes langages Front-End</router-link>
    <router-link tag="li" :to="{ name: 'backend'}">Mes langages Back-End</router-link>
    <router-link tag="li" :to="{ name: 'projet'}">Mes projets</router-link>
    <router-link tag="li" :to="{ name: 'contact'}">Contact</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:'navbar',
  computed:mapState([
    "change"
  ])
}
</script>

<style lang="css" scoped>
.nav{
  width: 100%;
  height: 50px;
  border-bottom: 2px solid white;
  background: white;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;
  list-style: none;
}

.nav li{
  cursor: pointer;
  width: 20%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav li:hover{
  color: white;
  text-shadow: 0 0 3px black;
  transition: 0.7s;
  background: grey;
}

.nav li:active{
  color: #68A063;
}

.invert{
  filter: invert(1);
  transition: 0.6s;
}

</style>
