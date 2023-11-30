<template>
    <nav>
        
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
nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item{
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    text-decoration: none;
}

a{
    color:inherit;
    text-decoration: none;
}

nav .menu-item.active,
nav .menu-item:hover{
    background-color: #444;
    border-bottom-color: #ff5588;
}
</style>