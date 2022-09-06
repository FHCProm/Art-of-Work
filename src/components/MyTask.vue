<template>
  <div class="task" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="task-title text-xs">
      {{ task.goal }}
    </div>

    <div class="time text-xs">
      {{ formattedTimeStarted }}
    </div>
    <div class="description text-xl">
      {{ displayText }}
    </div>
    <div class="buttons">
      <div class="play-button inline-block mr-6 h-6 w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class=""
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </div>
      <div class="trash-button inline-block h-6 w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class=""
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      hover: false,
      displayText: "",
      letterArray: [],
    };
  },
  mounted() {
    if (this.task.taskDescription != undefined) {
      this.letterArray = this.task.taskDescription.split("");
      let displayTextLength = 80;
      if (this.letterArray.length < 80) {
        displayTextLength = this.letterArray.length;
      }

      for (let x = 0; x < displayTextLength; x++) {
        this.displayText = `${this.displayText}${this.letterArray[x]}`;
        if (x == displayTextLength - 1 && displayTextLength == 80) {
          this.displayText = `${this.displayText}...`;
        }
      }
    }
  },
  methods: {
    sleep(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, milliseconds);
      });
    },
  },

  computed: {
    formattedTimeStarted() {
      let momentObject = moment.unix(this.task.timeStarted);
      return `since ${momentObject.format("D/M/YYYY h:mm a")}`;
    },
  },
  watch: {
    async hover(newValue) {
      if (this.letterArray.length > 80) {
        if (newValue == true) {
          let removedTripleDot = this.displayText.split("...");
          this.displayText = removedTripleDot[0];

          for (
            let x = this.displayText.length;
            x < this.letterArray.length && this.hover == true;
            x = x + 2
          ) {
            if (this.letterArray.length - x > 1) {
              this.displayText = `${this.displayText}${this.letterArray[x]}${
                this.letterArray[x + 1]
              }`;
            } else {
              this.displayText = `${this.displayText}${this.letterArray[x]}`;
            }

            await this.sleep(1);
          }
        }
        if (newValue == false) {
          for (
            let x = this.displayText.length;
            x > 80 && this.hover == false;
            x = x - 2
          ) {
            if (this.displayText.length - x > 1) {
              this.displayText = this.displayText.slice(
                0,
                this.displayText.length - 2
              );
            } else {
              this.displayText = this.displayText.slice(
                0,
                this.displayText.length - 1
              );
            }

            await this.sleep(1);
            if (x == 81) {
              this.displayText = `${this.displayText}...`;
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
.task {
  width: 95%;
  position: relative;
  display: grid;
  padding-bottom: 1rem;
  grid-template-columns: 80% 20%;
  margin-top: 1rem;
  color: white;
  border: 1px solid rgb(234, 179, 8);
  &-title {
    grid-column: 1/3;
    grid-row: 1/2;

    padding: 0 0.5rem 0 0.5rem;
    background: rgb(234, 88, 12);
  }

  .time {
    grid-column: 1/3;
    grid-row: 2/3;
    padding: 0.3rem 0.5rem 0 0.5rem;
  }
  .description {
    @include transition-ease(0.5s);
    position: relative;
    grid-column: 1/2;
    grid-row: 3/4;
    padding: 0.3rem 0.5rem 0 0.5rem;
    height: 100%;
    overflow: hidden;
  }

  .buttons {
    grid-column: 2/3;
    grid-row: 2/4;
    padding: 1rem 1rem 0 0;
    height: 3rem;

    justify-self: end;
    align-self: flex-start;
  }
}

.play-button {
  svg {
    stroke-opacity: 0.5;
  }
  &:hover {
    svg {
      stroke-opacity: 1;
    }
  }
}

.trash-button {
  svg {
    stroke-opacity: 0.5;
  }
  &:hover {
    svg {
      stroke-opacity: 1;
    }
  }
}
</style>