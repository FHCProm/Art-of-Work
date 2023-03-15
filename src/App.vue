<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  created() {
    if (this.$store.state.db == undefined) {
      this.$store.dispatch("setupFirebase", { firebaseInstance: this.db });
    }
  },
  methods: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Dancing+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Italiana&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Lato", sans-serif;
}

html {
  font-size: 12px;

  color: var(--gray-700);
}

*::-webkit-scrollbar {
  display: none;
}
::-ms-reveal {
  display: none;
}

@font-face {
  font-family: OCR_A_Extended;
  src: url("../src/assets/Fonts/OCRAEXT.TTF");
}

@media screen and (min-width: $breakpoint-small) {
  html {
    font-size: 16px;
  }
}
</style>
