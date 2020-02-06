<template lang="html">
  <div class="backend" :class="{invert:change}">
   <h2>Back-End</h2>
   <div class="techs">
     <div class="techBack" v-for="img in images" :key="img.id">
       <img :src="require(`@/assets/front/${img.tech}.png`)" :alt="img.alt">
       <p>{{img.text}}</p>
     </div>
   </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:'backend',
  data(){
    return{
      images:[
        {
          tech:"node",
          alt: "image logo node",
          text: "Node.js est une plateforme logicielle libre en JavaScript orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS."
        },
        {
          tech:"mysql",
          alt: "image logo mysql",
          text: "MySQL est un système de gestion de bases de données relationnelles. Il est distribué sous une double licence GPL et propriétaire."
        },
      ]
    }
  },
  computed:mapState([
    'change'
  ])
}
</script>

<style lang="css" scoped>
.backend{
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  color: black;
  background: #FFFFFF;
}

.backend h2{
  font-size: 60px;
}

.backend .techs{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.backend .techs .techBack{
   width: 50%;
   height: 50%;
   margin-top: 50px;
}

.backend .techs .techBack img{
  width: 50%;
  height: 50%;
}

.invert{
  filter: invert(1);
  transition: 0.6s;
}
</style>
