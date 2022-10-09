<template>
  <div class="task" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="task-title uppercase">
      <!-- {{ task.goal }} -->
    </div>

    <div class="time">
      {{ formattedDaysAgo }}
    </div>
    <div class="description font-bold">
      {{ task.taskDescription }}
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
    <div class="details">
      <div class="details-label">
        <div>details</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="details-content">
        <p>Task Duration</p>
        <p>{{ formattedDuration }}</p>
        <p>Goal</p>
        <p>part of figuring the design of art of breaking</p>
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
    return {};
  },
  mounted() {},
  methods: {
    StringPluralDeterminer(term, number) {
      let output = number > 1 ? `${term}s` : term;
      return output;
    },
  },

  computed: {
    formattedDaysAgo() {
      let momentObject = moment.unix(this.task.timeStarted);
      return momentObject.fromNow(false);
      //return `since ${momentObject.format("D/M/YYYY h:mm a")}`;
    },
    formattedDuration() {
      let duration = this.task.duration;
      let day = parseInt(duration / 86400);
      let hour = parseInt(duration / 3600);
      let minute = parseInt(duration / 60);

      if (day != 0) {
        let hourPassed = parseInt((duration - 86400 * day) / 3600);
        return `${day}${this.StringPluralDeterminer(
          "day",
          day
        )} ${hourPassed}${this.StringPluralDeterminer("hour", hourPassed)}`;
      }
      if (hour != 0) {
        let minutesPassed = parseInt((duration - 3600 * hour) / 60);

        return `${hour}${this.StringPluralDeterminer(
          "hour",
          hour
        )} ${minutesPassed}${this.StringPluralDeterminer("minute", minute)}`;
      }
      if (minute != 0) {
        return `${minute}${this.StringPluralDeterminer("minute", minute)}`;
      }
      if (duration != 0) {
        return `${duration}${this.StringPluralDeterminer("second", duration)}`;
      }
      return "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  width: 95%;
  position: relative;
  display: grid;
  padding: 0.3rem 0.5rem 1rem 0.5rem;

  grid-template-columns: 80% 20%;
  margin-top: 1rem;
  color: white;
  // border: 1px solid rgb(234, 179, 8);
  box-shadow: $container-shadow;
  &-title {
    grid-column: 1/3;
    grid-row: 1/2;
    height: 0.3rem;

    background: rgb(234, 88, 12);
  }

  .time {
    font-size: 0.7rem;
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .description {
    @include transition-ease(0.5s);
    position: relative;
    grid-column: 1/2;
    grid-row: 3/4;
    height: 100%;
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

.details {
  font-size: 0.7rem;
  padding-top: 0.2rem;
  grid-column: 1/3;
  grid-row: 4/5;
  &-label {
    display: flex;
    align-items: center;
  }

  &-content {
    width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
      inset -0.2rem -0.2rem 0.5rem var(--greyLight-2);
  }
  svg {
    transform: rotate(90deg);
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