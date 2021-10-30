<template>
    <div id="app">
        <nav-bar class="nav-bar"></nav-bar>
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

<style scoped>

#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    line-height:1.1;
    /* background-color: #1179e0; */
    margin: 0; 
    padding: 0; 
}

</style>
