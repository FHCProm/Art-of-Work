<template>
  <div
    :class="classes"
    :style="styles"
    class="custom-button"
    @click="isClicked"
  >
    <!-- 
  .........................
  .........................
  button without svg 
  .........................
  .........................-->

    <div v-if="!containSVG" class="btn-text">{{ label }}</div>

    <!-- 
  .........................
  .........................
  button with svg 
  .........................
  .........................-->

    <div v-if="containSVG" class="btn-content">
      <div class="h-5 w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      </div>
      <div class="btn-text">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  digitalTimer: {
    type: Boolean,
  },
  digitalTimer2: {
    type: Boolean,
  },
  taskBanner: {
    type: Boolean,
  },
  modal: {
    type: Boolean,
  },

  cancel: {
    type: Boolean,
  },
  containSVG: {
    type: Boolean,
  },
});

const emit = defineEmits(["respond"]);

const classes = computed(() => ({
  "digital-clock-btn": props.digitalTimer,
  "digital-clock-btn-empty": props.digitalTimer2,
  "task-banner-btn": props.taskBanner,
  "modal-btn": props.modal,
  "cancel-btn": props.cancel,
}));

const styles = computed(() => ({}));

function isClicked() {
  emit("respond");
}
</script>

<style lang="scss">
.custom-button {
  color: black;
  border-radius: 0;
  background: transparent;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: grid;
  justify-content: center;
}

.btn-content {
  display: grid;
  grid-template-columns: 1.25rem 1fr;
  align-items: center;
  justify-items: center;
}

.digital-clock-btn {
  flex-basis: 40%;
  text-align: center;
  margin: 0 1rem;
  width: 100%;
  padding: 10px 25px;
  background: rgba(234, 179, 8, 1);
  background: linear-gradient(
    0deg,
    rgb(236, 167, 6) 0%,
    rgb(250, 212, 99, 1) 100%
  );
  border: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:hover {
    background: rgb(250, 212, 99);
    background: linear-gradient(
      0deg,
      rgba(232, 176, 46) 0%,
      rgb(242, 222, 161) 100%
    );
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      15px 15px 20px 0px rgba(0, 0, 0, 0.1),
      10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  }
}

.digital-clock-btn-empty {
  padding: 0.5rem 1.5rem;
  background: rgba(234, 179, 8, 1);
  background: linear-gradient(
    0deg,
    rgb(236, 167, 6) 0%,
    rgb(250, 212, 99, 1) 100%
  );
  border: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:hover {
    background: rgb(250, 212, 99);
    background: linear-gradient(
      0deg,
      rgba(232, 176, 46) 0%,
      rgb(242, 222, 161) 100%
    );
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      15px 15px 20px 0px rgba(0, 0, 0, 0.1),
      10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  }
}

.task-banner-btn {
  width: 95%;
  padding: 0.5rem 0px;
  border: 1px solid rgb(234, 179, 8);
  color: rgb(234, 179, 8);

  &:hover {
    border: 1px solid rgb(233, 210, 141);
    color: black;
    background: rgb(233, 210, 141);
  }
}

.modal-btn {
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0 0.5rem 0;
  box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba($color: rgb(21, 114, 227), $alpha: 0.3);
  }
}

.cancel-btn {
  width: 100%;
  color: gray;

  &:hover {
    color: black;
  }
}

@media screen and (min-width: $breakpoint-small) {
  .digital-clock-btn {
    flex-basis: unset;
    margin: 1rem 0;
  }
}
</style>
