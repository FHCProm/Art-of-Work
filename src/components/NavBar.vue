<template>
  <header class="navbar-wrapper" :style="styles">
    <line-container
      :tablet-border-bottom="true"
      :mobile-border-bottom="true"
      class="navbar"
    >
      <router-link to="/">
        <span class="title pl-4">Art of Work</span>
      </router-link>

      <div class="navbar-buttons">
        <div class="navbar_button">
          <div class="navbar_button_text">About us</div>
        </div>
        <div class="navbar_button">
          <div class="navbar_button_text">Mission</div>
        </div>
      </div>

      <div v-if="!userIsLogin" class="account_buttons">
        <span class="account_button"
          ><div class="account_buttons_text">Login</div></span
        >

        <span class="account_button"
          ><div class="account_buttons_text">Register</div></span
        >
      </div>

      <div v-else class="account_buttons">
        <div
          class="svg_container"
          @click="accountToolTipVisibility = !accountToolTipVisibility"
        >
          <img class="account_svg" src="@/assets/officialPage/avatar.svg" />
          <div class="account_name">Chin Guo Ren</div>
          <AccountTooltip
            :visibility="accountToolTipVisibility"
          ></AccountTooltip>
        </div>
      </div>

      <div class="mobile-menu-toggle" @click="menuClicked">
        <div class="menu-toggle-container">
          <div color="text" class="menu-toggle" :class="classes"></div>
        </div>
      </div>
    </line-container>

    <!--here is for mobile menu-->
    <div v-if="menuVisible" class="mobile-menu">
      <div class="mobile-menu-buttons-wrapper">
        <div class="mobile-menu-selection" @click="menuClicked">About Us</div>
        <div class="mobile-menu-selection" @click="menuClicked">Mission</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import LineContainer from "@/components/LineContainer.vue";
import AccountTooltip from "@/components/tooltip/AccountTooltip.vue";
import { ref, computed } from "vue";

let userIsLogin = ref(true);
let menuVisible = ref(false);
let menuPositionCSS = ref("unset");
const accountToolTipVisibility = ref(false);
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
  grid-template-columns: 1fr 50px 50px;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 60px;
}

.navbar-buttons {
  display: none;
}

.svg_container {
  width: 100%;
  display: flex;
  position: relative;
}

.account_svg {
  width: 100%;
  height: 30px;
}
.account_name {
  display: none;
}

.title {
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
}

.mobile-menu-toggle {
  width: 100%;
}

.menu-toggle-container {
  margin: auto;
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
  align-items: center;
  flex-direction: column;
  overflow: visible;
}

.mobile-menu-selection {
  @include font-headline;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid var(--gray-500);
  text-align: center;
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
  .navbar {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    align-content: center;
    width: 100%;
    height: 60px;
  }
  .navbar-wrapper {
    position: static;
  }
  .navbar-buttons {
    @include font-headline;
    display: flex;
    height: 100%;
    color: var(--gray-500);
  }

  .navbar_button {
    position: relative;
    width: 100px;
    &:hover {
      color: var(--yellow-900);
    }
  }
  .navbar_button_text {
    position: absolute;
    top: 16px;
  }

  .account_buttons {
    @include font-headline;
    justify-self: end;
    display: flex;
    width: 100%;
    height: 100%;
    color: var(--gray-500);
  }

  .account_button {
    position: relative;
    width: 70px;
    &:hover {
      color: var(--gray-900);
    }
  }

  .account_buttons_text {
    position: absolute;
    top: 16px;
  }

  .account_svg {
    position: absolute;
    width: 30px;
    top: 11px;
    height: 30px;
  }

  .account_name {
    display: unset;
    position: absolute;
    top: 15px;
    left: 37px;
    &:hover {
      color: var(--gray-900);
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
