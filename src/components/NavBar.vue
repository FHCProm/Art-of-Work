<template>
  <header class="navbar text-white">
    <span class="title pl-4 text-4xl">Art of Breaking</span>
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
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.5);
}

.navbar-buttons {
  display: grid;
  grid-template-columns: 100px 100px;
  align-items: center;
  justify-items: center;
  justify-content: end;
}
.title {
  font-family: "Dancing Script", cursive;
}
</style>