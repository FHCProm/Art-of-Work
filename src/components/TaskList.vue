<template>
  <div class="tasks">
    <my-task v-for="task in tasks" :key="task.id" :task="task"></my-task>
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
          timeStarted: 1664333224,
          duration: 5281,
          goal: "Make a design draf for art of breaking",
          taskDescription: "Figure out the magic for trading bot",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
          goal: "Figure out the rough plan for art of breaking firebase database",
          taskDescription:
            "Create a sample data for art of breaking Create a sample data for art of breaking Create a sample data for art of breaking  art of breaking Create a sample data for art of breaking art of breaking Create a sample data for art of breaking",
        },
        {
          id: 232322323,
          timeStarted: 1664333224,
          duration: 5281,
          goal: "Make a design draf for art of breaking",
          taskDescription: "Figure out the magic for trading bot",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
          goal: "Figure out the rough plan for art of breaking firebase database",
          taskDescription:
            "Create a sample data for art of breaking Create a sample data for art of breaking Create a sample data for art of breaking  art of breaking Create a sample data for art of breaking art of breaking Create a sample data for art of breaking",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
          goal: "Figure out the rough plan for art of breaking firebase database",
          taskDescription:
            "Create a sample data for art of breaking Create a sample data for art of breaking Create a sample data for art of breaking  art of breaking Create a sample data for art of breaking art of breaking Create a sample data for art of breaking",
        },
        {
          id: 555999,
          timeStarted: 1662200000,
          duration: 3333,
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
  width: 100%;
  display: grid;
  justify-items: center;
}
</style>
