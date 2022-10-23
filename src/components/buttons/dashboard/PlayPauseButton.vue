<template>
  <div class="digital-timer-btn" @click="isClicked">
    <div class="btn-wrapper">
      <div v-if="isRunning" class="btn-square"></div>
      <div v-else class="btn-play">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </div>
    </div>
    <span class="ripple_1" ref="ripple1"></span>
    <span class="ripple_2" ref="ripple2"></span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isRunning = ref(false);
const ripple1 = ref(null);
const ripple2 = ref(null);

function isClicked() {
  isRunning.value = !isRunning.value;
  if (isRunning.value) {
    controlAnimation(true);
  } else {
    controlAnimation(false);
  }
}

function controlAnimation(timerRunning) {
  if (timerRunning && ripple1.value.classList.contains("paused")) {
    ripple1.value.classList.remove("paused");
    ripple2.value.classList.remove("paused");
  }
  if (!timerRunning && !ripple1.value.classList.contains("paused")) {
    ripple1.value.classList.add("paused");
    ripple2.value.classList.add("paused");
  }
}
</script>

<style lang="scss" scoped>
.digital-timer-btn {
  width: 3rem;
  height: 3rem;
  display: grid;
}

.btn-wrapper {
  grid-row: 1/2;
  grid-column: 1/2;
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: $shadow;
  align-items: center;
  border-radius: 50%;
  z-index: 300;

  &:active {
    box-shadow: $inner-shadow;
  }
}

.btn-square {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  border: 2px solid var(--yellow-500);
}

.btn-play {
  position: absolute;
  color: var(--yellow-500);
}

.ripple_1,
.ripple_2 {
  z-index: 100;
  grid-row: 1/2;
  grid-column: 1/2;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: $shadow;
}

.ripple_1 {
  background: linear-gradient(
    to bottom right,
    var(--gray-300) 0%,
    var(--gray-100) 100%
  );
  animation: waves 4s linear infinite;
  &.paused {
    animation-play-state: paused;
  }
}

.ripple_2 {
  animation: waves 4s linear 2s infinite;
  &.paused {
    animation-play-state: paused;
  }
}

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
