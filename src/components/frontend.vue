<template lang="html">
  <div class="frontend">
   <h2>Front-End</h2>
   <div class="techs">
     <div class="techFront">
       <img :src="require(`@/assets/front/html.png`)" alt="image logo html">
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name:'frontend'
}
</script>

<style lang="css" scoped>
.frontend{
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

.frontend h2{
  font-size: 60px;
}

.frontend .techs{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.frontend .techs .techFront{
   width: 50%;
   height: 50%;
}

.frontend .techs .techFront img{
  width: 50%;
  height: 50%;
}


</style>
