<template>
  <div id="app" class="d-flex flex-column">
    <nav-bar></nav-bar>
    <router-view/>
    <site-footer class=""></site-footer>
  </div>
</template>

<script>
import SiteFooter from '../src/components/SiteFooter';
import NavBar from '../src/components/NavBar';


export default {
  name: 'App', 
  components: {NavBar, SiteFooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0; 
  padding: 0; 
}
</style>
