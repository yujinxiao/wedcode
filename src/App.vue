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
    /* width: ;  */
    /* backdrop-filter: blur(4px); */
    background-color: black;
    padding:1vw;
    /* margin: 20px; */
  }

  html::-webkit-scrollbar{
    /* overflow-x: hidden; */
    /* overflow-y: hidden; */
    width: 19%;
  }

  /* ::-webkit-search-results-decoration */

  .building{
    background: url('../src/images/background.jpg');
  }
</style>