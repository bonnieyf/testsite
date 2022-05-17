<template>
  <div id="button-hamburger" @click="openNavigation">
    <span></span>
    <span></span>
  </div>
  <nav id="navigation" :class="{ shrik: showNav }">
    <div id="navi-close">
      <a href="#" @click="showNav = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <g
            id="グループ_252"
            data-name="グループ 252"
            transform="translate(-1842 -86)"
          >
            <g
              id="長方形_36"
              data-name="長方形 36"
              transform="translate(1842 86)"
              fill="none"
            >
              <rect width="50" height="50" stroke="none" />
              <rect x="0.5" y="0.5" width="49" height="49" fill="none" />
            </g>
            <g
              id="Close_White"
              data-name="Close White"
              transform="translate(1856 100)"
            >
              <path
                id="Close"
                d="M11,12.419,1.419,22,0,20.58,9.581,11,0,1.419,1.419,0,11,9.581,20.58,0,22,1.419,12.419,11,22,20.58,20.58,22Z"
              />
            </g>
          </g>
        </svg>
      </a>
    </div>
    <div class="nav-row">
      <div class="nav-col">
        <h2 class="nav-top-title">MENU</h2>
        <div class="nav-content">
          <ol>
            <li>
              <router-link @click="showNav = false" to="/">ABOUT</router-link>
            </li>
            <li>
              <router-link @click="showNav = false" to="/web-and-ui"
                >WEB & UI</router-link
              >
            </li>
            <li>
              <router-link @click="showNav = false" to="/graphic"
                >GRAPHIC</router-link
              >
            </li>
            <li>
              <router-link @click="showNav = false" to="/logo"
                >LOGO</router-link
              >
            </li>
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
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    openNavigation() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>



