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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 12px;
  max-width: 80rem;

  margin: 0 auto;
  background: var(--gray-100);
}

*::-webkit-scrollbar {
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
