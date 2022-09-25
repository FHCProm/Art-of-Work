<template>
  <div class="page-layout pt-4">
    <digital-timer class="digital-timer"></digital-timer>
    <goal-banner class="mt-5 goal-banner"></goal-banner>

    <task-banner class="task-banner"></task-banner>

    <!-- <rectangle-button class="mt-20"></rectangle-button> -->
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
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  background: rgba(13, 148, 136, 1);

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

@media screen and (min-width: $breakpoint-small) {
  .page-layout {
    grid-template-columns: 450px 1fr;
    grid-template-rows: 230px 1fr;

    .digital-timer {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: flex-start;
    }
    .goal-banner {
      align-self: flex-start;
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .task-banner {
      justify-self: start;
      grid-column: 2/3;
      grid-row: 1/3;
    }
  }
}
</style>