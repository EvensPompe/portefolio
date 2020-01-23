<template lang="html">
  <div class="haut">
    <h1 id="name" @click="changeColor">Evens Pompe</h1>
    <p>Développeur Web Full Stack JS</p>
  </div>
</template>

<script>
export default {
  name:'haut',
  data(){
    return{
      clicked:false
    }
  },
  methods:{
    changeColor(){
    }
  }
}
</script>

<style lang="css" scoped>
.haut{
  font-family: 'Fredoka One';
  background: linear-gradient(#000000 85%,#FFFFFF);
  width: 100%;
  height: 400px;
  display: flex;
  color: white;
  flex-flow: column nowrap;
  justify-content: center;
}

.haut h1{
  font-size: 100px
}

.haut p{
  font-size: 50px;
}
</style>
