<template>
  <div id="button-hamburger" @click="openNavigation">
      <span></span>
      <span></span>
    </div>
  <nav id="navigation" :class="{'shrik': showNav}">
    <div id="navi-close"><a href="#" @click="showNav = false"><img src="/src/assets/ico-close.svg" alt=""></a></div>
    <div class="nav-row">
      <div class="nav-col">
      <h2 class="nav-top-title">MENU</h2>
      <div class="nav-content">
        <ol>
          <li><router-link @click="showNav = false" to="/">ABOUT</router-link></li>
          <li><router-link @click="showNav = false" to="/web-and-ui">WEB & UI</router-link></li>
          <li><router-link @click="showNav = false" to="/graphic">GRAPHIC</router-link></li>
          <li><router-link @click="showNav = false" to="/logo">LOGO</router-link></li>
        </ol>
      </div>
      <div class="nav-contact-links">
        <ol>
          <li><a href="#" target="_blank">Youtube</a></li>
          <li><a href="#" target="_blank">Instagram</a></li>
        </ol>
      </div>
    </div>
    <div class="nav-col">
      <div class="nav-obj nav-obj-1"></div>
      <div class="nav-obj nav-obj-2"></div>
      <div class="nav-obj nav-obj-3"></div>
      <div class="nav-obj nav-obj-4"></div>
      <div class="nav-obj nav-obj-5"></div>
    </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
        showNav: false,
      }
    },
    methods: {
      openNavigation(){
        this.showNav = !this.showNav;
      },
    },
    
  }
</script>

<style lang="sass" scoped>
  #navigation
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 2000
    background-color: $black
    padding: 13px
    box-sizing: border-box
    opacity: 0
    display: none

    &.shrik
      opacity: 1
      display: block


  .nav-row
    display: flex
    width: 100%
    height: 100%
    flex-flow: wrap row
    align-items: stretch
    justify-content: center


  .nav-col
    position: relative
    flex: 50%
    display: flex
    align-items: center
    justify-content: center

    &:nth-child(2)
      background-color: #E8E8E8
    


  .nav-top-title
    color: $org
    position: absolute
    top: 13px
    left: 13px
    right: 13px
    font-size: 14px
    font-weight: normal
    font-family: 'Poppins', sans-serif
    letter-spacing: 5px
    text-align: center



  .nav-content
    a
      color: #262626
      font-size: 60px
      font-family: 'Poppins', sans-serif
      text-decoration: none
      transition: all .5s ease

      &:hover
        color: #fff
</style>



