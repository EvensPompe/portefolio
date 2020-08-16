<template lang="html">
<div class="contact" :class="{invert:change}">
  <div v-for="contact in contacts" :key="contact.id">
    <a :href="contact.lien" target="_blank"><img :src="require(`@/assets/contact/${contact.img}.png`)" :class="{invert:change}" :alt="contact.img"></a>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name:'contact',
  data(){
    return {
      contacts:[
        {
        img:"github",
        lien:"https://github.com/EvensPompe"
        },
        {
        img:"linkedIn",
        lien:"https://www.linkedin.com/in/evens-pompe-276555120/"
        },
        {
          img:"malt",
          lien:"https://www.malt.fr/profile/evenspompe?overview=true"
        }
      ]
    }
  },
  computed:mapState([
    "change"
  ])
}
</script>

<style lang="css" scoped>
.contact{
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  color: black;
  background: #FFFFFF;
}

.contact div{
width: 30%;
height: 100%;
}

.contact *{
  animation: opacityTransition 0.3s;
}

.contact div img{
  width: 100px;
}
</style>
