<template>
  <button class="custom-button btn-1">Break Time!</button>
</template>

<script>
export default {};
</script>

<style>
.custom-button {
  width: 100%;
  color: black;
  border-radius: 0;
  padding: 10px 25px;
  background: transparent;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-1 {
  background: rgba(234, 179, 8, 1);
  background: linear-gradient(
    0deg,
    rgb(236, 167, 6) 0%,
    rgb(250, 212, 99, 1) 100%
  );
  border: none;
}
.btn-1:hover {
  background: rgb(250, 212, 99);
  background: linear-gradient(
    0deg,
    rgba(232, 176, 46) 0%,
    rgb(242, 222, 161) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    15px 15px 20px 0px rgba(0, 0, 0, 0.1), 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>