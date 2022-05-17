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

  <div id="btn-scroll" @scroll="scrollHandler">
    <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="52.981" height="87.21" viewBox="0 0 52.981 87.21">
        <g id="グループ_3517" data-name="グループ 3517" transform="translate(-1841.019 -939.191)">
          <g id="グループ_3516" data-name="グループ 3516">
            <path id="パス_1967" data-name="パス 1967" d="M-3025.531,957.734v86.21l-12.578-22.38" transform="translate(4880 -18.543)" fill="none" stroke="#ff7423" stroke-linejoin="round" stroke-width="2"/>
            <text id="scroll" transform="translate(1884 1023) rotate(-90)" fill="#ff7423" font-size="29" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">Scroll</tspan></text>
          </g>
        </g>
      </svg>

    </a>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        showNav: false,
        isShowScroll: false,
      }
    },
    methods: {
      openNavigation(){
        this.showNav = !this.showNav;
      },
      scrollHandler(e){
        this.isShowScroll = e.target.scrollTop > 100 ? false : true;
        console.log(e.target.scrollTop)
      }
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



