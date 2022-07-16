<template>
  <header class="bg-gray-700 px-2 py-4 text-white flex justify-start text-left">
    <div class="title basis-1/3 text-4xl">God of Breaking</div>
    <div class="flex basis-1/3 text-xs justify-center items-center">
      <div>Success? IT IS ALL JUST PROBABIITY GAME!</div>
    </div>
  </header>
  <div class="relative flex flex-col items-center justify-center w-full h-full">
    <timer-display
      :time="seconds"
      :message="originalBackgroundText"
      class="mt-2"
    ></timer-display>
    <div
      class="
        absolute
        w-full
        timer
        opacity-20
        text-center
        -z-50
        whitespace-nowrap
        overflow-hidden
        text-4xl
        lg:text-8xl
      "
    >
      {{ editedBackgroundText }}
    </div>
  </div>
  <task-planner @startTimer="counting" class="mt-2"></task-planner>

  <task-list></task-list>
</template>

<script>
import TimerDisplay from "./components/TimerDisplay.vue";
import TaskPlanner from "./components/TaskPlanner.vue";
import TaskList from "./components/TaskList.vue";
export default {
  name: "App",
  components: {
    TimerDisplay,
    TaskPlanner,
    TaskList,
  },
  data() {
    return {
      seconds: 0,
      timerStatus: "off",
      restartTimer: false,
      editedBackgroundText: "",
      originalBackgroundText: "",
    };
  },
  created() {
    if (this.$store.state.db == undefined) {
      this.$store.state.db = this.db;
    }
  },
  methods: {
    async counting(object) {
      if (this.timerStatus == "on") {
        alert("timer is currently running");
        return;
      }
      this.originalBackgroundText = object.text;
      this.editedBackgroundText = this.truncate(object.text, 15);
      this.seconds = object.duration;
      while (this.seconds != 0 && this.restartTimer == false) {
        await this.wait1second();
        this.timerStatus = "on";
      }
      this.timerStatus = "off";
    },

    wait1second() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.seconds = this.seconds - 1;
          resolve();
        }, 1000);
      });
    },
    truncate(str, num) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Dancing+Script&display=swap");
$primary-color: #734eed;
.timer {
  font-family: "Audiowide", cursive;
  background-color: $primary-color;
}
.title {
  font-family: "Dancing Script", cursive;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
