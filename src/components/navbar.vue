<template lang="html">
  <div class="nav">
    <router-link tag="li" :to="{ name: 'frontend'}">Mes langages Front-End</router-link> |
    <router-link tag="li" :to="{ name: 'backend'}">Mes langages Back-End</router-link>
  </div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style lang="css" scoped>
.nav{
  width: 100%;
  height: 50px;
  border-bottom: 2px solid grey;
  background: lightblue;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  list-style: none;
}

.nav li{
  cursor: pointer;
}

.nav li:hover{
  color: white;
  box-shadow: ;
  transition: 0.7s;
}

</style>
