<template lang="html">
  <div class="frontend" :class="{invert:change}">
   <h2>Front-End</h2>
   <div class="techs">
     <div class="techFront" v-for="img in images" :key="img.id">
       <img :src="require(`@/assets/front/${img.tech}.png`)" :class="{invert:change}" :alt="img.alt">
       <p>{{img.text}}</p>
     </div>
   </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:'frontend',
  data(){
    return{
      images:[
        {
          tech:"html",
          alt: "image logo html",
          text: "L’HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web. C’est un langage permettant d’écrire de l’hypertexte, d’où son nom."
        },
        {
          tech:"css",
          alt: "image logo css",
          text:"Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium."
        },
        {
          tech:"js",
          alt: "image logo js",
          text:"JavaScript est un langage de programmation de scripts principalement employé dans les pages webinteractives mais aussi pour les serveurs avec l'utilisation de Node.js."
        },
        {
          tech:"typescript",
          alt: "image logo typescript",
          text:"TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Il s'agit d'un sur-ensemble syntaxique strict de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, et peut ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript. TypeScript a été cocréé par Anders Hejlsberg, principal inventeur de C#."
        },
        {
          tech:"vue",
          alt: "image logo vue",
          text:"Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur. La bibliothèque est notamment utilisée par Adobe, Alibaba et Gitlab. Vue a été créé par Evan You après avoir travaillé pour Google en utilisant AngularJS dans plusieurs projets."
        },
        {
          tech:"angular",
          alt: "image logo angular",
          text:"Angular est un framework côté client, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète de AngularJS, framework construit par la même équipe."
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
.frontend{
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  color: black;
  background: #FFFFFF;
}

.frontend *{
  animation: opacityTransition 0.3s;
}

.frontend h2{
  font-size: 60px;
}

.frontend .techs{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}

.frontend .techs .techFront{
   width: 50%;
   height: 50%;
   margin-top: 50px;
}

.frontend .techs .techFront img{
  width: 50%;
  height: 50%;
}
</style>
