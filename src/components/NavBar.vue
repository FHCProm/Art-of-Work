<template>
  <line-layout-container
    :tablet-border-bottom="true"
    :mobile-border-bottom="true"
    class="navbar"
  >
    <span class="title pl-4">Art of Breaking</span>
    <div class="navbar-buttons">
      <span class="">Login</span>
      <span class="">Register</span>
    </div>
  </line-layout-container>
</template>

<script setup>
import LineLayoutContainer from "@/components/LineLayoutContainer.vue";
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
