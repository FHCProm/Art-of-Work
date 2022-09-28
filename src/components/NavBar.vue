<template>
  <header class="navbar text-white">
    <span class="title pl-4">Art of Breaking</span>
    <div class="navbar-buttons">
      <span class="">Login</span>
      <span class="">Register</span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
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
}
.title {
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
}
</style>