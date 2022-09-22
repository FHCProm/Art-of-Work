<template>
  <div class="page-layout">
    <section class="pl-5 mt-20">
      <digital-timer></digital-timer>
      <goal-banner class="mt-5"></goal-banner>
    </section>

    <section class="mt-20">
      <task-banner></task-banner>
    </section>

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

<style>
.page-layout {
  display: grid;
  grid-template-columns: 450px 1fr;
  min-height: 100vh;
  background: rgba(13, 148, 136, 1);
}
</style>