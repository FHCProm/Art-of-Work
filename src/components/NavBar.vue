<template>
  <line-container
    :tablet-border-bottom="true"
    :mobile-border-bottom="true"
    class="navbar"
  >
    <router-link to="/">
      <span class="title pl-4">Art of Breaking</span>
    </router-link>
    <div class="navbar-buttons">
      <router-link to="/dashboard">
        <span class="">Login</span>
      </router-link>
      <span class="">Register</span>
    </div>
  </line-container>
</template>

<script setup>
import LineContainer from "@/components/LineContainer.vue";
</script>

<style scoped lang="scss">
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  width: 100%;
  height: 80px;
}

.navbar-buttons {
  @include font-headline;
  display: grid;
  grid-template-columns: 100px 100px;
  align-items: center;
  justify-items: center;
  justify-content: end;

  color: var(--gray-500);
  & > span:hover {
    color: var(--gray-900);
  }
}
.title {
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
}
</style>
