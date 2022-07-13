<template>
  <form class="" @submit.prevent="addTask">
    <div class="flex flex-col items-center">
      <div class="flex">
        <button @click="setHour(-1)" type="button" class="p-2 text-lg">
          -
        </button>
        <div class="p-2 text-lg">
          <div class="inline p-2">{{ numberOfHours }}</div>
          <span>hours</span>
        </div>
        <button @click="setHour(1)" type="button" class="p-2 text-lg">+</button>
      </div>
      <div class="flex items-center">
        <input
          class="
            sm:w-96
            p-2
            w-full
            text-center
            border border-gray-400
            rounded-sm
            focus:outline-gray-500
          "
          type="text"
          placeholder="Task to do?"
          v-model="task"
        />
        <button class="p-2 bg-gray-300 border border-gray-500" type="submit">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import moment from "moment";
import { collection, addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      secondCountdown: 100,
      numberOfHours: 0,
      task: "",
    };
  },
  methods: {
    setHour(change) {
      if (this.numberOfHours > 0 || change > 0) {
        this.numberOfHours = this.numberOfHours + change;
      }
    },
    async addTask() {
      if (this.numberOfHours == 0) {
        alert("please consider the amount of hours for this task");
        return;
      }

      if (this.task.trim() == "") {
        alert("please write your task");
        return;
      }

      const docRef = await addDoc(collection(this.db, "task"), {
        date: moment().format("X"),
        taskDescription: this.task,
        duration: `${this.numberOfHours} hour(s)`,
      });

      this.$emit("startTimer", {
        duration: this.numberOfHours * 60 * 60,
        text: this.task,
      });
    },
  },
};
</script>

<style>
</style>