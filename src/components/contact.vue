<template lang="html">
<div class="contact">
  <div v-for="contact in contacts" :key="contact.id">
    <a :href="contact.lien" target="_blank"><img :src="require(`@/assets/contact/${contact.img}.png`)" :alt="contact.img"></a>
  </div>
</div>
</template>

<script>
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
  }
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

.contact div img{
  width: 100px;
}
</style>
