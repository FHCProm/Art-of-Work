<template>
  <header class="navbar-wrapper" :style="styles">
    <line-container
      :tablet-border-bottom="true"
      :mobile-border-bottom="true"
      class="navbar"
    >
      <router-link to="/">
        <span class="title pl-4">Art of Breaking</span>
      </router-link>
      <div v-if="!userIsLogin" class="navbar-buttons">
        <router-link to="/login" class="navbar_button">
          <span>Login</span>
        </router-link>
        <span class="navbar_button">Register</span>
      </div>

      <div v-if="userIsLogin" class="navbar-buttons">
        <div class="navbar_button">Goals</div>

        <div class="navbar_button">Tasks</div>
        <div class="navbar_button">My Account</div>
      </div>

      <div class="mobile-menu-toggle" @click="menuClicked">
        <div class="menu-toggle-container">
          <div color="text" class="menu-toggle" :class="classes"></div>
        </div>
      </div>
    </line-container>

    <!--here is for mobile menu-->
    <div v-if="menuVisible" class="mobile-menu">
      <div v-if="userIsLogin">
        <a class="nav-dropdown-link">
          <div class="dropdown-link-layout">
            <p class="dropdown-link-text">Goals</p>
          </div>
        </a>
        <a class="nav-dropdown-link">
          <div class="dropdown-link-layout">
            <p class="dropdown-link-text">Tasks</p>
          </div>
        </a>
        <a class="nav-dropdown-link">
          <div class="dropdown-link-layout">
            <p class="dropdown-link-text">My Account</p>
          </div>
        </a>
      </div>

      <div v-else class="mobile-menu-buttons-wrapper">
        <button class="get-started-container">
          <div class="get-started-word">Get Started</div>
        </button>
        <button class="log-in-container">
          <div class="log-in-word">Log in</div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import LineContainer from "@/components/LineContainer.vue";
import { ref, computed } from "vue";

let userIsLogin = ref(false);
let menuVisible = ref(false);
let menuPositionCSS = ref("unset");
const classes = computed(() => ({
  "menu-toggle-rotate": menuVisible.value,
}));

function menuClicked() {
  menuVisible.value = !menuVisible.value;
  if (menuPositionCSS.value == "unset") {
    menuPositionCSS.value = "fixed";
  } else {
    menuPositionCSS.value = "unset";
  }
}

const styles = computed(() => ({
  position: menuPositionCSS.value,
}));
</script>

<style scoped lang="scss">
.navbar-wrapper {
  top: 0px;
  width: 100%;
  position: block;
  background: rgb(255, 255, 255);
  z-index: 2;
  box-shadow: rgb(255 255 255) 0px -1px 0px 1px;
}
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  width: 100%;
  height: 60px;
}

.navbar-buttons {
  display: none;
}

.title {
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
}

.mobile-menu-toggle {
  justify-self: end;
  padding: 1rem 2rem;
}

.menu-toggle-container {
  position: relative;
  width: 18px;
  height: 17px;
  cursor: pointer;
}

.menu-toggle {
  position: absolute;
  top: 8px;
  width: 100%;
  height: 2px;
  background-color: var(--gray-700);
  border-radius: 4px;
  transform: initial;
  transition: transform 300ms ease 0s,
    background-color 0s cubic-bezier(0.6, 0, 0.15, 1) 0s;
  transition-duration: 300ms, 0s;
  transition-timing-function: ease, cubic-bezier(0.6, 0, 0.15, 1);
  transition-delay: 0s, 0s;
  transition-property: transform, background-color;
}

.menu-toggle::before {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--gray-700);
  border-radius: 4px;
  content: "";
  transform: translateY(-8px);
  transition: transform 300ms ease 0s,
    background-color 0s cubic-bezier(0.6, 0, 0.15, 1) 0s;
}

.menu-toggle::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--gray-700);
  border-radius: 4px;
  content: "";
  transform: translateY(8px) rotate(0deg);
  transition: transform 300ms ease 0s,
    background-color 0s cubic-bezier(0.6, 0, 0.15, 1) 0s;
}

.menu-toggle-rotate {
  background-color: transparent;
  transform: rotate(45deg);
  &::before {
    transform: translateY(0px);
  }
  &::after {
    transform: translateY(0px) rotate(-90deg);
  }
}

.mobile-menu {
  animation: 300ms cubic-bezier(0.6, 0, 0.15, 1) 0s 1 normal forwards running
    flowdown;
  padding-top: 5px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: calc(100vh - 58px);
  overflow-y: scroll;
  background: rgb(255, 255, 255);
  z-index: -2;
}

.nav-dropdown-link {
  text-decoration: none;
  cursor: pointer;
}

.dropdown-link-layout {
  padding: 20px 24px;
  display: flex;
  align-items: center;
}

.dropdown-link-text {
  @include font-headline;
  flex: 1 1 0%;
}

@keyframes flowdown {
  0% {
    translate: 0 -100vh;
  }
  100% {
    translate: 0 0px;
  }
}

.mobile-menu-buttons-wrapper {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

.get-started-container {
  @include font-headline;
  padding: 10px;
  width: 100%;
  position: relative;
  margin: 0px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  border: 1px solid var(--yellow-500);
  background-color: var(--yellow-500);
}

.get-started-word {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}

.log-in-container {
  @include font-headline;
  margin-top: 10px;
  background: rgb(255, 255, 255);
  color: var(--yellow-500);
  padding: 10px;
  width: 100%;
  border: 1px solid var(--yellow-500);
  position: relative;
}

.log-in-word {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}

@media screen and (min-width: $breakpoint-small) {
  .navbar-wrapper {
    position: static;
  }
  .navbar-buttons {
    @include font-headline;
    justify-self: end;
    display: flex;
    align-items: center;
    color: var(--gray-500);
  }

  .navbar_button {
    width: 100px;
    &:hover {
      color: var(--yellow-900);
    }
  }

  .mobile-menu-toggle {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
