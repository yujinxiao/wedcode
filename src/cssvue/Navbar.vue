<template>
        <nav>
            <h1 class="h1">冥滩空间智库</h1>
            <input class="search" type="text" placeholder="Search">
            <div class="text">
            <router-link to="/" class="menu-item">主页</router-link>
            <router-link to="/Share"  class="menu-item">我淦你大爷的剑来</router-link> 
            <router-link to="/FriendsLink"  class="menu-item">伙伴</router-link>
            <router-link to="/Message"  class="menu-item">留言板</router-link>
            <router-link to="/AboutView"  class="menu-item">关于</router-link>
            </div>
            
        </nav>
            
            
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
  </script>

<script>
    export default{
        name:'navbar',
        components:{
           },
    }
</script>

<style>
@import url(../assets/header.css);
</style>