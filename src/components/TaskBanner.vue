<template>
  <div class="task-banner">
    <div class="taskNavigation">
      <arrow-button direction="left"></arrow-button>
      <arrow-button direction="right" style="justify-self: end"></arrow-button>
    </div>

    <task-list></task-list>
    <rectangle-button
      taskBanner="true"
      width="95%"
      padding="1.5rem 0px"
      label="create new task"
      class="mx-auto mt-4"
    ></rectangle-button>
  </div>
</template>

<script>
import ArrowButton from "@/components/buttons/ArrowButton.vue";
import TaskList from "@/components/TaskList.vue";
import RectangleButton from "@/components/buttons/RectangleButton.vue";
export default {
  components: {
    ArrowButton,
    TaskList,
    RectangleButton,
  },
};
</script>

<style scoped>
.task-banner {
  border: 1px solid white;
  min-width: 600px;
  width: 90%;
  min-height: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
.taskNavigation {
  display: grid;
  width: 95%;
  margin: 0 auto 0 auto;
  grid-template-columns: 1fr 1fr;
}
</style>