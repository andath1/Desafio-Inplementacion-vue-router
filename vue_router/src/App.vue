<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import FooterWorld from './components/FooterWorld.vue'
 export default{
   components:{
     FooterWorld
   }
 }
</script>

<template>
  <nav>
    <router-link to="/">Portada</router-link> |
    <router-link to="/sobremi"> Sobre Mi</router-link>|
    <router-link to="/contacto"> Contactos</router-link>|
    <router-link to="/post/1"> Post</router-link>|
    
  </nav>
  <router-view/>
  <FooterWorld/>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  
}
.nav,a{
  text-decoration: none;
}
</style>
