<template>
  <div class="relative rounded-xl mx-10 pt-8 pb-4 mt-4 text-gray-100">
    <div class="absolute inset-0 rounded-xl -z-10 table-background"></div>
    <div v-if="tasks" class="table w-full">
      <div class="table-header-group">
        <div class="table-row font-bold">
          <div class="table-cell text-left px-2">Date</div>
          <div class="table-cell text-left">Task</div>
          <div class="table-cell text-left">Duration</div>
        </div>
      </div>
      <div class="table-row-group">
        <task-row
          v-for="task in tasks"
          :key="task.date"
          :taskInfo="task"
        ></task-row>
      </div>
    </div>
  </div>
</template>



<script>
import { collection, getDocs } from "firebase/firestore";
import TaskRow from "./TaskRow.vue";
export default {
  components: {
    TaskRow,
  },
  data() {
    return {
      tasks: [
        // {
        //   date: "11-7-2022",
        //   taskDescription: "Add task table",
        //   duration: "12 minutes",
        // },
      ],
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(this.db, "task"));
    querySnapshot.forEach((doc) => {
      this.tasks.push({ id: doc.id, ...doc.data() });
    });
  },
};
</script>

<style>
.table-background {
  background-image: url(@/assets/TimerView/flipped-diamonds.svg);
  background-color: rgb(65, 69, 78);
  background-size: 20px;
}
</style>