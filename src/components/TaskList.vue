<template>
  <div class="tasks" v-for="task in tasks" :key="task.id">
    <my-task :task="task"></my-task>
  </div>
</template>

<script>
import MyTask from "@/components/MyTask.vue";
export default {
  components: {
    MyTask,
  },
  data() {
    return {
      tasks: [
        {
          id: 232322323,
          timeStarted: 1662210000,
          goal: "Make a design draf for art of breaking",
          taskDescription: "Figure out the magic for trading bot",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          goal: "Figure out the rough plan for art of breaking firebase database",
          taskDescription:
            "Create a sample data for art of breaking Create a sample data for art of breaking Create a sample data for art of breaking  art of breaking Create a sample data for art of breaking art of breaking Create a sample data for art of breaking",
        },
      ],
    };
  },

  computed: {},
};
</script>

<style lang="scss">
.tasks {
  display: flex;
  padding: 0 0.5rem 0 0.5rem;
  justify-content: center;
}
</style>