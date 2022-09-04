<template>
  <div class="task-banner">
    <div class="taskNavigation">
      <arrow-button direction="left"></arrow-button>
      <arrow-button direction="right" style="justify-self: end"></arrow-button>
    </div>

    <task-list></task-list>
  </div>
</template>

<script>
import ArrowButton from "@/components/buttons/ArrowButton.vue";
import TaskList from "@/components/TaskList.vue";
export default {
  components: {
    ArrowButton,
    TaskList,
  },
};
</script>

<style scoped>
.task-banner {
  border: 1px solid white;
  min-width: 600px;
  width: 90%;
  min-height: 940px;
}
.taskNavigation {
  display: grid;
  width: 95%;
  margin: 0 auto 0 auto;
  grid-template-columns: 1fr 1fr;
}
</style>