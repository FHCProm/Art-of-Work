<template>
  <div class="wrapper flex flex-row items-center">
    <div v-if="direction == 'right'">{{ arrowText }}</div>

    <div class="chevron-box h-10 w-10">
      <svg
        class="chevron h-7 w-7"
        :style="{ transform: `rotate(${arrowAngle}deg)` }"
        viewBox="0 0 16.141739 26.512398"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-1.15959,0.00992051)">
          <path
            style="stroke-dasharray: none"
            d="M 1.2618552,13.194193 9.1991245,0.07766063 17.14657,0.09459648 9.2223946,13.225863 17.14347,26.380647 9.2735848,26.414787 Z"
            id="path297"
          />
        </g>
      </svg>
    </div>

    <div v-if="direction == 'left'">{{ arrowText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      validator(value) {
        return ["left", "right"].includes(value);
      },
    },
  },
  computed: {
    arrowAngle() {
      let angle = 0;
      if (this.direction == "left") {
        angle = 0;
      }
      if (this.direction == "right") {
        angle = 180;
      }
      return angle;
    },
    arrowText() {
      let text = "";
      if (this.direction == "left") {
        text = "Back to Current";
      }
      if (this.direction == "right") {
        text = "Previous Goal";
      }
      return text;
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  color: white;
  height: 4rem;
}

.chevron-box {
  padding: 7px 8px;
  box-shadow: $shadow;
  border-radius: 0.3rem;
  margin: 0 0.5rem;

  &:active {
    box-shadow: $inner-shadow;
  }

  &:active .chevron {
    fill: white;
  }

  .chevron {
    transition: all 0.2s ease;
    fill: transparent;
    stroke: white;
    stroke-width: 1;
  }
}
</style>