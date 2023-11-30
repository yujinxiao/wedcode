<template>
  <div id="app"> 
    <header>
      <Navbar />
    </header>
  </div>
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
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family:'montserrat',sans-serif;
  }

  header{
    width: 100vw;
    background-color: rgb(22, 15, 15);
    padding: 1px;
  }
</style>