<template>
  <div class="relative rounded-xl mx-10 pt-8 pb-4 mt-4 mb-4 text-gray-100">
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
    <div
      v-if="loading == false"
      class="bg-gray-400 text-center text-gray-800 hover:text-white"
      @click="fetchMoreTasks"
    >
      {{ loadingText }}
    </div>
    <div v-if="loading == true" class="grid grid-rows-1 justify-center">
      <div class="loader loader--style3" title="2">
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 50 50"
          style="enable-background: new 0 0 50 50"
          xml:space="preserve"
        >
          <path
            fill="#ffffff"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>



<script>
import TaskRow from "./TaskRow.vue";
export default {
  components: {
    TaskRow,
  },
  data() {
    return {
      tasks: [],
      loading: false,
      loadingText: "Load More",
    };
  },
  async created() {
    await this.$store.dispatch("fetchTasks", { pageRefresh: true });
    this.tasks = this.$store.state.tasks;
  },
  methods: {
    async fetchMoreTasks() {
      if (this.$store.state.taskFullyLoaded == false) {
        this.loading = true;
        await this.$store.dispatch("fetchTasks", { pageRefresh: false });
        if (this.$store.state.taskFullyLoaded == true) {
          this.loadingText = "all tasks is here!";
        }
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.table-background {
  background-image: url(@/assets/TimerView/flipped-diamonds.svg);
  background-color: rgb(65, 69, 78);

  background-size: 20px;
}
</style>