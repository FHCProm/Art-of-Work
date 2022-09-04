<template>
  <form class="" @submit.prevent="addTask">
    <div class="flex flex-col items-center">
      <div class="flex">
        <time-creator-time-button
          v-for="timeSelection in timeSelections"
          :key="timeSelection.time"
          :time="timeSelection.time"
          :unit="timeSelection.unit"
          :selected="timeSelection.selected"
          @setTimeSelected="setTime"
        ></time-creator-time-button>

        <!-- <button @click="setHour(-1)" type="button" class="p-2 text-lg">
          -
        </button>
        <div class="p-2 text-lg">
          <div class="inline p-2">{{ numberOfHours }}</div>
          <span>hours</span>
        </div>
        <button @click="setHour(1)" type="button" class="p-2 text-lg">+</button> -->
      </div>
      <div class="flex items-center mt-2">
        <input
          class="
            sm:w-96
            py-0.5
            w-full
            text-center
            border border-gray-400
            rounded-md
            focus:outline-gray-500
          "
          type="text"
          placeholder="Task to do?"
          v-model="task"
        />
        <button
          class="px-2 py-0.5 bg-gray-300 border rounded-md border-gray-500"
          type="submit"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import TimeCreatorTimeButton from "@/components/TaskCreatorTimeButton.vue";

export default {
  props: ["timerStarted"],
  components: {
    TimeCreatorTimeButton,
  },
  data() {
    return {
      secondCountdown: 100,
      timeSelections: [
        { time: 15, unit: "min", selected: false },
        { time: 30, unit: "min", selected: false },
        { time: 1, unit: "hour", selected: false },
        { time: 2, unit: "hour", selected: false },
      ],
      timeSelected: {
        time: undefined,
        unit: undefined,
      },
      task: "",
    };
  },
  methods: {
    setTime({ time, unit }) {
      this.timeSelections.forEach((x) => {
        if (x.time == time && x.unit == unit) {
          x.selected = true;
        } else {
          x.selected = false;
        }
      });

      this.timeSelected.time = time;
      this.timeSelected.unit = unit;
    },
    async addTask() {
      if (this.timeSelected.time == undefined) {
        alert("please select the amount of time needed");
        return;
      }

      if (this.task.trim() == "") {
        alert("please write your task");
        return;
      }

      if (this.timerStarted == true) {
        alert("timer is running");
        return;
      }

      this.$store.dispatch("addTask", {
        task: this.task,
        time: this.timeSelected.time,
        unit: this.timeSelected.unit,
      });

      // const docRef = await addDoc(collection(this.db, "task"), {
      //   date: moment().format("X"),
      //   taskDescription: this.task,
      //   duration: `${this.timeSelected.time} ${this.timeSelected.unit}`,
      // });

      // calculate total seconds for timerDisplay
      let timeMultiplier = undefined;
      if (this.timeSelected.unit == "min") {
        timeMultiplier = 60;
      }
      if (this.timeSelected.unit == "hour") {
        timeMultiplier = 60 * 60;
      }
      this.$emit("startTimer", {
        duration: this.timeSelected.time * timeMultiplier,
        text: this.task,
      });
    },
  },
};
</script>

<style>
</style>