<template>
  <div class="tasks">
    <my-task v-for="task in tasks" :key="task.id" :task="task"></my-task>
  </div>
</template>

<script>
import MyTask from "@/components/pages/dashboard/MyTask.vue";
export default {
  components: {
    MyTask,
  },
  data() {
    return {
      tasks: [
        {
          id: 232322323,
          timeStarted: 1664333224,
          duration: 5281,
          goal: "Make a design draf for art of work",
          taskDescription: "Figure out the magic for trading bot",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
          goal: "Figure out the rough plan for art of work firebase database",
          taskDescription:
            "Create a sample data for art of work Create a sample data for art of work Create a sample data for art of work  art of work Create a sample data for art of work art of work Create a sample data for art of work",
        },
        {
          id: 232322323,
          timeStarted: 1664333224,
          duration: 5281,
          goal: "Make a design draf for art of work",
          taskDescription: "Figure out the magic for trading bot",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
          goal: "Figure out the rough plan for art of work firebase database",
          taskDescription:
            "Create a sample data for art of work Create a sample data for art of work Create a sample data for art of work  art of work Create a sample data for art of work art of work Create a sample data for art of work",
        },
        {
          id: 232322323,
          timeStarted: 1664333224,
          duration: 5281,
          goal: "Make a design draf for art of work",
          taskDescription: "Figure out the magic for trading bot",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
          goal: "Figure out the rough plan for art of work firebase database",
          taskDescription:
            "Create a sample data for art of work Create a sample data for art of work Create a sample data for art of work  art of work Create a sample data for art of work art of work Create a sample data for art of work",
        },
      ],
    };
  },

  computed: {},
};
</script>

<style lang="scss">
.tasks {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  align-items: center;
}
</style>
