<template>
  <div id="app">
    <haut/>
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/navbar'
import haut from './views/haut'
  export default{
    name:'app',
    components:{
      Nav,
      haut
    }
  }
</script>
<style>
@font-face {
  font-family: 'Fredoka One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Fredoka One'), local('FredokaOne-Regular'), url(https://fonts.gstatic.com/s/fredokaone/v7/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

*{
  margin: 0;
  padding: 0;
  font-family: 'Fredoka One';
}

@keyframes opacityTransition {
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.invert{
  filter: invert(1);
  transition: 0.6s;
}
</style>
