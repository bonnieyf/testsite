<script setup>
import HomePage from "./views/HomePage.vue";
import ContactMe from "./components/ContactMe.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div id="wrapper">
    <div class="border-t-bar"></div>
    <div class="border-l-bar"></div>
    <div class="border-r-bar"></div>
    <div class="border-b-bar"></div>
    <div class="section-top-line"></div>

    <Navigation />
    <div id="button-scrolltop" ref="scroll2Top">
      <a href="#" @click.prevent="sroll2Top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81.746"
          height="38.662"
          viewBox="0 0 81.746 38.662"
        >
          <path
            id="パス_94"
            data-name="パス 94"
            d="M4279.912-327.274l39.251-33.474,39.251,33.474"
            transform="translate(-4278.29 364.034)"
            fill="none"
            stroke="#ff6920"
            stroke-width="5"
          />
        </svg>
      </a>
    </div>
    <div id="button-scrolldown" ref="firstScroll">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52.981"
        height="87.21"
        viewBox="0 0 52.981 87.21"
      >
        <g
          id="グループ_3517"
          data-name="グループ 3517"
          transform="translate(-1841.019 -939.191)"
        >
          <g id="btnScrollDown_arrow">
            <path
              id="btnScrollDown"
              data-name="btnScrollDown"
              d="M-3025.531,957.734v86.21l-12.578-22.38"
              transform="translate(4880 -18.543)"
              fill="none"
              stroke="#ff7423"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
          <g id="btnScrollDown_text" data-name="グループ 3516">
            <text
              id="scroll"
              transform="translate(1884 1023) rotate(-90)"
              fill="#ff7423"
              font-size="29"
              font-family="Poppins-Regular, Poppins"
            >
              <tspan x="0" y="0">Scroll</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>

    <div class="top-title">
      <h1>ALL ABOUT KAY</h1>
    </div>

    <router-view />
    <ContactMe />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scrollDownHandler() {
      let scrollDownHandlerRefs = this.$refs.scroll2Top;

      window.addEventListener("scroll", () => {
        let curr = window.pageYOffset;
        let windowHeight = Math.floor(window.innerHeight / 2);
        if (curr >= windowHeight) {
          scrollDownHandlerRefs.classList.add("show");
        }

        if (curr <= windowHeight) {
          scrollDownHandlerRefs.classList.remove("show");
        }
      });
    },
    scrollTopHandler() {
      let prev = window.pageXOffset;
      let refs = this.$refs.firstScroll;

      window.addEventListener("scroll", () => {
        let curr = window.pageYOffset;
        if (prev >= 50) {
          refs.classList.remove("show");
        }

        if (curr <= 50) {
          refs.classList.add("show");
        }

        prev = curr;
      });
    },
    sroll2Top() {
      window.scroll(0, 0);
    },
  },
  mounted() {
    this.scrollDownHandler();
    let scrollDownHandlerRefs = this.$refs.scroll2Top;
    let windowHeight = window.innerHeight;
    if (window.pageXOffset >= windowHeight) {
      scrollDownHandlerRefs.classList.add("show");
    }

    this.scrollTopHandler();
    let refs = this.$refs.firstScroll;
    if (window.pageXOffset === 0) {
      refs.classList.add("show");
    }
  },
};
</script>
