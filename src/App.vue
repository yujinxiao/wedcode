<template>
  <div id="app"> 
    <header>
      <Navbar />
    </header>
  </div>
  <div class="building"></div>
  <RouterView/>
</template>

<script>
import Navbar from './cssvue/Navbar.vue'

  export default{
    name:'App',
    components:{
      Navbar
    }
  }
</script>



<style>
  *{
    margin: 0;
    padding: 0px;
    box-sizing:content-box;
  }

  body{
    font-family:'montserrat',sans-serif;
  }

  header{
    background-color: black;
    background-image: url(./images/1772.jpg_wh1200.jpg);
    padding:2.3vw;
  }
</style>