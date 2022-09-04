<template>
  <div class="digital-timer-container">
    <div class="digital-timer mt-4">
      <p class="digital-timer-word">00</p>
      <p class="digital-timer-word">:</p>
      <p class="digital-timer-word">23</p>
      <p class="digital-timer-word">:</p>
      <p class="digital-timer-word">12</p>
      <p class="digital-timer-label">hour</p>
      <p class="digital-timer-label"></p>
      <p class="digital-timer-label">minute</p>
      <p class="digital-timer-label"></p>
      <p class="digital-timer-label">second</p>
    </div>
    <rectangle-button class="mt-2 text-xl"></rectangle-button>
  </div>
</template>

<script>
import RectangleButton from "./buttons/RectangleButton.vue";
export default {
  components: { RectangleButton },
};
</script>

<style scoped>
.digital-timer-container {
  width: 400px;
  height: 250px;
  background: transparent;
  border: 1px solid white;
}
.digital-timer {
  margin-top: 20px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 20px 1fr 20px 1fr;
  grid-template-rows: 1fr 50px;
}

.digital-timer-word {
  font-size: 60px;
  color: white;
  font-family: "OCR_A_Extended";
}

.digital-timer-label {
  font-size: 20px;
  font-family: "Italiana", serif;
  color: white;
}
</style>