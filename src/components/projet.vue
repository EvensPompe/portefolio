<template lang="html">
  <div class="projets" :class="{invert:change}">
  <div class="projet" v-for="projet in projets" :key="projet._id">
    <h2>{{projet.nom}}</h2>
    <img :src="projet.img" alt="projet.img" :class="{invert:change}">
    <p>{{projet.desc}} <a :href="projet.lien" target="_blank">voir le site</a> </p>
  </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name:'projet',
  computed:mapState([
    "change"
  ]),
  data(){
    return {
      projets:""
    }
  },
  created:function () {
    this.getProjets();
  },
  methods:{
    getProjets(){
      this.axios.get("http://localhost:4567/projets")
      .then(res=>{
        this.projets = res.data;
      }).catch(err=>{
        alert(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.projets{
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  color: black;
  background: #FFFFFF;
}

.projets *{
  animation: opacityTransition 0.3s;
}

.projet{
  width: 50%;
  height: 50%;
  display: flex;
  flex-flow: column;
  margin-top: 20px;
}

.projet img{
  width: 100%
}
</style>
