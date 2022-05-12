<script setup>
import HomePage from './views/HomePage.vue'
import ContactMe from './components/ContactMe.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div id="wrapper">
    <div class="border-t-bar"></div>
    <div class="border-l-bar"></div>
    <div class="border-r-bar"></div>
    <div class="border-b-bar"></div>
    <div class="section-top-line"></div>
    
    <Navigation/>
    <div id="button-scroll-top"><a href="#"><img src="/src/assets/arrow-scrolltop.svg" alt=""></a></div>
    <div class="top-title">
        <h1>ALL ABOUT KAY</h1>
    </div>
    <router-view/>
    <ContactMe/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    methods: {
    },
  }
</script>
