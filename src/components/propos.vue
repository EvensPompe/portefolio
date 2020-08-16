<template lang="html">
  <div class="propos" :class="{invert:change}">
   <p>J'étais bachelier du Baccalauréat Sciences et Technologies de l'industrie et du Développement durable (ou Bac STI2D en plus court) en 2016. <br>
      Pour continuer les études, j'avais envisagé de faire le cursus pour l'obtention du BTS Services informatiques et aux Organisation(SIO).<br>
      Avec comme option Solutions Logicielles et applications Métiers (SLAM). Mais ça n'avais pas marché !<br>
      Pas d'entreprises, donc pas de contrat d'apprentissage ou pro ! Perte de motivation ! Situation difficile pro et personnel !
      Faute de moyen financier pour payer la formation en cursus initial !<br>
      Après cette échec, je me suis mis à chercher un travail "Alimentaire" et une formation pour pouvoir continuer les études, avec la Mission Locale.<br>
      En même temps,j'ai commencé aussi à apprendre à coder en autodidacte en parallèle ! Via Codeacademy et Sololearn !<br>
      Cela m'a motivé à me reprendre en main, me convaincre que si je ne trouve ni l'étude, ni le travail, alors je ferai en sorte qu'ils me trouvent !<br>
      J'ai passé une formation de 7 mois pour le développement web et web mobile, à Cergy, par Simplon.co !</p>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name:'propos',
  computed:mapState([
    "change"
  ])
}
</script>

<style lang="css" scoped>
.propos{
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  color: black;
  background: #FFFFFF;
}

.propos *{
  animation: opacityTransition 0.3s;
}

.propos p{
  width: 90%;
}
</style>
