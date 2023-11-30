<template>
   <div class="center-container">
     <!-- <h1>{{ hitokoto }}</h1> -->
     <!-- <h1>{{ hitokoto }}</h1> -->
     <h2>{{ from }}</h2>
     <h3>{{ from_who }}</h3>
     <div v-if="loading" class="loading">Loading...</div>
     <div v-if="error" class="error">{{ error }}</div>
     <button @click="fetchHitokoto" class="refresh-button">刷新</button>
   </div>
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
   data() {
     return {
       hitokoto: '',
       from: '',
       from_who: '',
       loading: true,
       error: '',
     };
   },
   created() {
     this.fetchHitokoto();
   },
   methods: {
     async fetchHitokoto() {
       this.loading = true;
       try {
         const response = await axios.get('https://v1.hitokoto.cn/?c=b');
         this.hitokoto = response.data.hitokoto;
         this.from = response.data.from;
         this.from_who = response.data.from_who;
       } catch (error) {
         console.error('Error fetching Hitokoto:', error.message);
         this.error = 'Failed to fetch data. Please try again.';
       } finally {
         this.loading = false;
       }
     },
   },
 };
 
 
 </script>
 
 <style scoped>
   @import '../assets/images.css';
 </style>