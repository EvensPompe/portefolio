<template lang="html">
  <div class="projets">
  <div class="projet" v-for="projet in projets" :key="projet._id">
    <h2>{{projet.nom}}</h2>
    <img :src="projet.img" alt="projet.img">
    <p>{{projet.desc}} <a :href="projet.lien" target="_blank">voir le site</a> </p>
  </div>
  </div>
</template>

<script>
export default {
  name:'projet',
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
