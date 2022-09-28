<template>
  <div class="page-layout pt-4">
    <digital-timer class="digital-timer"></digital-timer>
    <goal-banner class="goal-banner"></goal-banner>

    <task-banner class="task-banner"></task-banner>
    <div class="fixed-selection-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import RectangleButton from "@/components/buttons/RectangleButton.vue";
import DigitalTimer from "@/components/DigitalTimer.vue";
import GoalBanner from "@/components/GoalBanner.vue";
import TaskBanner from "@/components/TaskBanner.vue";
export default {
  components: {
    RectangleButton,
    DigitalTimer,
    GoalBanner,
    TaskBanner,
  },
};
</script>

<style scoped lang='scss'>
.page-layout {
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr;
  display: grid;
  justify-items: center;
  align-items: center;

  .digital-timer {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .goal-banner {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .task-banner {
    grid-column: 1/2;
    grid-row: 3/4;
  }
}

.fixed-selection-btn {
  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  color: gray;
  background: rgb(119, 233, 142);
  border-radius: 100%;
}

@media screen and (min-width: $breakpoint-small) {
  .page-layout {
    grid-template-columns: 25% 75%;
    grid-template-rows: 30% 70%;

    .digital-timer {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: flex-start;
    }
    .goal-banner {
      align-self: flex-start;
      justify-self: center;
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .task-banner {
      align-self: flex-start;
      grid-column: 2/3;
      grid-row: 1/3;
    }
  }
}
</style>