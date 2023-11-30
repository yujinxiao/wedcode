<template>
        <nav>
            <h1>冥滩空间智库</h1>
            <router-link to="/" class="a menu-item">主页</router-link>
            <router-link to="/Share"  class="a menu-item">分类</router-link> 
            <router-link to="/FriendsLink"  class="a menu-item">伙伴</router-link>
            <router-link to="/Message"  class="a menu-item">留言板</router-link>
            <router-link to="/AboutView"  class="a  menu-item">关于</router-link>
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