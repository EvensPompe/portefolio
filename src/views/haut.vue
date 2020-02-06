<template lang="html">
  <div class="haut" :class="{invert:change}">
    <button @click="click">{{mode}}</button>
    <div>
    <h1 id="name">Evens Pompe</h1>
    <p>Développeur Web Full Stack JS</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name:'haut',
  data(){
   return{

   }
  },
  computed:mapState([
    'change',
    'mode'
  ]),
  methods:{
   ...mapActions([
     'click'
   ]),
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
  flex-flow: column;
  color: white;
}

.haut button{
  width: 100px;
  height: 30px;
}

.haut div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.haut h1{
  font-size: 100px
}

.haut p{
  font-size: 50px;
}

.invert{
  filter: invert(1);
  transition: 0.6s;
}
</style>
