<template>
  <div class="digital-timer-container">
    <div v-if="timerStarted" class="flex-container">
      <div class="grid-container sm:mt-4">
        <p class="digital-timer-word">00</p>
        <p class="digital-timer-colon">:</p>
        <p class="digital-timer-word">23</p>
        <p class="digital-timer-colon">:</p>
        <p class="digital-timer-word">12</p>
        <p class="digital-timer-label">hour</p>
        <p class="digital-timer-label-empty"></p>
        <p class="digital-timer-label">minute</p>
        <p class="digital-timer-label-empty"></p>
        <p class="digital-timer-label">second</p>
      </div>
      <div class="digital-timer-btn">
        <rounded-button :digitalTimerPause="true"></rounded-button>
      </div>
    </div>

    <div v-if="!timerStarted" class="timer-task-creator">
      <rectangle-button
        :digitalTimer2="true"
        :containSVG="false"
        label="Create New Task"
      ></rectangle-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import RectangleButton from "./buttons/RectangleButton.vue";
import RoundedButton from "./buttons/RoundedButton.vue";

const timerStarted = ref(true);

onMounted(() => {});
</script>

<style scoped lang="scss">
.digital-timer-container {
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  background: transparent;

  box-shadow: $container-shadow;
}

.flex-container {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}

.grid-container {
  flex-basis: 60%;
  grid-template-columns: 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 0px;
  display: grid;
  align-items: center;
  justify-items: center;
}

.timer-task-creator {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.digital-timer-word {
  font-size: 1rem;
  color: white;
  font-family: "OCR_A_Extended";

  &:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: end;
  }
  &:nth-child(3) {
    grid-column: 3/4;
    grid-row: 1/2;
    justify-self: end;
  }
  &:nth-child(5) {
    justify-self: end;
    grid-column: 5/6;
    grid-row: 1/2;
  }
}

.digital-timer-colon {
  display: none;
}

.digital-timer-label {
  font-size: 1rem;
  font-family: "Italiana", serif;
  color: white;

  &:nth-child(6) {
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: flex-end;
  }
  &:nth-child(8) {
    grid-column: 4/5;
    grid-row: 1/2;
    align-self: flex-end;
  }
  &:nth-child(10) {
    grid-column: 6/7;
    grid-row: 1/2;
    align-self: flex-end;
  }
}

.digital-timer-label-empty {
  display: none;
}

.digital-timer-btn {
  flex-basis: 40%;
  display: grid;
  align-items: center;
  justify-items: center;
}

@media screen and (min-width: $breakpoint-small) {
  .digital-timer-container {
    width: 95%;
    height: 90%;
    position: relative;
    background: transparent;
    // border: 1px solid white;
    box-shadow: $container-shadow;
  }

  .grid-container {
    flex-basis: 50%;
    width: 100%;
    grid-template-columns: 1fr 20px 1fr 20px 1fr;
    grid-template-rows: 1fr 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  .digital-timer-word {
    font-size: 2rem;
    &:nth-child(1) {
      justify-self: center;
    }
    &:nth-child(3) {
      justify-self: center;
    }
    &:nth-child(5) {
      justify-self: center;
    }
  }

  .digital-timer-colon {
    display: unset;
    font-size: 1rem;
    color: white;
    font-family: "OCR_A_Extended";
  }

  .digital-timer-label {
    &:nth-child(6) {
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: center;
    }
    &:nth-child(8) {
      grid-column: 3/4;
      grid-row: 2/3;
      align-self: center;
    }
    &:nth-child(10) {
      grid-column: 5/6;
      grid-row: 2/3;
      align-self: center;
    }
  }
  .digital-timer-label-empty {
    display: unset;
  }

  .digital-timer-btn {
    flex-basis: 50%;
  }
}
</style>